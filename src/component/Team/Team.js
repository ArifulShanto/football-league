import React from 'react';
import { Col } from 'react-bootstrap';
import "./Team.css";
import "./Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';

const Team = (props) => {
    const navigate = useNavigate();
    const handleClick = (tName) => {
        navigate(`${tName}`);
    }
    const { strTeamBadge, strTeam } = props.team;
    return (
        <Col md = {{span:3 , offset:1}} className = "pl-team">
            <img src={strTeamBadge} alt="" />
            <h2>{strTeam}</h2>
            <p><small>Sports Type : Football</small></p>
            <button onClick = {() => handleClick(strTeam) }>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </Col>
    );
};

export default Team;