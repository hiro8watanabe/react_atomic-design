import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const History = useHistory();
  const onClickAdmin = () =>
    History.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    History.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>ゲスト</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
