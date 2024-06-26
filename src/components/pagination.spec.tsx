import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./pagination";

//* vamos usar spies para monitorar se alguma funcao foi disparada.
//* funcoes que nao tem qualquer tipo de comportamento, elas servem para garantir que algum codigo chegou em algum lugar. Ela anota dentro dela mesma quantas vezes ela foi chamada, os parametros,

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });

  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(
      wrapper.getByText((content, element) => {
        if (!element) return false; // Add this line to handle null element
        const hasText = (node: any) =>
          node.textContent === "Total de 200 item(s)";
        const nodeHasText = hasText(element);
        const childrenDontHaveText = Array.from(element.children).every(
          (child) => !hasText(child),
        );
        return nodeHasText && childrenDontHaveText;
      }),
    ).toBeInTheDocument();
  });
});

describe("Pagination", () => {
  it("should be able to navigate to next page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    await user.click(nextPageButton);

    //* espero que essa fn onPageChangeCallback tenha sido chamada com parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
});

describe("Pagination", () => {
  it("should be able to navigate to previous page", async () => {
    const user = userEvent.setup();

    console.log(onPageChangeCallback.mock.calls);

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const previousPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });

    await user.click(previousPageButton);

    //* espero que essa fn onPageChangeCallback tenha sido chamada com parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
});

describe("Pagination", () => {
  it("should be able to navigate to first page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const firstPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    await user.click(firstPageButton);

    //* espero que essa fn onPageChangeCallback tenha sido chamada com parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });
});

describe("Pagination", () => {
  it("should be able to navigate to last page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const lastPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });

    await user.click(lastPageButton);

    //* espero que essa fn onPageChangeCallback tenha sido chamada com parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
