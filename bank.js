export const topics = {
  "foundations": {
    "name": "HFE foundations",
    "subtitle": "Helander · pp. 3–16",
    "icon": "◎"
  },
  "vision": {
    "name": "Vision & illumination",
    "subtitle": "Helander · pp. 41–67",
    "icon": "◉"
  },
  "anthropometry": {
    "name": "Anthropometric design",
    "subtitle": "Helander · pp. 147–166",
    "icon": "↔"
  },
  "analysis": {
    "name": "Lifting & ergonomic analysis",
    "subtitle": "Quantitative techniques · Course PDF",
    "icon": "▧"
  },
  "mechanics": {
    "name": "Body mechanics at work",
    "subtitle": "Assessment & design · Course PDF",
    "icon": "⌁"
  },
  "environment": {
    "name": "The physical environment",
    "subtitle": "Thermal, sound & light · Course PDF",
    "icon": "☼"
  }
};

export const sources = {
  "book": {
    "name": "Helander — A Guide to Human Factors and Ergonomics",
    "short": "Helander, 2nd ed.",
    "scope": "Assigned printed pages 3–16, 41–67, and 147–166. Only the attached local book was used.",
    "url": null
  },
  "analysis": {
    "name": "Ergonomic Analysis and Design.pdf",
    "short": "Ergonomic Analysis and Design",
    "scope": "56 scanned PDF pages · Quantitative techniques in ergonomic analysis and design.",
    "url": "https://drive.google.com/file/d/1XeRF8ntTD5HL40dBFj6haUeY9Mg0v00g/view"
  },
  "mechanics": {
    "name": "Mechanics at Work Assessment and Design.pdf",
    "short": "Mechanics at Work Assessment and Design",
    "scope": "85 scanned PDF pages · Ergonomics and body mechanics at work.",
    "url": "https://drive.google.com/file/d/1OqP-nIC8T1KxmthvTa9uGjN4CE4mXjWQ/view"
  },
  "environment": {
    "name": "Factors Affecting the Physical Environment.pdf",
    "short": "Factors Affecting the Physical Environment",
    "scope": "92 scanned PDF pages · Thermal conditions, sound, lighting, and related assessment.",
    "url": "https://drive.google.com/file/d/1ay9AVxYE4ptMS9QPZlHrl-ZvLvYDO6kb/view"
  }
};

