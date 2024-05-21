import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavLink } from "./nav-link";

//* usamos os wrappers quando queremos testar algum componente que dependa de um contexto para funcionar

describe("NavLink", () => {
  it("should highlight the nav link when is the current page link", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    //* dataset para pegar atributos que comecam com data-...
    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
    expect(wrapper.getByText("About").dataset.current).toEqual("true");
  });
});
