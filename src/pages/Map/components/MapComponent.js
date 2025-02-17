import { useEffect, useState } from "react";
import { Circle, Map, MapMarker } from "react-kakao-maps-sdk";
import { Grid } from "../../../elements";
import QuestMarker from "../elements/QuestMarker";
import { useWatchLocation } from "../hooks/locationHooks";

export default function MapComponent({ 
  questList, 
  questType ,
  currentMapPosition,
  setCurrentMapPosition,
  position, 
  setPosition, 
  cancelWatchPosition, 
  isDrag, 
  setIsDrag,
}) {

  // useEffect(() => {
  //   if (!isDrag) return;
  //   cancelWatchPosition();
  // }, [isDrag, cancelWatchPosition])

  // to do list
  // - isDrag = true 즉 드래그모드일 때, 마커를 간단한 마커로 바꾸어보여주면 좋겠다.
  return (
    <Grid
      mystyles={"position: relative; z-index: 100; height: 100vh; width: 100%; margin: auto"}
    >
      <Map
          center={isDrag ? currentMapPosition : position}
          isPanto={true}
          onDragEnd={(map) => {
            cancelWatchPosition();
            setIsDrag(true)
            setCurrentMapPosition({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            })
          }} // 중심위치에서 이동 시켰는지?
          style={{ width: "100%", height: "100%" }}
      >
          <MapMarker position={position}>
              <Grid 
                flex
                justifyContent={"center"}
                alignItems={"center"}
                style={{ color: "#000" }}
              >
                <p>{isDrag ? "Drag Mode!" : "Center Mode"}</p>
              </Grid>
          </MapMarker>
          <Circle
              center={position}
              radius={30}
              strokeWeight={0} // 선의 두께입니다
              fillColor={"#5DEB85"} // 채우기 색깔입니다
              fillOpacity={0.3} // 채우기 불투명도 입니다
          />
          
          {questList.map((item, index) => {
            if (questType === "all") {
              return (
                <QuestMarker
                  key={item.id}
                  {...item}
                  currentPosition={position}
                />
              )  
            } else {
              if (questType === item.type) {
                return (
                  <QuestMarker
                    key={item.id}
                    {...item}
                    currentPosition={position}
                  />
                )  
              }
            }
            
          })}
      </Map>
    </Grid>
  )
}