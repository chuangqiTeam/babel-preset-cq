# babel-preset-cq

## 用法

```

// babel配置
{
    "presets": ["cq"]
}

```

## 配置环境

```

// web环境
{
    presets: [["cq", {"target": "web", modules: false, env: 'development'}]]
}

// node环境
{
    presets: [["cq", {"target": "node"}]]
}
```
