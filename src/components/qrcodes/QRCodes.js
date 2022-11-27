import React, { useContext, useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { UserContext, FirebaseContext } from "../../context";
import { WhiteCenteredContainer } from "../common";
import Card from "./Card";

import "./style.css";

export default function QRCodes() {
  const { currentUser } = useContext(UserContext);
  const { getCodes, deleteCode } = useContext(FirebaseContext);

  const [userCodes, setUserCodes] = useState([]);

  const queryCodes = useCallback(async () => {
    if (currentUser) {
      const codes = await getCodes();

      setUserCodes(codes.filter((code) => code.data.uid === currentUser.uid));
    }
  }, [currentUser, getCodes]);

  useEffect(() => {
    queryCodes();
  }, [queryCodes]);

  const unregisterToEventHandler = async (codeId) => {
    await deleteCode(codeId);
    await queryCodes();
  };

  return (
    <WhiteCenteredContainer>
      <h2>My QR Codes</h2>

      <Row>
        {userCodes.map((code) => (
          <Card
            key={code.id}
            code={code.data}
            codeId={code.id}
            onUnRegisterEventClick={unregisterToEventHandler}
          />
        ))}
      </Row>
    </WhiteCenteredContainer>
  );
}
