import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24}>
      <Image
        src="/apple_music_logo.svg"
        alt="Apple Music logo"
        className="h-[120px] w-auto"
      />
      <Image
        src="/chrome_logo.svg"
        alt="Chrome logo"
        className="h-[120px] w-auto"
      />
      <Image
        src="/strava_logo.svg"
        alt="Strava logo"
        className="h-[120px] w-auto"
      />
      <Image
        src="/nintendo_logo.svg"
        alt="Nintendo logo"
        className="h-[120px] w-auto"
      />
      <Image
        src="/jquery_logo.svg"
        alt="Jquery logo"
        className="h-[120px] w-auto"
      />
      <Image
        src="/prada_logo.svg"
        alt="Prada logo"
        className="h-[120px] w-auto"
      />
    </InfiniteSlider>
  );
}
