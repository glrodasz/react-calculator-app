import { render } from "@testing-library/react";
import App from "./App";

test("renders the App", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="calculator"
    >
      <div
        class="top"
      >
        <span
          class="clear"
          data-text="CLEAR"
        >
          CLEAR
        </span>
        <div
          class="screen"
        />
      </div>
      <div
        class="keys"
      >
        <span
          data-text="7"
        >
          7
        </span>
        <span
          data-text="8"
        >
          8
        </span>
        <span
          data-text="9"
        >
          9
        </span>
        <span
          class="operator"
          data-text="+"
        >
          +
        </span>
        <span
          data-text="4"
        >
          4
        </span>
        <span
          data-text="5"
        >
          5
        </span>
        <span
          data-text="6"
        >
          6
        </span>
        <span
          class="operator"
          data-text="-"
        >
          -
        </span>
        <span
          data-text="1"
        >
          1
        </span>
        <span
          data-text="2"
        >
          2
        </span>
        <span
          data-text="3"
        >
          3
        </span>
        <span
          class="operator"
          data-text="÷"
        >
          ÷
        </span>
        <span
          data-text="0"
        >
          0
        </span>
        <span
          data-text="."
        >
          .
        </span>
        <span
          class="eval"
          data-text="="
        >
          =
        </span>
        <span
          class="operator"
          data-text="x"
        >
          x
        </span>
      </div>
      <style>
        
              .calculator {
                width: 325px;
                height: auto;

                margin: 30px auto;
                padding: 20px 20px 9px;

                background: #9dd2ea;
                background: linear-gradient(#9dd2ea, #8bceec);
                border-radius: 3px;
                box-shadow: 0px 4px #009de4, 0px 10px 15px rgba(0, 0, 0, 0.2);
              }

              /* Top portion */
              .top span.clear {
                float: left;
              }

              /* Inset shadow on the screen to create indent */
              .top .screen {
                height: 40px;
                width: 212px;

                float: right;

                padding: 0 10px;

                background: rgba(0, 0, 0, 0.2);
                border-radius: 3px;
                box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);

                /* Typography */
                font-size: 17px;
                line-height: 40px;
                color: white;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                text-align: right;
                letter-spacing: 1px;
              }

              /* Clear floats */
              .keys,
              .top {
                overflow: hidden;
              }

              /* Applying same to the keys */
              .keys span,
              .top span.clear {
                float: left;
                position: relative;
                top: 0;

                cursor: pointer;

                width: 66px;
                height: 36px;

                background: white;
                border-radius: 3px;
                box-shadow: 0px 4px rgba(0, 0, 0, 0.2);

                margin: 0 7px 11px 0;

                color: #888;
                line-height: 36px;
                text-align: center;

                /* prevent selection of text inside keys */
                user-select: none;

                /* Smoothing out hover and active states using css3 transitions */
                transition: all 0.2s ease;
              }

              /* Remove right margins from operator keys */
              /* style different type of keys (operators/evaluate/clear) differently */
              .keys span.operator {
                background: #fff0f5;
                margin-right: 0;
              }

              .keys span.eval {
                background: #f1ff92;
                box-shadow: 0px 4px #9da853;
                color: #888e5f;
              }

              .top span.clear {
                background: #ff9fa8;
                box-shadow: 0px 4px #ff7c87;
                color: white;
              }

              /* Some hover effects */
              .keys span:hover {
                background: #9c89f6;
                box-shadow: 0px 4px #6b54d3;
                color: white;
              }

              .keys span.eval:hover {
                background: #abb850;
                box-shadow: 0px 4px #717a33;
                color: #ffffff;
              }

              .top span.clear:hover {
                background: #f68991;
                box-shadow: 0px 4px #d3545d;
                color: white;
              }

              /* Simulating "pressed" effect on active state of the keys by removing the box-shadow and moving the keys down a bit */
              .keys span:active {
                box-shadow: 0px 0px #6b54d3;
                top: 4px;
              }

              .keys span.eval:active {
                box-shadow: 0px 0px #717a33;
                top: 4px;
              }

              .top span.clear:active {
                top: 4px;
                box-shadow: 0px 0px #d3545d;
              }
            
      </style>
    </div>
  `);
});
