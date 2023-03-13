import { myLoader } from "@/helper/img";
import { MyLoaderProps } from "@/types/components";

describe("myLoader", () => {
  const props: MyLoaderProps = {
    src: "http://test.com/image.jpg",
    width: 1000,
  };

  it("returns the correct URL with default quality", () => {
    const expectedUrl = "http://test.com/image.jpg?w=1000&q=75";
    const result = myLoader(props);
    expect(result).toEqual(expectedUrl);
  });

  it("returns the correct URL with custom quality", () => {
    const expectedUrl = "http://test.com/image.jpg?w=1000&q=50";
    const result = myLoader({ ...props, quality: 50 });
    expect(result).toEqual(expectedUrl);
  });
});
