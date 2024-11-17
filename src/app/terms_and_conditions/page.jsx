import Link from "next/link";
import BG from "../icons/background.svg";
import Image from "next/image";
export default function Terms_and_conditions() {
    return (
        <div>
            <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                <Image src={BG} className=' object-cover w-full h-full opacity-15' />
            </div>
            <h1 className=" text-white text-[30px] text-center mt-10 sm:text-[20px] md:text-[30px] lg:text-[30px] ">Terms and conditions</h1>
            <div className=" bg-white bg-opacity-30 ml-10 mr-10 rounded-[30px] mt-10 pb-2 pt-2">
            <p className=" text-white ml-[5%] mr-[5%] text-center mt-10 mb-10">Personal Terms and Conditions for Global Talent Solutions Website
                1. Acceptance of Terms
                By accessing and using the Global Talent Solutions website, users agree to comply with these terms and conditions. If users do not agree with these terms, they should not use the website.

                2. User Responsibilities
                Accurate Information: Users must provide accurate and complete information when creating profiles, applying for jobs, or participating in educational programs. Misrepresentation of information may lead to account termination.
                Respectful Conduct: Users are expected to behave respectfully towards others. Any form of harassment, discrimination, or inappropriate content is strictly prohibited and may result in immediate suspension or termination of access.
                Lawful Use: Users must use the website in accordance with applicable laws and regulations. Illegal activities, including but not limited to, fraud, hacking, and intellectual property infringement, are prohibited.
                3. Privacy and Data Protection
                Data Collection: Personal data collected through the website will be used as outlined in our Privacy Policy. This includes data collected during account creation, job applications, and educational program participation.
                Data Use: The information collected may be used for matching job seekers with suitable employment opportunities, administering educational programs, and communicating with users.
                Data Security: Global Talent Solutions implements industry-standard security measures to protect personal data from unauthorized access, use, or disclosure.
                4. Job Provider Responsibilities
                Accurate Job Postings: Job providers must ensure that all job postings are accurate, lawful, and do not contain misleading information. Job postings must comply with applicable labor laws and regulations.
                Confidentiality: Job providers are required to maintain the confidentiality of candidate information and not use it for purposes other than recruitment.
                5. Intellectual Property
                Website Content: All content on the Global Talent Solutions website, including text, graphics, logos, and software, is the property of Global Talent Solutions or its licensors and is protected by intellectual property laws.
                User Contributions: By submitting content to the website, users grant Global Talent Solutions a non-exclusive license to use, reproduce, and distribute the content.
                6. Limitation of Liability
                Service Availability: Global Talent Solutions does not guarantee the availability of the website or services. The company is not liable for any interruptions, delays, or technical issues.
                Disclaimer of Warranties: The website and services are provided "as is" without any express or implied warranties, including but not limited to, warranties of merchantability or fitness for a particular purpose.
                Limitation of Damages: Global Talent Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the website or services.
                7. Termination of Access
                Global Talent Solutions reserves the right to terminate or suspend user access to the website for any reason, including but not limited to, violations of these terms and conditions.

                8. Changes to Terms and Conditions
                Global Talent Solutions may update these terms and conditions at any time. Users will be notified of significant changes, and continued use of the website after changes are made will constitute acceptance of the new terms.

                9. Governing Law
                These terms and conditions are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved in the courts of [Your Jurisdiction].

                10. Contact Information
                For any questions or concerns regarding these terms and conditions, users can contact Global Talent Solutions at:

                Email: [Contact Email]
                Phone: [Contact Phone Number]
                Address: [Company Address]
                Conclusion

                Including these personal terms and conditions on the Global Talent Solutions website will help protect the rights and responsibilities of both the users and the company. It is essential to ensure that these terms are clearly communicated and easily accessible to all users. Additionally, it is recommended to have these terms reviewed by legal counsel to ensure compliance with relevant laws and regulations.</p>
            </div>
            <Link href="https://jepsoft.com" className="mt-5 flex justify-center">
                <h1 className=" text-white text-center mb-5 ">©2024 <span className="">Jepsoft</span>. All Rights Reserved.</h1>
            </Link>
        </div>
    )
}   