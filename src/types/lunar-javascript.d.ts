declare module "lunar-javascript" {
  interface EightChar {
    getYearGan(): string;
    getYearZhi(): string;
    getMonthGan(): string;
    getMonthZhi(): string;
    getDayGan(): string;
    getDayZhi(): string;
    getTimeGan(): string;
    getTimeZhi(): string;
  }
  interface Lunar {
    getEightChar(): EightChar;
  }
  interface SolarStatic {
    fromYmdHms(
      y: number,
      m: number,
      d: number,
      h: number,
      min: number,
      s: number
    ): Solar;
  }
  interface Solar {
    getLunar(): Lunar;
  }
  export const Solar: SolarStatic;
  export const Lunar: unknown;
}
