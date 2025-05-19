import{j as e}from"./jsx-runtime-DzlC0hKS.js";import{useMDXComponents as l}from"./index-BhOTaKio.js";import{D as a}from"./Demo-CoQA1C2z.js";import{S as m,M as o}from"./MultiPagePopover.stories--h6PBCKN.js";import"./index-qCb0-TeD.js";import"./emotion-react-jsx-runtime.browser.esm-B6nDGTOp.js";import"./useHandler-HI23tEoY.js";import"./useEventCallback-HuInTmxh.js";import"./emotion-react.browser.esm-DKbCFQzN.js";import"./index-C-yJI2Ou.js";import"./iframe-CR1OspGg.js";import"./index-fivQpuRm.js";import"./index-CmoHrzZA.js";import"./index-K0Oj1rov.js";import"./index-DrFu-skq.js";import"./Provider-BcjEMKgq.js";import"./omit-LJmhX_jk.js";import"./presets-fZzeZ6Sn.js";import"./DisabledContext-NEMnJEZA.js";import"./index-DbGQkxQ5.js";import"./assignDisplayName-lT0r0-ot.js";import"./index-BA0eH0Wu.js";import"./inspectMessage-DlwZE6zu.js";import"./index-BAiONZ7V.js";import"./define-D3i8B5cg.js";import"./types-Dn-G_zsM.js";import"./traditional-B_ldJKp3.js";import"./index-CrYrvawI.js";import"./index-C5U6HIMD.js";import"./index-DzgdUzM0.js";import"./index-iJUMMFGI.js";import"./index-MOlr3Ojg.js";import"./index-BsfIDxJ3.js";import"./index-CatqC4ig.js";import"./property-DTA7hnOA.js";import"./get-DGJ4vF0c.js";import"./vanilla-DtBHub2h.js";import"./capitalize-CY0R7VOI.js";import"./memo-BZYTsoqr.js";import"./getDisplayName-Cdt1H-sM.js";import"./index-BYk_lHUg.js";import"./CloseOutlined-CfOpPp0C.js";import"./AntdIcon-C0KfWvva.js";import"./shadow-smhd3i8u.js";import"./EllipsisOutlined-DrjggAzd.js";import"./toConsumableArray-BjwuTSou.js";import"./Overflow-DF_X_I1g.js";import"./Portal-qV56MC8h.js";import"./index-NCLGaooH.js";import"./useSize-XLj32eBt.js";import"./useId-CkKFPa5_.js";import"./isVisible-DhUEo0yb.js";import"./KeyCode-lh1qUinJ.js";import"./Dropdown-Bwcoigng.js";import"./useCSSVarCls-DCHdCyfl.js";import"./motion-DdkSFxyu.js";import"./index-BzlLN0ST.js";import"./pickAttrs-XdSaTJtx.js";import"./List-BcMJ_vkB.js";import"./index-BL1rL1qh.js";import"./collapse-BbEVqHco.js";import"./LoadingOutlined-PTw75qLp.js";import"./reactNode-CVIZC-dj.js";import"./pathe.ff20891b-CZu1kPQR.js";import"./PleaseCheckDoc-bB7fbsQQ.js";import"./index-qv6OY2dV.js";import"./InfoCircleFilled-0VRkendn.js";import"./CloseCircleFilled-Bgzza4Eo.js";import"./context-bgT8s9yI.js";import"./asyncToGenerator-CUe5B5qN.js";import"./index-Dhe15Pii.js";import"./emotion-styled-base.browser.esm-DcS0-Etw.js";import"./random-CmfFXdz5.js";import"./delay-CaiE5JvH.js";import"./index-CVRwA_xR.js";import"./index-C4jkG3Yz.js";import"./index-8dFQQpR3.js";import"./DisabledContext-t2QVHVjL.js";import"./index-CAksj7fM.js";import"./index-CiDJ99qe.js";import"./ContextIsolator-CdD3uTNK.js";import"./Compact-VphdgA5n.js";import"./useZIndex-BbbELKB6.js";import"./colors-wf8q_7Rm.js";import"./presetColors-DLnX3ho6.js";import"./index-B04UsWsO.js";import"./NotFoundContent-42rRWz8w.js";import"./index-gEP6Tn1u.js";import"./Empty-Wvpx-ZQe.js";import"./index-BVhqM5T_.js";import"./PurePanel-Bml8ml_A.js";import"./useVariants-CK8wnbnE.js";import"./useLocale-D6ZQsxC3.js";import"./compact-item-5orumCwJ.js";import"./DownOutlined-C-IxbET4.js";import"./CheckOutlined-DcewmLkY.js";import"./SearchOutlined-CS-6PfVh.js";import"./useTranslation-XVYQH2mr.js";import"./index-CxjtMtYp.js";import"./index-DvseeTEo.js";import"./useBreakpoint-CVOk84jo.js";import"./index-vGCD89VU.js";const p=`import { useHandler } from "@chatbotgang/etude/react/useHandler";
import { css } from "@emotion/react";
import type { Meta } from "@storybook/react";
import { wrapPleaseCheckDoc } from "@zeffiroso/storybook/utils/PleaseCheckDoc";
import { memo } from "@zeffiroso/utils/react/memo";
import { Form, Menu } from "antd";
import { MotionConfig } from "framer-motion";
import { useMemo, useState } from "react";
import type { ValueOf } from "type-fest";
import { z } from "zod";

import { Flex } from "@/components/Box";
import type { MultiPagePopoverProps } from "@/components/Popover/MultiPagePopover";
import { MultiPagePopover } from "@/components/Popover/MultiPagePopover";
import { Select } from "@/components/Select";

const placementOptions: Array<MultiPagePopoverProps["placement"]> = [
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight",
];
export default {
  component: MultiPagePopover,
} satisfies Meta<typeof MultiPagePopover>;

const ContentKeySchema = z.enum(["base", "level2", "level2-2", "level3"]);
type ContentKey = z.infer<typeof ContentKeySchema>;

const ContentKeyRecord = {
  Base: "base",
  Level2: "level2",
  Level2Of2: "level2-2",
  Level3: "level3",
} satisfies Record<string, ContentKey>;

(() => {
  // Make sure all enum values are used in the record.
  const anyObj: any = new Object();
  type Result = ValueOf<typeof ContentKeyRecord>;
  type Expected = ContentKey;
  anyObj as Result satisfies Expected;
  anyObj as Expected satisfies Result;
})();

const MultiPagePopoverDemo = memo(function MultiPagePopoverDemo() {
  const [motionTransitionDuration, setMotionTransitionDuration] = useState<
    undefined | number
  >(undefined);
  const [placement, setPlacement] =
    useState<MultiPagePopoverProps["placement"]>("bottomLeft");
  const [contentOuterTransitionDuration, setContentOuterTransitionDuration] =
    useState<MultiPagePopoverProps["contentOuterTransitionDuration"]>(
      undefined,
    );
  const [
    contentOuterTransitionTimingFunction,
    setContentOuterTransitionTimingFunction,
  ] =
    useState<MultiPagePopoverProps["contentOuterTransitionTimingFunction"]>(
      undefined,
    );
  const [contentKey, setContentKey] = useState<ContentKey | undefined>(
    undefined,
  );

  const contentMap = useMemo<
    Record<
      ContentKey,
      {
        content: React.ReactNode;
        level: number;
      }
    >
  >(
    () => ({
      [ContentKeyRecord.Base]: {
        content: (
          <Menu
            items={[
              {
                key: "close",
                label: "Close",
                onClick: () => {
                  setContentKey(undefined);
                },
              },
              {
                key: "base",
                label: "Base",
                disabled: true,
              },
              {
                key: "level2",
                label: "Level 2",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Level2);
                },
              },
              {
                key: "level2_2",
                label: "Level 2-2",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Level2Of2);
                },
              },
            ]}
          />
        ),
        level: 1,
      },
      [ContentKeyRecord.Level2]: {
        content: (
          <Menu
            items={[
              {
                key: "base",
                label: "Base",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Base);
                },
              },
              {
                key: "level2",
                label: "Level 2",
                disabled: true,
              },
              {
                key: "level3",
                label: "Level 3",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Level3);
                },
              },
            ]}
          />
        ),
        level: 2,
      },
      [ContentKeyRecord.Level2Of2]: {
        content: (
          <Menu
            items={[
              {
                key: "base",
                label: "Base",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Base);
                },
              },
              {
                key: "level2_2",
                label: "Level 2-2 ⬅️ Current here",
                disabled: true,
              },
              {
                key: "level3",
                label: "Level 3",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Level3);
                },
              },
            ]}
          />
        ),
        level: 2,
      },
      [ContentKeyRecord.Level3]: {
        content: (
          <Menu
            items={[
              {
                key: "base",
                label: "Base",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Base);
                },
              },
              {
                key: "level2",
                label: "Level 2",
                onClick: (_e) => {
                  setContentKey(ContentKeyRecord.Level2);
                },
              },
              {
                key: "level2_2",
                label: "Level 2-2",
                onClick: () => {
                  setContentKey(ContentKeyRecord.Level2Of2);
                },
              },
              {
                key: "level3",
                label: "Level3",
                disabled: true,
              },
            ]}
          />
        ),
        level: 3,
      },
    }),
    [],
  );

  const content = useMemo<MultiPagePopoverProps["content"]>(() => {
    if (!contentKey) return undefined;

    return contentMap[contentKey].content;
  }, [contentKey, contentMap]);
  const level = useMemo<MultiPagePopoverProps["level"]>(() => {
    if (!contentKey) return undefined;

    return contentMap[contentKey].level;
  }, [contentKey, contentMap]);
  const toggle = useHandler(function toggle() {
    setContentKey((current) =>
      current === undefined ? ContentKeyRecord.Base : undefined,
    );
  });
  return (
    <Flex
      css={css\`
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
      \`}
    >
      <Flex
        css={css\`
          flex-wrap: wrap;
          gap: 1em;
        \`}
      >
        <Form.Item label="motionTransitionDuration">
          <Select<undefined | number>
            style={{
              minWidth: "10rem",
            }}
            allowClear
            options={[
              {
                value: 0,
                label: "0",
              },
              {
                value: 0.3,
                label: "0.3",
              },
              {
                value: 3,
                label: "3",
              },
            ]}
            value={motionTransitionDuration}
            onChange={setMotionTransitionDuration}
          />
        </Form.Item>
        <Form.Item label="placement">
          <Select<MultiPagePopoverProps["placement"]>
            style={{
              minWidth: "10rem",
            }}
            options={placementOptions.map((placement) => ({
              value: placement,
              title: placement,
              label: placement,
            }))}
            value={placement}
            onChange={setPlacement}
          />
        </Form.Item>
        <Form.Item label="contentOuterTransitionDuration">
          <Select<MultiPagePopoverProps["contentOuterTransitionDuration"]>
            style={{
              minWidth: "10rem",
            }}
            allowClear
            options={[
              {
                value: 0,
                label: "0",
              },
              {
                value: 300,
                label: "300",
              },
              {
                value: 3000,
                label: "3000",
              },
            ]}
            value={contentOuterTransitionDuration}
            onChange={setContentOuterTransitionDuration}
          />
        </Form.Item>
        <Form.Item label="contentOuterTransitionTimingFunction">
          <Select<MultiPagePopoverProps["contentOuterTransitionTimingFunction"]>
            style={{
              minWidth: "10rem",
            }}
            allowClear
            options={[
              {
                value: "ease",
                label: "ease",
              },
              {
                value: "ease-in",
                label: "ease-in",
              },
              {
                value: "ease-out",
                label: "ease-out",
              },
              {
                value: "ease-in-out",
                label: "ease-in-out",
              },
              {
                value: "cubic-bezier(0.65, 0.05, 0.36, 1)",
                label: "In Out · Cubic",
              },
              {
                value: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                label: "In Out · Back",
              },
            ]}
            value={contentOuterTransitionTimingFunction}
            onChange={setContentOuterTransitionTimingFunction}
          />
        </Form.Item>
      </Flex>
      <Flex
        css={css\`
          width: 500px;
          height: 500px;
          align-items: center;
          justify-content: center;
        \`}
      >
        <MotionConfig transition={{ duration: motionTransitionDuration }}>
          <MultiPagePopover
            content={content}
            level={level}
            placement={placement}
            {...(!contentOuterTransitionDuration
              ? null
              : {
                  contentOuterTransitionDuration,
                })}
            {...(!contentOuterTransitionTimingFunction
              ? null
              : {
                  contentOuterTransitionTimingFunction,
                })}
          >
            <button onClick={toggle}>=== === Click me === ===</button>
          </MultiPagePopover>
        </MotionConfig>
      </Flex>
    </Flex>
  );
});

export const MultiPagePopoverStory = wrapPleaseCheckDoc(MultiPagePopoverDemo);
`;function i(n){const t={h1:"h1",p:"p",...l(),...n.components};return m||r("Stories",!1),o||r("Stories.MultiPagePopoverStory",!0),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"multipagepopover",children:"MultiPagePopover"}),`
`,e.jsx(t.p,{children:"A MultiPagePopover is a popover capable of containing multiple pages, featuring smooth transitions between levels."}),`
`,e.jsx(a,{demo:e.jsx(o,{}),files:[{path:"demo.tsx",className:"language-tsx",content:p}]})]})}function re(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}function r(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{re as default};
