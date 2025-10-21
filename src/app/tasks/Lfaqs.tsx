import Image from "next/image";

export default function FAQs() {
  return (
    <div className="max-w-[1450px] mx-auto mt-6 p-6 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-start">
      <div>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <details className="bg-black-sec p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">
              I&#39;m up against TBC/TBD/BYE. Who is that?
            </summary>
            <p className="mt-2 text-gray-400">
              - The website indicates TBC/TBD/BYE as your opponent when you are
              waiting for an opponent that&#39;s on the previous round.
              <br />- Please wait patiently and keep an eye on your
              notifications.
            </p>
          </details>

          <details className="bg-black-sec p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How do I edit/update my game ID?
            </summary>
            <p className="mt-2 text-gray-400">
              - Click on your name at the top right. <br />- Go to Profile →
              Settings → Link Game Accounts. <br />- Update your ID and click
              the tick to confirm.
            </p>
          </details>

          <details className="bg-black-sec p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">
              What happens if my opponent doesn&#39;t show up?
            </summary>
            <p className="mt-2 text-gray-400">
              - Teams have 10 minutes to appear after the scheduled match time.
              <br />- Failure to appear results in a forfeit.
              <br />- Both teams must be fully present to start.
            </p>
          </details>

          <details className="bg-black-sec p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How do I see my match?
            </summary>
            <p className="mt-2 text-gray-400">
              - On the Event Page → click the “Matches” tab after the bracket is
              created. <br />- You can also view it under the “Bracket” tab and
              click your match.
            </p>
          </details>

          <details className="bg-black-sec p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How do I check in?
            </summary>
            <p className="mt-2 text-gray-400">
              - Check-ins open 1 hour before the start time. <br />- Click the
              Red Check-in button on the same event page.
            </p>
          </details>

          <details className="bg-black-sec p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How do I sign up for an event?
            </summary>
            <p className="mt-2 text-gray-400">
              - Navigate to the “Events” tab. <br />- Click the tournament
              event, then the red “Sign up” button. <br />- Select yourself or
              your team → click “Done”.
            </p>
          </details>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <Image 
        src="/tinkies-banner.png"
        alt="banner-long"
        width={250}
        height={500}
        className="bg-cover"
        />
      </div>
    </div>
  );
}
