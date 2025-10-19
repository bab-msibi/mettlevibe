import Sidebar from "@/components/Sidebar";
import Discover from "../tasks/Discover";

export default function Page() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <h1 className="text-3xl">Event Rules</h1>
      <br />
      <p>
        This rulebook establishes the guidelines that must always be followed
        when participating in any Mettlestate competition or tournament,
        including those hosted by Mettlestate on behalf of another company or
        sponsor. Failure to comply with these rules may result in penalties as
        outlined.
        <br /><br />
        Decisions made by Mettlestate administrators are final, particularly
        when made to uphold fair play and sportsmanship, even if not explicitly
        detailed in this rulebook. We reserve the right to modify, expand, or
        remove rules as needed to ensure a fair and enjoyable competitive
        environment.
        <br /><br />
        Only the latest version of the rulebook is valid; rules from previous
        events no longer apply. Our commitment is to provide an exciting, fair,
        and fun experience for all participants.
      </p>
      <br />
      <h3>PLAYER ELIGIBILITY</h3>
      <p>All players participating in Mettlestate PUBG Mobile Cup must have a valid PUBG Mobile ID.</p>
      <br />
      <h3>Nationality and Residence</h3>
      <p>- This is a NATIONAL and SUB-SAHARAN Africa cup only. 
<br />
- South African players can be paid their winnings via their South African bank accounts or PayPal accounts.  
<br />
- If the team is not in South Africa or does not have a South African bank account, the team must have a valid PayPal account to receive their winnings.  </p>
    <Discover />
    </div>
  );
}
