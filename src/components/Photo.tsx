import Image from "next/image";
import type { PhotoSlot } from "@/content/photos";
import { Drawing } from "./drawings";

// Shot briefs are for the photographer, not customers. Set
// NEXT_PUBLIC_PHOTO_BRIEFS=on to show them on the illustrations while planning a shoot.
const showBriefs = process.env.NEXT_PUBLIC_PHOTO_BRIEFS === "on";

type PhotoProps = {
  slot: PhotoSlot;
  /** Responsive `sizes` hint for next/image. */
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Show the shot brief on the placeholder (hide on very small slots). */
  brief?: boolean;
  /** Where the shot brief sits — move it when something overlaps the bottom. */
  briefAt?: "top" | "bottom";
  /** Size of the drawing relative to the frame. */
  drawingClassName?: string;
};

/**
 * One image slot. Renders the real photograph when `slot.src` is set,
 * otherwise a colour illustration of the dish that holds the composition.
 * The parent decides the frame (aspect ratio, crop, overlap).
 */
export function Photo({
  slot,
  sizes,
  priority,
  className = "",
  brief = true,
  briefAt = "bottom",
  drawingClassName = "w-[62%] max-w-80",
}: PhotoProps) {
  if (slot.src) {
    return (
      <div className={`relative overflow-hidden bg-paper-deep ${className}`}>
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="settle lift-on-hover object-cover"
          style={slot.focus ? { objectPosition: slot.focus } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      data-tone={slot.tone}
      className={`proof relative isolate overflow-hidden ${className}`}
    >
      <div className="settle lift-on-hover absolute inset-0 grid place-items-center">
        <Drawing name={slot.drawing} className={drawingClassName} strokeWidth={1.3} />
      </div>
      <span className="crop-marks" aria-hidden="true" />
      {brief && showBriefs && (
        <span
          aria-hidden="true"
          className={`label absolute right-4 left-4 flex justify-between gap-4 text-[0.6rem] leading-snug opacity-75 ${
            briefAt === "top" ? "top-5 items-start" : "bottom-4 items-end"
          }`}
        >
          <span className="max-w-[28ch] normal-case tracking-[0.04em]">{slot.brief}</span>
          <span className="shrink-0">Photo to come</span>
        </span>
      )}
    </div>
  );
}
