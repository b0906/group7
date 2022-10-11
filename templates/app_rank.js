// create function to build inital plot 
function init(){
    buildPlot()
}

//create function that will apply when option changes
function optionChanged() {
  
    // Build the plot with the new stock
    buildPlot();
  }


//create a function that builds the new plot. 
function buildPlot(){


    d3.json("Data/world_risk_index.json").then((data) =>{
        //get a list of all the  Region names
        let regionValues = data.names;
  
        // Create the drop down menu by inserting every Region names in below function.
        Values.forEach(region => d3.select('#selDataset').append('option').text(region).property("value", region));


        // Use D3 to select the current region and store in a variable to work with
        let currentRegion = d3.selectAll("#selDataset").node().value;
     

        //filter the data for the current region to get relavant information
        filteredRegion = data.samples.filter(entry => entry.region == currentRegion);

        // create Trace for the horizontal bar chart
        let trace1 = {
            x: filteredRegion[0].wri.slice(0,100).reverse(),
            y: filteredRegion[0].year.slice(2011, 2021).reverse(),
            // text: filteredRegion[0].year.slice(0,11).reverse(),
            type:"bar",
            orientation: 'h'
        };
    
      
        // create data
        let dataPlot = [trace1];

        // create layout
        let layout = {
            title : 'World Risk Index Score by Year',
            margin: {
                l: 75,
                r: 100,
                t: 60,
                b: 60
            }

        };

        // Use plotly to create new bar
        Plotly.newPlot("bar", dataPlot, layout);

        // create the weather risk index panel <---- Question?
        filteredMeta = data.metadata.filter(entry => entry.region == currentRegion)
       
        // create a wri object to add panel body <---- Question?
        let wri = {
            'region: ': filteredMeta[0].region,
            'exposure: ': filteredMeta[0].ethnicity,
            'vulnerability: ': filteredMeta[0].gender,
            'susceptibility: ': filteredMeta[0].age,
            'lack of Coping Capabilities: ': filteredMeta[0].location,
            'lack of Adaptive Capacities: ': filteredMeta[0].bbtype,
            'year: ': filteredMeta[0].wfreq,
            'exposure Category: ': filteredMeta[0].wfreq,
            'WRI Category: ': filteredMeta[0].wfreq,
            'Vulnerability Category: ': filteredMeta[0].wfreq,
            'Susceptibility Category: ': filteredMeta[0].wfreq,
        }
        //select the id to append the key value pair under wri panel<---- Question?
        panelBody = d3.select("#sample-metadata")

        // remove the current wri info in order to make way for new currentRegion
        panelBody.html("")
        
        //append the key value pairs from wri into the wri panel
        Object.entries(wri).forEach(([key, value]) => {
            panelBody.append('p').attr('style', 'font-weight: bold').text(key + value)
        });

        // Create the trace for the bubble chart<---- Question?
        let trace2 ={
            x : filteredRegion[0].exposure,
            y : filteredRegion[0].year,
            text : filteredRegion[0].otu_labels,
            mode : 'markers',
            marker: {
                color : filteredRegion[0].otu_ids,
                size : filteredRegion[0].sample_values
            }
        }

        let data2 = [trace2]

        //create layout for the bubble chart
        let layout2 = {
            title : 'Marker Size',
            showlegend : false, 
        }

        Plotly.newPlot('bubble', data2, layout2)
        console.log(filteredRegion)

    });


    
    
};

//run init to  set the main page
init();