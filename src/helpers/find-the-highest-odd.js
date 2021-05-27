import { maxBy } from "lodash";

export const setHighlightIn1x2 = (array) => {
  let objects = array;
  const maxHomeWin = maxBy(objects, (obj) => obj.offers[0].odds);
  const maxDraw = maxBy(objects, (obj) => obj.offers[1].odds);
  const maxAwayWin = maxBy(objects, (obj) => obj.offers[2].odds);
  for (let i = 0; i < objects.length; i++) {
    // maxHomeWin
    if (objects[i].offers[0].coupon_key === maxHomeWin.offers[0].coupon_key) {
      objects[i].offers[0].isHighlighted = true;
    } else {
      objects[i].offers[0].isHighlighted = false;
    }
    // maxDraw
    if (objects[i].offers[1].coupon_key === maxDraw.offers[1].coupon_key) {
      objects[i].offers[1].isHighlighted = true;
    } else {
      objects[i].offers[1].isHighlighted = false;
    }
    // maxAwayWin
    if (objects[i].offers[2].coupon_key === maxAwayWin.offers[2].coupon_key) {
      objects[i].offers[2].isHighlighted = true;
    } else {
      objects[i].offers[2].isHighlighted = false;
    }
  }
  return objects;
};
