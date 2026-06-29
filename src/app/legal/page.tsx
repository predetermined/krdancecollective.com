import { Metadata } from "next";

const email = "krdanceco@gmail.com";

export const metadata: Metadata = {
  title: "",
  description: "",
  robots: "noindex,nofollow",
};

export default function Legal() {
  return (
    <div className="p-4">
      <h2 className={`text-3xl mb-1 font-bold`}>Imprint</h2>
      <p>
        Nicholas Isaiah King Rose
        <br />
        @TODO
        <br />
        <span>KRDANCECO@GMAIL.COM</span>
      </p>

      <div className="mt-6 pt-6" id="privacy-policy">
        <h2 className={`text-3xl mb-1 font-bold`}>Privacy policy</h2>

        <p className="mt-2">
          This privacy policy applies to the following websites:
        </p>
        <ul className="list-disc list-inside">
          <li>krdancecollective.com</li>
        </ul>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Data protection</h3>
        <p>
          We comply with the principles of the General Data Protection
          Regulation (GDPR) when dealing with all data received from customers
          or visitors to our websites.
        </p>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Our services</h3>
        <p>
          We only hold the data necessary to offer services provided on our
          websites. This means we only process and hold data related to
          purchases and subsequent support related to those purchases, in
          accordance with Article 6(1)(b) of the General Data Protection
          Regulation (GDPR).
          <br />
          <br />
          Any processing of your data is only done to provide or perform the
          services or products you have purchased. The basis for processing is
          the agreement you have made with us.
        </p>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Required period</h3>
        <p>
          We only hold personal data for as long as a customer is active, in
          order to keep our services running. Once a customer ends with our
          services, data is no longer needed and we delete it after 30 days from
          the moment the customer is inactive.
        </p>

        <h3 className="text-2xl mt-6 mb-1 font-bold">
          Payment processing data
        </h3>
        <p>
          In accordance with Article 6(1)(b) of the General Data Protection
          Regulation (GDPR) any other data is only used to process your purchase
          securely. In accordance with Article 6(1)(c) of the General Data
          Protection Regulation (GDPR), we need to retain data related to all
          purchases to fulfill our existing legal obligations to account for tax
          and VAT on all transactions.
        </p>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Third-parties</h3>
        <ul className="list-disc list-inside">
          <li className="font-normal">
            Vercel: The infrastructure platform that powers our websites.
          </li>
        </ul>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Data request</h3>
        <p>
          As a customer, you can at any time (and free of charge) request
          details of the data we hold relating to you - and you can also request
          any such data is amended or deleted. Please note that if you request
          deletion of your data, this may prevent us from offering any further
          support relating to your previous purchases. You can contact us at
          {email}.
        </p>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Cookies</h3>
        <p>
          Our websites use cookies to track use and allow customers to purchase
          from our websites. Please note that these cookies do not contain or
          pass any personal, confidential or financial information or any other
          information that could be used to identify individual visitors or
          customers purchasing from our website.
        </p>

        <h3 className="text-2xl mt-6 mb-1 font-bold">Contact</h3>
        <p>
          If you have any questions relating to our privacy policy, please email
          us at {email}.
        </p>
      </div>
    </div>
  );
}
