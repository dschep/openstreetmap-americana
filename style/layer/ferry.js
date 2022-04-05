"use strict";

import { waterLabel } from "../constants/color";

export const ferry = {
  id: "ferry",
  type: "line",
  paint: {
    "line-color": waterLabel,
    "line-dasharray": [7, 5],
    "line-width": 1.5,
  },
  filter: ["all", ["==", "class", "ferry"]],
  layout: {
    visibility: "visible",
  },
  source: "openmaptiles",
  "source-layer": "transportation",
};

export const ferryLabel = {
  id: "ferry_label",
  type: "symbol",
  filter: ["all", ["==", "subclass", "ferry"]],
  paint: {
    "text-color": "hsl(211, 43%, 20%)",
    "text-halo-color": "#eee",
    "text-halo-blur": 0.5,
    "text-halo-width": 1.5,
  },
  layout: {
    "text-field": "{name:latin} {name:nonlatin}",
    "text-font": ["Metropolis Regular Italic"],
    "text-max-angle": 20,
    "symbol-placement": "line",
    "text-size": 12,
    "text-anchor": "bottom",
  },
  source: "openmaptiles",
  "source-layer": "transportation_name",
};
