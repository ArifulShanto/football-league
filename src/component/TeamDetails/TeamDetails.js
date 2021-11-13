import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./TeamDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { faFacebook , faTwitter , faYoutube , faChrome} from '@fortawesome/free-brands-svg-icons'
import male from "../../team-tracker-main/Photo/male.png";

const TeamDetails = () => {
    const { tName } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${tName}`)
            .then(res => res.json())
            .then(data => takeData(data))
    }, [])
    const takeData = (data) => {
        const teamDetailsArray = data.teams[0];
        setTeamDetails(teamDetailsArray);
    }
    const { strTeamBadge, strTeam, strStadiumThumb, strCountry, intFormedYear, strGender , strDescriptionEN ,strFacebook , strTwitter , strYoutube , strWebsite } = teamDetails;
    console.log(teamDetails);
    const teamDetailsStyle = {
        background: `url(${strStadiumThumb})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <div>
            <div style={teamDetailsStyle} className="team-details">
                <div className="overlay">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>
            <div className="team-info">
                <Container>
                    <Row className="info">
                        <Col md={4}>
                            <h2>{strTeam}</h2>
                            <p><FontAwesomeIcon icon={faMapMarker} />    Founded : {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} />    Country : {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} />    Sports Type : Football</p>
                            <p><FontAwesomeIcon icon={faMars} />    Gender : {strGender}</p>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>
                            <img className="male" src={male} alt="" />
                        </Col>
                    </Row>
                </Container>
                <div className = "description">
                    <Container>
                        <Row>
                            <Col md = {12}>
                                <p>{strDescriptionEN}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className = "pl-logo">
                    <Container>
                        <div className = "logo">
                            <a href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href={`https://${strWebsite}`}><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;