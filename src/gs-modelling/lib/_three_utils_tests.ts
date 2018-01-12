import * as gs from "gs-json";
import * as test from "./_three_utils_dev";

//  Query ======================================================================================================
export function test_pointIsOnPlane() {
    const m: gs.IModel = new gs.Model();
    const g: gs.IGeom = m.getGeom();
    const O: gs.IPoint = g.addPoint([0,0,0]);
    const normal1: number[] = [0,0,1];
    const normal2: number[] = [0,1,0];
    const pt1: gs.IPoint = g.addPoint([1,1,0]);
    if(!test.pointIsOnPlane(O, normal1, pt1)) {return false;}
    if(test.pointIsOnPlane(O, normal2, pt1)) {return false;}
    return true;
}
export function test_vectorsAreCodir() {
    const xyz1: number[]= [1,0,0];
    const xyz2: number[]=[4,0,0];
    const xyz3: number[]=[0,1,0];
    const xyz4: number[]=[0.0000009,0,0];
    const xyz5: number[]=[0,0,0];
    if(!test.vectorsAreCodir(xyz1,xyz1)) {return false;}
    if(!test.vectorsAreCodir(xyz1,xyz2)) {return false;}
    if(test.vectorsAreCodir(xyz1,xyz3)) {return false;}
    if(!test.vectorsAreCodir(xyz1,xyz4)) {return false;}
    if(!test.vectorsAreCodir(xyz1,xyz5)) {return false;}
    return true;
}
