import React from "react";
import { useDataContext } from "../Context";

const PrivacyPolicy = () => {
  const { policy, setPolicy } = useDataContext();
  return (
    <React.Fragment>
      <div
        className={`bg-white fixed mx-6 p-8 transform transition-all duration-500 ease-in-out ${
          policy
            ? "scale-101 z-80"
            : "scale-0 opacity-0 -z-80"
        }`}
      >
        <i
          className="fa-solid fa-xmark text-xl absolute right-6 top-2 cursor-pointer"
          onClick={() => setPolicy(false)}
        ></i>
        <div className="overflow-x-auto max-h-[90vh] md:max-h-[75vh] border border-gray-200 px-4 py-2 flex flex-col gap-4">
          <h2 className="text-[17px] font-bold mt-2">Privacy Policy</h2>

          <div className="flex flex-col gap-4">
            <p className=" text-[17px] font-[400]">
              Elevate Co., Ltd built the Elevate app as a Free app. This SERVICE
              is provided by Elevate Co., Ltd at no cost and is intended for use
              as is.
            </p>
            <p className=" text-[16px] font-[400]">
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use our Services.
            </p>{" "}
            <p className=" text-[16px] font-[400]">
              If you choose to use our Services, then you agree to the
              collection and use of information in relation to this policy. The
              Personal Information that we collect is used for providing and
              improving the Service. We will not use or share your information
              with anyone except as described in this Privacy Policy.
            </p>{" "}
            <p className=" text-[16px] font-[400]">
              The terms used in this Privacy Policy have the same meanings as in
              our general Terms and Conditions, which is accessible at{" "}
              <a
                href="https://zendokh.com/faq?activeId=1"
                className="text-red-600 underline"
              >
                https://Elevatekh.com/faq?activeId=1
              </a>{" "}
              unless otherwise defined in this Privacy Policy.
            </p>
          </div>

          <h2 className="text-[17px] font-bold mt-2">
            Information Collection and Use
          </h2>
          <div className="flex flex-col gap-4">
            <p className=" text-[16px] font-[400]">
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information. The information that we request will be retained on
              your device and is not collected by us in any way.
            </p>
            <p className=" text-[16px] font-[400]">
              The app does use third party services that may collect information
              used to identify you.
            </p>
            <p className=" text-[16px] font-[400]">
              Link to privacy policy of third party service providers used by
              the app.
            </p>
          </div>
          <ul className="ml-4 list-disc pl-4 space-y-2">
            <li>
              <a
                href="https://policies.google.com/privacy"
                className="text-red-600 underline"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://free.facebook.com/privacy/policy/#0-WhatIsThePrivacy"
                className="text-red-600 underline"
              >
                Facebook Login Services
              </a>
            </li>
          </ul>

          <h2 className="text-[17px] font-bold mt-2">Log Data</h2>
          <p className=" text-[16px] font-[400]">
            We want to inform you that whenever you use our Service, in case of
            an error in the app we collect data and information (through third
            party products) on your phone called Log Data. This Log Data may
            include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] font-bold mt-2">
              Information we collect:
            </h2>
            <ul className="ml-4 list-disc pl-4 space-y-2">
              <li>Login ID and profile information.</li>
              <li>
                Contact information, such as email addresses and phone numbers.
              </li>
              <li>Location information.</li>
              <li>
                Device information, such as device ID and operating system
                version.
              </li>
              <li>
                Usage data, including app interactions and user behaviour.
              </li>
              <li>Analytics data, including app crashes and errors.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] font-bold mt-6">Cookies</h2>
            <p className=" text-[16px] font-[400]">
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory.
            </p>
            <p className=" text-[16px] font-[400]">
              This Service does not use these “cookies” explicitly. However, the
              app may use third party code and libraries that use “cookies” to
              collect information and improve their services. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your device. If you choose to refuse our
              cookies, you may not be able to use some portions of this Service.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] font-bold mt-2">Service Provider</h2>
            <p className="text-[16px]">
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul className="ml-4 list-disc pl-4 space-y-2">
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p className="text-[16px] font-[400]">
              We want to inform users of this Service that these third parties
              have access to your Personal Information. The reason is to perform
              the tasks assigned to them on our behalf. However, they are
              obligated not to disclose or use the information for any other
              purpose.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] font-bold mt-2">Security</h2>
            <p className="text-[16px] font-[400]">
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-[17px] font-bold">Children’s Privacy</h2>
            <p className="text-[16px] font-[400]">
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13. In the case we discover that a child under 13
              has provided us with personal information, we immediately delete
              this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact me so that we will be able to do necessary actions.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-[17px] font-bold">Third-party Links</h2>
            <p>
              Our Service may contain links to third-party websites,
              advertisers, services, or activities that are not owned or
              controlled by ELEVATE Co., Ltd. ELEVATE Co., Ltd does not endorse
              or assume any responsibility for any such third-party sites,
              information, materials, products, or services. If you access a
              third party website from our Service, such as through Facebook
              Connect, you do so at your own risk, and you understand that this
              Agreement and ELEVATE App’s Privacy Policy do not apply to your
              use of such sites. You expressly relieve ELEVATE Co., Ltd and
              ELEVATE App from any and all liability arising from your use of
              any third-party website, service, or content. Additionally, your
              dealings with or participation in promotions of advertisers found
              on our Service, including payment and delivery of goods, and any
              other terms (such as warranties) are solely between you and such
              advertisers. You agree that ELEVATE Co., Ltd and ELEVATE App shall
              not be responsible for any loss or damage of any sort relating to
              your dealings with such advertisers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[16px] font-bold">
              Changes to This Privacy Policy
            </h2>
            <p>
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13. In the case we discover that a child under 13
              has provided us with personal information, we immediately delete
              this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact me so that we will be able to do necessary actions.
            </p>
            <p>
              <strong>Effective Date:</strong> 2025-11-30
            </p>
          </div>

          <h2 className="text-[16px] font-bold">Contact Us</h2>
          <p>If you have any questions or concerns, please contact us at:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:support@pichpiseybeauty.com"
                className="border-b border-pink-500 text-pink-600 hover:border-pink-700 hover:text-pink-700 transition"
              >
                support@elevate.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <h2>Phone: +855 88-8888-99</h2>
              <div className="border w-[2px] h-[20px] bg-black"></div>
              <span className="flex items-center gap-2">
                <i className="fa-brands fa-telegram text-sky-500"></i>
                <a href="https://t.me/seng_youran">Telegram link</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-40 ${
          policy ? "block z-70" : "hidden -z-70"
        }`}
        onClick={() => setPolicy(false)}
      ></div>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
