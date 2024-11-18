import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import styles from "./try-it-out.module.scss";

export default function TryItOut({ defaultCode }) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.tab}></div>
            <div className={styles.mainBodyContainer}>
                <h1>Try It Out! </h1>
                <div className={styles.sandpackContainer}>
                    <Sandpack
                        template="react"
                        options={{
                            showNavigator: true,
                            showLineNumbers: true,
                            editorHeight: 500,
                            autorun: true,
                        }}
                        theme="dark"
                        files={defaultCode}
                    />
                </div>
            </div>
        </div>
    );
}
