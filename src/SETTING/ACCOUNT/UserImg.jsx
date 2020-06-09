import React from "react";
import FileInputComponent from "react-file-input-previews-base64";
import { Button } from 'semantic-ui-react'

import classes from "./UserImg.module.css";

const UserImg = () => {

  return (
    <div className={classes.left}>
      <div className={classes.defaultImg}>
        <FileInputComponent
          labelText={null} // ラベル
          imageStyle={{
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            objectFit: "cover",
            margin: "0 auto",
          }} // 画像のスタイル
          imagePreview={true} // ファイルのプレビュー
          multiple={false} // 複数ファイル選択
          callbackFunction={file => { // 選択後のコールバック関数
            console.log(file)
          }}
          buttonComponent={ // クリック時に選択ダイアログを開くコンポーネント
            <div className={classes.button}>
              <Button positive>Upload Image</Button>
            </div>
          }
          accept="image/*" //許可するファイルのtype
        />
      </div>
    </div>
  );
};

export default UserImg;