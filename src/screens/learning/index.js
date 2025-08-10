import React, { useState } from "react";
import Zodiacs from "./zodiac";
import Planets from "./planets";
import Houses from "./houses";


export default function Learning() {
  return (<>
    <Zodiacs/>
    
    <fieldset style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
        <legend>Planets</legend>
        <Planets/>
    </fieldset>

    <fieldset style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
        <legend>Houses</legend>
        <Houses/>
    </fieldset>
    
  </>
  );
}
