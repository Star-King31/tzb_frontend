export type SpecialExhibit = {
  id: number; // 文物ID
  name: string; // 文物名称
  description: string; // 文物描述
  image: string; // 图片/多媒体资料
  era: string; // 年代/时期
  material: string; // 材质
  width: number; // 宽度
  height: number; // 高度
  depth: number; // 深度
  weight: number; // 重量
  value: string; // 文物价值
  story: string; // 文物故事
  protectionStatus: string; // 保护状态
  exhibitionHistory: string[]; // 展出历史
  relatedArtifacts: string[]; // 关联文物
}

