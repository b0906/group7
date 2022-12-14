const haveBuiltMap = false;
// Creating the map
let myMap = L.map("map", {
    center: [20.771523, -34.566583],
    zoom: 2
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  

// //   link to GeoJson
// let link = "https://datahub.io/core/geo-countries/r/countries.geojson"

// let mapStyle = {
//     color: "yellow",
//     fillColor: "purple",
//     fillOpacity: 0.5,
//     weight: 1.5
// };

// // getting GeoJson data 
// d3.json(link).then(function(data) {
//     console.log(data)
//     L.geoJson(data, {
//         style: mapStyle
//     }).addTo(myMap);
// });

// Look at 15:2:4 for example on creating the choroplethdata



// HYEEUN
// World map w/ country code 
// Change 2 letter country code to 3 letter as geojson allows ISO-A3 only
let countryCode = {'Vanuatu': 'VUT',
'Bolivia (Plurinational State of)': 'BOL',
'Jordan': 'JOR',
'Iran (Islamic Republic of)': 'IRN',
'Lebanon': 'LBN',
'Moldova, Republic of': 'MDA',
'Italy': 'ITA',
'Bahamas': 'BHS',
'Australia': 'AUS',
'New Zealand': 'NZL',
'Brazil': 'BRA',
'Ireland': 'IRL',
'Czechia': 'CZE',
'Korea, Republic of': 'KOR',
'Paraguay': 'PRY',
'United Arab Emirates': 'ARE',
'Bulgaria': 'BGR',
'Kazakhstan': 'KZ',
'Türkiye': 'TUR',
'Serbia': 'RSB',
'Hungary': 'HUN',
'Botswana': 'BWA',
'Trinidad and Tobago': 'TTO',
'Malaysia': 'MYS',
'Mexico': 'MEX',
'Romania': 'ROU',
'China': 'CHN',
'Gabon': 'GAB',
'Bosnia and Herzegovina': 'BIH',
'Uruguay': 'URY',
'Syrian Arab Republic': 'SYR',
'Venezuela (Bolivarian Republic of)': 'VEN',
'Cuba': 'CUB',
'Belize': 'BLZ',
'North Macedonia': 'MKD',
// Add back slash between e and single quote
'Lao People\'s Democratic Republic': 'LAO',
'Iraq': 'IRQ',
'Tunisia': 'TUN',
'South Africa': 'ZAF',
'Nepal': 'NPL',
'Argentina': 'ARG',
'Sao Tome and Principe': 'STP',
'Slovenia': 'SVN',
'France': 'FRA',
'Luxembourg': 'LUX',
'Seychelles': 'SYC',
'Israel':'ISR',
'Canada': 'CAN',
'Switzerland': 'CHE',
'Barbados': 'BRB',
'Egypt': 'EGY',
'Oman': 'OMN',
'Grenada': 'GRD',
'Estonia': 'EST',
'Finland': 'FIN',
'Sweden': 'SWE',
'Kiribati': 'KIR',
'Bahrain': 'BHR',
'Iceland': 'ISL',
'Saudi Arabia': 'SAU',
'Malta': 'MLT',
'Norway': 'NOR',
'Equatorial Guinea': 'GNQ',
'Singapore': 'SGP',
'Lithuania': 'LTU',
'United States of America': 'USA',
'Croatia': 'HRV',
'Kuwait': 'KWT',
'Libya': 'LBY',
'Portugal': 'PRT',
'United Kingdom of Great Britain and Northern Ireland': 'GBR',
'Russian Federation': 'RUS',
'Belgium': 'BEL',
'Denmark': 'DNK',
'Cyprus': 'CYP',
'Poland': 'POL',
'Austria': 'AUT',
'Slovakia': 'SVK',
'Spain': 'ESP',
'Latvia': 'LVA',
'Ukraine': 'UKR',
'Belarus': 'BLR',
'Germany': 'DEU',
'Mongolia': 'MNG',
'Azerbaijan': 'AZE',
'Qatar': 'QAT',
'Colombia': 'COL',
'Dominican Republic': 'DOM',
'Chile': 'CHL',
'Mauritius': 'MUS',
'Senegal': 'SEN',
'Indonesia': 'IDN',
'Burkina Faso': 'BFA',
'Burundi': 'BDI',
'Mali': 'MLI',
'Yemen': 'YEM',
'Haiti': 'HTI',
'Viet Nam': 'VNM',
'Japan': 'JPN',
'Benin': 'BEN',
'Togo': 'TGO',
'Cameroon': 'CMR',
'Albania': 'ALB',
'Mozambique': 'MOZ',
'Mauritania': 'MRT',
'Sierra Leone': 'SLE',
'Zimbabwe': 'ZWE',
'Chad': 'TCD',
'Guinea-Bissau': 'GNB',
'Tonga': 'TON',
'Philippines': 'PHL',
'Solomon Islands': 'SLB',
'Guatemala': 'GTM',
'Bangladesh': 'BGD',
'Timor-Leste': 'TLS',
'Costa Rica': 'CRI',
'Cambodia': 'KHM',
'Jamaica': 'JAM',
'El Salvador': 'SLV',
'Papua New Guinea': 'PNG',
'Madagascar': 'MDG',
'Brunei Darussalam': 'BRN',
'Afghanistan': 'AFG',
'Niger': 'NER',
'Gambia': 'GMB',
'Bhutan': 'BTN',
'Fiji': 'FJI',
'Nicaragua': 'NIC',
'Guinea': 'GIN',
'Honduras': 'HND',
'Uzbekistan': 'UZB',
'Congo': 'COG',
'Netherlands': 'NLD',
'Panama': 'PAN',
'India': 'IND',
'Uganda': 'UGA',
'Tajikistan': 'TJK',
'Eswatini': 'SWZ',
'Eritrea': 'ERI',
'Kenya': 'KEN',
'Central African Republic': 'CAF',
'Greece': 'GRC',
'Djibouti': 'DJI',
'Georgia': 'GEO',
'Turkmenistan': 'TKM',
'Comoros': 'COM',
'Armenia': 'ARM',
'Thailand': 'THA',
'Cabo Verde': 'CPV',
'Morocco': 'MAR',
'Pakistan': 'PAK',
'Peru': 'PER',
'Lesotho': 'LSO',
'Sri Lanka': 'LKA',
'Suriname': 'SUR',
'Sudan': 'SDN',
'Liberia': 'LBR',
'Nigeria': 'NGA',
"Côte d'Ivoire": 'CIV',
'Guyana': 'GUY',
'Malawi': 'MWI',
'Ecuador': 'ECU',
'Ghana': 'GHA',
'Tanzania, United Republic of': 'TZA',
'Rwanda': 'RWA',
'Angola': 'AGO',
'Algeria': 'DZA',
'Ethiopia': 'ETH',
'Samoa': 'WSM',
'Kyrgyzstan': 'KGZ',
'Myanmar': 'MMR',
'Zambia':'ZMB'}
// Create function that will apply when click different country on the map
// Loop through each of counry code 
// Add .toUpperCase because country codes are written in all cap
var countryName = "Zambia";

function nameToAbbr(name) {
    let abbr = "";
    let found = false;
    for(i=0; i<Object.keys(countryCode).length; i++){
        if(name.toUpperCase() === Object.keys(countryCode)[i].toUpperCase()){
            abbr = Object.values(countryCode)[i];
            found = true;
        }
    }
    if(found){
        return abbr;
    }
    else{
        return "ERROR";
    }
}

function AbbrToName(abbr){
    let name ="";
    let found = false;

    for(i=0; i<Object.keys(countryCode).length; i++){
        if(abbr.toUpperCase() === Object.values(countryCode)[i]){
            name = Object.keys(countryCode)[i];
            found = true;
        }
    }
    if(found){
        return name;
    }
    else{
        return "ERROR";
    }
}

function bounds(array1, array2) {
    let newArray = []
    for(i=0; i< array1.length; i++){
        newArray.push(array1[i]);
    };
    for(i=0; i< array1.length; i++){
        newArray.push(array2[i]);
    };
    return d3.extent(newArray);
}

// Create function to build initial plot 
function init(){
    buildPlot()
}
// Create function that will apply when Year changes
function optionChnaged(){
    buildPlot();
}


function getIndexes(list, query){
    let filteredID = []

    for (let i = 0; i < list.length; i++){
        if (list[i] == query){
            filteredID.push(i);
        }
    }
    return filteredID
}
// Create drop down menu by inserting year in the fuction below

function buildPlot(){
    d3.json("../static/data/english_dataset.json").then((data) =>{
        console.log(data)
        
        // get list of all data
        let idValues = data.year;
        // Create unique value because each row has year
        let uniqueYears = [];

        idValues.forEach(year => {
            if (uniqueYears.indexOf(year) == -1){
                uniqueYears.push(year)
            }
        });
        // Remove duplicate value in the drop down

        // d3.select('#selDataset').html("")

        uniqueYears.forEach(year => {
            d3.select('#selDataset').append('option').text(year).property("value", year);
        })
// Remove duplicate value in the drop down
{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script> */}
//     <script>
//     function removeduplicate(){

//         let uniqueYears = {};
//         $("select[id='mylist'] > option").each(function () {
//         if(mycode[this.text]) {
//         $(this).remove();
//         } else {

//         uniqueYears[this.text] = this.value;
//         }
//     });
//     }
// </script>


        // Use D3 to select country year and store in a variable to work with
        // Select all dataset and get node
        let currentID = d3.selectAll("#selDataset").node().value;

        let filteredID = getIndexes(data.year, currentID)

        // console.log(filteredID)
        
        // Create trace for vertical bar chart
        // set x w/ country name 
        // set y w/ wri
        let trace1 = {
            x: filteredID.map(id => data.country_name[id]),
            y: filteredID.map(id => data.wri[id]),
            text: "World Risk Index",
            type:"bar",
            orientation:'v'
        };

        // Create data
        let dataPlot = [trace1];
        let layout ={
            title: "Top 100 Least WRI Countries",
            // margin:{
            //     l:75,
            //     r:100,
            //     t:60,
            //     b:60
            // }
        };
        // Use plotly to create new bar
        // Add responsive:true to be adjustable by window size
        Plotly.newPlot("barChart", dataPlot, layout, {responsive: true});

        // Create the WRI panel
        // country name
        // country index which takes year
        let filteredCountryIndexes = getIndexes(data.country_name, countryName);

        filteredMeta = filteredCountryIndexes.filter(countryIdx => filteredID.indexOf(countryIdx) != -1)[0];
        ///data.country_name.filter(entry => entry == countryName);

        console.log(filteredMeta);
        // go to data
        // go to country_name
        // get the index of filteredmeta

        let wri = {
            // 'id: ': data.id[filteredMeta],
            'Country Name: ': data.country_name[filteredMeta],
            'Year: ': currentID,
            'Weather Risk Index Score: ': data.wri[filteredMeta],
            'Weather Risk Index Category: ': data.wri_category[filteredMeta],
            'Exposure: ': data.exposure[filteredMeta],
            'Vulnerability: ': data.vulnerability[filteredMeta],
            'Susceptibility: ': data.susceptibility[filteredMeta],
            'Coping Inability: ': data.coping_inability[filteredMeta],
            'Adaptive Inability: ': data.adaptive_inability[filteredMeta],
            'Exposure Category: ': data.exposure_category[filteredMeta],
            'Vulnerability Category: ': data.vulnerability_category[filteredMeta],
            'Susceptibility Category: ': data.susceptibility_category[filteredMeta]
        }
        //select the id to append the key value pair under WRI panel
        panelBody = d3.select("#sample-metadata")

        // remove the current wri info in order to make way for new currentID
        panelBody.html("")
        
        //append the key value pairs from wri into the wri panel
        Object.entries(wri).forEach(([key, value]) => {
            panelBody.append('p').attr('style', 'font-weight: bold').text(key + value)
        });

        console.log(wri);
        // Create the trace for the multiple line graph
        let trace2 ={
            x : filteredCountryIndexes.map(id => data.year[id]),
            y : filteredCountryIndexes.map(id => data.exposure[id]),
           name : "Exposure",
            mode : 'lines',
            marker: {
                color : "red"
            }
        }

        let traceVulnerability = {
            x : filteredCountryIndexes.map(id => data.year[id]),
            y : filteredCountryIndexes.map(id => data.vulnerability[id]),
           name: "Vulnerability",
            mode : 'lines',
            marker: {
                color : "blue"
            }
        }
        
        // }

        let data2 = [trace2, traceVulnerability]
//, susceptibility, coping_inability, adaptive_inability,
        //create layout for the multiline chart
        let layout2 = {
            title : 'Country Statistics Over the Years',
            showlegend : true, 
        }

        Plotly.newPlot('lineChart', data2, layout2, {responsive: true})
        console.log(filteredID)


        // Have to build the map around current year's values
        let link = "https://datahub.io/core/geo-countries/r/countries.geojson"

        function getOpacity (iso_a3){
            let cname = AbbrToName(iso_a3);
            let allCountryIdexes = getIndexes(data.country_name, cname);

            let thisYearIndex = -1;
            allCountryIdexes.forEach(id => {
                if (currentID == data.year[id]){
                    thisYearIndex = id;
                }
            })
            
            if (thisYearIndex == -1 ) {
                return 0;
            }

            let thisWri = data.wri_category[thisYearIndex];
            
            if (thisWri == "Very Low"){
                console.log(thisWri, "V LO")
                return .15;
            }
            else if (thisWri == "Low"){
                console.log(thisWri, "LOW")
                return .3;
            } else if (thisWri == "Medium"){
                console.log(thisWri, "MED")
                return .5;
            } else if (thisWri == "High") {
                console.log(thisWri, "HI")
                return .75;
            } else if (thisWri == "Very High"){
                console.log(thisWri, "V HI")
                return 1;
            } else {
                return 0;
            }
        }

        function mapStyle(feature)  {
            return {
            color: "yellow",
            fillColor: "purple",
            fillOpacity: getOpacity(feature.properties.ISO_A3),
            weight: 1.5
            }
        };

        // getting GeoJson data 
        d3.json(link).then(function(data) {
            console.log(data)
            L.geoJson(data, {
                style: mapStyle,
                onEachFeature: function (feature, layer) {
                    layer.on({
                        click: function(e){
                            let selCountry = AbbrToName(feature.properties.ISO_A3);

                            if (selCountry != "ERROR"){
                                countryName = selCountry;
                                buildPlot();
                            }

                        }
                    })
                }
            }).addTo(myMap);
        });


    });


    
    
};

//run init to  set the main page
init();
//         }

//     })
// }
