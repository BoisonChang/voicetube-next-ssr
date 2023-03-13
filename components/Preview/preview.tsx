import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { myLoader } from "@/helper/img";
import { VideoItemType } from "@/types/request";
import { getLevel, formatTime } from "@/helper/content";
import PreviewLangtab from "@/components/Preview/previewLangTab";

interface PreviewProps {
  video: VideoItemType;
}

function Preview({ video }: PreviewProps) {
  return (
    <div className={styles.content_item}>
      <div className={styles.content_preview}>
        <Image
          loader={myLoader}
          src={`${video.thumbnail}`}
          alt={video.title}
          fill
        />
        <div className={styles.content_time}>{formatTime(video.duration)}</div>
      </div>
      <div className={styles.content_description}>
        <div className={styles.content_description_title}>{video.title}</div>
      </div>
      <div className={styles.content_description_count}>
        <div className={styles.content_description_count_pic}>
          <Image loader={myLoader} src="/headset.svg" alt="headset" fill />
        </div>
        <div className={styles.content_description_count_content}>
          {video.views}
        </div>
      </div>
      <div className={styles.content_tag}>
        {video.captions.map((caption) => (
          <PreviewLangtab key={caption} caption={caption} />
        ))}
        <div
          className={styles.content_tag_level}
          style={{
            backgroundColor:
              video.level === 1
                ? "#37c597"
                : video.level === 2
                ? "#ffb900"
                : "#ed7d4f",
          }}
        >
          {getLevel(video.level)}
        </div>
      </div>
    </div>
  );
}

export default Preview;
