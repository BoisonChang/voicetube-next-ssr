import React from "react";
import styles from "./style.module.scss";
import { LanguageCodeType } from "@/types/constant";
import { getLanguageName } from "@/helper/content";

interface PreviewLangtabProps {
  caption: LanguageCodeType;
}

function PreviewLangtab({ caption }: PreviewLangtabProps) {
  return (
    <div
      key={caption}
      className={styles.content_tag_lang}
      style={{
        backgroundColor:
          caption === "cht"
            ? "#4283e4"
            : caption === "en"
            ? "#A62639"
            : caption === "ja"
            ? "#C6CA53"
            : "#4ECDC4",
      }}
    >
      {getLanguageName(caption)}
    </div>
  );
}

export default PreviewLangtab;
