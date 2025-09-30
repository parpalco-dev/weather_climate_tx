'use client'

import styles from "./page.module.css";
import { Fetch_frio_county,Fetch_harris_county, Fetch_webb_county, Fetch_balmorhea_county,Fetch_orla_county,Fetch_kermit_county, Fetch_ozona_county, Fetch_midland_county, Fetch_carlsbad_county, WeatherApiResponse } from "./fetch";
import { Drop,WindIcon,Clear,M_Clear,Sunny,M_Sunny,P_Cloudy,Rain,Am_showers,Sct_T_Storms,Iso_T_Storms,Shwrs_Late } from "./icons";
import DuplicateItems from "./duplicateArray";


function MapCounty({county_name,countyCode,imported_data}:{county_name:string, countyCode:string, imported_data:WeatherApiResponse}) {

  const data_fetch = imported_data.dal.getSunV3DailyForecastWithHeadersUrlConfig
  const data_county = data_fetch[countyCode].data
  const day_s = data_county.dayOfWeek
  const date_s = data_county.validTimeLocal
  
  const day = DuplicateItems(day_s)
  const date = DuplicateItems(date_s)
  const phrase = data_county.daypart[0].wxPhraseLong
  const phrase_short = data_county.daypart[0].wxPhraseShort
  const temp = data_county.daypart[0].temperature
  const precip = data_county.daypart[0].precipChance
  const windDirection = data_county.daypart[0].windDirectionCardinal
  const windSpeed = data_county.daypart[0].windSpeed

  return (
    <div className={styles.county_section}>
        <div className={styles.county_title}>{county_name}</div>
        <div className={styles.days_grid}>
            {day.map((_,index)=>{
              if (index < 2) return null;
              if ( index % 2 == 0) {
                return(
                  <div key={index+'itemCard'} className={`${styles.day_card} ${day[index]=='Tuesday'?styles.firstB:(day[index]=='Wednesday'?styles.secondB:(day[index]=='Thursday'?styles.thirdB:(day[index]=='Friday'?styles.quartB:(day[index]=='Saturday'?styles.quinthB:(day[index]=='Sunday'?styles.sixthB:styles.seventhB)))))}`}>
                    <div className={day[index]=='Tuesday'?styles.firstA:(day[index]=='Wednesday'?styles.secondA:(day[index]=='Thursday'?styles.thirdA:(day[index]=='Friday'?styles.quartA:(day[index]=='Saturday'?styles.quinthA:(day[index]=='Sunday'?styles.sixthA:styles.seventhA)))))}>
                      <div className={styles.day_header}>{day[index]}</div>
                      <div className={styles.date}>{date[index].split('T')[0].slice(8,10)}-SEP</div>
                      <div className={styles.weather_condition}>{phrase[index]}</div>
                    </div>
                    <div className={styles.day_part_container}>
                      <div className={styles.day_part}>
                        DAY
                        <div className={styles.weather_icon}>{phrase_short[index]=='Sunny'?<Sunny />:(phrase_short[index]=='P Cloudy'?<P_Cloudy />:(phrase_short[index]=='M Sunny'?<M_Sunny/>:(phrase_short[index]=='M Cloudy'?'☁️':(phrase_short[index]=='Thunderstorms'?'🌦️':(phrase_short[index]=='Showers'?'⛈️':(phrase_short[index]=='AM Showers'?<Am_showers/>:(phrase_short[index]=='Sct T-Storms'?<Sct_T_Storms/>:(phrase_short[index]=='Iso T-Storms'?<Iso_T_Storms/>:<Rain />))))))))}</div>
                        <div className={styles.temperature}>
                          <div className={styles.day_temp}>{temp[index]}°</div>
                        </div>
                        <Drop />
                        <div className={styles.precipitation}>{precip[index]}%</div>
                        <WindIcon />
                        <div className={styles.wind}>{windDirection[index]} {windSpeed[index]} mph</div>
                      </div>
                      <div className={styles.night_part}>
                        NIGHT
                        <div className={styles.weather_icon}>{phrase_short[index+1]=='P Cloudy'?<M_Clear />:(phrase_short[index+1]=='M Cloudy'?'☁️':(phrase_short[index+1]=='Thunderstorms'?'🌦️':(phrase_short[index+1]=='Showers'?'⛈️':(phrase_short[index+1]=='Clear'?<Clear />:(phrase_short[index+1]=='M Clear'?<M_Clear />:(phrase_short[index+1]=='Shwrs Late'?<Shwrs_Late/>:'Rains'))))))}</div>
                        <div className={styles.temperature}>
                        <div className={styles.day_temp}>{temp[index+1]}°</div>
                        </div>
                        <Drop />
                        <div className={styles.precipitation}>{precip[index+1]}%</div>
                        <WindIcon />
                        <div className={styles.wind}>{windDirection[index+1]} {windSpeed[index+1]} mph</div>

                      </div>

                    </div>   
                  </div>
                )
              }
            })
            }           
        </div>
    </div>
);
}

