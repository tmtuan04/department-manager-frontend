import Members from "../partials/Members/Members";
import "./our-team.css";

const OurTeam = () => {
  return (
    <>
      <section className="our-team" id="our-team">
        <div className="container-tdn">
          <div className="inner-our-team">
            <div className="our-team__title">Our Team</div>
            <div className="our-team__members">
              <Members />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurTeam;