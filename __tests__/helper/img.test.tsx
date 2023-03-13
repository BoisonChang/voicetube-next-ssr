import { myLoader } from "@/helper/img";
import { MyLoaderProps } from "@/types/components";

describe("myLoader", () => {
  const testImageUrl = "http://test.com/image.jpg";
  const testWidth = 1000;
  const testQuality = 75;

  const props: MyLoaderProps = {
    src: testImageUrl,
    width: testWidth,
  };

  it("returns the correct URL with default quality", () => {
    const expectedUrl = `${testImageUrl}?w=${testWidth}&q=${testQuality}`;
    const result = myLoader(props);
    expect(result).toEqual(expectedUrl);
  });

  it("returns the correct URL with custom quality", () => {
    const customQuality = 50;
    const expectedUrl = `${testImageUrl}?w=${testWidth}&q=${customQuality}`;
    const result = myLoader({ ...props, quality: customQuality });
    expect(result).toEqual(expectedUrl);
  });
});