export const questions = [
  {
    "id": "foundations-001",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "3",
    "prompt": "What is the main purpose of human factors and ergonomics?",
    "answer": "Design systems for human use",
    "explanation": "HFE applies knowledge about people to the design and improvement of systems.",
    "choices": [
      "Maximize machine speed alone",
      "Classify personality types",
      "Diagnose individual illnesses",
      "Design systems for human use"
    ]
  },
  {
    "id": "foundations-002",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "3",
    "prompt": "Name the discipline whose Greek roots mean work and laws.",
    "answer": "Ergonomics",
    "explanation": "The term combines ergo, meaning work, and nomos, meaning laws.",
    "aliases": []
  },
  {
    "id": "foundations-003",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "3",
    "prompt": "Which pair best describes the early roots of European ergonomics?",
    "answer": "Work physiology and biomechanics",
    "explanation": "European ergonomics developed strongly around physical work and workstation design.",
    "choices": [
      "Language and political science",
      "Astronomy and geology",
      "Work physiology and biomechanics",
      "Advertising and finance"
    ]
  },
  {
    "id": "foundations-004",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "3",
    "prompt": "Early U.S. human factors research was especially associated with which field?",
    "answer": "Experimental psychology",
    "explanation": "Its roots emphasized human performance and the design of systems.",
    "choices": [
      "Experimental psychology",
      "Tax accounting",
      "Architectural history",
      "Soil science"
    ]
  },
  {
    "id": "foundations-005",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "4–6",
    "prompt": "A single discipline is sufficient for every ergonomics design problem.",
    "answer": "False",
    "explanation": "Design problems combine physical, cognitive, environmental, and organizational factors."
  },
  {
    "id": "foundations-006",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "4",
    "prompt": "A designer is investigating wrist posture during keyboard use. Which knowledge area is the most direct fit?",
    "answer": "Biomechanics",
    "explanation": "Biomechanics examines the forces and movements involved in posture and keying.",
    "choices": [
      "Colorimetry alone",
      "Market segmentation",
      "Financial forecasting",
      "Biomechanics"
    ]
  },
  {
    "id": "foundations-007",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "4–5",
    "prompt": "Evaluation can lead to another round of redesign rather than end the design process permanently.",
    "answer": "True",
    "explanation": "The design process uses feedback and repeated evaluation to improve a system."
  },
  {
    "id": "foundations-008",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "7",
    "prompt": "What name did the Gilbreths give the small motion elements used in work analysis?",
    "answer": "Therbligs",
    "explanation": "The Gilbreths divided work into elementary motions to study how tasks are performed.",
    "aliases": [
      "therblig"
    ]
  },
  {
    "id": "foundations-009",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "8",
    "prompt": "After repeated operator errors, which response best follows an ergonomic design approach?",
    "answer": "Investigate the design and reduce opportunities for error",
    "explanation": "Investigating the system can reveal design problems that encourage errors, rather than assuming the operator has an enduring accident-prone personality.",
    "choices": [
      "Investigate the design and reduce opportunities for error",
      "Remove all feedback",
      "Assume the same people will always have accidents",
      "Increase task demands without redesign"
    ]
  },
  {
    "id": "foundations-010",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "11",
    "prompt": "A study changes workplace noise and measures assembly time. Which is the independent variable?",
    "answer": "Workplace noise",
    "explanation": "Noise is the manipulated condition; assembly time is the measured outcome.",
    "choices": [
      "Assembly time",
      "Error count after testing",
      "Satisfaction rating after testing",
      "Workplace noise"
    ]
  },
  {
    "id": "foundations-011",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "11",
    "prompt": "What type of research variable is an outcome such as errors per hour or task completion time?",
    "answer": "Dependent variable",
    "explanation": "Dependent variables measure the outcomes associated with design conditions.",
    "aliases": [
      "dependent variables",
      "outcome variable",
      "outcome measure"
    ]
  },
  {
    "id": "foundations-012",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "11",
    "prompt": "Which sequence best represents the operator’s information-processing activity?",
    "answer": "Perceive information, decide, produce a response",
    "explanation": "Perception informs decisions, and the selected action affects the system and its feedback.",
    "choices": [
      "Respond, then receive all information for the first time",
      "Perceive information, decide, produce a response",
      "Produce a response without any task context",
      "Ignore information, decide randomly, stop"
    ]
  },
  {
    "id": "foundations-013",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "12",
    "prompt": "What decision-making model describes recognizing a familiar situation and immediately knowing a workable action?",
    "answer": "Recognition-primed decision making",
    "explanation": "Experienced operators can recognize familiar patterns instead of comparing every possible alternative.",
    "aliases": [
      "recognition primed decision making",
      "recognition-primed decision",
      "RPD",
      "recognition primed decision"
    ]
  },
  {
    "id": "foundations-014",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "12",
    "prompt": "Experience, motivation, age, and body size can modify an operator’s task performance.",
    "answer": "True",
    "explanation": "The model includes individual differences as modulating variables."
  },
  {
    "id": "foundations-015",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "12",
    "prompt": "Under high stress, an operator attends to an unusually narrow set of cues. What is this called?",
    "answer": "Tunnel vision",
    "explanation": "Stress can narrow attention and make relevant information easier to miss.",
    "choices": [
      "Color constancy",
      "Anthropometric clearance",
      "Tunnel vision",
      "Perfect situation awareness"
    ]
  },
  {
    "id": "foundations-016",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "13",
    "prompt": "What area of ergonomics emphasizes work organization, communication policies, and task allocation?",
    "answer": "Macroergonomics",
    "explanation": "Macroergonomics considers the organizational context in which individual work takes place.",
    "aliases": [
      "macro ergonomics",
      "macro-ergonomics",
      "organizational ergonomics"
    ]
  },
  {
    "id": "foundations-017",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "13",
    "prompt": "In a human–machine system, a display must always be an electronic screen.",
    "answer": "False",
    "explanation": "A display is any presentation of system information, including sounds and visible physical changes."
  },
  {
    "id": "foundations-018",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "13–14",
    "prompt": "Which set contains three central goals of ergonomic system design?",
    "answer": "Safety, productivity, and operator satisfaction",
    "explanation": "These goals guide the design and assessment of the system.",
    "choices": [
      "Automation, advertising, and attendance",
      "Safety, productivity, and operator satisfaction",
      "Speed, secrecy, and standardization",
      "Profit, prestige, and patents"
    ]
  },
  {
    "id": "foundations-019",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "14",
    "prompt": "If task demands exceed the operator’s available attention, the risk of error can increase.",
    "answer": "True",
    "explanation": "The safety discussion compares performance demands with human limitations."
  },
  {
    "id": "foundations-020",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "14",
    "prompt": "An ergonomist must wait for an injury before investigating a possible safety problem.",
    "answer": "False",
    "explanation": "Errors, subjective assessments, and physiological responses can help reveal problems before injury."
  },
  {
    "id": "foundations-021",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "15",
    "prompt": "What trade-off describes the tendency for faster performance to come with more errors?",
    "answer": "Speed-accuracy trade-off",
    "explanation": "Raising speed can reduce the time available to respond accurately.",
    "aliases": [
      "speed accuracy trade off",
      "speed accuracy trade-off",
      "speed-accuracy tradeoff",
      "SATO"
    ]
  },
  {
    "id": "foundations-022",
    "type": "mcq",
    "topic": "foundations",
    "source": "book",
    "pages": "15",
    "prompt": "Which change can improve both production quality and safety?",
    "answer": "Reducing operator errors",
    "explanation": "Fewer errors can improve the quality of output while also reducing safety problems.",
    "choices": [
      "Using glare to keep workers alert",
      "Removing all accuracy checks",
      "Forcing shorter cycles regardless of errors",
      "Reducing operator errors"
    ]
  },
  {
    "id": "foundations-023",
    "type": "tf",
    "topic": "foundations",
    "source": "book",
    "pages": "15",
    "prompt": "Understanding operator satisfaction requires considering users’ needs and expectations.",
    "answer": "True",
    "explanation": "People differ in what they expect and need from work and products."
  },
  {
    "id": "foundations-024",
    "type": "identification",
    "topic": "foundations",
    "source": "book",
    "pages": "16",
    "prompt": "What term describes choosing a design that reaches an acceptable level on several criteria rather than maximizing every one?",
    "answer": "Satisficing",
    "explanation": "A practical design may need acceptable performance across competing goals.",
    "aliases": [
      "satisfice",
      "satisficed"
    ]
  },
  {
    "id": "vision-001",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "41",
    "prompt": "What light-sensitive layer lines the inside of the eyeball?",
    "answer": "Retina",
    "explanation": "The retina contains receptors that turn incoming light into neural information.",
    "aliases": [
      "the retina"
    ]
  },
  {
    "id": "vision-002",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "41",
    "prompt": "Which structure provides most of the eye’s refractive power?",
    "answer": "Cornea",
    "explanation": "The cornea provides most refraction; the lens adjusts focus more finely.",
    "choices": [
      "Iris pigment",
      "Optic nerve",
      "Cornea",
      "Eyelid"
    ]
  },
  {
    "id": "vision-003",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "41–43",
    "prompt": "Which retinal receptors are associated with central vision, fine detail, and color?",
    "answer": "Cones",
    "explanation": "Cones are concentrated centrally and support high-resolution color vision.",
    "aliases": [
      "cone",
      "cone cells"
    ]
  },
  {
    "id": "vision-004",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "41–43",
    "prompt": "Which receptors are especially useful for detecting dim light in peripheral vision?",
    "answer": "Rods",
    "explanation": "Rods are sensitive at low light levels but provide poorer detail and no color discrimination.",
    "choices": [
      "Cones only",
      "Corneal fibers",
      "Rods",
      "Ciliary muscles"
    ]
  },
  {
    "id": "vision-005",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "41–43",
    "prompt": "Rods provide better color discrimination than cones.",
    "answer": "False",
    "explanation": "Cones support color vision; rods mainly support achromatic vision at lower light levels."
  },
  {
    "id": "vision-006",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "43–44",
    "prompt": "What is the eye’s process of changing lens shape to focus at different distances?",
    "answer": "Accommodation",
    "explanation": "The ciliary muscles alter lens curvature to bring an image into focus.",
    "aliases": [
      "visual accommodation",
      "accommodation of the eye"
    ]
  },
  {
    "id": "vision-007",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "41",
    "prompt": "When focusing on a near object, what change in lens shape is described?",
    "answer": "The lens becomes more curved or bulges",
    "explanation": "Greater curvature increases refractive power for near viewing.",
    "choices": [
      "The retina detaches",
      "The lens becomes more curved or bulges",
      "The lens becomes completely opaque",
      "The lens becomes flatter"
    ]
  },
  {
    "id": "vision-008",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "44–45",
    "prompt": "Name the age-related reduction in the eye’s ability to accommodate.",
    "answer": "Presbyopia",
    "explanation": "As the lens becomes less flexible, the range over which it can focus narrows.",
    "aliases": []
  },
  {
    "id": "vision-009",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "45",
    "prompt": "Dark adaptation involves regenerating visual photopigments after moving into a darker environment.",
    "answer": "True",
    "explanation": "Regeneration increases sensitivity after exposure to brighter light."
  },
  {
    "id": "vision-010",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "45",
    "prompt": "What is the light-sensitive pigment in rods called?",
    "answer": "Rhodopsin",
    "explanation": "Rhodopsin is involved in the rod response and the slower phase of dark adaptation.",
    "aliases": []
  },
  {
    "id": "vision-011",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "46",
    "prompt": "Approximately how long does complete dark adaptation take?",
    "answer": "30–40 minutes",
    "explanation": "The rod phase continues after the initial faster cone phase.",
    "choices": [
      "Exactly one minute",
      "About 24 hours",
      "30–40 minutes",
      "30–40 seconds"
    ]
  },
  {
    "id": "vision-012",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "48",
    "prompt": "For a very dim workplace, which warning design avoids relying on color discrimination?",
    "answer": "High-contrast text and symbols",
    "explanation": "At very low illumination, color distinctions become unreliable, so luminance contrast matters.",
    "choices": [
      "Several nearly identical dark colors",
      "Red and green indicators distinguished only by color",
      "High-contrast text and symbols",
      "Small low-contrast colored letters"
    ]
  },
  {
    "id": "vision-013",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "48",
    "prompt": "What familiar letter chart is used to measure visual acuity?",
    "answer": "Snellen chart",
    "explanation": "Snellen charts are widely used, but letter recognition and differences between letter shapes can affect test results.",
    "aliases": [
      "Snellen",
      "Snellen eye chart"
    ]
  },
  {
    "id": "vision-014",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "48–49",
    "prompt": "What does visual acuity of 20/40 mean?",
    "answer": "At 20 feet, the person reads what a reference observer reads at 40 feet",
    "explanation": "The numerator is the test distance; the denominator is the reference distance for the same detail.",
    "choices": [
      "At 20 feet, the person reads what a reference observer reads at 40 feet",
      "The person has a 40-degree field of view",
      "The person sees twice as well as 20/20",
      "The person reads 40 letters per second"
    ]
  },
  {
    "id": "vision-015",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "50",
    "prompt": "Visual angle depends on both object size and viewing distance.",
    "answer": "True",
    "explanation": "The same character subtends a smaller angle when viewed from farther away."
  },
  {
    "id": "vision-016",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "50",
    "prompt": "Approximately what visual angle is recommended for ordinary text height?",
    "answer": "20 arc minutes",
    "explanation": "Twenty arc minutes is about one third of a degree.",
    "choices": [
      "One arc second",
      "20 arc minutes",
      "20 radians",
      "20 degrees"
    ]
  },
  {
    "id": "vision-017",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "51",
    "prompt": "What term refers to light arriving at a surface?",
    "answer": "Illuminance",
    "explanation": "Illuminance describes incident light and is measured in lux in SI units.",
    "aliases": [
      "illumination"
    ]
  },
  {
    "id": "vision-018",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "51",
    "prompt": "What term refers to the light leaving a surface toward the observer, measured in cd/m²?",
    "answer": "Luminance",
    "explanation": "Luminance describes the brightness-related physical quantity reflected or emitted toward a viewer.",
    "aliases": []
  },
  {
    "id": "vision-019",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "51",
    "prompt": "Which SI unit measures illuminance?",
    "answer": "Lux",
    "explanation": "Lux is the SI unit of illuminance; cd/m² is used for luminance.",
    "choices": [
      "Candela per square metre",
      "Diopter",
      "Decibel",
      "Lux"
    ]
  },
  {
    "id": "vision-020",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "51",
    "prompt": "A surface’s reflectance can affect its luminance under the same illuminance.",
    "answer": "True",
    "explanation": "A more reflective surface returns more of the incident light under the stated model."
  },
  {
    "id": "vision-021",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "51",
    "prompt": "For a diffuse surface, use L = Eρ/π. If E = 500 lux and ρ = 0.60, approximately what is L?",
    "answer": "95.5 cd/m²",
    "explanation": "500 × 0.60 ÷ π ≈ 95.5 cd/m². The values are practice inputs to the source formula.",
    "choices": [
      "0.0038 cd/m²",
      "300 cd/m²",
      "95.5 cd/m²",
      "833.3 cd/m²"
    ]
  },
  {
    "id": "vision-022",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "52",
    "prompt": "Two areas have luminances of 80 and 20 cd/m². What is their modulation contrast?",
    "answer": "0.60",
    "explanation": "(80 − 20) ÷ (80 + 20) = 60 ÷ 100 = 0.60.",
    "choices": [
      "4.00",
      "0.60",
      "1.00",
      "0.25"
    ]
  },
  {
    "id": "vision-023",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "53",
    "prompt": "Which instrument can be configured to measure illuminance or luminance?",
    "answer": "Photometer",
    "explanation": "The appropriate attachment and acceptance angle depend on the measurement being made.",
    "choices": [
      "Dynamometer",
      "Anemometer",
      "Goniometer",
      "Photometer"
    ]
  },
  {
    "id": "vision-024",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "53",
    "prompt": "A narrow acceptance angle is useful when measuring the luminance of a small selected area.",
    "answer": "True",
    "explanation": "Spot measurements isolate the surface of interest rather than collecting light from a wide field."
  },
  {
    "id": "vision-025",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "53–54",
    "prompt": "Why is a wide acceptance angle useful for illuminance measurements?",
    "answer": "It collects incident light from the relevant surrounding directions",
    "explanation": "Illuminance can include contributions from lamps, windows, and reflected light.",
    "choices": [
      "It collects incident light from the relevant surrounding directions",
      "It measures only the color of one pixel",
      "It converts sound pressure into light",
      "It excludes every off-axis source"
    ]
  },
  {
    "id": "vision-026",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "56–59",
    "prompt": "Which design consideration is especially relevant for an aging eye?",
    "answer": "Limit glare and account for reduced focusing ability",
    "explanation": "Reduced accommodation and increased interference from stray light make focusing distance and glare control important.",
    "choices": [
      "Assume all viewing distances are equally clear",
      "Remove all local task lights",
      "Limit glare and account for reduced focusing ability",
      "Increase direct glare to sharpen contrast"
    ]
  },
  {
    "id": "vision-027",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "57",
    "prompt": "Using f = 1/D, what focusing distance corresponds to 2 diopters?",
    "answer": "0.50 m",
    "explanation": "1 ÷ 2 = 0.50 m. The relation uses distance in metres.",
    "choices": [
      "0.02 m",
      "0.50 m",
      "2 m",
      "50 m"
    ]
  },
  {
    "id": "vision-028",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "59",
    "prompt": "What type of glare comes straight from a light source into the eyes?",
    "answer": "Direct glare",
    "explanation": "A visible luminaire can create direct glare; a shiny surface can create reflected glare.",
    "aliases": []
  },
  {
    "id": "vision-029",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "60",
    "prompt": "Indirect ceiling lighting eliminates all losses of light during reflection.",
    "answer": "False",
    "explanation": "Some light is lost at the ceiling; a clean, highly reflective ceiling helps reduce the loss."
  },
  {
    "id": "vision-030",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "60",
    "prompt": "Why can indirect lighting reduce reflected glare?",
    "answer": "The ceiling spreads the reflected light diffusely",
    "explanation": "Diffuse light is less concentrated in one reflected direction than a direct beam.",
    "choices": [
      "It makes every surface perfectly black",
      "The ceiling spreads the reflected light diffusely",
      "It removes the need for illumination",
      "It increases every shiny surface’s mirror reflection"
    ]
  },
  {
    "id": "vision-031",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "63",
    "prompt": "What index compares how colors look under a light source with a reference, with a maximum score of 100?",
    "answer": "Color rendering index",
    "explanation": "CRI concerns the appearance of object colors, rather than the amount of light per watt.",
    "aliases": [
      "CRI",
      "colour rendering index"
    ]
  },
  {
    "id": "vision-032",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "63",
    "prompt": "Which quantity expresses a lamp’s luminous efficacy?",
    "answer": "Lumens per watt",
    "explanation": "Luminous efficacy compares the light output with the electrical power consumed.",
    "choices": [
      "Candela per kilogram",
      "Lux per decibel",
      "Diopters per metre",
      "Lumens per watt"
    ]
  },
  {
    "id": "vision-033",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "63",
    "prompt": "A highly energy-efficient lamp necessarily provides excellent color rendering.",
    "answer": "False",
    "explanation": "High light output per watt does not guarantee that object colors will appear faithfully."
  },
  {
    "id": "vision-034",
    "type": "mcq",
    "topic": "vision",
    "source": "book",
    "pages": "64",
    "prompt": "Which lighting technique can make scratches in a transparent plate easier to see?",
    "answer": "Edge lighting",
    "explanation": "Light entering from the side can reveal imperfections in transparent material.",
    "choices": [
      "Edge lighting",
      "Increasing background noise",
      "Removing all incident light",
      "Uniformly coloring the plate black"
    ]
  },
  {
    "id": "vision-035",
    "type": "identification",
    "topic": "vision",
    "source": "book",
    "pages": "65",
    "prompt": "What inspection technique passes light through a transparent object to reveal opacity differences?",
    "answer": "Transillumination",
    "explanation": "Transmitted light can reveal changes that are less obvious in reflected light.",
    "aliases": [
      "trans-illumination"
    ]
  },
  {
    "id": "vision-036",
    "type": "tf",
    "topic": "vision",
    "source": "book",
    "pages": "65",
    "prompt": "Ultraviolet black light can help reveal fluorescent contaminants or marking materials.",
    "answer": "True",
    "explanation": "Some substances become conspicuous under UV even when hard to see under ordinary white light."
  },
  {
    "id": "anthropometry-001",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "147–149",
    "prompt": "What field measures human body dimensions for applications such as workstation design?",
    "answer": "Anthropometry",
    "explanation": "Body dimensions help determine appropriate reach, clearance, and workstation adjustment.",
    "aliases": []
  },
  {
    "id": "anthropometry-002",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "149",
    "prompt": "For a normally distributed body dimension, which expression approximates the 95th percentile?",
    "answer": "Mean + 1.65 × standard deviation",
    "explanation": "For a normal distribution, approximately 1.65 standard deviations above the mean gives the 95th percentile.",
    "choices": [
      "Mean + 95 × standard deviation",
      "Mean + 1.65 × standard deviation",
      "Mean − 1.65 × standard deviation",
      "Mean ÷ standard deviation"
    ]
  },
  {
    "id": "anthropometry-003",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "149",
    "prompt": "A normally distributed dimension has mean 170 cm and SD 10 cm. Using mean − 1.65 × SD, what is its 5th percentile?",
    "answer": "153.5 cm",
    "explanation": "170 − 1.65 × 10 = 153.5 cm. These are practice inputs, not population measurements.",
    "choices": [
      "153.5 cm",
      "165 cm",
      "186.5 cm",
      "17 cm"
    ]
  },
  {
    "id": "anthropometry-004",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "149",
    "prompt": "A 95th-percentile dimension means approximately 95% of the reference population has a smaller value.",
    "answer": "True",
    "explanation": "Percentiles describe a position within the distribution for a particular dimension."
  },
  {
    "id": "anthropometry-005",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "150",
    "prompt": "Which user group should generally set the maximum reach distance to a frequently used control?",
    "answer": "Users with smaller reach dimensions",
    "explanation": "Controls must be reachable by smaller users, commonly represented by a lower percentile.",
    "choices": [
      "Users with the longest reach only",
      "An imaginary average user for every dimension",
      "Users with smaller reach dimensions",
      "The tallest manager only"
    ]
  },
  {
    "id": "anthropometry-006",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "150",
    "prompt": "Which user group should generally determine a minimum clearance opening?",
    "answer": "Users with larger relevant dimensions",
    "explanation": "Clearance must allow the larger users to fit.",
    "choices": [
      "Only users at the 50th percentile",
      "Users with larger relevant dimensions",
      "Users with the smallest dimensions",
      "Only users who can squeeze through"
    ]
  },
  {
    "id": "anthropometry-007",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "149–150",
    "prompt": "Designing for the 5th to 95th percentiles of one dimension includes every person in the population.",
    "answer": "False",
    "explanation": "That range covers the central portion of that dimension, leaving the tails outside it."
  },
  {
    "id": "anthropometry-008",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "152",
    "prompt": "Which dimension runs from the sole of the foot to the crease beneath the knee and helps set seat height?",
    "answer": "Popliteal height",
    "explanation": "Popliteal height is a key input for chair height and foot support.",
    "aliases": []
  },
  {
    "id": "anthropometry-009",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "152",
    "prompt": "Why is a shoe allowance added to barefoot vertical measurements when designing a workstation?",
    "answer": "Shoes increase the relevant floor-to-body heights",
    "explanation": "Anthropometric tables may use bare feet, while actual users usually wear footwear.",
    "choices": [
      "It converts centimetres to inches",
      "It replaces the need for a user population",
      "Shoes change all body breadths equally",
      "Shoes increase the relevant floor-to-body heights"
    ]
  },
  {
    "id": "anthropometry-010",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "152",
    "prompt": "A short user raises the chair to reach a fixed desk, leaving the feet unsupported. What is one solution described?",
    "answer": "Provide a suitable footrest",
    "explanation": "A footrest can support the feet while the chair is set for the desk height.",
    "choices": [
      "Provide a suitable footrest",
      "Remove the backrest",
      "Move the desk controls farther away",
      "Increase seat depth"
    ]
  },
  {
    "id": "anthropometry-011",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "152–153",
    "prompt": "Ease of adjustment matters when people of different sizes share a workstation across shifts.",
    "answer": "True",
    "explanation": "Shared workstations need to be reset for different users."
  },
  {
    "id": "anthropometry-012",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "155",
    "prompt": "Which seated body dimension is used to determine the front-to-back length of a seat pad?",
    "answer": "Buttock-popliteal depth",
    "explanation": "The seat must support the thighs without preventing a shorter user from using the backrest.",
    "aliases": [
      "buttock popliteal depth",
      "buttock-popliteal length",
      "buttock popliteal length"
    ]
  },
  {
    "id": "anthropometry-013",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "155",
    "prompt": "Which body breadth is especially relevant when setting chair-seat width?",
    "answer": "Hip breadth",
    "explanation": "Seat width needs enough clearance for users’ hips.",
    "aliases": [
      "hip width",
      "sitting hip breadth",
      "seated hip breadth"
    ]
  },
  {
    "id": "anthropometry-014",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "155",
    "prompt": "Which dimension helps determine overhead clearance for a person who is standing?",
    "answer": "Stature",
    "explanation": "Standing height is relevant to avoiding contact between the head and overhead objects.",
    "choices": [
      "Interpupillary distance",
      "Grip diameter",
      "Stature",
      "Sitting elbow height alone"
    ]
  },
  {
    "id": "anthropometry-015",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "155",
    "prompt": "Which eye-to-eye measurement matters when designing adjustable microscope eyepieces?",
    "answer": "Interpupillary distance",
    "explanation": "The separation between the pupils helps determine the eyepiece spacing range.",
    "aliases": [
      "inter-pupillary distance",
      "IPD"
    ]
  },
  {
    "id": "anthropometry-016",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "155",
    "prompt": "Which pair helps determine available leg space beneath a desk?",
    "answer": "Thigh clearance and sitting elbow height",
    "explanation": "The table’s height and thickness must leave sufficient space above the thighs.",
    "choices": [
      "Grip breadth and hearing threshold",
      "Thigh clearance and sitting elbow height",
      "Eye color and hair length",
      "Stature and visual acuity only"
    ]
  },
  {
    "id": "anthropometry-017",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "156",
    "prompt": "Forward functional reach assumes that the user is not bending forward at the waist or hips.",
    "answer": "True",
    "explanation": "Ordinary functional reach is distinguished from the extra reach gained by bending."
  },
  {
    "id": "anthropometry-018",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "156",
    "prompt": "Why should the extra reach gained by bending not define the location of continuously used tools?",
    "answer": "Sustained bending is unsuitable for prolonged work",
    "explanation": "Extra reach obtained by bending is suitable only for occasional, short tasks rather than prolonged use.",
    "choices": [
      "All users gain the same reach without effort",
      "Sustained bending is unsuitable for prolonged work",
      "Bending makes every task more accurate",
      "Tools become lighter when farther away"
    ]
  },
  {
    "id": "anthropometry-019",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "156",
    "prompt": "What reference point is useful when starting the layout of a manual assembly workstation?",
    "answer": "Hand reference point",
    "explanation": "The task determines a suitable hand position, and the rest of the workstation can be laid out around it.",
    "aliases": [
      "HARP",
      "hand-reference point"
    ]
  },
  {
    "id": "anthropometry-020",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "156",
    "prompt": "For heavy manual work, where should the hands preferably be positioned relative to the elbow?",
    "answer": "About 20 cm below elbow height",
    "explanation": "A lower hand position can suit forceful manual tasks; precision work has different requirements.",
    "choices": [
      "About 50 cm above the head",
      "Exactly at eye height",
      "About 20 cm above elbow height",
      "About 20 cm below elbow height"
    ]
  },
  {
    "id": "anthropometry-021",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "156",
    "prompt": "For precision work with supported forearms, where should the hands preferably be positioned relative to the elbow?",
    "answer": "About 5 cm above elbow height",
    "explanation": "The recommended reference position depends on the task and support conditions.",
    "choices": [
      "About 5 cm above elbow height",
      "About 30 cm behind the body",
      "About 50 cm below the knees",
      "At shoulder height for every task"
    ]
  },
  {
    "id": "anthropometry-022",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "157–158",
    "prompt": "Adding two 5th-percentile body dimensions is guaranteed to produce a 5th-percentile combined dimension.",
    "answer": "False",
    "explanation": "Body dimensions are not perfectly correlated, so percentile values cannot simply be added that way."
  },
  {
    "id": "anthropometry-023",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "158",
    "prompt": "What is the first step in an anthropometric design procedure?",
    "answer": "Characterize the intended user population",
    "explanation": "The designer first checks who the users are and whether suitable measurements exist.",
    "choices": [
      "Select a chair color",
      "Buy the largest available desk",
      "Assume military measurements fit everyone",
      "Characterize the intended user population"
    ]
  },
  {
    "id": "anthropometry-024",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "158–160",
    "prompt": "How can a low-cost full-scale mock-up improve workstation evaluation?",
    "answer": "Let differently sized users simulate movements and reveal problems",
    "explanation": "Static dimensions alone do not show every reaching and turning requirement.",
    "choices": [
      "Let differently sized users simulate movements and reveal problems",
      "Measure only the brightness of the room",
      "Guarantee every design is safe without testing",
      "Replace the need to consider users"
    ]
  },
  {
    "id": "anthropometry-025",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "160",
    "prompt": "A person at the 50th percentile for stature must also be at the 50th percentile for every other dimension.",
    "answer": "False",
    "explanation": "Individuals have different proportions; there is no person who represents the same percentile on every dimension."
  },
  {
    "id": "anthropometry-026",
    "type": "identification",
    "topic": "anthropometry",
    "source": "book",
    "pages": "160",
    "prompt": "What is the acronym for the Civilian American and European Surface Anthropometry Resource project?",
    "answer": "CAESAR",
    "explanation": "CAESAR used three-dimensional body scanning for anthropometric applications.",
    "aliases": []
  },
  {
    "id": "anthropometry-027",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "160–161",
    "prompt": "What advantage of 3D body models is emphasized?",
    "answer": "Obtaining design-specific dimensions and spatial relationships",
    "explanation": "A 3D model can retain shape and relative geometry beyond a small list of separate lengths.",
    "choices": [
      "Making all people the same size",
      "Removing the need for any design criteria",
      "Obtaining design-specific dimensions and spatial relationships",
      "Eliminating all variation between users"
    ]
  },
  {
    "id": "anthropometry-028",
    "type": "tf",
    "topic": "anthropometry",
    "source": "book",
    "pages": "162",
    "prompt": "Wheelchair access depends on wheelchair size and maneuvering space, as well as the user’s body.",
    "answer": "True",
    "explanation": "A body-only clearance model can miss the equipment and turning-space requirements."
  },
  {
    "id": "anthropometry-029",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "164",
    "prompt": "In historical accessibility guidance for new buildings, what maximum ramp slope is recommended?",
    "answer": "1:12",
    "explanation": "A 1:12 slope means one unit of vertical rise for every twelve units of horizontal run. This is a historical recommendation, not a statement of current legal requirements.",
    "choices": [
      "1:1",
      "1:12",
      "1:2",
      "1:4"
    ]
  },
  {
    "id": "anthropometry-030",
    "type": "mcq",
    "topic": "anthropometry",
    "source": "book",
    "pages": "162",
    "prompt": "Which cited ISO document concerns workstation layout and postural requirements?",
    "answer": "ISO 9241-5",
    "explanation": "This is the part named in the assigned book’s discussion of workstation standards.",
    "choices": [
      "ISO 22000-5",
      "ISO 14001-3",
      "ISO 9241-5",
      "ISO 9001-1"
    ]
  },
  {
    "id": "analysis-001",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "3",
    "prompt": "Which activity is included in manual material handling?",
    "answer": "Pushing a loaded cart",
    "explanation": "Manual material handling includes lifting, lowering, carrying, holding, pulling, and pushing.",
    "choices": [
      "Pushing a loaded cart",
      "Watching a process remotely",
      "Reading a display without handling material",
      "Writing an email"
    ]
  },
  {
    "id": "analysis-002",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "9",
    "prompt": "What is lifting called when the load is held outside the body’s mid-sagittal line?",
    "answer": "Asymmetric lifting",
    "explanation": "Lifting away from the body’s midline creates an asymmetric lifting condition.",
    "aliases": [
      "asymmetrical lifting",
      "asymmetric lift",
      "asymmetrical lift"
    ]
  },
  {
    "id": "analysis-003",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "10",
    "prompt": "What does NIOSH stand for?",
    "answer": "National Institute for Occupational Safety and Health",
    "explanation": "NIOSH is the National Institute for Occupational Safety and Health.",
    "aliases": []
  },
  {
    "id": "analysis-004",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "11",
    "prompt": "Which expression gives the NIOSH lifting index?",
    "answer": "Load weight ÷ recommended weight limit",
    "explanation": "LI compares the actual load with the RWL for the task conditions.",
    "choices": [
      "Load weight + recommended weight limit",
      "Recommended weight limit ÷ load weight",
      "Load weight ÷ recommended weight limit",
      "Load weight × recommended weight limit"
    ]
  },
  {
    "id": "analysis-005",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "14",
    "prompt": "What does RWL stand for in the revised lifting equation?",
    "answer": "Recommended Weight Limit",
    "explanation": "The RWL is a task-condition-based recommended load value, not a universal guarantee for every worker.",
    "aliases": [
      "recommended weight limit (RWL)"
    ]
  },
  {
    "id": "analysis-006",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "What load constant is used in the metric revised NIOSH lifting equation?",
    "answer": "23 kg",
    "explanation": "LC = 23 kg before the task multipliers are applied.",
    "choices": [
      "23 N",
      "23 kg",
      "75 kg",
      "100 kg"
    ]
  },
  {
    "id": "analysis-007",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "11–12",
    "prompt": "If all six task multipliers equal 1.0, what is the RWL using LC = 23 kg?",
    "answer": "23 kg",
    "explanation": "Multiplying 23 kg by six factors of 1.0 leaves 23 kg.",
    "choices": [
      "6 kg",
      "138 kg",
      "1 kg",
      "23 kg"
    ]
  },
  {
    "id": "analysis-008",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "11–12",
    "prompt": "Given LC = 23 kg, HM = 0.5 and all other multipliers = 1, what is the RWL?",
    "answer": "11.5 kg",
    "explanation": "RWL = 23 × 0.5 = 11.5 kg.",
    "choices": [
      "0.5 kg",
      "46 kg",
      "22.5 kg",
      "11.5 kg"
    ]
  },
  {
    "id": "analysis-009",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "Using HM = 25/H with H in centimetres, what is HM when H = 50 cm?",
    "answer": "0.50",
    "explanation": "25 ÷ 50 = 0.50. Horizontal distance reduces the allowable task load in this calculation.",
    "choices": [
      "0.50",
      "25.00",
      "0.02",
      "2.00"
    ]
  },
  {
    "id": "analysis-010",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "Using VM = 1 − 0.003|V − 75|, what is VM at V = 75 cm?",
    "answer": "1.00",
    "explanation": "The absolute difference is zero, so VM = 1 − 0 = 1.",
    "choices": [
      "0.75",
      "0.25",
      "1.00",
      "0.00"
    ]
  },
  {
    "id": "analysis-011",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "Using DM = 0.82 + 4.5/D, what is DM for a 50 cm vertical travel distance?",
    "answer": "0.91",
    "explanation": "0.82 + 4.5 ÷ 50 = 0.82 + 0.09 = 0.91.",
    "choices": [
      "0.09",
      "0.91",
      "1.32",
      "4.582"
    ]
  },
  {
    "id": "analysis-012",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "Using AM = 1 − 0.0032A, what is AM when A = 45°?",
    "answer": "0.856",
    "explanation": "1 − 0.0032 × 45 = 1 − 0.144 = 0.856.",
    "choices": [
      "0.856",
      "0.045",
      "1.144",
      "0.144"
    ]
  },
  {
    "id": "analysis-013",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "In the revised lifting equation, which multiplier represents how often lifting is performed?",
    "answer": "Frequency multiplier",
    "explanation": "FM reflects the lifting frequency and the applicable task-duration conditions.",
    "aliases": [
      "FM"
    ]
  },
  {
    "id": "analysis-014",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "12",
    "prompt": "In the revised lifting equation, what does CM stand for?",
    "answer": "Coupling multiplier",
    "explanation": "CM represents the quality of the hand-to-object coupling.",
    "aliases": [
      "coupling"
    ]
  },
  {
    "id": "analysis-015",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "13",
    "prompt": "One-handed lifting falls outside the application conditions of the revised NIOSH lifting equation.",
    "answer": "True",
    "explanation": "The revised lifting equation applies to two-handed tasks; one-handed lifting falls outside its application conditions."
  },
  {
    "id": "analysis-016",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "13",
    "prompt": "The revised NIOSH lifting equation is suitable for lifting while seated or kneeling.",
    "answer": "False",
    "explanation": "Seated and kneeling lifts fall outside the equation’s application conditions."
  },
  {
    "id": "analysis-017",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "13",
    "prompt": "Lifting an unstable object falls outside the application conditions of the revised NIOSH lifting equation.",
    "answer": "True",
    "explanation": "An unstable object does not meet the assumptions for applying this lifting method."
  },
  {
    "id": "analysis-018",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "11,17",
    "prompt": "A load weighs 18 kg and its RWL is 12 kg. What is the lifting index?",
    "answer": "1.5",
    "explanation": "LI = 18 ÷ 12 = 1.5, indicating load demand above the calculated RWL.",
    "choices": [
      "0.67",
      "216",
      "6",
      "1.5"
    ]
  },
  {
    "id": "analysis-019",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "17",
    "prompt": "A NIOSH lifting index of 1 or less is the preferred assessment target.",
    "answer": "True",
    "explanation": "The target is a task-assessment criterion; it does not guarantee that every individual is protected."
  },
  {
    "id": "analysis-020",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "18",
    "prompt": "If significant control is needed at the destination, how should the assessment handle the endpoints?",
    "answer": "Calculate both RWL values and use the lower one for LI",
    "explanation": "The more restrictive endpoint determines the RWL used for the task.",
    "choices": [
      "Ignore the destination",
      "Calculate both RWL values and use the lower one for LI",
      "Use only the higher RWL",
      "Add the two RWL values"
    ]
  },
  {
    "id": "analysis-021",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "18",
    "prompt": "Which step comes first when assessing a single lifting task with the revised NIOSH lifting equation?",
    "answer": "Measure and record the task variables",
    "explanation": "The observed task measurements are needed before selecting multipliers and calculating RWL.",
    "choices": [
      "Compute LI without measurements",
      "Assume every multiplier is one",
      "Select a preferred answer",
      "Measure and record the task variables"
    ]
  },
  {
    "id": "analysis-022",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "19–20",
    "prompt": "What does CLI stand for when assessing a job with multiple lifting tasks?",
    "answer": "Composite Lifting Index",
    "explanation": "The CLI summarizes the combined demand of the multiple-task job.",
    "aliases": [
      "composite LI",
      "composite lift index"
    ]
  },
  {
    "id": "analysis-023",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "20",
    "prompt": "How is the frequency-independent recommended weight limit computed?",
    "answer": "Set the frequency multiplier to 1.0",
    "explanation": "FIRWL retains the other task factors while separating out frequency.",
    "choices": [
      "Multiply the load by the number of tasks",
      "Set all multipliers to zero",
      "Remove the load constant",
      "Set the frequency multiplier to 1.0"
    ]
  },
  {
    "id": "analysis-024",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "19",
    "prompt": "Which task should be prioritized when starting to redesign a job with multiple lifting tasks?",
    "answer": "The task with the highest single-task lifting index",
    "explanation": "The highest single-task lifting index identifies the most demanding task to address first.",
    "choices": [
      "The task with the shortest name",
      "The task with the highest single-task lifting index",
      "A task selected by employee surname",
      "The task with the lowest STLI"
    ]
  },
  {
    "id": "analysis-025",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "24",
    "prompt": "Which index is defined as job demand divided by operator capacity?",
    "answer": "Job Severity Index",
    "explanation": "JSI compares the task demands with the relevant individual or population capacity.",
    "aliases": [
      "JSI"
    ]
  },
  {
    "id": "analysis-026",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "24",
    "prompt": "What critical value is used for the Job Severity Index?",
    "answer": "1.5",
    "explanation": "The critical JSI value is 1.5 for this assessment approach.",
    "choices": [
      "15",
      "1.5",
      "0.15",
      "100"
    ]
  },
  {
    "id": "analysis-027",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "24",
    "prompt": "The JSI and the NIOSH lifting index are identical names for the same computation.",
    "answer": "False",
    "explanation": "JSI and LI use different capacity models and assessment criteria."
  },
  {
    "id": "analysis-028",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "24",
    "prompt": "What method is used to determine worker capacity in the Job Severity Index approach?",
    "answer": "Psychophysical method",
    "explanation": "Psychophysical methods estimate acceptable lifting capacity; job analysis establishes the task demands.",
    "choices": [
      "Color vision screening",
      "Psychophysical method",
      "Acoustic frequency analysis",
      "Electrical resistance alone"
    ]
  },
  {
    "id": "analysis-029",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "25",
    "prompt": "Which adjustments are applied when calculating lifting capacity for the Job Severity Index?",
    "answer": "Lifting frequency, box size, and population percentage",
    "explanation": "The procedure adjusts capacity for these job and population conditions.",
    "choices": [
      "Only the employee’s name",
      "Room number, wall color, and brand",
      "Lifting frequency, box size, and population percentage",
      "Eye color, shoe color, and job title"
    ]
  },
  {
    "id": "analysis-030",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "26–27",
    "prompt": "Before merely reducing manual demands, the redesign flow asks whether the need for manual handling can be eliminated.",
    "answer": "True",
    "explanation": "Elimination or mechanical assistance can avoid the manual requirement itself."
  },
  {
    "id": "analysis-031",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "26",
    "prompt": "Which redesign reduces the horizontal reach needed to lift a load?",
    "answer": "Bring the load closer to the operator",
    "explanation": "The redesign diagram includes reducing the distance between the worker and the material.",
    "choices": [
      "Bring the load closer to the operator",
      "Use deeper shelves",
      "Place the load behind the worker",
      "Move the load farther away"
    ]
  },
  {
    "id": "analysis-032",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "31",
    "prompt": "What does MAWL stand for in the lifting-capacity material?",
    "answer": "Maximum Acceptable Weight of Lift",
    "explanation": "MAWL is used to represent an acceptable lifting capacity in the psychophysical approach.",
    "aliases": [
      "maximum acceptable weight of lifting"
    ]
  },
  {
    "id": "analysis-033",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "31",
    "prompt": "If MAWL plus body weight is 100 kg and body weight is 70 kg, what is MAWL?",
    "answer": "30 kg",
    "explanation": "MAWL = MAWLBW − body weight: 100 − 70 = 30 kg.",
    "choices": [
      "30 kg",
      "170 kg",
      "1.43 kg",
      "70 kg"
    ]
  },
  {
    "id": "analysis-034",
    "type": "identification",
    "topic": "analysis",
    "source": "analysis",
    "pages": "52",
    "prompt": "What does OWAS stand for?",
    "answer": "Ovako Working Posture Analysis System",
    "explanation": "OWAS is an observation-based method for classifying working postures and prioritizing corrective action.",
    "aliases": [
      "Ovako Working Posture Analysing System",
      "Ovako Working Posture Analyzing System"
    ]
  },
  {
    "id": "analysis-035",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "52",
    "prompt": "What is OWAS primarily based on for gathering posture data?",
    "answer": "Observation of work postures",
    "explanation": "The method classifies observed postures using numeric codes and action categories.",
    "choices": [
      "Blood testing",
      "Personality surveys alone",
      "Profit records alone",
      "Observation of work postures"
    ]
  },
  {
    "id": "analysis-036",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "54",
    "prompt": "Which sequence describes the components of the four-digit OWAS posture code?",
    "answer": "Back, arms, legs, load or force",
    "explanation": "The four digits represent back posture, arm posture, leg posture, and load or force.",
    "choices": [
      "Time, cost, profit, output",
      "Back, arms, legs, load or force",
      "Noise, light, heat, humidity",
      "Head, vision, hearing, age"
    ]
  },
  {
    "id": "analysis-037",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "56",
    "prompt": "OWAS action category 1 means corrective measures are immediately required.",
    "answer": "False",
    "explanation": "Category 1 requires no corrective measures in the classification shown; category 4 calls for immediate improvement."
  },
  {
    "id": "analysis-038",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "56",
    "prompt": "Which OWAS action category calls for corrective action as soon as possible?",
    "answer": "Category 3",
    "explanation": "Category 2 calls for action in the near future, category 3 as soon as possible, and category 4 immediately.",
    "choices": [
      "Category 3",
      "Category 2",
      "Category 0",
      "Category 1"
    ]
  },
  {
    "id": "analysis-039",
    "type": "mcq",
    "topic": "analysis",
    "source": "analysis",
    "pages": "56",
    "prompt": "Which OWAS action category requires immediate corrective action?",
    "answer": "Category 4",
    "explanation": "Category 4 is the most urgent OWAS action category.",
    "choices": [
      "Category 1",
      "Category 3",
      "Category 2",
      "Category 4"
    ]
  },
  {
    "id": "analysis-040",
    "type": "tf",
    "topic": "analysis",
    "source": "analysis",
    "pages": "53",
    "prompt": "Processing results is followed by improving the work in the OWAS application steps.",
    "answer": "True",
    "explanation": "Assessment is intended to guide work improvement, not stop at assigning posture codes."
  },
  {
    "id": "mechanics-001",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "4",
    "prompt": "In the hierarchy of ergonomics goals, what describes tolerable conditions?",
    "answer": "Conditions without known dangers to life or health",
    "explanation": "Tolerability is the basic level in the hierarchy, before acceptability and optimal fit.",
    "choices": [
      "Conditions without known dangers to life or health",
      "Conditions that maximize output at any cost",
      "Conditions with no need to consider health",
      "Conditions accepted only by management"
    ]
  },
  {
    "id": "mechanics-002",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "4",
    "prompt": "Acceptable working conditions are conditions to which the people involved can voluntarily agree.",
    "answer": "True",
    "explanation": "Acceptability considers scientific knowledge and the social, technological, and organizational circumstances."
  },
  {
    "id": "mechanics-003",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "4",
    "prompt": "In the three-level hierarchy, what level aims at physical, mental, and social well-being through close human fit?",
    "answer": "Optimal",
    "explanation": "The highest level described adapts conditions to people’s characteristics, capabilities, and wishes.",
    "aliases": [
      "optimal conditions",
      "optimal level"
    ]
  },
  {
    "id": "mechanics-004",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "8",
    "prompt": "A workstation repeatedly forces the wrists to bend sharply. Which ergonomic principle most directly addresses this?",
    "answer": "Work in neutral postures",
    "explanation": "The ten principles include neutral posture, manageable force, reach, clearance, and movement.",
    "choices": [
      "Increase excessive force",
      "Work in neutral postures",
      "Maximize static load",
      "Remove clearance"
    ]
  },
  {
    "id": "mechanics-005",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "10–11",
    "prompt": "The skeleton provides support, protection, and a lever system for movement.",
    "answer": "True",
    "explanation": "The skeleton also supports blood-cell production in bone marrow."
  },
  {
    "id": "mechanics-006",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "11",
    "prompt": "What term names the blood-cell formation function of the skeletal system?",
    "answer": "Hemopoiesis",
    "explanation": "Blood cells are produced in bone marrow through hemopoiesis.",
    "aliases": [
      "hematopoiesis",
      "haemopoiesis",
      "haematopoiesis"
    ]
  },
  {
    "id": "mechanics-007",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "12,26",
    "prompt": "With no external support, what condition is needed for standing postural stability?",
    "answer": "The line of gravity stays within the base of support",
    "explanation": "Body segments must remain balanced in relation to the support provided by the feet.",
    "choices": [
      "The feet provide no support",
      "The line of gravity stays within the base of support",
      "All joints remain fully locked",
      "The centre of gravity stays outside the feet at all times"
    ]
  },
  {
    "id": "mechanics-008",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "16",
    "prompt": "What term describes the anteriorly convex curves of the cervical and lumbar spine?",
    "answer": "Lordosis",
    "explanation": "Cervical and lumbar lordotic curves form part of the spine’s normal curved arrangement.",
    "aliases": [
      "lordotic curves",
      "lordotic curvature"
    ]
  },
  {
    "id": "mechanics-009",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "18",
    "prompt": "The spine’s S-shape helps it absorb mechanical shocks.",
    "answer": "True",
    "explanation": "The curved structure is compared with a spring rather than a perfectly straight column."
  },
  {
    "id": "mechanics-010",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "24–25",
    "prompt": "What explains daily changes in stature?",
    "answer": "Intervertebral discs lose and regain fluid under changing loads",
    "explanation": "Changes in disc spacing contribute to changes in measured standing height.",
    "choices": [
      "Only hair length changes",
      "Intervertebral discs lose and regain fluid under changing loads",
      "The skull expands every morning",
      "Leg bones grow and shrink several centimetres daily"
    ]
  },
  {
    "id": "mechanics-011",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "23",
    "prompt": "What term describes disc behavior that includes both elastic response and time-dependent deformation?",
    "answer": "Viscoelastic",
    "explanation": "Intervertebral discs exhibit both elastic response and time-dependent deformation under load.",
    "aliases": [
      "viscoelasticity",
      "viscoelastic behavior",
      "viscoelastic behaviour"
    ]
  },
  {
    "id": "mechanics-012",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "35",
    "prompt": "Which exposure is a risk factor that should be considered when prioritizing ergonomic redesign?",
    "answer": "Whole-body vibration",
    "explanation": "The risk list includes whole-body vibration along with demanding lifts and non-neutral trunk postures.",
    "choices": [
      "A quiet break area",
      "Whole-body vibration",
      "A well-fitted tool grip",
      "A supported neutral posture"
    ]
  },
  {
    "id": "mechanics-013",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "36–38",
    "prompt": "The manual-task hazard checklist examines load shape, grip, footing, posture, and environmental conditions.",
    "answer": "True",
    "explanation": "The checklist is broader than load weight alone; its results indicate risks to investigate."
  },
  {
    "id": "mechanics-014",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "45",
    "prompt": "What connective tissue attaches muscle to bone?",
    "answer": "Tendon",
    "explanation": "Tendons attach muscle to bone; ligaments bind joints and connect bones or cartilage.",
    "aliases": [
      "tendons"
    ]
  },
  {
    "id": "mechanics-015",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "45",
    "prompt": "What fibrous structures bind joints and connect bones or cartilage?",
    "answer": "Ligaments",
    "explanation": "Ligaments provide supporting connections around joints.",
    "aliases": [
      "ligament"
    ]
  },
  {
    "id": "mechanics-016",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "48",
    "prompt": "Which nerve passes through the carpal tunnel and can be compressed in carpal tunnel syndrome?",
    "answer": "Median nerve",
    "explanation": "Carpal tunnel syndrome involves compression of the median nerve within the wrist tunnel.",
    "choices": [
      "Optic nerve",
      "Auditory nerve",
      "Median nerve",
      "Sciatic nerve"
    ]
  },
  {
    "id": "mechanics-017",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "49",
    "prompt": "Which syndrome involves compression of nerves and/or blood vessels between the shoulder and arm?",
    "answer": "Thoracic outlet syndrome",
    "explanation": "Thoracic outlet syndrome involves compression in the outlet region between the shoulder and arm.",
    "aliases": [
      "TOS"
    ]
  },
  {
    "id": "mechanics-018",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "50",
    "prompt": "Holding the neck in one position for a long period can contribute to tension neck syndrome.",
    "answer": "True",
    "explanation": "The example connects prolonged positioning with neck fatigue and stiffness."
  },
  {
    "id": "mechanics-019",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "53",
    "prompt": "Why can a sharp desk edge increase contact pressure on the forearm?",
    "answer": "It concentrates force over a small contact area",
    "explanation": "A small area under the same force produces greater local pressure.",
    "choices": [
      "It makes the forearm weightless",
      "It concentrates force over a small contact area",
      "It eliminates contact force",
      "It spreads force over the entire room"
    ]
  },
  {
    "id": "mechanics-020",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "53",
    "prompt": "More forceful exertions can increase loading on muscles, tendons, ligaments, and joints.",
    "answer": "True",
    "explanation": "Greater exertion can increase the mechanical loading of these tissues."
  },
  {
    "id": "mechanics-021",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "58",
    "prompt": "Which change can reduce repetitive keyboard actions?",
    "answer": "Use suitable shortcuts to reduce necessary keystrokes",
    "explanation": "Shortcuts reduce the number of repeated keystrokes needed to complete a task.",
    "choices": [
      "Use suitable shortcuts to reduce necessary keystrokes",
      "Increase typing force",
      "Press every key twice",
      "Add unnecessary confirmation screens"
    ]
  },
  {
    "id": "mechanics-022",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "59",
    "prompt": "Short rest breaks can give tissues time to recover.",
    "answer": "True",
    "explanation": "Short recovery periods help manage the demands of repetitive work."
  },
  {
    "id": "mechanics-023",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "61–62",
    "prompt": "Which approach helps reduce the problems associated with prolonged sitting?",
    "answer": "Provide movement and posture variation",
    "explanation": "Movement and posture changes help avoid remaining in one fixed position throughout a task.",
    "choices": [
      "Provide movement and posture variation",
      "Hold every joint at 90° for the entire day",
      "Avoid all changes in position",
      "Use the same chair setting for every person"
    ]
  },
  {
    "id": "mechanics-024",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "65",
    "prompt": "A wrist rest can never cause harm, regardless of its shape or how it is used.",
    "answer": "False",
    "explanation": "Hardness, thickness, sharp edges, and continuous contact pressure can make a wrist rest unsuitable."
  },
  {
    "id": "mechanics-025",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "64",
    "prompt": "Which mouse placement helps reduce unnecessary reaching?",
    "answer": "Close to the keyboard and within comfortable reach",
    "explanation": "Keeping the pointing device near the keyboard can reduce unnecessary reaching.",
    "choices": [
      "On the opposite side of the room",
      "Close to the keyboard and within comfortable reach",
      "Above shoulder height",
      "As far behind the monitor as possible"
    ]
  },
  {
    "id": "mechanics-026",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "68",
    "prompt": "What abbreviation names the recording of brain electrical activity discussed as a workload measure?",
    "answer": "EEG",
    "explanation": "The biomedical-signals section discusses electroencephalography in studying mental workload.",
    "aliases": [
      "electroencephalography",
      "electroencephalogram",
      "electroencephalograph"
    ]
  },
  {
    "id": "mechanics-027",
    "type": "identification",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "72",
    "prompt": "What technique records the electrical activity associated with muscle contraction?",
    "answer": "Electromyography",
    "explanation": "EMG records electrical activity rather than the movement alone.",
    "aliases": [
      "EMG"
    ]
  },
  {
    "id": "mechanics-028",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "77",
    "prompt": "Heart rate can respond to environmental stimuli as well as physical work.",
    "answer": "True",
    "explanation": "A heart-rate reading needs its work and environmental context; it is not a pure measure of one factor."
  },
  {
    "id": "mechanics-029",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "75",
    "prompt": "Why compare a job’s oxygen requirement with an individual’s maximum oxygen uptake?",
    "answer": "To relate task demand to the person’s capacity",
    "explanation": "The same demand can represent different relative loads for people with different capacities.",
    "choices": [
      "To relate task demand to the person’s capacity",
      "To assume every worker has identical tolerance",
      "To measure room lighting",
      "To determine seat width"
    ]
  },
  {
    "id": "mechanics-030",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "78",
    "prompt": "Using the rough estimate HRmax = 220 − age, what value is obtained for age 30?",
    "answer": "190 beats/min",
    "explanation": "220 − 30 = 190. This is a classroom estimation exercise, not an individual medical or exercise prescription.",
    "choices": [
      "250 beats/min",
      "30 beats/min",
      "220 beats/min",
      "190 beats/min"
    ]
  },
  {
    "id": "mechanics-031",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "83",
    "prompt": "Greater physical fitness is generally associated with faster heart-rate recovery after a comparable exercise period.",
    "answer": "True",
    "explanation": "A quicker return toward resting heart rate can reflect greater fitness, while individual assessment requires context."
  },
  {
    "id": "mechanics-032",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "80",
    "prompt": "What is one purpose of a step test in physiological workload assessment?",
    "answer": "Estimate cardiovascular fitness from the exercise response",
    "explanation": "The activity illustrates physiological workload assessment; it is not a diagnosis or a test to perform through this site.",
    "choices": [
      "Measure hand breadth",
      "Determine color vision",
      "Estimate cardiovascular fitness from the exercise response",
      "Calculate room illuminance"
    ]
  },
  {
    "id": "mechanics-033",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "81",
    "prompt": "For a nine-minute step test using one complete stepping cycle every 2.5 seconds, what is the stepping rate?",
    "answer": "24 times per minute",
    "explanation": "60 seconds ÷ 2.5 seconds per cycle = 24 cycles per minute.",
    "choices": [
      "240 times per minute",
      "One step every minute",
      "24 times per second",
      "24 times per minute"
    ]
  },
  {
    "id": "mechanics-034",
    "type": "tf",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "81",
    "prompt": "After a nine-minute step test, heart rate is counted for one full minute immediately after exercise.",
    "answer": "True",
    "explanation": "The stated measurement period is one minute after the activity."
  },
  {
    "id": "mechanics-035",
    "type": "mcq",
    "topic": "mechanics",
    "source": "mechanics",
    "pages": "84",
    "prompt": "In a historical step-test classification with category A at 120 beats/min or less and category C at 141 beats/min or more, which range defines category B?",
    "answer": "121–140 beats/min",
    "explanation": "Category B covers 121–140 beats/min in this historical classification. These categories are not a basis for personal work placement or medical judgment.",
    "choices": [
      "Only 60 beats/min",
      "120 beats/min or less",
      "141 beats/min or more",
      "121–140 beats/min"
    ]
  },
  {
    "id": "environment-001",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "2",
    "prompt": "Which grouping represents three categories of the physical work environment?",
    "answer": "Thermal, audio, and visual",
    "explanation": "Thermal factors include temperature and humidity, audio factors include sound, and visual factors include lighting and color.",
    "choices": [
      "Financial, political, and legal only",
      "Chemical, accounting, and advertising",
      "Thermal, audio, and visual",
      "Only visual factors"
    ]
  },
  {
    "id": "environment-002",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "3",
    "prompt": "What term describes the body’s regulation of internal temperature?",
    "answer": "Thermoregulation",
    "explanation": "The thermal section discusses bodily responses that affect comfort and performance.",
    "aliases": [
      "thermal regulation"
    ]
  },
  {
    "id": "environment-003",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "3",
    "prompt": "Which physiological response can lower skin temperature and cause cold discomfort?",
    "answer": "Vasoconstriction",
    "explanation": "Narrowing of blood vessels is connected with reduced skin temperature in the thermal discussion.",
    "choices": [
      "Color rendering",
      "Accommodation",
      "Vasoconstriction",
      "Rhodopsin regeneration"
    ]
  },
  {
    "id": "environment-004",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "4",
    "prompt": "Which instrument measures air velocity?",
    "answer": "Anemometer",
    "explanation": "Anemometers measure air movement; thermometers measure temperature.",
    "choices": [
      "Sound-level scale only",
      "Anemometer",
      "Snellen chart",
      "Photometer"
    ]
  },
  {
    "id": "environment-005",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "6",
    "prompt": "What field concerns the production, transmission, and effects of sound?",
    "answer": "Acoustics",
    "explanation": "Acoustics is the science and technology of sound.",
    "aliases": []
  },
  {
    "id": "environment-006",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "9",
    "prompt": "What term means unwanted, objectionable, or unacceptable sound?",
    "answer": "Noise",
    "explanation": "Whether a sound is unwanted depends partly on the listener and the task.",
    "aliases": []
  },
  {
    "id": "environment-007",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "6",
    "prompt": "Acoustic design should consider speech communication and hearing protection, as well as annoyance.",
    "answer": "True",
    "explanation": "Acoustic design aims for intelligible desired sound, less disruption, and prevention of hearing loss."
  },
  {
    "id": "environment-008",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "8",
    "prompt": "Approximately what sound level is commonly associated with ordinary conversation?",
    "answer": "60 dBA",
    "explanation": "About 60 dBA is an illustrative conversation level; actual sound levels depend on conditions.",
    "choices": [
      "0 dBA",
      "60 dBA",
      "140 dBA",
      "120 dBA"
    ]
  },
  {
    "id": "environment-009",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "9",
    "prompt": "Noise can interfere with desired sounds even when the main problem is not permanent hearing loss.",
    "answer": "True",
    "explanation": "Noise can disrupt communication, disturb rest, increase stress, and interfere with task performance."
  },
  {
    "id": "environment-010",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "12",
    "prompt": "What quantity is the total light output of a source in all directions, measured in lumens?",
    "answer": "Luminous flux",
    "explanation": "Flux describes total light output, while intensity describes its directional distribution.",
    "aliases": [
      "light flux"
    ]
  },
  {
    "id": "environment-011",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "12",
    "prompt": "Which concept describes light output in a particular direction?",
    "answer": "Luminous intensity",
    "explanation": "Luminous intensity describes directional output; luminous flux describes total output.",
    "choices": [
      "Luminous intensity",
      "Noise dose",
      "Anthropometric stature",
      "Air velocity"
    ]
  },
  {
    "id": "environment-012",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "13–16",
    "prompt": "What are three purposes of assessing the visual work environment?",
    "answer": "Health and safety, visual performance, and aesthetics",
    "explanation": "The three purposes cover safe use, task visibility, and a pleasant environment.",
    "choices": [
      "Only to select wall decorations",
      "Only to reduce the number of lamps",
      "Only to make the room as bright as possible",
      "Health and safety, visual performance, and aesthetics"
    ]
  },
  {
    "id": "environment-013",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "17",
    "prompt": "The minimum illuminance required by a guideline must always be the optimum value for a particular task.",
    "answer": "False",
    "explanation": "Meeting a minimum lighting requirement does not necessarily produce the most suitable conditions for a particular task."
  },
  {
    "id": "environment-014",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "17",
    "prompt": "What distinguishes statutory lighting requirements from recommendatory guidance?",
    "answer": "It includes legal requirements",
    "explanation": "Statutory requirements have legal force; recommendatory guidance offers examples of good practice.",
    "choices": [
      "It includes legal requirements",
      "It is always optional",
      "It describes only personal preference",
      "It applies only to lamp color"
    ]
  },
  {
    "id": "environment-015",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "18",
    "prompt": "In a historical general-office lighting recommendation, what mean service illuminance is specified?",
    "answer": "500 lux",
    "explanation": "The historical recommendation is 500 lux mean service illuminance. This is not a claim about current legal requirements.",
    "choices": [
      "500 lux",
      "500 decibels",
      "50 diopters",
      "5 lumens per watt"
    ]
  },
  {
    "id": "environment-016",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "19",
    "prompt": "For task-area lighting uniformity, what minimum ratio of minimum illuminance to average illuminance is recommended?",
    "answer": "0.8",
    "explanation": "The cited recommendation gives a minimum-to-average illuminance ratio of at least 0.8.",
    "choices": [
      "0.08",
      "0.8",
      "8",
      "80"
    ]
  },
  {
    "id": "environment-017",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "25",
    "prompt": "Glare assessment can include repositioning or shielding light sources.",
    "answer": "True",
    "explanation": "The checklist asks whether such changes can relieve disability glare."
  },
  {
    "id": "environment-018",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "26",
    "prompt": "What temporal lighting problem can occur in display screens and fluorescent tubes?",
    "answer": "Flicker",
    "explanation": "Flicker is a variation of light over time that can become visible.",
    "aliases": []
  },
  {
    "id": "environment-019",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "27",
    "prompt": "If workers must distinguish similar product colors, what lighting property needs attention?",
    "answer": "Color rendering",
    "explanation": "The chromatic checklist asks whether the light permits the required color discrimination.",
    "choices": [
      "Only the desk’s price",
      "Color rendering",
      "Only the number of doors",
      "Only the sound level"
    ]
  },
  {
    "id": "environment-020",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "30",
    "prompt": "Lamp heat and maintenance needs can matter even though they are not visual effects.",
    "answer": "True",
    "explanation": "Lighting assessment also considers maintenance and non-visual effects such as heat."
  },
  {
    "id": "environment-021",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "35",
    "prompt": "Which factors are considered when selecting an illumination level within a task category?",
    "answer": "Age, task-background reflectance, and speed or accuracy needs",
    "explanation": "The weighting table includes worker age and task characteristics.",
    "choices": [
      "Only the number of windows",
      "Shoe brand, surname, and wall clock",
      "Only the building’s postal code",
      "Age, task-background reflectance, and speed or accuracy needs"
    ]
  },
  {
    "id": "environment-022",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "36",
    "prompt": "When selecting an illumination level from a category range, what is chosen if the sum of the age, reflectance, and accuracy weights is less than −1?",
    "answer": "The lowest value in the category range",
    "explanation": "A sum below −1 selects the low value; a sum above 2 selects the high value; otherwise the middle value is used.",
    "choices": [
      "Always the highest value",
      "Zero illumination",
      "The lowest value in the category range",
      "A value from an unrelated category"
    ]
  },
  {
    "id": "environment-023",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "43",
    "prompt": "When designing a bus cab for Chilean bus drivers, which population data are most relevant?",
    "answer": "Data representing Chilean bus drivers",
    "explanation": "The intended function and users determine which anthropometric population is appropriate.",
    "choices": [
      "Only data for professional basketball players",
      "Data representing Chilean bus drivers",
      "Only data for newborn babies",
      "Any dataset with the largest sample, regardless of users"
    ]
  },
  {
    "id": "environment-024",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "50",
    "prompt": "What term describes the ability to be shaped by the environment during development?",
    "answer": "Plasticity",
    "explanation": "The developmental environment can shape human characteristics through plasticity.",
    "aliases": [
      "developmental plasticity"
    ]
  },
  {
    "id": "environment-025",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "51–52",
    "prompt": "Old anthropometric data from the same country can always be assumed to represent its present population.",
    "answer": "False",
    "explanation": "Population dimensions can change, so both age and relevance of the dataset need checking."
  },
  {
    "id": "environment-026",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "55",
    "prompt": "Before selecting body-size data for a product, what should the designer identify?",
    "answer": "How user–product dimension mismatches might occur",
    "explanation": "Measurements become useful when linked to the actual design problem.",
    "choices": [
      "How user–product dimension mismatches might occur",
      "The most expensive material first",
      "A preferred answer regardless of fit",
      "Only the designer’s own body size"
    ]
  },
  {
    "id": "environment-027",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "57",
    "prompt": "Which type of anthropometric data is measured with subjects in static postures?",
    "answer": "Structural data",
    "explanation": "Structural dimensions are measured in static postures; functional dimensions account for movement.",
    "aliases": [
      "structural anthropometry",
      "static anthropometry",
      "structural anthropometric data"
    ]
  },
  {
    "id": "environment-028",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "57",
    "prompt": "Which anthropometric data type allows limb movement relative to a fixed point?",
    "answer": "Functional data",
    "explanation": "Functional measurements account for the reach or movement needed in an actual task.",
    "aliases": [
      "functional anthropometry",
      "functional anthropometric data",
      "dynamic anthropometry"
    ]
  },
  {
    "id": "environment-029",
    "type": "identification",
    "topic": "environment",
    "source": "environment",
    "pages": "57",
    "prompt": "Which anthropometric data type includes body-segment mass and exerted forces?",
    "answer": "Newtonian data",
    "explanation": "Body-segment mass and force data support mechanical analyses of the body.",
    "aliases": [
      "Newtonian anthropometric data",
      "Newtonian anthropometry"
    ]
  },
  {
    "id": "environment-030",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "69",
    "prompt": "Which three task demands should be considered when analyzing a sitting workstation?",
    "answer": "Seeing, reaching, and exerting forces",
    "explanation": "A seat must support the task, not merely match a body measurement in isolation.",
    "choices": [
      "Only sleeping, eating, and talking",
      "Only lamp color, sound, and humidity",
      "Only height, weight, and age",
      "Seeing, reaching, and exerting forces"
    ]
  },
  {
    "id": "environment-031",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "70–71",
    "prompt": "Seat assessment should consider adjustment, stability, and getting into or out of the seat.",
    "answer": "True",
    "explanation": "The sitting section considers the sitter, the task, and the seat’s functional features."
  },
  {
    "id": "environment-032",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "85",
    "prompt": "Beyond bare hip breadth, what allowance should be included when determining seat width?",
    "answer": "Clothing and ease of movement",
    "explanation": "The usable seat must accommodate dressed users and normal motion.",
    "choices": [
      "A reduction to prevent any movement",
      "A fixed extra metre for every seat",
      "Clothing and ease of movement",
      "Only the thickness of a textbook"
    ]
  },
  {
    "id": "environment-033",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "88",
    "prompt": "What is the reference surface when measuring sitting shoulder height?",
    "answer": "The sitting surface",
    "explanation": "The dimension is measured vertically from the seat to the shoulder’s acromion.",
    "choices": [
      "The underside of the shoes",
      "The sitting surface",
      "The ceiling",
      "The top of the head"
    ]
  },
  {
    "id": "environment-034",
    "type": "mcq",
    "topic": "environment",
    "source": "environment",
    "pages": "91",
    "prompt": "Which approach directly checks how a person and an actual seat fit together?",
    "answer": "Fitting trials",
    "explanation": "Fitting trials complement dimensional, biomechanical, observational, and subjective assessment methods.",
    "choices": [
      "Reading the price label only",
      "Assuming all seats fit equally",
      "Checking the chair’s color only",
      "Fitting trials"
    ]
  },
  {
    "id": "environment-035",
    "type": "tf",
    "topic": "environment",
    "source": "environment",
    "pages": "91",
    "prompt": "Both subjective judgments and measured dimensions can be used to assess seating.",
    "answer": "True",
    "explanation": "Different methods capture different aspects of fit, comfort, and function."
  }
];
