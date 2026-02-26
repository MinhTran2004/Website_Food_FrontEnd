"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

export default function TipTapEditor() {
    // const [text, setText] = useState();

    // const editor = useEditor({
    //     extensions: [
    //         StarterKit,
    //         Placeholder.configure({
    //             placeholder: "Nhập nội dung ở đây...",
    //         }),
    //     ],
    //     immediatelyRender: false,
    //     content: "<p>Bắt đầu soạn thảo...</p>",
    //     onUpdate: ({ editor }) => {
    //         const html = editor.getHTML();
    //         setText(html);
    //     },
    // });

    // if (!editor) return null;

    // const btnStyle = (active: boolean) => ({
    //     padding: "6px 10px",
    //     borderRadius: 6,
    //     border: "1px solid #ddd",
    //     background: active ? "#111" : "#fff",
    //     color: active ? "#fff" : "#111",
    //     cursor: "pointer",
    // });

    return (
        <div style={{ border: "1px solid #ddd", borderRadius: 12, overflow: "hidden", maxWidth: '100%' }}>
            {/* Toolbar */}
            {/* <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 10, borderBottom: "1px solid #eee", background: "#fafafa" }}>
                <button style={btnStyle(editor.isActive("bold"))} onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
                <button style={btnStyle(editor.isActive("italic"))} onClick={() => editor.chain().focus().toggleItalic().run()}>I</button>
                <button style={btnStyle(editor.isActive("strike"))} onClick={() => editor.chain().focus().toggleStrike().run()}>S</button>

                <button style={btnStyle(editor.isActive("heading", { level: 1 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
                <button style={btnStyle(editor.isActive("heading", { level: 2 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>

                <button style={btnStyle(editor.isActive("bulletList"))} onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
                <button style={btnStyle(editor.isActive("orderedList"))} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>

                <button style={btnStyle(false)} onClick={() => editor.chain().focus().setParagraph().run()}>P</button>
            </div> */}

            {/* Editor */}
            {/* <div style={{ padding: 14, minHeight: 180 }}>
                <EditorContent editor={editor} />

                <pre>{text}</pre>
            </div> */}
        </div>
    );
}
