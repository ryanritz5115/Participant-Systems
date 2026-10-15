import Link from "next/link";
import "../../styles/Home/studioSlider.css";
import Image from "next/image";
import { returnAlt } from "@/app/scripts/helpers";

export default function StudioSliderClient({ slice }) {
  return (
    <div className="studioSliderList">
      <div role="list" className="studioSliderItems">
        {slice.primary.slides.map((s, si) => (
          <div
            role="listitem"
            className="studioSliderSingle"
            key={"studioSlide" + si}
          >
            <Link
              href="/project/saas-dashboard-website-for-b2b-solutions"
              className="studioSliderWrapper"
            >
              <div className="studioSticky">
                <div className="studioItem">
                  <div className="studioSliderImageWrapper">
                    <Image
                      src={s.image.url}
                      alt={returnAlt(s.image)}
                      fill
                      sizes="(max-width: 1100px) 60vw, 100vw"
                      className="studioSliderImage"
                    />
                  </div>
                  <div className="studioTextWrapper">
                    <div className="studioTextInside">{s.title}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
