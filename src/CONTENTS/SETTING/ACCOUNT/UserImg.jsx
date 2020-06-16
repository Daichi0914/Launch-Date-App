import React, { useState } from "react";
// import FileInputComponent from "react-file-input-previews-base64";
// import { Button } from 'semantic-ui-react'

import firebase from "../../../CONFIG/firebase";
import Avatar from 'react-avatar';
import classes from "./UserImg.module.css";

const UserImg = () => {
  const [nowName, setNowName] = useState('')

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setNowName(user.displayName)
    } else {
      console.log('error')
    }
  });

  return (
    <div className={classes.left}>
      <div className={classes.defaultImg} id='imgContainer'>
      <Avatar
        name={nowName}
        size="200"
        className={classes.defaultImg}
      />
        <div
          labeltext={null} // labelTextだとエラー
          imagestyle={{    // imageStyleだとエラー
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            objectFit: "cover",
            margin: "0 auto",
          }} // 画像のスタイル
          // imagePreview={true} // ファイルのプレビュー
          // multiple={false} // 複数ファイル選択
          // callbackFunction={file => { // 選択後のコールバック関数
          //   console.log(file)
          // }}
          // buttonComponent={ // クリック時に選択ダイアログを開くコンポーネント
          //   <div className={classes.upLoadButton}>
          //     <Button primary >Upload Image</Button>
          //   </div>
          // }
          accept="image/*" //許可するファイルのtype
        />
        {/* <div className={classes.saveButton}>
          <Button positive>Save</Button>
        </div> */}
      </div>
    </div>
  );
};

export default UserImg;


// 現在の画像を取得してbackgroundに表示
// 初期値がnullなので、nullのときは
// 新しく画像をインポート
// インポートした画像をAuthに保存
// インポートした画像をbackgroundに表示(reloadしても消えないように)