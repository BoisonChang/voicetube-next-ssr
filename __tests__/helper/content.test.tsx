import { getLevel, getLanguageName, formatTime } from "@/helper/content";

describe("getLevel", () => {
  it("returns '初級' for input 1", () => {
    expect(getLevel(1)).toBe("初級");
  });

  it("returns '中級' for input 2", () => {
    expect(getLevel(2)).toBe("中級");
  });

  it("returns '高級' for input 3", () => {
    expect(getLevel(3)).toBe("高級");
  });
});

describe("getLanguageName", () => {
  it("returns '中文' for input 'cht'", () => {
    expect(getLanguageName("cht")).toBe("中文");
  });

  it("returns '日文' for input 'ja'", () => {
    expect(getLanguageName("ja")).toBe("日文");
  });

  it("returns '越南文' for input 'vi'", () => {
    expect(getLanguageName("vi")).toBe("越南文");
  });

  it("returns '英文' for input 'en'", () => {
    expect(getLanguageName("en")).toBe("英文");
  });

  it("returns '外語' for other inputs", () => {
    expect(getLanguageName("fr")).toBe("外語");
  });
});

describe("formatTime", () => {
  it("returns '00:00' for input 0", () => {
    expect(formatTime(0)).toBe("00:00");
  });

  it("returns '01:00' for input 60", () => {
    expect(formatTime(60)).toBe("01:00");
  });

  it("returns '01:30' for input 90", () => {
    expect(formatTime(90)).toBe("01:30");
  });

  it("returns '10:00' for input 600", () => {
    expect(formatTime(600)).toBe("10:00");
  });

  it("returns '99:59' for input 5999", () => {
    expect(formatTime(5999)).toBe("99:59");
  });
});
