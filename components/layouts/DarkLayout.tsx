import { Props } from "next/script";
import { FC } from "react";

export const DarkLayout:FC<Props> = ({ children }) => {
// export const DarkLayout = ({ children } :{ children: string }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children } 
        </div>
    </div>
  );
};
