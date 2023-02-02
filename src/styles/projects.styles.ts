import styled from "styled-components";

export const StyledProjects = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  font-family: "Montserrat";
  .projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      padding: 0.4rem;
      margin-left: 0.5rem;
      font-size: 1.6rem;
      svg {
        font-size: 1.9rem;
        &#typescript {
          width: 35px;
          height: 35px;
          position: relative;
          top: 5px;
        }
      }
    }
    ul {
      display: flex;
      gap: 1rem;
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      margin-bottom: 2rem;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const ProjectCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #000001;
  opacity: 0.9;
  gap: 0.3rem;
  margin: 1rem 0;
  @media (max-width: 429px) {
    width: 350px;
  }
  @media (max-width: 388px) {
    width: 290px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: #33ff8a;
      font-size: 1.2rem;
      border-bottom: 1px solid transparent;
      transition: 0.3s all;
      &:hover {
        border-color: #33ff8a;
      }
    }
    .icon {
      font-size: 1.5rem;
      color: #d1d5db;
    }
  }
  p {
    color: #d1d5db;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      color: white;
      padding: 0 0.4rem;
    }
    svg {
      color: yellow;
      font-size: 1.2rem;
    }
  }
`;