export default function Home() {
  
const county_name_frio:string = "Frio County, TX";
const countyCode_frio:string = `duration:7day;geocode:28.89,-99.10;language:en-US;units:e`;
const imported_data_frio = Fetch_frio_county();

const county_name_harris:string = "Harris County, TX";
const countyCode_harris = 'duration:7day;geocode:29.76,-95.363;language:en-US;units:e';
const imported_data_harris = Fetch_harris_county();

const county_name_webb:string = "Webb County, TX";
const countyCode_webb = 'duration:7day;geocode:27.506,-99.508;language:en-US;units:e';
const imported_data_webb = Fetch_webb_county();

const county_name_balmorhea:string = "Balmorhea, TX";
const countyCode_balmorhea = 'duration:7day;geocode:30.981,-103.742;language:en-US;units:e';
const imported_data_balmorhea = Fetch_balmorhea_county();

const county_name_orla:string = "Orla, TX";
const countyCode_orla = 'duration:7day;geocode:31.824,-103.908;language:en-US;units:e';
const imported_data_orla = Fetch_orla_county();

const county_name_kermit:string = "Kermit, TX";
const countyCode_kermit = 'duration:7day;geocode:31.858,-103.093;language:en-US;units:e';
const imported_data_kermit = Fetch_kermit_county();

const county_name_ozona:string = "Ozona, TX";
const countyCode_ozona = 'duration:7day;geocode:30.71,-101.202;language:en-US;units:e';
const imported_data_ozona = Fetch_ozona_county();

const county_name_midland:string = "Midland, TX";
const countyCode_midland = 'duration:7day;geocode:31.997,-102.078;language:en-US;units:e';
const imported_data_midland = Fetch_midland_county();

const county_name_carlsbad:string = "Carlsbad, NM";
const countyCode_carlsbad = 'duration:7day;geocode:31.611,-100.646;language:en-US;units:e';
const imported_data_carlsbad = Fetch_carlsbad_county();

return (
  <div className={styles.page}>
    <h1 id="title" className={styles.titles}>16 Sept - 22 Sep, Weather report</h1>
    <hr />
    <hr />
      <br/>

    <div className={styles.forecast_container}>
      <MapCounty county_name={county_name_frio} countyCode={countyCode_frio} imported_data={imported_data_frio}/>
      <MapCounty county_name={county_name_harris} countyCode={countyCode_harris} imported_data={imported_data_harris}/>
      <MapCounty county_name={county_name_webb} countyCode={countyCode_webb} imported_data={imported_data_webb}/>
      <MapCounty county_name={county_name_balmorhea} countyCode={countyCode_balmorhea} imported_data={imported_data_balmorhea}/>
      <MapCounty county_name={county_name_orla} countyCode={countyCode_orla} imported_data={imported_data_orla}/>
      <br/>
      <br/>
      <br/>
      <MapCounty county_name={county_name_kermit} countyCode={countyCode_kermit} imported_data={imported_data_kermit} />
      <MapCounty county_name={county_name_ozona} countyCode={countyCode_ozona} imported_data={imported_data_ozona} />
      <MapCounty county_name={county_name_midland} countyCode={countyCode_midland} imported_data={imported_data_midland} />
      <MapCounty county_name={county_name_carlsbad} countyCode={countyCode_carlsbad} imported_data={imported_data_carlsbad} />
<br/><br/>
    </div>
  </div>

)
}
