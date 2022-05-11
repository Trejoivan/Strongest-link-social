import * as React from "react";
import Model from "react-body-highlighter";
import workoutApi from '../api/workoutAPI';

import { useState, useEffect } from 'react';

export default function BodyPng(props) {

  const pngDict = {'neck': 'neck','front-deltoids': 'delts', "biceps": 'biceps', 'triceps': 'triceps', 'forearm': 'forearms', 'adductor': 'abductors', "abs": 'abs', 'obliques': 'abs', "quadriceps": 'quads', 'hamstring': 'hamstrings', 'calves': 'calves', 'knees': 'quads', 'upper-back': 'upper back', 'lower-back': 'lats', 'gluteal': 'glutes', 'left-soleus': 'calves', 'trapezius': 'traps', 'front-deltoids': 'delts', 'chest': 'chest', 'obliques': 'abs', "back-deltoids" : 'delts'
  };


  const targetoptions = ["abductors", "abs", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps", "upper back"];

  const bodyPartOptions  = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];


  const firstPngEvent = async (event) => {
    if(event['muscle'] == 'head') {
      props.setResponseData([{
        bodyPart: "A",
        equipment: "Book!!",
        gifUrl: "https://thumbs.dreamstime.com/b/weared-sweater-cap-smart-hipster-coffee-cup-chair-sitting-leather-armchair-dark-background-clever-manly-203041622.jpg",
        id: "140312",
        name: "Read",
        target: ""}])
    }
    else {
      props.setPage(1)
    const deepSearch = pngDict[event['muscle']]
    let topSearch = ''
    if(bodyPartOptions.includes(deepSearch)){
      topSearch = 'bodyPart';
    }
    else if(targetoptions.includes(deepSearch)){
      topSearch = 'target';
    }
    const workoutlistdata = props.fetchData(topSearch, deepSearch)
    }
  };

  const secondPngEvent = (event) => {
    if(event['muscle'] == 'head') {
      props.setResponseData([{
        bodyPart: "A",
        equipment: "Book!!",
        gifUrl: "https://thumbs.dreamstime.com/b/weared-sweater-cap-smart-hipster-coffee-cup-chair-sitting-leather-armchair-dark-background-clever-manly-203041622.jpg",
        id: "140312",
        name: "Read",
        target: ""}])
    }
    else {
    props.setPage(1)
    console.log(event['muscle'])
    const deepSearch = pngDict[event['muscle']]
    let topSearch = ''
    if(bodyPartOptions.includes(deepSearch)){
      topSearch = 'bodyPart';
    }
    else if(targetoptions.includes(deepSearch)){
      topSearch = 'target';
    }
    const workoutlistdata = props.fetchData(topSearch, deepSearch)
    }
  };

  return (
    <div className="body-png">
      <Model className="ivan" onClick={firstPngEvent} />
      <Model
        type="posterior"
        onClick={secondPngEvent}
      />
       {() => props.renderButtons()}
    </div>
  );
}
