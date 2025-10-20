export default function FAQs() {
  return (
    <div className="max-w-[1200px] mt-4 p-6 items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            I&#39;m up against TBC/TBD/BYE. Who is that?
          </summary>
          <p className="mt-2 text-gray-500">
            <br />
            -The website indicates TBC/TBD/BYE as your opponent when you are
            waiting for an opponent that&#39;s on the previous round.
            <br />
            -Please wait patiently and keep an eye on your notifications.
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            How Do I edit/UPdate my game ID?
          </summary>
          <p className="mt-2 text-gray-500">
            - At the Top right of your screen click on your name <br />- Go to
            Profile
            <br />
            -Click on Settings <br />
            -Navigate to Link Game Accounts
            <br />- Find the Account you want to update and once complete click
            the Tick to confirm
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            What happens if my oppponent doesn&#39;t show up?
          </summary>
          <p className="mt-2 text-gray-500">
            <br />- Teams have 10 minutes to appear after the scheduled match
            time
            <br />- Failure to appear results in a match forfeit
            <br />- Both teams must be fully present to start
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            How do I see my match?
          </summary>
          <p className="mt-2 text-gray-500">
            <br />
            -On the Event Page of the Cup you are playing in Click the Matches
            tab after the bracket has been created to see your event.
            <br />
            -You can also click on the bracket tab and then on your match to
            view your current match.
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            How Do I check In?
          </summary>
          <p className="mt-2 text-gray-500">
            <br />- 1 Hour before the cup&#39;s Scheduled start time check-ins will
            open
            <br />
            -Navigate back to the same page where you checked in
            <br />
            -Click the Red Check-in button and you will be in
            <br />
            -Some events have limited check-ins & are on a first come first
            serve basis
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            How Do I check In?
          </summary>
          <p className="mt-2 text-gray-500">
            <br />- Navigate to the &#39;Events&#39; tab
            <br />
            -Click the Tournament Event
            <br />
            -Once in, Click the Red sign up button
            <br />
            -Select yourself or your team that you want to enter
            <br />
            -Click done and you are in
          </p>
        </details>
      </div>
    </div>
  );
}
