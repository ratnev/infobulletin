import ReactDOM from "react-dom";
import React, { Component } from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";

class ReactEditor extends Component {
  render() {
    return (
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        data={{
          time: 1556098174501,
          blocks: [
            {
              type: "paragraph",
              data: {
                text: "<p style='font-size: 18px;'>Info Bulletin 1</p>"
              }
            },
            {
              type: "header",
              data: {
                text:
                  "<h1 style='font-size: 26px; text-align: center; font-weight: 500; padding: 0; margin: 0;'>Vaccination and Travelmedicin</h1>",
                level: 1
              }
            },
            {
              type: "header",
              data: {
                text:
                  "<h2 style='text-align: center; font-size: 14px; font-weight: 500; padding: 0; margin: 0;'>Product sheet health examination</h2>",
                level: 2
              }
            },
            {
              type: "image",
              data: {
                file: {
                  url: "https://i.ibb.co/Y2JcNSD/image-2020-07-16-14-47-44.png"
                },
                caption: false,
                withBorder: true,
                stretched: false,
                withBackground: false
              }
            },
            {
              type: "paragraph",
              data: {
                text:
                  "At Aleris Vaccination and Travelmedicin, we care about your health - and want you to be too. Therefore, we see a health survey as a good investment not only for the moment, but also for the future. Together we can capture risk factors and prevent any illness in time. So that you can stay as healthy as possible, both today and tomorrow.<br />We accept both private individuals and companies.<br><strong>Our health survey includes two visits.</strong><br>No additional test will be added and no prescription is included."
              }
            },
            {
              type: "header",
              data: {
                text: "Nurse visit",
                level: 3
              }
            },
            {
              type: "paragraph",
              data: {
                text:
                  "A health declaration is filled, and it is the basis for a lifestyle interview with the nurse. During the visit, samples, ECG, lung function test (spirometry), blood pressure, vision and hearing tests, height and weight, waist measurements and BMI are taken. You should be <span><strong> about 6 hours prior to sampling.</strong></span> You get more information when you make an appointment. <br/>The visit takes about 45 minutes."
              }
            },
            {
              type: "header",
              data: {
                text: "Doctor visit",
                level: 3
              }
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Follow-up visits to specialist physicians for physical examination and review of sampling results. <span><strong>The visit takes about 30 minutes.</strong></span>"
              }
            },
            {
              type: "header",
              data: {
                text: "Content",
                level: 3
              }
            },
            {
              type: "list",
              data: {
                style: "unordered",
                items: [
                  "Health declaration - lifestyle conversations",
                  "Heart / lungs auscultation",
                  "Blood Pressure Measurement",
                  "ECG",
                  "Lung function test (spirometry)",
                  "Length and weight control, calculation of BMI, waist measurements",
                  "Vision and hearing test",
                  "Blood tests: blood status, lowering (SR), salts, calcium, egg white, kidney function, liver function, blood sugar, blood fats and iron value",
                  "Stool sample: faeces Hb&gt 50 years",
                  "Prostate blood test (PSA) for men&gt 50 years",
                  "Thyroid test (TSH, T4) for women&gt 18 years"
                ]
              }
            }
          ],
          version: "2.12.4"
        }}
      />
    );
  }
}

ReactDOM.render(<ReactEditor />, document.getElementById("root"));
