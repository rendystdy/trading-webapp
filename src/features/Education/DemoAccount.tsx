import React from "react";

function DemoAccount() {
  return (
    <div className="flex flex-col gap-y-4 py-6">
      <p className="font-poppins font-normal text-lg text-justify text-veryDarkGrey">
        Before being able to start trading, Prospective Customers are required
        to simulate transactions on the MT5 platform, as evidenced by ownership
        of a demo account and transaction history.
      </p>
      <div className="flex flex-col gap-y-4 md:flex-row items-start gap-x-4">
        <img src="/assets/images/tutorial_1.png" alt="tutorial_1" />
        <div className="flex h-full flex-col justify-around">
          <div>
            <h2 className="font-poppins font-normal text-xl text-veryDarkBlue mb-4">
              For <span className="font-semibold text-xl">Android:</span>
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                1. Open MetaTrader5 application.
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                2. Tap the + icon in the upper right corner and enter the trader
                name <span className="font-bold">”HII*</span> into the search,
                then select "Open a demo account".
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                3. Fill in the appropriate data.
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                4. Tap "Ready", trading account will be added to Accounts tab.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-poppins font-normal text-xl text-veryDarkBlue mb-4">
              For <span className="font-semibold text-xl">Ios:</span>
            </h2>
            <ul>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                1. Open MetaTrader5 application.
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                2. Tap New Account and enter{" "}
                <span className="font-bold">”HII*</span> in the search bar.
                Choose the trading server that suits your trading account
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                3. Select "Open a demo account"
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                4. Fill in the appropriate data.
              </li>
              <li className="font-poppins font-normal text-base text-veryDarkGrey">
                5. Tap "Ready", trading account will be added to Accounts tab.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row items-start gap-x-4">
        <img src="/assets/images/tutorial_2.png" alt="tutorial_2" />
        <div className="flex h-full gap-y-4 flex-col justify-around">
          <p>
            The data requested is name, cellphone number, email, and the deposit
            amount that you want to trade on the demo account. Account Type and
            Leverage will be filled in first. After the data is filled in, a
            login number, password, and investor will be sent (password
            read-only).
          </p>
          <div className="px-5 py-6 bg-veryLightGraySecondary rounded-2xl">
            <p className="font-poppins font-bold text-base text-darkBlueSecondary">
              Save the Login number to be inputted into live account
              registration, and make at least one buy and sell transaction so
              that the transaction simulation history is recorded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoAccount;
