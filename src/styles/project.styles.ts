import styled from "styled-components";

export const ProjectCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  background-color: #000001;
  opacity: 0.75;
  gap: 0.3rem;
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
