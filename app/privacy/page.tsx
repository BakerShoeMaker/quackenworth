import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Statement | Quackenworth",
  description:
    "Read the Privacy Statement for Quackenworth. Learn how we collect, use, and protect personal information for users of our K-12 educational apps and websites.",
  openGraph: {
    title: "Privacy Statement | Quackenworth",
    description:
      "Read the Privacy Statement for Quackenworth. Learn how we collect, use, and protect personal information for users of our K-12 educational apps and websites.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyStatement() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Privacy Statement" }]} />
      <section className="min-h-[80vh] bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-zinc-700 [&>p]:mb-4">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

<p>
Quackenworth is dedicated to handling your private information with care. We do not sell any information you input into our system. Your information is used only for the purpose of completing a transaction, contacting you regarding promotions, addressing issues with an order, or sending our newsletter.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policy Changes</h2>

<p>
We may change or amend this Privacy Policy at any time. If we make any material changes, we will notify you by sending an email and/or posting a notice of the changes on our website.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Personal Information</h2>

<p>
Quackenworth does not require you to share personal information to visit our website. However, if you choose to register, we collect only the following information:
</p>

<ul className="list-disc ml-6 mb-4">
  <li>Email address</li>
  <li>Mailing address</li>
  <li>Billing address</li>
  <li>Phone number</li>
  <li>School</li>
</ul>

<p>
Quackenworth’s web server collects standard anonymous information such as web log data and IP addresses. This information helps us identify trends and improve website functionality. It is not shared and is used solely for internal purposes.
</p>

<p>
Like most retail websites, we use cookies to store your preferences and remember you during return visits. Cookies also record session information such as:
</p>

<ul className="list-disc ml-6 mb-4">
  <li>Items saved in your shopping cart</li>
  <li>Web pages viewed on our website</li>
  <li>The website visited prior to arriving at ours</li>
</ul>

<p>
This information is not shared and is used only for internal purposes.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Changing Your Personal Information</h2>

<p>
You may review and edit the information provided during registration by logging into your account page.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Apps</h2>

<p>Quackenworth does not:</p>

<ul className="list-disc ml-6 mb-4">
  <li>Solicit personal information in any of our apps</li>
  <li>Share information within any of our apps</li>
  <li>Track user activity within any of our apps</li>
</ul>

<h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>

<p>
Our online store uses Secure Sockets Layer (SSL) technology to ensure that your personal and credit card information remains secure during web transactions on quackenworth.com.
</p>

<p>
To verify that you are accessing our website securely, ensure that the URL begins with <strong>https</strong> instead of <strong>http</strong> once logged into the online store.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>

<p>
If you have any questions about our website or this Privacy Policy, please contact us at:
</p>

<p className="font-medium">
info@quackenworth.com
</p>
        </div>
      </section>
    </main>
  );
}
