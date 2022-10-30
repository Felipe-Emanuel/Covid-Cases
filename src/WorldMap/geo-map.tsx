import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import * as ChartGeo from "chartjs-chart-geo";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Title,
  Legend
} from "chart.js";
import MAP_JSON from "./map-json.const";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);

export default function Map(props: { chosenKey: keyof typeof MAP_JSON }) {
  const chartRef = useRef();
  const [country, setCountry] = useState<any>([]);

  useEffect(() => {
    fetch(MAP_JSON[props.chosenKey].url)
      .then((response) => response.json())
      .then((value) => {
        setCountry(
          ChartGeo.topojson.feature(
            value,
            value.objects[MAP_JSON[props.chosenKey].objectsKey],
            //@ts-ignore
          ).features
        );
      });
  }, [props.chosenKey]);

   return (
    <Chart
      ref={chartRef}
      type="choropleth"
      data={{
        labels: country.map(
          (d: any) => d.properties[MAP_JSON[props.chosenKey].propertiesKey]
        ),
        datasets: [
          {
            outline: country,
            label: "Countries",
            data: country.map((d: any) => ({
              feature: d,
              value: Math.random() * 10
            }))
          }
        ]
      }}
      options={{
        showOutline: true,
        showGraticule: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          xy: {
            projection: "equalEarth"
          },
          color: {
            display: false
          }
        }
      }}
    />
  );
}
