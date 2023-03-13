import React from "react";
import styles from "./style.module.scss";
import { ColorMapType, PreviewLangtabProps } from "@/types/constant";
import { getLanguageName } from "@/helper/content";

const colorMap: ColorMapType = {
  cht: "#4283e4",
  en: "#A62639",
  ja: "#C6CA53",
  other: "#4ECDC4",
};

function PreviewLangtab({ caption }: PreviewLangtabProps) {
  const backgroundColor = colorMap[caption] || colorMap.other;
  return (
    <div
      key={caption}
      className={styles.content_tag_lang}
      style={{ backgroundColor }}
    >
      {getLanguageName(caption)}
    </div>
  );
}

export default PreviewLangtab;
