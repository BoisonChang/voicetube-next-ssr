import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { myLoader } from "@/helper/img";
import { PreviewPropsBaseType } from "@/types/request";
import { getLevel, formatTime } from "@/helper/content";
import PreviewLangtab from "@/components/Preview/previewLangTab";

function Preview({
  title,
  thumbnail,
  duration,
  views,
  level,
  captions,
}: PreviewPropsBaseType) {
  return (
    <div className={styles.content_item}>
      <div className={styles.content_preview}>
        <Image
          data-testid="preview-thumbnail"
          loader={myLoader}
          src={`${thumbnail}`}
          alt={title}
          fill
        />
        <div data-testid="preview-duration" className={styles.content_time}>
          {formatTime(duration)}
        </div>
      </div>
      <div className={styles.content_description}>
        <div className={styles.content_description_title}>{title}</div>
      </div>
      <div className={styles.content_description_count}>
        <div className={styles.content_description_count_pic}>
          <Image loader={myLoader} src="/headset.svg" alt="headset" fill />
        </div>
        <div
          data-testid="preview-views"
          className={styles.content_description_count_content}
        >
          {views}
        </div>
      </div>
      <div className={styles.content_tag}>
        {captions.map((caption) => (
          <PreviewLangtab key={caption} caption={caption} />
        ))}
        <div
          data-testid="preview-level"
          className={styles.content_tag_level}
          style={{
            backgroundColor:
              level === 1 ? "#37c597" : level === 2 ? "#ffb900" : "#ed7d4f",
          }}
        >
          {getLevel(level)}
        </div>
      </div>
    </div>
  );
}

export default Preview;
