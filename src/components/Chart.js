import React, {Component} from 'react';

import {  VictoryStack, VictoryBar, VictoryAxis, VictoryLabel } from 'victory-native';
import Svg from 'react-native-svg'

const dataA = [
  { x: "Noise", y: 0.0000000000000000000000000000000000001},
  { x: "Lighting", y: 0.0000000000000000000000000000000000000000000000001 },
  { x: "Comfort", y: 0.37 },
  { x: "Health", y: 0.000000000000000000000000000000000000000001 },
  { x: "Productivity", y: 0.19 },
];

const dataB = [
  { x: "Noise", y: 0.2 },
  { x: "Lighting", y: 0.78 },
  { x: "Comfort", y: 0 },
  { x: "Health", y: 0.21 },
  { x: "Productivity", y: 0 },
];

const width = 500;
const height = 260;
const padding = { top: 10, bottom: 10, left: 20, right: 20 };

export default class Chart extends Component{
  render() {
    return(
      <Svg viewBox={`0 0 ${width} ${height}`}
          style={{ width: "100%", height: "35%" }}
      >
        <VictoryStack horizontal
          standalone={false}
          /* setting a symmetric domain makes it much easier to center the axis  */
          domain={{ x: [-1, 1] }}
          padding={padding}
          height={height}
          width={width}
          style={{ data: { width: 50 }, labels: { fontSize: 20, fill:"black" } }}
        >
          <VictoryBar
            style={{ data: { fill: "rgba(229,57,53,0.8)" }, text: { color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" } }}
            data={dataA}
            y={(data) => (-Math.abs(data.y))}
            labels={(data) => {
              if(data.y < 0.01){
                return `${data.x}`;
              } else {
                return `-${data.y}`;
              }
            }}
            barRatio = {1}
          />
          <VictoryBar
            style={{ data: { fill: "rgba(30,136,229,0.8)" }, text: { color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" } }}
            data={dataB}
            labels={(data) =>
              {if(data.y===0){
                return `${data.x}`;
              } else{
                return `${Math.abs(data.y)}`
              }
            }}
            barRatio = {1}
          />
        </VictoryStack>
        <VictoryAxis dependentAxis
          height={height}
          width={width}
          padding={padding}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" , fill: "transparent" }
          }}
        />
      </Svg>
    );
  }
}
