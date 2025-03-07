(() => {
  const lang = 'zh-cn';

  if (globalThis.MonacoLocales == null) globalThis.MonacoLocales = {};
  if (globalThis.MonacoLocales[lang] != null) return;

  globalThis.MonacoLocales[lang] = {
    'vs/base/browser/ui/actionbar/actionViewItems': {
      titleLabel: '{0} ({1})',
    },
    'vs/base/browser/ui/button/button': {
      'button dropdown more actions': '更多操作...',
    },
    'vs/base/browser/ui/dialog/dialog': {
      dialogClose: '关闭对话框',
      dialogErrorMessage: '错误',
      dialogInfoMessage: '信息',
      dialogPendingMessage: '正在进行',
      dialogWarningMessage: '警告',
      ok: '确定',
    },
    'vs/base/browser/ui/dropdown/dropdownActionViewItem': {
      moreActions: '更多操作...',
    },
    'vs/base/browser/ui/findinput/findInput': {
      defaultLabel: '输入',
    },
    'vs/base/browser/ui/findinput/findInputToggles': {
      caseDescription: '区分大小写',
      regexDescription: '使用正则表达式',
      wordsDescription: '全字匹配',
    },
    'vs/base/browser/ui/findinput/replaceInput': {
      defaultLabel: '输入',
      'label.preserveCaseToggle': '保留大小写',
    },
    'vs/base/browser/ui/iconLabel/iconLabelHover': {
      'iconLabel.loading': '正在加载…',
    },
    'vs/base/browser/ui/inputbox/inputBox': {
      alertErrorMessage: '错误: {0}',
      alertInfoMessage: '信息: {0}',
      alertWarningMessage: '警告: {0}',
      clearedInput: '清除的输入',
      'history.inputbox.hint': '对于历史记录',
    },
    'vs/base/browser/ui/keybindingLabel/keybindingLabel': {
      unbound: '未绑定',
    },
    'vs/base/browser/ui/menu/menubar': {
      mAppMenu: '应用程序菜单',
      mMore: '更多',
    },
    'vs/base/browser/ui/selectBox/selectBoxCustom': {
      selectBox: '选择框',
    },
    'vs/base/browser/ui/splitview/paneview': {
      viewSection: '{0}部分',
    },
    'vs/base/browser/ui/toolbar/toolbar': {
      moreActions: '更多操作...',
    },
    'vs/base/browser/ui/tree/abstractTree': {
      close: '关闭',
      filter: '筛选器',
      fuzzySearch: '模糊匹配',
      'not found': '未找到元素。',
      'type to filter': '要筛选的类型',
      'type to search': '要搜索的类型',
    },
    'vs/base/browser/ui/tree/treeDefaults': {
      'collapse all': '全部折叠',
    },
    'vs/base/common/actions': {
      'submenu.empty': '(空)',
    },
    'vs/base/common/date': {
      'date.fromNow.days.plural': '{0} 天',
      'date.fromNow.days.plural.ago': '{0} 天前',
      'date.fromNow.days.singular': '{0} 天',
      'date.fromNow.days.singular.ago': '{0} 天前',
      'date.fromNow.hours.plural': '{0} 小时',
      'date.fromNow.hours.plural.ago': '{0} 小时前',
      'date.fromNow.hours.plural.ago.fullWord': '{0} 小时前',
      'date.fromNow.hours.plural.fullWord': '{0} 小时',
      'date.fromNow.hours.singular': '{0} 小时',
      'date.fromNow.hours.singular.ago': '{0} 小时前',
      'date.fromNow.hours.singular.ago.fullWord': '{0} 小时前',
      'date.fromNow.hours.singular.fullWord': '{0} 小时',
      'date.fromNow.in': '{0} 后',
      'date.fromNow.minutes.plural': '{0} 分钟',
      'date.fromNow.minutes.plural.ago': '{0} 分钟前',
      'date.fromNow.minutes.plural.ago.fullWord': '{0} 分钟前',
      'date.fromNow.minutes.plural.fullWord': '{0} 分钟',
      'date.fromNow.minutes.singular': '{0} 分钟',
      'date.fromNow.minutes.singular.ago': '{0} 分钟前',
      'date.fromNow.minutes.singular.ago.fullWord': '{0} 分钟前',
      'date.fromNow.minutes.singular.fullWord': '{0} 分钟',
      'date.fromNow.months.plural': '{0} 个月',
      'date.fromNow.months.plural.ago': '{0} 个月前',
      'date.fromNow.months.plural.ago.fullWord': '{0} 个月前',
      'date.fromNow.months.plural.fullWord': '{0} 个月',
      'date.fromNow.months.singular': '{0} 个月',
      'date.fromNow.months.singular.ago': '{0} 个月前',
      'date.fromNow.months.singular.ago.fullWord': '{0} 个月前',
      'date.fromNow.months.singular.fullWord': '{0} 月',
      'date.fromNow.now': '现在',
      'date.fromNow.seconds.plural': '{0} 秒',
      'date.fromNow.seconds.plural.ago': '{0} 秒前',
      'date.fromNow.seconds.plural.ago.fullWord': '{0} 秒前',
      'date.fromNow.seconds.plural.fullWord': '{0} 秒',
      'date.fromNow.seconds.singular': '{0} 秒',
      'date.fromNow.seconds.singular.ago': '{0} 秒前',
      'date.fromNow.seconds.singular.ago.fullWord': '{0} 秒前',
      'date.fromNow.seconds.singular.fullWord': '{0} 秒',
      'date.fromNow.weeks.plural': '{0} 周',
      'date.fromNow.weeks.plural.ago': '{0} 周前',
      'date.fromNow.weeks.plural.ago.fullWord': '{0} 周前',
      'date.fromNow.weeks.plural.fullWord': '{0} 周',
      'date.fromNow.weeks.singular': '{0} 周',
      'date.fromNow.weeks.singular.ago': '{0} 周前',
      'date.fromNow.weeks.singular.ago.fullWord': '{0} 周前',
      'date.fromNow.weeks.singular.fullWord': '{0} 周',
      'date.fromNow.years.plural': '{0} 年',
      'date.fromNow.years.plural.ago': '{0} 年前',
      'date.fromNow.years.plural.ago.fullWord': '{0} 年前',
      'date.fromNow.years.plural.fullWord': '{0} 年',
      'date.fromNow.years.singular': '{0} 年',
      'date.fromNow.years.singular.ago': '{0} 年前',
      'date.fromNow.years.singular.ago.fullWord': '{0} 年前',
      'date.fromNow.years.singular.fullWord': '{0} 年',
    },
    'vs/base/common/errorMessage': {
      'error.defaultMessage': '出现未知错误。有关详细信息，请参阅日志。',
      'error.moreErrors': '{0} 个(共 {1} 个错误)',
      nodeExceptionMessage: '发生了系统错误 ({0})',
      'stackTrace.format': '{0}: {1}',
    },
    'vs/base/common/jsonErrorMessages': {
      'error.closeBraceExpected': '需要右大括号',
      'error.closeBracketExpected': '需要右括号',
      'error.colonExpected': '需要冒号',
      'error.commaExpected': '需要逗号',
      'error.endOfFileExpected': '文件应结束',
      'error.invalidNumberFormat': '数字格式无效',
      'error.invalidSymbol': '无效符号',
      'error.propertyNameExpected': '需要属性名',
      'error.valueExpected': '需要值',
    },
    'vs/base/common/keybindingLabels': {
      altKey: 'Alt',
      'altKey.long': 'Alt',
      'cmdKey.long': 'Command',
      ctrlKey: 'Ctrl',
      'ctrlKey.long': 'Control',
      'optKey.long': '选项',
      shiftKey: 'Shift',
      'shiftKey.long': 'Shift',
      superKey: '超键',
      'superKey.long': '超键',
      windowsKey: 'Windows',
      'windowsKey.long': 'Windows',
    },
    'vs/base/common/platform': {
      ensureLoaderPluginIsLoaded: '_',
    },
    'vs/base/node/zip': {
      incompleteExtract: '解压不完整。找到了 {0} / {1} 个项目',
      'invalid file': '提取 {0} 时出错。文件无效。',
      notFound: '在 Zip 中找不到 {0}。',
    },
    'vs/editor/browser/controller/textAreaHandler': {
      accessibilityOffAriaLabel: '现在无法访问编辑器。按 {0} 获取选项。',
      editor: '编辑器',
    },
    'vs/editor/browser/coreCommands': {
      removedCursor: '已删除辅助游标',
      stickydesc: '即使转到较长的行，也一直到末尾',
    },
    'vs/editor/browser/editorExtensions': {
      miRedo: '恢复(&&R)',
      miSelectAll: '全选(&&S)',
      miUndo: '撤消(&&U)',
      redo: '恢复',
      selectAll: '选择全部',
      undo: '撤消',
    },
    'vs/editor/browser/widget/codeEditorWidget': {
      'cursors.maximum':
        '已将光标数限制为 {0}。请考虑使用 [查找和替换](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace)进行较大的更改或增加编辑器多光标限制设置。',
      goToSetting: '增加多光标限制',
    },
    'vs/editor/browser/widget/diffEditor.contribution': {
      'editor.action.diffReview.next': '转至下一个差异',
      'editor.action.diffReview.prev': '转至上一个差异',
    },
    'vs/editor/browser/widget/diffEditorWidget': {
      'diff-aria-navigation-tip': ' 使用 Shift + F7 导航更改',
      'diff.tooLarge': '文件过大，无法比较。',
      diffInsertIcon: '差异编辑器中插入项的线条修饰。',
      diffRemoveIcon: '差异编辑器中删除项的线条修饰。',
      revertChangeHoverMessage: '单击以还原更改',
    },
    'vs/editor/browser/widget/diffEditorWidget2/colors': {
      'diffEditor.move.border': '在差异编辑器中移动的文本的边框颜色。',
    },
    'vs/editor/browser/widget/diffEditorWidget2/decorations': {
      diffInsertIcon: '差异编辑器中插入项的线条修饰。',
      diffRemoveIcon: '差异编辑器中删除项的线条修饰。',
      revertChangeHoverMessage: '单击以还原更改',
    },
    'vs/editor/browser/widget/diffEditorWidget2/diffEditorEditors': {
      'diff-aria-navigation-tip': ' 使用 Shift + F7 导航更改',
    },
    'vs/editor/browser/widget/diffEditorWidget2/diffEditorWidget2.contribution':
      {
        collapseUnchangedRegions: '显示未更改的区域',
        showMoves: '显示移动',
        showUnchangedRegions: '折叠未更改的区域',
        toggleCollapseUnchangedRegions: '切换折叠未更改的区域',
        toggleShowMovedCodeBlocks: '切换显示移动的代码块',
      },
    'vs/editor/browser/widget/diffEditorWidget2/diffReview': {
      blankLine: '空白',
      deleteLine: '- {0}原始行{1}',
      diffReviewCloseIcon: '差异评审中的“关闭”图标。',
      diffReviewInsertIcon: '差异评审中的“插入”图标。',
      diffReviewRemoveIcon: '差异评审中的“删除”图标。',
      equalLine: '{0}原始行{1}修改的行{2}',
      header: '差异 {0}/ {1}: 原始行 {2}，{3}，修改后的行 {4}，{5}',
      insertLine: '+ {0}修改的行{1}',
      'label.close': '关闭',
      more_lines_changed: '更改了 {0} 行',
      no_lines_changed: '未更改行',
      one_line_changed: '更改了 1 行',
      unchangedLine: '{0} 未更改的行 {1}',
    },
    'vs/editor/browser/widget/diffEditorWidget2/inlineDiffDeletedCodeMargin': {
      'diff.clipboard.copyChangedLineContent.label': '复制更改的行({0})',
      'diff.clipboard.copyChangedLinesContent.label': '复制更改的行',
      'diff.clipboard.copyChangedLinesContent.single.label': '复制更改的行',
      'diff.clipboard.copyDeletedLineContent.label': '复制已删除的行({0})',
      'diff.clipboard.copyDeletedLinesContent.label': '复制已删除的行',
      'diff.clipboard.copyDeletedLinesContent.single.label': '复制已删除的行',
      'diff.inline.revertChange.label': '还原此更改',
    },
    'vs/editor/browser/widget/diffEditorWidget2/unchangedRanges': {
      foldUnchanged: '折叠未更改的区域',
    },
    'vs/editor/browser/widget/diffReview': {
      blankLine: '空白',
      deleteLine: '- {0}原始行{1}',
      diffReviewCloseIcon: '差异评审中的“关闭”图标。',
      diffReviewInsertIcon: '差异评审中的“插入”图标。',
      diffReviewRemoveIcon: '差异评审中的“删除”图标。',
      equalLine: '{0}原始行{1}修改的行{2}',
      header: '差异 {0}/ {1}: 原始行 {2}，{3}，修改后的行 {4}，{5}',
      insertLine: '+ {0}修改的行{1}',
      'label.close': '关闭',
      more_lines_changed: '更改了 {0} 行',
      no_lines_changed: '未更改行',
      one_line_changed: '更改了 1 行',
      unchangedLine: '{0} 未更改的行 {1}',
    },
    'vs/editor/browser/widget/inlineDiffMargin': {
      'diff.clipboard.copyChangedLineContent.label': '复制更改的行({0})',
      'diff.clipboard.copyChangedLinesContent.label': '复制更改的行',
      'diff.clipboard.copyChangedLinesContent.single.label': '复制更改的行',
      'diff.clipboard.copyDeletedLineContent.label': '复制已删除的行({0})',
      'diff.clipboard.copyDeletedLinesContent.label': '复制已删除的行',
      'diff.clipboard.copyDeletedLinesContent.single.label': '复制已删除的行',
      'diff.inline.revertChange.label': '还原此更改',
    },
    'vs/editor/common/config/editorConfigurationSchema': {
      codeLens: '控制是否在编辑器中显示 CodeLens。',
      collapseUnchangedRegions:
        '控制差异编辑器是否显示未更改的区域。仅当设置了 {0} 时才有效。',
      detectIndentation:
        '控制在基于文件内容打开文件时是否自动检测 {0} 和 {1}。',
      'diffAlgorithm.advanced': '使用高级差异算法。',
      'diffAlgorithm.legacy': '使用旧差异算法。',
      'editor.experimental.asyncTokenization':
        '控制是否应在 Web 辅助进程上异步进行标记化。',
      'editor.experimental.asyncTokenizationLogging':
        '控制是否应记录异步词汇切分。仅用于调试。',
      'editor.experimental.asyncTokenizationVerification':
        '控制是否应对旧版后台令牌化验证异步令牌化。可能会减慢令牌化速度。仅用于调试。',
      editorConfigurationTitle: '编辑器',
      ignoreTrimWhitespace:
        '启用后，差异编辑器将忽略前导空格或尾随空格中的更改。',
      indentSize:
        '用于缩进或 `"tabSize"` 的空格数，可使用 `#editor.tabSize#` 中的值。当 `#editor.detectIndentation#` 处于打开状态时，将根据文件内容替代此设置。',
      insertSpaces:
        '按 `Tab` 时插入空格。当 {0} 打开时，将根据文件内容替代此设置。',
      largeFileOptimizations:
        '对大型文件进行特殊处理，禁用某些内存密集型功能。',
      maxComputationTime:
        '超时(以毫秒为单位)，之后将取消差异计算。使用0表示没有超时。',
      maxFileSize: '要为其计算差异的最大文件大小(MB)。使用 0 表示无限制。',
      maxTokenizationLineLength: '由于性能原因，超过这个长度的行将不会被标记',
      renderIndicators:
        '控制差异编辑器是否为添加/删除的更改显示 +/- 指示符号。',
      renderMarginRevertIcon:
        '启用后，差异编辑器会在其字形边距中显示箭头以还原更改。',
      'schema.brackets': '定义增加和减少缩进的括号。',
      'schema.closeBracket': '右方括号字符或字符串序列。',
      'schema.colorizedBracketPairs':
        '如果启用方括号对着色，则按照其嵌套级别定义已着色的方括号对。',
      'schema.openBracket': '左方括号字符或字符串序列。',
      'semanticHighlighting.configuredByTheme':
        '语义突出显示是由当前颜色主题的 "semanticHighlighting" 设置配置的。',
      'semanticHighlighting.enabled':
        '控制是否为支持它的语言显示语义突出显示。',
      'semanticHighlighting.false': '对所有颜色主题禁用语义突出显示。',
      'semanticHighlighting.true': '对所有颜色主题启用语义突出显示。',
      showEmptyDecorations:
        '控制差异编辑器是否显示空修饰，以查看插入或删除字符的位置。',
      showMoves:
        '控制差异编辑器是否应显示检测到的代码移动情况。仅当设置了 {0} 时才有效。',
      sideBySide: '控制差异编辑器的显示方式是并排还是内联。',
      stablePeek:
        '保持速览编辑器处于打开状态，即使双击其中的内容或者点击 `Escape` 键也是如此。',
      tabSize:
        '一个制表符等于的空格数。当 {0} 打开时，将根据文件内容替代此设置。',
      trimAutoWhitespace: '删除自动插入的尾随空白符号。',
      useVersion2: '控制差异编辑器是使用新实现还是旧实现。',
      wordBasedSuggestions: '控制是否根据文档中的字词计算自动补全列表。',
      wordBasedSuggestionsMode: '控制通过哪些文档计算基于字词的补全。',
      'wordBasedSuggestionsMode.allDocuments': '建议所有打开的文档中的字词。',
      'wordBasedSuggestionsMode.currentDocument': '仅建议活动文档中的字词。',
      'wordBasedSuggestionsMode.matchingDocuments':
        '建议使用同一语言的所有打开的文档中的字词。',
      'wordWrap.inherit': '行将根据 {0} 设置进行换行。',
      'wordWrap.off': '永不换行。',
      'wordWrap.on': '将在视区宽度处换行。',
    },
    'vs/editor/common/config/editorOptions': {
      acceptSuggestionOnCommitCharacter:
        '控制是否应在遇到提交字符时接受建议。例如，在 JavaScript 中，半角分号 (`;`) 可以为提交字符，能够在接受建议的同时键入该字符。',
      acceptSuggestionOnEnter:
        '控制除了 `Tab` 键以外， `Enter` 键是否同样可以接受建议。这能减少“插入新行”和“接受建议”命令之间的歧义。',
      acceptSuggestionOnEnterSmart:
        '仅当建议包含文本改动时才可使用 `Enter` 键进行接受。',
      accessibilityPageSize:
        '控制编辑器中可由屏幕阅读器一次读出的行数。我们检测到屏幕阅读器时，会自动将默认值设置为 500。警告: 如果行数大于默认值，可能会影响性能。',
      accessibilitySupport:
        '控制 UI 是否应在已针对屏幕阅读器进行优化的模式下运行。',
      'accessibilitySupport.auto': '连接屏幕阅读器后使用平台 API 进行检测',
      'accessibilitySupport.off': '假定未连接屏幕阅读器',
      'accessibilitySupport.on': '针对屏幕阅读器的使用进行优化',
      alternativeDeclarationCommand:
        '当"转到声明"的结果为当前位置时将要执行的替代命令的 ID。',
      alternativeDefinitionCommand:
        '当"转到定义"的结果为当前位置时将要执行的替代命令的 ID。',
      alternativeImplementationCommand:
        '当"转到实现"的结果为当前位置时将要执行的替代命令的 ID。',
      alternativeReferenceCommand:
        '当"转到引用"的结果是当前位置时正在执行的替代命令 ID。',
      alternativeTypeDefinitionCommand:
        '当"转到类型定义"的结果是当前位置时正在执行的备用命令 ID。',
      autoClosingBrackets: '控制编辑器是否在左括号后自动插入右括号。',
      autoClosingDelete: '控制在删除时编辑器是否应删除相邻的右引号或右方括号。',
      autoClosingOvertype: '控制编辑器是否应改写右引号或右括号。',
      autoClosingQuotes: '控制编辑器是否在左引号后自动插入右引号。',
      autoIndent:
        '控制编辑器是否应在用户键入、粘贴、移动或缩进行时自动调整缩进。',
      autoSurround:
        '控制在键入引号或方括号时，编辑器是否应自动将所选内容括起来。',
      'bracketPairColorization.enabled':
        '控制是否启用括号对着色。请使用 {0} 重写括号突出显示颜色。',
      'bracketPairColorization.independentColorPoolPerBracketType':
        '控制每个方括号类型是否具有自己的独立颜色池。',
      codeActions: '在编辑器中启用代码操作小灯泡提示。',
      codeLens: '控制是否在编辑器中显示 CodeLens。',
      codeLensFontFamily: '控制 CodeLens 的字体系列。',
      codeLensFontSize:
        '控制 CodeLens 的字号(以像素为单位)。设置为 0 时，将使用 90% 的 `#editor.fontSize#`。',
      colorDecoratorActivatedOn: '控制从颜色修饰器显示颜色选取器的条件',
      colorDecorators: '控制编辑器是否显示内联颜色修饰器和颜色选取器。',
      colorDecoratorsLimit: '控制可一次性在编辑器中呈现的最大颜色修饰器数。',
      columnSelection: '启用使用鼠标和键进行列选择。',
      'comments.ignoreEmptyLines':
        '控制在对行注释执行切换、添加或删除操作时，是否应忽略空行。',
      'comments.insertSpace': '控制在注释时是否插入空格字符。',
      copyWithSyntaxHighlighting: '控制在复制时是否同时复制语法高亮。',
      cursorBlinking: '控制光标的动画样式。',
      cursorSmoothCaretAnimation: '控制是否启用平滑插入动画。',
      'cursorSmoothCaretAnimation.explicit':
        '仅当用户使用显式手势移动光标时，才启用平滑脱字号动画。',
      'cursorSmoothCaretAnimation.off': '已禁用平滑脱字号动画。',
      'cursorSmoothCaretAnimation.on': '始终启用平滑脱字号动画。',
      cursorStyle: '控制光标样式。',
      cursorSurroundingLines:
        '控制光标周围可见的前置行(最小值为 0)和尾随行(最小值为 1)的最小数目。在其他一些编辑器中称为 “scrollOff” 或 “scrollOffset”。',
      cursorSurroundingLinesStyle: '控制何时应强制执行"光标环绕行"。',
      'cursorSurroundingLinesStyle.all':
        '始终强制执行 "cursorSurroundingLines"',
      'cursorSurroundingLinesStyle.default':
        '仅当通过键盘或 API 触发时，才会强制执行"光标环绕行"。',
      cursorWidth:
        '当 `#editor.cursorStyle#` 设置为 `line` 时，控制光标的宽度。',
      defaultColorDecorators:
        '控制是否应使用默认文档颜色提供程序显示内联颜色修饰',
      definitionLinkOpensInPeek:
        '控制"转到定义"鼠标手势是否始终打开预览小部件。',
      deprecated:
        '此设置已弃用，请改用单独的设置，如"editor.suggest.showKeywords"或"editor.suggest.showSnippets"。',
      dragAndDrop: '控制在编辑器中是否允许通过拖放来移动选中内容。',
      'dropIntoEditor.enabled':
        '控制是否可以通过按住 `Shift` (而不是在编辑器中打开文件)将文件拖放到编辑器中。',
      'dropIntoEditor.showDropSelector':
        '控制将文件放入编辑器时是否显示小组件。使用此小组件可以控制文件的删除方式。',
      'dropIntoEditor.showDropSelector.afterDrop':
        '将文件放入编辑器后显示放置选择器小组件。',
      'dropIntoEditor.showDropSelector.never':
        '切勿显示放置选择器小组件。而是始终使用默认删除提供程序。',
      'editor.autoClosingBrackets.beforeWhitespace':
        '仅当光标位于空白字符左侧时，才自动闭合括号。',
      'editor.autoClosingBrackets.languageDefined':
        '使用语言配置确定何时自动闭合括号。',
      'editor.autoClosingDelete.auto':
        '仅在自动插入时才删除相邻的右引号或右括号。',
      'editor.autoClosingOvertype.auto': '仅在自动插入时才改写右引号或右括号。',
      'editor.autoClosingQuotes.beforeWhitespace':
        '仅当光标位于空白字符左侧时，才自动闭合引号。',
      'editor.autoClosingQuotes.languageDefined':
        '使用语言配置确定何时自动闭合引号。',
      'editor.autoIndent.advanced':
        '编辑器将保留当前行的缩进、使用语言定义的括号并调用语言定义的特定 onEnterRules。',
      'editor.autoIndent.brackets':
        '编辑器将保留当前行的缩进并遵循语言定义的括号。',
      'editor.autoIndent.full':
        '编辑器将保留当前行的缩进，使用语言定义的括号，调用由语言定义的特殊输入规则，并遵循由语言定义的缩进规则。',
      'editor.autoIndent.keep': '编辑器将保留当前行的缩进。',
      'editor.autoIndent.none': '编辑器不会自动插入缩进。',
      'editor.autoSurround.brackets': '使用括号而非引号来包住所选内容。',
      'editor.autoSurround.languageDefined':
        '使用语言配置确定何时自动包住所选内容。',
      'editor.autoSurround.quotes': '使用引号而非括号来包住所选内容。',
      'editor.colorDecoratorActivatedOn.click':
        '单击颜色修饰器时显示颜色选取器',
      'editor.colorDecoratorActivatedOn.clickAndHover':
        '在颜色修饰器单击和悬停时使颜色选取器同时显示',
      'editor.colorDecoratorActivatedOn.hover':
        '使颜色选取器在颜色修饰器悬停时显示',
      'editor.editor.gotoLocation.multipleDeclarations':
        '控制存在多个目标位置时"转到声明"命令的行为。',
      'editor.editor.gotoLocation.multipleDefinitions':
        '控制存在多个目标位置时"转到定义"命令的行为。',
      'editor.editor.gotoLocation.multipleImplemenattions':
        '控制存在多个目标位置时"转到实现"命令的行为。',
      'editor.editor.gotoLocation.multipleReferences':
        '控制存在多个目标位置时"转到引用"命令的行为。',
      'editor.editor.gotoLocation.multipleTypeDefinitions':
        '控制存在多个目标位置时"转到类型定义"命令的行为。',
      'editor.find.autoFindInSelection.always':
        '始终自动打开“在选定内容中查找”。',
      'editor.find.autoFindInSelection.multiline':
        '选择多行内容时，自动打开“在选定内容中查找”。',
      'editor.find.autoFindInSelection.never':
        '从不自动打开“在选定内容中查找”(默认)。',
      'editor.find.seedSearchStringFromSelection.always':
        '始终为编辑器选择中的搜索字符串设定种子，包括光标位置的字词。',
      'editor.find.seedSearchStringFromSelection.never':
        '切勿为编辑器选择中的搜索字符串设定种子。',
      'editor.find.seedSearchStringFromSelection.selection':
        '仅为编辑器选择中的搜索字符串设定种子。',
      'editor.gotoLocation.multiple.deprecated':
        '此设置已弃用，请改用单独的设置，如"editor.editor.gotoLocation.multipleDefinitions"或"editor.editor.gotoLocation.multipleImplementations"。',
      'editor.gotoLocation.multiple.goto':
        '转到主结果，并对其他结果启用无速览导航',
      'editor.gotoLocation.multiple.gotoAndPeek': '转到主结果并显示速览视图',
      'editor.gotoLocation.multiple.peek': '显示结果的速览视图(默认)',
      'editor.guides.bracketPairs': '控制是否启用括号对指南。',
      'editor.guides.bracketPairs.active': '仅为活动括号对启用括号对参考线。',
      'editor.guides.bracketPairs.false': '禁用括号对参考线。',
      'editor.guides.bracketPairs.true': '启用括号对参考线。',
      'editor.guides.bracketPairsHorizontal': '控制是否启用水平括号对指南。',
      'editor.guides.bracketPairsHorizontal.active':
        '仅为活动括号对启用水平参考线。',
      'editor.guides.bracketPairsHorizontal.false': '禁用水平括号对参考线。',
      'editor.guides.bracketPairsHorizontal.true':
        '启用水平参考线作为垂直括号对参考线的添加项。',
      'editor.guides.highlightActiveBracketPair':
        '控制编辑器是否应突出显示活动的括号对。',
      'editor.guides.highlightActiveIndentation':
        '控制是否突出显示编辑器中活动的缩进参考线。',
      'editor.guides.highlightActiveIndentation.always':
        '突出显示活动缩进参考线，即使突出显示了括号参考线。',
      'editor.guides.highlightActiveIndentation.false':
        '不要突出显示活动缩进参考线。',
      'editor.guides.highlightActiveIndentation.true':
        '突出显示活动缩进参考线。',
      'editor.guides.indentation': '控制编辑器是否显示缩进参考线。',
      'editor.inlayHints.off': '已禁用内嵌提示',
      'editor.inlayHints.offUnlessPressed':
        '默认情况下隐藏内嵌提示，并在按住 {0} 时显示',
      'editor.inlayHints.on': '已启用内嵌提示',
      'editor.inlayHints.onUnlessPressed':
        '默认情况下显示内嵌提示，并在按住 {0} 时隐藏',
      'editor.stickyScroll.defaultModel':
        '定义用于确定要粘贴的行的模型。如果大纲模型不存在，它将回退到回退到缩进模型的折叠提供程序模型上。在所有三种情况下都遵循此顺序。',
      'editor.stickyScroll.enabled':
        '在编辑器顶部的滚动过程中显示嵌套的当前作用域。',
      'editor.stickyScroll.maxLineCount': '定义要显示的最大粘滞行数。',
      'editor.suggest.matchOnWordStartOnly':
        '启用后，IntelliSense 筛选要求第一个字符在单词开头匹配，例如 “Console” 或 “WebContext” 上的 “c”，但 “description” 上的 _not_。禁用后，IntelliSense 将显示更多结果，但仍按匹配质量对其进行排序。',
      'editor.suggest.showClasss': '启用后，IntelliSense 将显示“类”建议。',
      'editor.suggest.showColors': '启用后，IntelliSense 将显示“颜色”建议。',
      'editor.suggest.showConstants': '启用后，IntelliSense 将显示“常量”建议。',
      'editor.suggest.showConstructors':
        '启用后，IntelliSense 将显示“构造函数”建议。',
      'editor.suggest.showCustomcolors':
        '启用后，IntelliSense 将显示“自定义颜色”建议。',
      'editor.suggest.showDeprecated':
        '启用后，IntelliSense 将显示`已弃用`建议。',
      'editor.suggest.showEnumMembers':
        '启用后，IntelliSense 将显示 "enumMember" 建议。',
      'editor.suggest.showEnums': '启用后，IntelliSense 将显示“枚举”建议。',
      'editor.suggest.showEvents': '启用后，IntelliSense 将显示“事件”建议。',
      'editor.suggest.showFields': '启用后，IntelliSense 将显示“字段”建议。',
      'editor.suggest.showFiles': '启用后，IntelliSense 将显示“文件”建议。',
      'editor.suggest.showFolders': '启用后，IntelliSense 将显示“文件夹”建议。',
      'editor.suggest.showFunctions': '启用后，IntelliSense 将显示“函数”建议。',
      'editor.suggest.showInterfaces':
        '启用后，IntelliSense 将显示“接口”建议。',
      'editor.suggest.showIssues': '启用后，IntelliSense 将显示"问题"建议。',
      'editor.suggest.showKeywords':
        '启用后，IntelliSense 将显示“关键字”建议。',
      'editor.suggest.showMethods': '启用后，IntelliSense 将显示“方法”建议。',
      'editor.suggest.showModules': '启用后，IntelliSense 将显示“模块”建议。',
      'editor.suggest.showOperators':
        '启用后，IntelliSense 将显示“操作符”建议。',
      'editor.suggest.showPropertys': '启用后，IntelliSense 将显示“属性”建议。',
      'editor.suggest.showReferences':
        '启用后，IntelliSense 将显示“参考”建议。',
      'editor.suggest.showSnippets': '启用后，IntelliSense 将显示“片段”建议。',
      'editor.suggest.showStructs': '启用后，IntelliSense 将显示“结构”建议。',
      'editor.suggest.showTexts': '启用后，IntelliSense 将显示“文本”建议。',
      'editor.suggest.showTypeParameters':
        '启用后，IntelliSense 将显示 "typeParameter" 建议。',
      'editor.suggest.showUnits': '启用后，IntelliSense 将显示“单位”建议。',
      'editor.suggest.showUsers': '启用后，IntelliSense 将显示"用户"建议。',
      'editor.suggest.showValues': '启用后，IntelliSense 将显示“值”建议。',
      'editor.suggest.showVariables': '启用后，IntelliSense 将显示“变量”建议。',
      editorViewAccessibleLabel: '编辑器内容',
      emptySelectionClipboard: '控制在没有选择内容时进行复制是否复制当前行。',
      experimentalWhitespaceRendering: '控制是否使用新的实验性方法呈现空格。',
      'experimentalWhitespaceRendering.font': '使用包含字体字符的新呈现方法。',
      'experimentalWhitespaceRendering.off': '使用稳定呈现方法。',
      'experimentalWhitespaceRendering.svg': '将新的呈现方法与 svg 配合使用。',
      fastScrollSensitivity: '按下"Alt"时滚动速度倍增。',
      'find.addExtraSpaceOnTop':
        '控制 "查找小部件" 是否应在编辑器顶部添加额外的行。如果为 true, 则可以在 "查找小工具" 可见时滚动到第一行之外。',
      'find.autoFindInSelection': '控制自动打开“在选定内容中查找”的条件。',
      'find.cursorMoveOnType': '控制在键入时光标是否应跳转以查找匹配项。',
      'find.globalFindClipboard':
        '控制“查找”小组件是否读取或修改 macOS 的共享查找剪贴板。',
      'find.loop':
        '控制在找不到其他匹配项时，是否自动从开头(或结尾)重新开始搜索。',
      'find.seedSearchStringFromSelection':
        '控制是否将编辑器选中内容作为搜索词填入到查找小组件中。',
      folding: '控制编辑器是否启用了代码折叠。',
      foldingHighlight: '控制编辑器是否应突出显示折叠范围。',
      foldingImportsByDefault: '控制编辑器是否自动折叠导入范围。',
      foldingMaximumRegions:
        '可折叠区域的最大数量。如果当前源具有大量可折叠区域，那么增加此值可能会导致编辑器的响应速度变慢。',
      foldingStrategy: '控制计算折叠范围的策略。',
      'foldingStrategy.auto':
        '使用特定于语言的折叠策略(如果可用)，否则使用基于缩进的策略。',
      'foldingStrategy.indentation': '使用基于缩进的折叠策略。',
      fontFamily: '控制字体系列。',
      fontFeatureSettings:
        '显式 "font-feature-settings" CSS 属性。如果只需打开/关闭连字，可以改为传递布尔值。',
      fontLigatures:
        '启用/禁用字体连字("calt" 和 "liga" 字体特性)。将此更改为字符串，可对 "font-feature-settings" CSS 属性进行精细控制。',
      fontLigaturesGeneral:
        '配置字体连字或字体特性。可以是用于启用/禁用连字的布尔值，或用于设置 CSS "font-feature-settings" 属性值的字符串。',
      fontSize: '控制字体大小(像素)。',
      fontVariationSettings:
        '显式“font-variation-settings”CSS 属性。如果只需将 font-weight 转换为 font-variation-settings，则可以改为传递布尔值。',
      fontVariations:
        '启用/禁用从 font-weight 到 font-variation-settings 的转换。将此项更改为字符串，以便对“font-variation-settings”CSS 属性进行细化控制。',
      fontVariationsGeneral:
        '配置字体变体。可以是用于启用/禁用从 font-weight 到 font-variation-settings 的转换的布尔值，也可以是 CSS“font-variation-settings”属性值的字符串。',
      fontWeight:
        '控制字体粗细。接受关键字“正常”和“加粗”，或者接受介于 1 至 1000 之间的数字。',
      fontWeightErrorMessage:
        '仅允许使用关键字“正常”和“加粗”，或使用介于 1 至 1000 之间的数字。',
      formatOnPaste:
        '控制编辑器是否自动格式化粘贴的内容。格式化程序必须可用，并且能针对文档中的某一范围进行格式化。',
      formatOnType: '控制编辑器在键入一行后是否自动格式化该行。',
      glyphMargin: '控制编辑器是否应呈现垂直字形边距。字形边距最常用于调试。',
      hideCursorInOverviewRuler: '控制是否在概览标尺中隐藏光标。',
      'hover.above': '如果有空间，首选在线条上方显示悬停。',
      'hover.delay': '控制显示悬停提示前的等待时间 (毫秒)。',
      'hover.enabled': '控制是否显示悬停提示。',
      'hover.sticky': '控制当鼠标移动到悬停提示上时，其是否保持可见。',
      'inlayHints.enable': '在编辑器中启用内联提示。',
      'inlayHints.fontFamily':
        '控制编辑器中嵌入提示的字体系列。设置为空时，将使用 {0}。',
      'inlayHints.fontSize':
        '控制编辑器中嵌入提示的字号。默认情况下，当配置的值小于 {1} 或大于编辑器字号时，将使用 {0}。',
      'inlayHints.padding': '在编辑器中启用叠加提示周围的填充。',
      inline: '快速建议显示为虚影文本',
      'inlineSuggest.enabled': '控制是否在编辑器中自动显示内联建议。',
      'inlineSuggest.showToolbar': '控制何时显示内联建议工具栏。',
      'inlineSuggest.showToolbar.always':
        '每当显示内联建议时，显示内联建议工具栏。',
      'inlineSuggest.showToolbar.onHover':
        '将鼠标悬停在内联建议上时显示内联建议工具栏。',
      'inlineSuggest.suppressSuggestions':
        '控制内联建议如何与建议小组件交互。如果启用，当内联建议可用时，不会自动显示建议小组件。',
      letterSpacing: '控制字母间距(像素)。',
      lineHeight:
        '控制行高。\r\n - 使用 0 根据字号自动计算行高。\r\n - 介于 0 和 8 之间的值将用作字号的乘数。\r\n - 大于或等于 8 的值将用作有效值。',
      lineNumbers: '控制行号的显示。',
      'lineNumbers.interval': '每 10 行显示一次行号。',
      'lineNumbers.off': '不显示行号。',
      'lineNumbers.on': '将行号显示为绝对行数。',
      'lineNumbers.relative': '将行号显示为与光标相隔的行数。',
      linkedEditing:
        '控制编辑器是否已启用链接编辑。相关符号(如 HTML 标记)将在编辑时进行更新，具体取决于语言。',
      links: '控制是否在编辑器中检测链接并使其可被点击。',
      matchBrackets: '突出显示匹配的括号。',
      'minimap.autohide': '控制是否自动隐藏缩略图。',
      'minimap.enabled': '控制是否显示缩略图。',
      'minimap.maxColumn': '限制缩略图的宽度，控制其最多显示的列数。',
      'minimap.renderCharacters': '渲染每行的实际字符，而不是色块。',
      'minimap.scale': '在迷你地图中绘制的内容比例: 1、2 或 3。',
      'minimap.showSlider': '控制何时显示迷你地图滑块。',
      'minimap.side': '控制在哪一侧显示缩略图。',
      'minimap.size': '控制迷你地图的大小。',
      'minimap.size.fill':
        '迷你地图将根据需要拉伸或缩小以填充编辑器的高度(不滚动)。',
      'minimap.size.fit':
        '迷你地图将根据需要缩小，永远不会大于编辑器(不滚动)。',
      'minimap.size.proportional':
        '迷你地图的大小与编辑器内容相同(并且可能滚动)。',
      mouseWheelScrollSensitivity:
        '对鼠标滚轮滚动事件的 `deltaX` 和 `deltaY` 乘上的系数。',
      mouseWheelZoom:
        '按住 `Ctrl` 键并滚动鼠标滚轮时对编辑器字体大小进行缩放。',
      multiCursorLimit: '控制一次可以在活动编辑器中显示的最大游标数。',
      multiCursorMergeOverlapping: '当多个光标重叠时进行合并。',
      multiCursorModifier:
        '用于使用鼠标添加多个游标的修饰符。“转到定义”和“打开链接”鼠标手势将进行调整，使其不与 [多光标修饰符](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier)冲突。',
      'multiCursorModifier.alt':
        '映射为 `Alt` (Windows 和 Linux) 或 `Option` (macOS)。',
      'multiCursorModifier.ctrlCmd':
        '映射为 `Ctrl` (Windows 和 Linux) 或 `Command` (macOS)。',
      multiCursorPaste: '控制粘贴时粘贴文本的行计数与光标计数相匹配。',
      'multiCursorPaste.full': '每个光标粘贴全文。',
      'multiCursorPaste.spread': '每个光标粘贴一行文本。',
      occurrencesHighlight: '控制编辑器是否突出显示语义符号的匹配项。',
      off: '已禁用快速建议',
      on: '快速建议显示在建议小组件内',
      overviewRulerBorder: '控制是否在概览标尺周围绘制边框。',
      'padding.bottom': '控制编辑器的底边和最后一行之间的间距量。',
      'padding.top': '控制编辑器的顶边和第一行之间的间距量。',
      'parameterHints.cycle':
        '控制参数提示菜单在到达列表末尾时进行循环还是关闭。',
      'parameterHints.enabled': '在输入时显示含有参数文档和类型信息的小面板。',
      'pasteAs.enabled': '控制是否可以以不同的方式粘贴内容。',
      'pasteAs.showPasteSelector':
        '控制将内容粘贴到编辑器时是否显示小组件。使用此小组件可以控制文件的粘贴方式。',
      'pasteAs.showPasteSelector.afterPaste':
        '将内容粘贴到编辑器后显示粘贴选择器小组件。',
      'pasteAs.showPasteSelector.never':
        '切勿显示粘贴选择器小组件。而是始终使用默认粘贴行为。',
      peekWidgetDefaultFocus:
        '控制是将焦点放在内联编辑器上还是放在预览小部件中的树上。',
      'peekWidgetDefaultFocus.editor': '打开预览时将焦点放在编辑器上',
      'peekWidgetDefaultFocus.tree': '打开速览时聚焦树',
      quickSuggestions:
        '控制键入时是否应自动显示建议。这可以用于在注释、字符串和其他代码中键入时进行控制。可配置快速建议以显示为虚影文本或建议小组件。另请注意控制建议是否由特殊字符触发的“{0}”设置。',
      'quickSuggestions.comments': '在注释内启用快速建议。',
      'quickSuggestions.other': '在字符串和注释外启用快速建议。',
      'quickSuggestions.strings': '在字符串内启用快速建议。',
      quickSuggestionsDelay: '控制显示快速建议前的等待时间 (毫秒)。',
      renameOnType: '控制是否在编辑器中输入时自动重命名。',
      renameOnTypeDeprecate: '已弃用，请改用 "editor.linkedEditing"。',
      renderControlCharacters: '控制编辑器是否显示控制字符。',
      renderFinalNewline: '当文件以换行符结束时, 呈现最后一行的行号。',
      renderLineHighlight: '控制编辑器的当前行进行高亮显示的方式。',
      'renderLineHighlight.all': '同时突出显示导航线和当前行。',
      renderLineHighlightOnlyWhenFocus:
        '控制编辑器是否仅在焦点在编辑器时突出显示当前行。',
      renderWhitespace: '控制编辑器在空白字符上显示符号的方式。',
      'renderWhitespace.boundary': '呈现空格字符(字词之间的单个空格除外)。',
      'renderWhitespace.selection': '仅在选定文本上呈现空白字符。',
      'renderWhitespace.trailing': '仅呈现尾随空格字符。',
      roundedSelection: '控制选区是否有圆角。',
      rulers:
        '在一定数量的等宽字符后显示垂直标尺。输入多个值，显示多个标尺。若数组为空，则不绘制标尺。',
      'rulers.color': '此编辑器标尺的颜色。',
      'rulers.size': '此编辑器标尺将渲染的等宽字符数。',
      screenReaderAnnounceInlineSuggestion:
        '控制内联建议是否由屏幕阅读器公布。',
      scrollBeyondLastColumn: '控制编辑器水平滚动时可以超过范围的字符数。',
      scrollBeyondLastLine: '控制编辑器是否可以滚动到最后一行之后。',
      scrollPredominantAxis:
        '同时垂直和水平滚动时，仅沿主轴滚动。在触控板上垂直滚动时，可防止水平漂移。',
      'scrollbar.horizontal': '控制水平滚动条的可见性。',
      'scrollbar.horizontal.auto': '水平滚动条仅在必要时可见。',
      'scrollbar.horizontal.fit': '水平滚动条将始终隐藏。',
      'scrollbar.horizontal.visible': '水平滚动条将始终可见。',
      'scrollbar.horizontalScrollbarSize': '水平滚动条的高度。',
      'scrollbar.scrollByPage': '控制单击按页滚动还是跳转到单击位置。',
      'scrollbar.vertical': '控制垂直滚动条的可见性。',
      'scrollbar.vertical.auto': '垂直滚动条仅在必要时可见。',
      'scrollbar.vertical.fit': '垂直滚动条将始终隐藏。',
      'scrollbar.vertical.visible': '垂直滚动条将始终可见。',
      'scrollbar.verticalScrollbarSize': '垂直滚动条的宽度。',
      selectLeadingAndTrailingWhitespace: '是否应始终选择前导和尾随空格。',
      selectSubwords: '是否应选择子字(如“fooBar”或“foo_bar”中的“foo”)。',
      selectionClipboard: '控制是否支持 Linux 主剪贴板。',
      selectionHighlight: '控制编辑器是否应突出显示与所选内容类似的匹配项。',
      showDeprecated: '控制加删除线被弃用的变量。',
      showFoldingControls: '控制何时显示行号槽上的折叠控件。',
      'showFoldingControls.always': '始终显示折叠控件。',
      'showFoldingControls.mouseover': '仅在鼠标位于装订线上方时显示折叠控件。',
      'showFoldingControls.never': '切勿显示折叠控件并减小装订线大小。',
      showUnused: '控制是否淡化未使用的代码。',
      smoothScrolling: '控制编辑器是否使用动画滚动。',
      snippetSuggestions: '控制代码片段是否与其他建议一起显示及其排列的位置。',
      'snippetSuggestions.bottom': '在其他建议下方显示代码片段建议。',
      'snippetSuggestions.inline': '在其他建议中穿插显示代码片段建议。',
      'snippetSuggestions.none': '不显示代码片段建议。',
      'snippetSuggestions.top': '在其他建议上方显示代码片段建议。',
      stickyTabStops:
        '在使用空格进行缩进时模拟制表符的选择行为。所选内容将始终使用制表符停止位。',
      'suggest.filterGraceful': '控制对建议的筛选和排序是否考虑小的拼写错误。',
      'suggest.insertMode':
        '控制接受补全时是否覆盖单词。请注意，这取决于扩展选择使用此功能。',
      'suggest.insertMode.always': '自动触发 IntelliSense 时始终选择建议。',
      'suggest.insertMode.insert': '插入建议而不覆盖光标右侧的文本。',
      'suggest.insertMode.never': '自动触发 IntelliSense 时，切勿选择建议。',
      'suggest.insertMode.replace': '插入建议并覆盖光标右侧的文本。',
      'suggest.insertMode.whenQuickSuggestion':
        '仅在键入时触发 IntelliSense 时才选择建议。',
      'suggest.insertMode.whenTriggerCharacter':
        '仅当从触发器字符触发 IntelliSense 时，才选择建议。',
      'suggest.localityBonus': '控制排序时是否首选光标附近的字词。',
      'suggest.maxVisibleSuggestions.dep':
        '此设置已弃用。现在可以调整建议小组件的大小。',
      'suggest.preview': '控制是否在编辑器中预览建议结果。',
      'suggest.selectionMode':
        '控制在显示小组件时是否选择建议。请注意，这仅适用于(“#editor.quickSuggestions#”和“#editor.suggestOnTriggerCharacters#”)自动触发的建议，并且始终在显式调用时选择建议，例如通过“Ctrl+Space”。',
      'suggest.shareSuggestSelections':
        '控制是否在多个工作区和窗口间共享记忆的建议选项(需要 `#editor.suggestSelection#`)。',
      'suggest.showIcons': '控制是否在建议中显示或隐藏图标。',
      'suggest.showInlineDetails':
        '控制建议详细信息是随标签内联显示还是仅显示在详细信息小组件中。',
      'suggest.showStatusBar': '控制建议小部件底部的状态栏的可见性。',
      'suggest.snippetsPreventQuickSuggestions':
        '控制活动代码段是否阻止快速建议。',
      suggestFontSize: '建议小组件的字号。设置为 {0} 时，将使用 {1} 的值。',
      suggestLineHeight:
        '建议小组件的行高。设置为 {0} 时，将使用 {1} 的值。最小值为 8。',
      suggestOnTriggerCharacters: '控制在键入触发字符后是否自动显示建议。',
      suggestSelection: '控制在建议列表中如何预先选择建议。',
      'suggestSelection.first': '始终选择第一个建议。',
      'suggestSelection.recentlyUsed':
        '选择最近的建议，除非进一步键入选择其他项。例如 `console. -> console.log`，因为最近补全过 `log`。',
      'suggestSelection.recentlyUsedByPrefix':
        '根据之前补全过的建议的前缀来进行选择。例如，`co -> console`、`con -> const`。',
      tabCompletion: '启用 Tab 补全。',
      'tabCompletion.off': '禁用 Tab 补全。',
      'tabCompletion.on': '在按下 Tab 键时进行 Tab 补全，将插入最佳匹配建议。',
      'tabCompletion.onlySnippets':
        '在前缀匹配时进行 Tab 补全。在 "quickSuggestions" 未启用时体验最好。',
      tabFocusMode: '控制编辑器是接收选项卡还是将其延迟到工作台进行导航。',
      unfoldOnClickAfterEndOfLine:
        '控制单击已折叠的行后面的空内容是否会展开该行。',
      'unicodeHighlight.allowedCharacters': '定义未突出显示的允许字符。',
      'unicodeHighlight.allowedLocales':
        '未突出显示在允许区域设置中常见的 Unicode 字符。',
      'unicodeHighlight.ambiguousCharacters':
        '控制是否突出显示可能与基本 ASCII 字符混淆的字符，但当前用户区域设置中常见的字符除外。',
      'unicodeHighlight.includeComments':
        '控制注释中的字符是否也应进行 Unicode 突出显示。',
      'unicodeHighlight.includeStrings':
        '控制字符串中的字符是否也应进行 Unicode 突出显示。',
      'unicodeHighlight.invisibleCharacters':
        '控制是否突出显示仅保留空格或完全没有宽度的字符。',
      'unicodeHighlight.nonBasicASCII':
        '控制是否突出显示所有非基本 ASCII 字符。只有介于 U+0020 到 U+007E 之间的字符、制表符、换行符和回车符才被视为基本 ASCII。',
      unusualLineTerminators: '删除可能导致问题的异常行终止符。',
      'unusualLineTerminators.auto': '自动删除异常的行终止符。',
      'unusualLineTerminators.off': '忽略异常的行终止符。',
      'unusualLineTerminators.prompt': '提示删除异常的行终止符。',
      useTabStops: '根据制表位插入和删除空格。',
      wordBreak: '控制中文/日语/韩语(CJK)文本使用的断字规则。',
      'wordBreak.keepAll':
        '中文/日语/韩语(CJK)文本不应使用断字功能。非 CJK 文本行为与普通文本行为相同。',
      'wordBreak.normal': '使用默认换行规则。',
      wordSeparators: '执行单词相关的导航或操作时作为单词分隔符的字符。',
      wordWrap: '控制折行的方式。',
      'wordWrap.bounded':
        '在视区宽度和 `#editor.wordWrapColumn#` 中的较小值处折行。',
      'wordWrap.off': '永不换行。',
      'wordWrap.on': '将在视区宽度处换行。',
      'wordWrap.wordWrapColumn': '在 `#editor.wordWrapColumn#` 处折行。',
      wordWrapColumn:
        '在 `#editor.wordWrap#` 为 `wordWrapColumn` 或 `bounded` 时，控制编辑器的折行列。',
      wrappingIndent: '控制折行的缩进。',
      'wrappingIndent.deepIndent': '折行的缩进量比其父级多 2。',
      'wrappingIndent.indent': '折行的缩进量比其父级多 1。',
      'wrappingIndent.none': '没有缩进。折行从第 1 列开始。',
      'wrappingIndent.same': '折行的缩进量与其父级相同。',
      wrappingStrategy:
        '控制计算包装点的算法。请注意，在辅助功能模式下，高级版将用于提供最佳体验。',
      'wrappingStrategy.advanced':
        '将包装点计算委托给浏览器。这是一个缓慢算法，可能会导致大型文件被冻结，但它在所有情况下都正常工作。',
      'wrappingStrategy.simple':
        '假定所有字符的宽度相同。这是一种快速算法，适用于等宽字体和某些字形宽度相等的文字(如拉丁字符)。',
    },
    'vs/editor/common/core/editorColorRegistry': {
      caret: '编辑器光标颜色。',
      deprecatedEditorActiveLineNumber:
        '"Id" 已被弃用，请改用 "editorLineNumber.activeForeground"。',
      editorActiveIndentGuide: '编辑器活动缩进参考线的颜色。',
      editorActiveLineNumber: '编辑器活动行号的颜色',
      editorBracketHighlightForeground1:
        '括号的前景色(1)。需要启用括号对着色。',
      editorBracketHighlightForeground2:
        '括号的前景色(2)。需要启用括号对着色。',
      editorBracketHighlightForeground3:
        '括号的前景色(3)。需要启用括号对着色。',
      editorBracketHighlightForeground4:
        '括号的前景色(4)。需要启用括号对着色。',
      editorBracketHighlightForeground5:
        '括号的前景色(5)。需要启用括号对着色。',
      editorBracketHighlightForeground6:
        '括号的前景色(6)。需要启用括号对着色。',
      editorBracketHighlightUnexpectedBracketForeground:
        '方括号出现意外的前景色。',
      editorBracketMatchBackground: '匹配括号的背景色',
      editorBracketMatchBorder: '匹配括号外框的颜色',
      'editorBracketPairGuide.activeBackground1':
        '活动括号对指南的背景色(1)。需要启用括号对指南。',
      'editorBracketPairGuide.activeBackground2':
        '活动括号对指南的背景色(2)。需要启用括号对指南。',
      'editorBracketPairGuide.activeBackground3':
        '活动括号对指南的背景色(3)。需要启用括号对指南。',
      'editorBracketPairGuide.activeBackground4':
        '活动括号对指南的背景色(4)。需要启用括号对指南。',
      'editorBracketPairGuide.activeBackground5':
        '活动括号对指南的背景色(5)。需要启用括号对指南。',
      'editorBracketPairGuide.activeBackground6':
        '活动括号对指南的背景色(6)。需要启用括号对指南。',
      'editorBracketPairGuide.background1':
        '非活动括号对指南的背景色(1)。需要启用括号对指南。',
      'editorBracketPairGuide.background2':
        '非活动括号对指南的背景色(2)。需要启用括号对指南。',
      'editorBracketPairGuide.background3':
        '非活动括号对指南的背景色(3)。需要启用括号对指南。',
      'editorBracketPairGuide.background4':
        '非活动括号对指南的背景色(4)。需要启用括号对指南。',
      'editorBracketPairGuide.background5':
        '非活动括号对指南的背景色(5)。需要启用括号对指南。',
      'editorBracketPairGuide.background6':
        '非活动括号对指南的背景色(6)。需要启用括号对指南。',
      editorCodeLensForeground: '编辑器 CodeLens 的前景色',
      editorCursorBackground:
        '编辑器光标的背景色。可以自定义块型光标覆盖字符的颜色。',
      editorDimmedLineNumber:
        '将 editor.renderFinalNewline 设置为灰色时最终编辑器行的颜色。',
      editorGhostTextBackground: '编辑器中虚影文本的背景色。',
      editorGhostTextBorder: '编辑器中虚影文本的边框颜色。',
      editorGhostTextForeground: '编辑器中虚影文本的前景色。',
      editorGutter: '编辑器导航线的背景色。导航线包括边缘符号和行号。',
      editorIndentGuides: '编辑器缩进参考线的颜色。',
      editorLineNumbers: '编辑器行号的颜色。',
      editorOverviewRulerBackground: '编辑器概述标尺的背景色。',
      editorOverviewRulerBorder: '概览标尺边框的颜色。',
      editorRuler: '编辑器标尺的颜色。',
      'editorUnicodeHighlight.background':
        '用于突出显示 Unicode 字符的背景颜色。',
      'editorUnicodeHighlight.border': '用于突出显示 Unicode 字符的边框颜色。',
      editorWhitespaces: '编辑器中空白字符的颜色。',
      lineHighlight: '光标所在行高亮内容的背景颜色。',
      lineHighlightBorderBox: '光标所在行四周边框的背景颜色。',
      overviewRuleError: '概览标尺中错误标记的颜色。',
      overviewRuleInfo: '概览标尺中信息标记的颜色。',
      overviewRuleWarning: '概览标尺中警告标记的颜色。',
      overviewRulerRangeHighlight:
        '用于突出显示范围的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      rangeHighlight:
        '背景颜色的高亮范围，喜欢通过快速打开和查找功能。颜色不能不透明，以免隐藏底层装饰。',
      rangeHighlightBorder: '高亮区域边框的背景颜色。',
      symbolHighlight:
        '高亮显示符号的背景颜色，例如转到定义或转到下一个/上一个符号。颜色不能是不透明的，以免隐藏底层装饰。',
      symbolHighlightBorder: '高亮显示符号周围的边框的背景颜色。',
      unnecessaryCodeBorder: '编辑器中不必要(未使用)的源代码的边框颜色。',
      unnecessaryCodeOpacity:
        '非必须(未使用)代码的在编辑器中显示的不透明度。例如，"#000000c0" 将以 75% 的不透明度显示代码。对于高对比度主题，请使用 ”editorUnnecessaryCode.border“ 主题来为非必须代码添加下划线，以避免颜色淡化。',
    },
    'vs/editor/common/editorContextKeys': {
      editorColumnSelection: '是否已启用 "editor.columnSelection"',
      editorFocus: '编辑器或编辑器小组件是否具有焦点(例如焦点在“查找”小组件中)',
      editorHasCodeActionsProvider: '编辑器是否具有代码操作提供程序',
      editorHasCodeLensProvider: '编辑器是否具有 CodeLens 提供程序',
      editorHasCompletionItemProvider: '编辑器是否具有补全项提供程序',
      editorHasDeclarationProvider: '编辑器是否具有声明提供程序',
      editorHasDefinitionProvider: '编辑器是否具有定义提供程序',
      editorHasDocumentFormattingProvider: '编辑器是否具有文档格式设置提供程序',
      editorHasDocumentHighlightProvider: '编辑器是否具有文档突出显示提供程序',
      editorHasDocumentSelectionFormattingProvider:
        '编辑器是否具有文档选择格式设置提供程序',
      editorHasDocumentSymbolProvider: '编辑器是否具有文档符号提供程序',
      editorHasHoverProvider: '编辑器是否具有悬停提供程序',
      editorHasImplementationProvider: '编辑器是否具有实现提供程序',
      editorHasInlayHintsProvider: '编辑器是否具有内联提示提供程序',
      editorHasMultipleDocumentFormattingProvider:
        '编辑器是否具有多个文档格式设置提供程序',
      editorHasMultipleDocumentSelectionFormattingProvider:
        '编辑器是否有多个文档选择格式设置提供程序',
      editorHasMultipleSelections: '编辑器是否有多个选择',
      editorHasReferenceProvider: '编辑器是否具有引用提供程序',
      editorHasRenameProvider: '编辑器是否具有重命名提供程序',
      editorHasSelection: '编辑器是否已选定文本',
      editorHasSignatureHelpProvider: '编辑器是否具有签名帮助提供程序',
      editorHasTypeDefinitionProvider: '编辑器是否具有类型定义提供程序',
      editorHoverFocused: '是否聚焦编辑器悬停',
      editorHoverVisible: '编辑器软键盘是否可见',
      editorLangId: '编辑器的语言标识符',
      editorReadonly: '编辑器是否为只读',
      editorTabMovesFocus: '"Tab" 是否将焦点移出编辑器',
      editorTextFocus: '编辑器文本是否具有焦点(光标是否闪烁)',
      inCompositeEditor: '该编辑器是否是更大的编辑器(例如笔记本)的一部分',
      inDiffEditor: '上下文是否为差异编辑器',
      isEmbeddedDiffEditor: '上下文是否为嵌入式差异编辑器',
      standaloneColorPickerFocused: '独立颜色选取器是否聚焦',
      standaloneColorPickerVisible: '独立颜色选取器是否可见',
      stickyScrollFocused: '是否聚焦粘性滚动',
      stickyScrollVisible: '粘性滚动是否可见',
      textInputFocus: '编辑器或 RTF 输入是否有焦点(光标是否闪烁)',
    },
    'vs/editor/common/languages/modesRegistry': {
      'plainText.alias': '纯文本',
    },
    'vs/editor/common/model/editStack': {
      edit: '输入',
    },
    'vs/editor/common/standaloneStrings': {
      accessibilityHelpMessage: '按 Alt+F1 可打开辅助功能选项。',
      accessibilityHelpTitle: '辅助功能帮助',
      auto_off: '编辑器被配置为不对屏幕阅读器的使用进行优化',
      auto_on: '配置编辑器，将其进行优化以最好地配合屏幕读取器的使用。',
      bulkEditServiceSummary: '在 {1} 个文件中进行了 {0} 次编辑',
      changeConfigToOnMac:
        '若要配置编辑器，将其进行优化以最好地配合屏幕阅读器的使用，请立即按 Command+E。',
      changeConfigToOnWinLinux:
        '若要配置编辑器，将其进行优化以最高效地配合屏幕阅读器的使用，按下 Ctrl+E。',
      editableDiffEditor: '在一个差异编辑器的窗格中。',
      editableEditor: '在代码编辑器中',
      editorViewAccessibleLabel: '编辑器内容',
      gotoLineActionLabel: '转到行/列...',
      helpQuickAccess: '显示所有快速访问提供程序',
      inspectTokens: '开发人员: 检查令牌',
      openingDocs: '正在打开辅助功能文档页面。',
      quickCommandActionHelp: '显示并运行命令',
      quickCommandActionLabel: '命令面板',
      quickOutlineActionLabel: '转到符号...',
      quickOutlineByCategoryActionLabel: '按类别转到符号...',
      readonlyDiffEditor: '在差异编辑器的只读窗格中。',
      readonlyEditor: '在只读代码编辑器中',
      showAccessibilityHelpAction: '显示辅助功能帮助',
      tabFocusModeOffMsg:
        '在当前编辑器中按 Tab 将插入制表符。通过按 {0} 切换此行为。',
      tabFocusModeOffMsgNoKb:
        '在当前编辑器中按 Tab 会插入制表符。当前无法通过键绑定触发命令 {0}。',
      tabFocusModeOnMsg:
        '在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。通过按 {0} 切换此行为。',
      tabFocusModeOnMsgNoKb:
        '在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。当前无法通过按键绑定触发命令 {0}。',
      toggleHighContrast: '切换高对比度主题',
    },
    'vs/editor/common/viewLayout/viewLineRenderer': {
      'overflow.chars': '{0} 字符',
      showMore: '显示更多({0})',
    },
    'vs/editor/contrib/anchorSelect/browser/anchorSelect': {
      anchorSet: '定位点设置为 {0}:{1}',
      cancelSelectionAnchor: '取消选择定位点',
      goToSelectionAnchor: '转到选择定位点',
      selectFromAnchorToCursor: '选择从定位点到光标',
      selectionAnchor: '选择定位点',
      setSelectionAnchor: '设置选择定位点',
    },
    'vs/editor/contrib/bracketMatching/browser/bracketMatching': {
      miGoToBracket: '转到括号(&&B)',
      overviewRulerBracketMatchForeground: '概览标尺上表示匹配括号的标记颜色。',
      'smartSelect.jumpBracket': '转到括号',
      'smartSelect.removeBrackets': '删除括号',
      'smartSelect.selectToBracket': '选择括号所有内容',
    },
    'vs/editor/contrib/caretOperations/browser/caretOperations': {
      'caret.moveLeft': '向左移动所选文本',
      'caret.moveRight': '向右移动所选文本',
    },
    'vs/editor/contrib/caretOperations/browser/transpose': {
      'transposeLetters.label': '转置字母',
    },
    'vs/editor/contrib/clipboard/browser/clipboard': {
      'actions.clipboard.copyLabel': '复制',
      'actions.clipboard.copyWithSyntaxHighlightingLabel': '复制并突出显示语法',
      'actions.clipboard.cutLabel': '剪切',
      'actions.clipboard.pasteLabel': '粘贴',
      'copy as': '复制为',
      miCopy: '复制(&&C)',
      miCut: '剪切(&&T)',
      miPaste: '粘贴(&&P)',
      share: '共享',
    },
    'vs/editor/contrib/codeAction/browser/codeAction': {
      applyCodeActionFailed: '应用代码操作时发生未知错误',
    },
    'vs/editor/contrib/codeAction/browser/codeActionCommands': {
      'args.schema.apply': '控制何时应用返回的操作。',
      'args.schema.apply.first': '始终应用第一个返回的代码操作。',
      'args.schema.apply.ifSingle':
        '如果仅返回的第一个代码操作，则应用该操作。',
      'args.schema.apply.never': '不要应用返回的代码操作。',
      'args.schema.kind': '要运行的代码操作的种类。',
      'args.schema.preferred': '如果只应返回首选代码操作，则应返回控件。',
      'autoFix.label': '自动修复...',
      'editor.action.autoFix.noneMessage': '没有可用的自动修复程序',
      'editor.action.codeAction.noneMessage': '没有可用的代码操作',
      'editor.action.codeAction.noneMessage.kind': '没有适用于"{0}"的代码操作',
      'editor.action.codeAction.noneMessage.preferred':
        '没有可用的首选代码操作',
      'editor.action.codeAction.noneMessage.preferred.kind':
        '没有适用于"{0}"的首选代码操作',
      'editor.action.organize.noneMessage': '没有可用的整理 import 语句操作',
      'editor.action.quickFix.noneMessage': '没有可用的代码操作',
      'editor.action.refactor.noneMessage': '没有可用的重构操作',
      'editor.action.refactor.noneMessage.kind': '没有可用的"{0}"重构',
      'editor.action.refactor.noneMessage.preferred': '没有可用的首选重构',
      'editor.action.refactor.noneMessage.preferred.kind':
        '没有适用于"{0}"的首选重构',
      'editor.action.source.noneMessage': '没有可用的源代码操作',
      'editor.action.source.noneMessage.kind': '没有适用于“ {0}”的源操作',
      'editor.action.source.noneMessage.preferred': '没有可用的首选源操作',
      'editor.action.source.noneMessage.preferred.kind':
        '没有适用于"{0}"的首选源操作',
      'fixAll.label': '全部修复',
      'fixAll.noneMessage': '没有可用的“全部修复”操作',
      'organizeImports.label': '整理 import 语句',
      'quickfix.trigger.label': '快速修复...',
      'refactor.label': '重构...',
      'source.label': '源代码操作...',
    },
    'vs/editor/contrib/codeAction/browser/codeActionContributions': {
      showCodeActionHeaders: '启用/禁用在代码操作菜单中显示组标头。',
    },
    'vs/editor/contrib/codeAction/browser/codeActionController': {
      hideMoreActions: '隐藏已禁用项',
      showMoreActions: '显示已禁用项',
    },
    'vs/editor/contrib/codeAction/browser/codeActionMenu': {
      'codeAction.widget.id.convert': '重写...',
      'codeAction.widget.id.extract': '提取...',
      'codeAction.widget.id.inline': '内联...',
      'codeAction.widget.id.more': '更多操作...',
      'codeAction.widget.id.move': '移动...',
      'codeAction.widget.id.quickfix': '快速修复...',
      'codeAction.widget.id.source': '源代码操作...',
      'codeAction.widget.id.surround': '环绕方式...',
    },
    'vs/editor/contrib/codeAction/browser/lightBulbWidget': {
      codeAction: '显示代码操作',
      codeActionWithKb: '显示代码操作({0})',
      preferredcodeActionWithKb: '显示代码操作。首选可用的快速修复({0})',
    },
    'vs/editor/contrib/codelens/browser/codelensController': {
      showLensOnLine: '显示当前行的 Code Lens 命令',
    },
    'vs/editor/contrib/colorPicker/browser/colorPickerWidget': {
      clickToToggleColorOptions: '单击以切换颜色选项 (rgb/hsl/hex)',
      closeIcon: '用于关闭颜色选取器的图标',
    },
    'vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions': {
      hideColorPicker: '隐藏颜色选取器',
      insertColorWithStandaloneColorPicker: '使用独立颜色选取器插入颜色',
      mishowOrFocusStandaloneColorPicker: '&&显示或聚焦独立颜色选取器',
      showOrFocusStandaloneColorPicker: '显示或聚焦独立颜色选取器',
    },
    'vs/editor/contrib/comment/browser/comment': {
      'comment.block': '切换块注释',
      'comment.line': '切换行注释',
      'comment.line.add': '添加行注释',
      'comment.line.remove': '删除行注释',
      miToggleBlockComment: '切换块注释(&&B)',
      miToggleLineComment: '切换行注释(&&T)',
    },
    'vs/editor/contrib/contextmenu/browser/contextmenu': {
      'action.showContextMenu.label': '显示编辑器上下文菜单',
      'context.minimap.minimap': '缩略图',
      'context.minimap.renderCharacters': '呈现字符',
      'context.minimap.size': '垂直大小',
      'context.minimap.size.fill': '填充',
      'context.minimap.size.fit': '适应',
      'context.minimap.size.proportional': '成比例',
      'context.minimap.slider': '滑块',
      'context.minimap.slider.always': '始终',
      'context.minimap.slider.mouseover': '鼠标悬停',
    },
    'vs/editor/contrib/cursorUndo/browser/cursorUndo': {
      'cursor.redo': '光标重做',
      'cursor.undo': '光标撤消',
    },
    'vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution': {
      pasteAs: '粘贴为...',
      'pasteAs.id':
        '要尝试应用的粘贴编辑的 ID。如果未提供，编辑器将显示选取器。',
    },
    'vs/editor/contrib/dropOrPasteInto/browser/copyPasteController': {
      pasteAsPickerPlaceholder: '选择粘贴操作',
      pasteAsProgress: '正在运行粘贴处理程序',
      pasteIntoEditorProgress: '正在运行粘贴处理程序。单击以取消',
      pasteWidgetVisible: '是否显示粘贴小组件',
      postPasteWidgetTitle: '显示粘贴选项...',
    },
    'vs/editor/contrib/dropOrPasteInto/browser/defaultProviders': {
      builtIn: '内置',
      'defaultDropProvider.uriList.path': '插入路径',
      'defaultDropProvider.uriList.paths': '插入路径',
      'defaultDropProvider.uriList.relativePath': '插入相对路径',
      'defaultDropProvider.uriList.relativePaths': '插入相对路径',
      'defaultDropProvider.uriList.uri': '插入 URI',
      'defaultDropProvider.uriList.uris': '插入 URI',
      'text.label': '插入纯文本',
    },
    'vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorController': {
      dropIntoEditorProgress: '正在运行放置处理程序。单击以取消',
      dropWidgetVisible: '是否显示放置小组件',
      postDropWidgetTitle: '显示放置选项...',
    },
    'vs/editor/contrib/editorState/browser/keybindingCancellation': {
      cancellableOperation: '编辑器是否运行可取消的操作，例如“预览引用”',
    },
    'vs/editor/contrib/find/browser/findController': {
      'actions.find.isRegexOverride':
        '重写“使用正则表达式”标记。\r\n将不会保留该标记供将来使用。\r\n0: 不执行任何操作\r\n1: True\r\n2: False',
      'actions.find.matchCaseOverride':
        '重写“数学案例”标记。\r\n将不会保留该标记供将来使用。\r\n0: 不执行任何操作\r\n1: True\r\n2: False',
      'actions.find.preserveCaseOverride':
        '重写“保留服务案例”标记。\r\n将不会保留该标记供将来使用。\r\n0: 不执行任何操作\r\n1: True\r\n2: False',
      'actions.find.wholeWordOverride':
        '重写“匹配整个字词”标记。\r\n将不会保留该标记供将来使用。\r\n0: 不执行任何操作\r\n1: True\r\n2: False',
      'findMatchAction.goToMatch': '转到“匹配”...',
      'findMatchAction.inputPlaceHolder':
        '键入数字以转到特定匹配项(介于 1 和 {0} 之间)',
      'findMatchAction.inputValidationMessage':
        '请键入介于 1 和 {0} 之间的数字',
      'findMatchAction.noResults': '无匹配项。请尝试搜索其他内容。',
      findNextMatchAction: '查找下一个',
      findPreviousMatchAction: '查找上一个',
      miFind: '查找(&&F)',
      miReplace: '替换(&&R)',
      nextSelectionMatchFindAction: '查找下一个选择',
      previousSelectionMatchFindAction: '查找上一个选择',
      startFindAction: '查找',
      startFindWithArgsAction: '使用参数查找',
      startFindWithSelectionAction: '查找选定内容',
      startReplace: '替换',
    },
    'vs/editor/contrib/find/browser/findWidget': {
      ariaSearchNoResult: '为“{1}”找到 {0}',
      ariaSearchNoResultEmpty: '找到 {0}',
      ariaSearchNoResultWithLineNum: '在 {2} 处找到“{1}”的 {0}',
      ariaSearchNoResultWithLineNumNoCurrentMatch: '为“{1}”找到 {0}',
      'ctrlEnter.keybindingChanged':
        'Ctrl+Enter 现在由全部替换改为插入换行。你可以修改editor.action.replaceAll 的按键绑定以覆盖此行为。',
      findCollapsedIcon: '用于指示编辑器查找小组件已折叠的图标。',
      findExpandedIcon: '用于指示编辑器查找小组件已展开的图标。',
      findNextMatchIcon: '编辑器查找小组件中的“查找下一个”图标。',
      findPreviousMatchIcon: '编辑器查找小组件中的“查找上一个”图标。',
      findReplaceAllIcon: '编辑器查找小组件中的“全部替换”图标。',
      findReplaceIcon: '编辑器查找小组件中的“替换”图标。',
      findSelectionIcon: '编辑器查找小组件中的“在选定内容中查找”图标。',
      'label.closeButton': '关闭',
      'label.find': '查找',
      'label.findDialog': '查找/替换',
      'label.matchesLocation': '第 {0} 项，共 {1} 项',
      'label.nextMatchButton': '下一个匹配项',
      'label.noResults': '无结果',
      'label.previousMatchButton': '上一个匹配项',
      'label.replace': '替换',
      'label.replaceAllButton': '全部替换',
      'label.replaceButton': '替换',
      'label.toggleReplaceButton': '切换替换',
      'label.toggleSelectionFind': '在选定内容中查找',
      'placeholder.find': '查找',
      'placeholder.replace': '替换',
      'title.matchesCountLimit':
        '仅高亮了前 {0} 个结果，但所有查找操作均针对全文。',
    },
    'vs/editor/contrib/folding/browser/folding': {
      'createManualFoldRange.label': '根据所选内容创建折叠范围',
      'foldAction.label': '折叠',
      'foldAllAction.label': '全部折叠',
      'foldAllBlockComments.label': '折叠所有块注释',
      'foldAllExcept.label': '折叠除所选区域之外的所有区域',
      'foldAllMarkerRegions.label': '折叠所有区域',
      'foldLevelAction.label': '折叠级别 {0}',
      'foldRecursivelyAction.label': '以递归方式折叠',
      'gotoNextFold.label': '转到下一个折叠范围',
      'gotoParentFold.label': '跳转到父级折叠',
      'gotoPreviousFold.label': '转到上一个折叠范围',
      'removeManualFoldingRanges.label': '删除手动折叠范围',
      'toggleFoldAction.label': '切换折叠',
      'unFoldRecursivelyAction.label': '以递归方式展开',
      'unfoldAction.label': '展开',
      'unfoldAllAction.label': '全部展开',
      'unfoldAllExcept.label': '展开除所选区域之外的所有区域',
      'unfoldAllMarkerRegions.label': '展开所有区域',
    },
    'vs/editor/contrib/folding/browser/foldingDecorations': {
      'editorGutter.foldingControlForeground': '编辑器装订线中折叠控件的颜色。',
      foldBackgroundBackground:
        '折叠范围后面的背景颜色。颜色必须设为透明，以免隐藏底层装饰。',
      foldingCollapsedIcon: '编辑器字形边距中已折叠的范围的图标。',
      foldingExpandedIcon: '编辑器字形边距中已展开的范围的图标。',
      foldingManualCollapedIcon: '编辑器字形边距中手动折叠的范围的图标。',
      foldingManualExpandedIcon: '编辑器字形边距中手动展开的范围的图标。',
    },
    'vs/editor/contrib/fontZoom/browser/fontZoom': {
      'EditorFontZoomIn.label': '放大编辑器字体',
      'EditorFontZoomOut.label': '缩小编辑器字体',
      'EditorFontZoomReset.label': '重置编辑器字体大小',
    },
    'vs/editor/contrib/format/browser/format': {
      hint11: '在第 {0} 行进行了 1 次格式编辑',
      hint1n: '第 {0} 行到第 {1} 行间进行了 1 次格式编辑',
      hintn1: '在第 {1} 行进行了 {0} 次格式编辑',
      hintnn: '第 {1} 行到第 {2} 行间进行了 {0} 次格式编辑',
    },
    'vs/editor/contrib/format/browser/formatActions': {
      'formatDocument.label': '格式化文档',
      'formatSelection.label': '格式化选定内容',
    },
    'vs/editor/contrib/gotoError/browser/gotoError': {
      'markerAction.next.label': '转到下一个问题 (错误、警告、信息)',
      'markerAction.nextInFiles.label':
        '转到文件中的下一个问题 (错误、警告、信息)',
      'markerAction.previous.label': '转到上一个问题 (错误、警告、信息)',
      'markerAction.previousInFiles.label':
        '转到文件中的上一个问题 (错误、警告、信息)',
      miGotoNextProblem: '下一个问题(&&P)',
      miGotoPreviousProblem: '上一个问题(&&P)',
      nextMarkerIcon: '“转到下一个”标记的图标。',
      previousMarkerIcon: '“转到上一个”标记的图标。',
    },
    'vs/editor/contrib/gotoError/browser/gotoErrorWidget': {
      Error: '错误',
      Hint: '提示',
      Info: '信息',
      Warning: '警告',
      change: '{0} 个问题(共 {1} 个)',
      editorMarkerNavigationBackground: '编辑器标记导航小组件背景色。',
      editorMarkerNavigationError: '编辑器标记导航小组件错误颜色。',
      editorMarkerNavigationErrorHeaderBackground:
        '编辑器标记导航小组件错误标题背景色。',
      editorMarkerNavigationInfo: '编辑器标记导航小组件信息颜色。',
      editorMarkerNavigationInfoHeaderBackground:
        '编辑器标记导航小组件信息标题背景色。',
      editorMarkerNavigationWarning: '编辑器标记导航小组件警告颜色。',
      editorMarkerNavigationWarningBackground:
        '编辑器标记导航小组件警告标题背景色。',
      'marker aria': '{1} 中的 {0}',
      problems: '{0} 个问题(共 {1} 个)',
    },
    'vs/editor/contrib/gotoSymbol/browser/goToCommands': {
      'actions.goToDecl.label': '转到定义',
      'actions.goToDeclToSide.label': '打开侧边的定义',
      'actions.goToDeclaration.label': '转到声明',
      'actions.goToImplementation.label': '转到实现',
      'actions.goToTypeDefinition.label': '转到类型定义',
      'actions.peekDecl.label': '查看声明',
      'actions.peekImplementation.label': '查看实现',
      'actions.peekTypeDefinition.label': '快速查看类型定义',
      'actions.previewDecl.label': '速览定义',
      'decl.generic.noResults': '未找到声明',
      'decl.noResultWord': '未找到“{0}”的声明',
      'decl.title': '声明',
      'def.title': '定义',
      'generic.noResult': '无“{0}”的结果',
      'generic.noResults': '找不到定义',
      'generic.title': '位置',
      'goToImplementation.generic.noResults': '未找到实现',
      'goToImplementation.noResultWord': '未找到“{0}”的实现',
      'goToReferences.label': '转到引用',
      'goToTypeDefinition.generic.noResults': '未找到类型定义',
      'goToTypeDefinition.noResultWord': '未找到“{0}”的类型定义',
      'impl.title': '实现',
      'label.generic': '转到任何符号',
      miGotoDeclaration: '转到声明(&&D)',
      miGotoDefinition: '转到定义(&&D)',
      miGotoImplementation: '转到实现(&&I)',
      miGotoReference: '转到引用(&&R)',
      miGotoTypeDefinition: '转到类型定义(&&T)',
      noResultWord: '未找到“{0}”的任何定义',
      'peek.submenu': '快速查看',
      'ref.title': '引用',
      'references.action.label': '查看引用',
      'references.no': '未找到"{0}"的引用',
      'references.noGeneric': '未找到引用',
      'typedef.title': '类型定义',
    },
    'vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition': {
      multipleResults: '单击显示 {0} 个定义。',
    },
    'vs/editor/contrib/gotoSymbol/browser/peek/referencesController': {
      labelLoading: '正在加载...',
      'metaTitle.N': '{0} ({1})',
      referenceSearchVisible: '引用速览是否可见，例如“速览引用”或“速览定义”',
    },
    'vs/editor/contrib/gotoSymbol/browser/peek/referencesTree': {
      referenceCount: '{0} 个引用',
      referencesCount: '{0} 个引用',
      treeAriaLabel: '引用',
    },
    'vs/editor/contrib/gotoSymbol/browser/peek/referencesWidget': {
      missingPreviewMessage: '无可用预览',
      noResults: '无结果',
      'peekView.alternateTitle': '引用',
    },
    'vs/editor/contrib/gotoSymbol/browser/referencesModel': {
      'aria.fileReferences.1': '{0} 中有 1 个符号，完整路径: {1}',
      'aria.fileReferences.N': '{1} 中有 {0} 个符号，完整路径: {2}',
      'aria.oneReference': '在列 {2} 行 {1} 的 {0} 中',
      'aria.oneReference.preview': '在列 {3} 行 {2} 的 {1} 中的 {0}',
      'aria.result.0': '未找到结果',
      'aria.result.1': '在 {0} 中找到 1 个符号',
      'aria.result.n1': '在 {1} 中找到 {0} 个符号',
      'aria.result.nm': '在 {1} 个文件中找到 {0} 个符号',
    },
    'vs/editor/contrib/gotoSymbol/browser/symbolNavigation': {
      hasSymbols: '是否存在只能通过键盘导航的符号位置。',
      location: '{1} 的符号 {0}',
      'location.kb': '{1} 的符号 {0}，下一个使用 {2}',
    },
    'vs/editor/contrib/hover/browser/hover': {
      escapeFocusHover: '转义聚焦悬停',
      goToBottomHover: '转到底部悬停',
      goToTopHover: '转到顶部悬停',
      pageDownHover: '向下翻页悬停',
      pageUpHover: '向上翻页悬停',
      scrollDownHover: '向下滚动悬停',
      scrollLeftHover: '向左滚动悬停',
      scrollRightHover: '向右滚动悬停',
      scrollUpHover: '向上滚动悬停',
      showDefinitionPreviewHover: '显示定义预览悬停',
      showOrFocusHover: '显示或聚焦悬停',
    },
    'vs/editor/contrib/hover/browser/markdownHoverParticipant': {
      'modesContentHover.loading': '正在加载...',
      'stopped rendering':
        '由于性能原因，长线的呈现已暂停。可通过`editor.stopRenderingLineAfter`配置此设置。',
      'too many characters':
        '出于性能原因，未对长行进行解析。解析长度阈值可通过“editor.maxTokenizationLineLength”进行配置。',
    },
    'vs/editor/contrib/hover/browser/markerHoverParticipant': {
      checkingForQuickFixes: '正在检查快速修复...',
      noQuickFixes: '没有可用的快速修复',
      'quick fixes': '快速修复...',
      'view problem': '查看问题',
    },
    'vs/editor/contrib/indentation/browser/indentation': {
      changeTabDisplaySize: '更改选项卡显示大小',
      configuredTabSize: '已配置制表符大小',
      currentTabSize: '当前选项卡大小',
      defaultTabSize: '默认选项卡大小',
      detectIndentation: '从内容中检测缩进方式',
      'editor.reindentlines': '重新缩进行',
      'editor.reindentselectedlines': '重新缩进所选行',
      indentUsingSpaces: '使用空格缩进',
      indentUsingTabs: '使用 "Tab" 缩进',
      indentationToSpaces: '将缩进转换为空格',
      indentationToTabs: '将缩进转换为制表符',
      selectTabWidth: '选择当前文件的制表符大小',
    },
    'vs/editor/contrib/inlayHints/browser/inlayHintsHover': {
      'hint.cmd': '执行命令',
      'hint.dbl': '双击以插入',
      'hint.def': '转到定义（{0}）',
      'hint.defAndCommand': '转到定义 ({0})，点击右键以查看详细信息',
      'links.navigate.kb.alt': 'alt + 点击',
      'links.navigate.kb.alt.mac': 'option + 点击',
      'links.navigate.kb.meta': 'ctrl + 点击',
      'links.navigate.kb.meta.mac': 'cmd + 点击',
    },
    'vs/editor/contrib/inlineCompletions/browser/commands': {
      accept: '接受',
      acceptLine: '接受行',
      acceptWord: '接受 Word',
      'action.inlineSuggest.accept': '接受内联建议',
      'action.inlineSuggest.acceptNextLine': '接受内联建议的下一行',
      'action.inlineSuggest.acceptNextWord': '接受内联建议的下一个字',
      'action.inlineSuggest.alwaysShowToolbar': '始终显示工具栏',
      'action.inlineSuggest.hide': '隐藏内联建议',
      'action.inlineSuggest.showNext': '显示下一个内联建议',
      'action.inlineSuggest.showPrevious': '显示上一个内联建议',
      'action.inlineSuggest.trigger': '触发内联建议',
    },
    'vs/editor/contrib/inlineCompletions/browser/hoverParticipant': {
      inlineSuggestionFollows: '建议:',
    },
    'vs/editor/contrib/inlineCompletions/browser/inlineCompletionContextKeys': {
      inlineSuggestionHasIndentation: '内联建议是否以空白开头',
      inlineSuggestionHasIndentationLessThanTabSize:
        '内联建议是否以小于选项卡插入内容的空格开头',
      inlineSuggestionVisible: '内联建议是否可见',
      suppressSuggestions: '是否应抑制当前建议',
    },
    'vs/editor/contrib/inlineCompletions/browser/inlineCompletionsHintsWidget':
      {
        content: '{0} ({1})',
        next: '下一个',
        parameterHintsNextIcon: '“显示下一个参数”提示的图标。',
        parameterHintsPreviousIcon: '“显示上一个参数”提示的图标。',
        previous: '上一个',
      },
    'vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace': {
      'InPlaceReplaceAction.next.label': '替换为下一个值',
      'InPlaceReplaceAction.previous.label': '替换为上一个值',
    },
    'vs/editor/contrib/lineSelection/browser/lineSelection': {
      expandLineSelection: '展开行选择',
    },
    'vs/editor/contrib/linesOperations/browser/linesOperations': {
      duplicateSelection: '重复选择',
      'editor.transformToCamelcase': '转换为驼峰式大小写',
      'editor.transformToKebabcase': '转换为 Kebab 案例',
      'editor.transformToLowercase': '转换为小写',
      'editor.transformToSnakecase': '转换为蛇形命名法',
      'editor.transformToTitlecase': '转换为词首字母大写',
      'editor.transformToUppercase': '转换为大写',
      'editor.transpose': '转置光标处的字符',
      'lines.copyDown': '向下复制行',
      'lines.copyUp': '向上复制行',
      'lines.delete': '删除行',
      'lines.deleteAllLeft': '删除左侧所有内容',
      'lines.deleteAllRight': '删除右侧所有内容',
      'lines.deleteDuplicates': '删除重复行',
      'lines.indent': '行缩进',
      'lines.insertAfter': '在下面插入行',
      'lines.insertBefore': '在上面插入行',
      'lines.joinLines': '合并行',
      'lines.moveDown': '向下移动行',
      'lines.moveUp': '向上移动行',
      'lines.outdent': '行减少缩进',
      'lines.sortAscending': '按升序排列行',
      'lines.sortDescending': '按降序排列行',
      'lines.trimTrailingWhitespace': '裁剪尾随空格',
      miCopyLinesDown: '向下复制一行(&&P)',
      miCopyLinesUp: '向上复制一行(&&C)',
      miDuplicateSelection: '重复选择(&&D)',
      miMoveLinesDown: '向下移动一行(&&L)',
      miMoveLinesUp: '向上移动一行(&&V)',
    },
    'vs/editor/contrib/linkedEditing/browser/linkedEditing': {
      editorLinkedEditingBackground: '编辑器根据类型自动重命名时的背景色。',
      'linkedEditing.label': '启动链接编辑',
    },
    'vs/editor/contrib/links/browser/links': {
      'invalid.url': '此链接格式不正确，无法打开: {0}',
      label: '打开链接',
      'links.navigate.executeCmd': '执行命令',
      'links.navigate.follow': '打开链接',
      'links.navigate.kb.alt': 'alt + 单击',
      'links.navigate.kb.alt.mac': 'option + 单击',
      'links.navigate.kb.meta': 'ctrl + 单击',
      'links.navigate.kb.meta.mac': 'cmd + 单击',
      'missing.url': '此链接目标已丢失，无法打开。',
      'tooltip.explanation': '执行命令 {0}',
    },
    'vs/editor/contrib/message/browser/messageController': {
      messageVisible: '编辑器当前是否正在显示内联消息',
    },
    'vs/editor/contrib/multicursor/browser/multicursor': {
      addSelectionToNextFindMatch: '将下一个查找匹配项添加到选择',
      addSelectionToPreviousFindMatch: '将选择内容添加到上一查找匹配项',
      'changeAll.label': '更改所有匹配项',
      cursorAdded: '添加的光标: {0}',
      cursorsAdded: '添加的游标: {0}',
      miAddSelectionToNextFindMatch: '添加下一个匹配项(&&N)',
      miAddSelectionToPreviousFindMatch: '添加上一个匹配项(&&R)',
      miInsertCursorAbove: '在上面添加光标(&&A)',
      miInsertCursorAtEndOfEachLineSelected: '在行尾添加光标(&&U)',
      miInsertCursorBelow: '在下面添加光标(&&D)',
      miSelectHighlights: '选择所有匹配项(&&O)',
      moveSelectionToNextFindMatch: '将上次选择移动到下一个查找匹配项',
      moveSelectionToPreviousFindMatch: '将上个选择内容移动到上一查找匹配项',
      'mutlicursor.addCursorsToBottom': '在底部添加光标',
      'mutlicursor.addCursorsToTop': '在顶部添加光标',
      'mutlicursor.focusNextCursor': '聚焦下一个光标',
      'mutlicursor.focusNextCursor.description': '聚焦下一个光标',
      'mutlicursor.focusPreviousCursor': '聚焦上一个光标',
      'mutlicursor.focusPreviousCursor.description': '聚焦上一个光标',
      'mutlicursor.insertAbove': '在上面添加光标',
      'mutlicursor.insertAtEndOfEachLineSelected': '在行尾添加光标',
      'mutlicursor.insertBelow': '在下面添加光标',
      selectAllOccurrencesOfFindMatch: '选择所有找到的查找匹配项',
    },
    'vs/editor/contrib/parameterHints/browser/parameterHints': {
      'parameterHints.trigger.label': '触发参数提示',
    },
    'vs/editor/contrib/parameterHints/browser/parameterHintsWidget': {
      editorHoverWidgetHighlightForeground: '参数提示中活动项的前景色。',
      hint: '{0}，提示',
      parameterHintsNextIcon: '“显示下一个参数”提示的图标。',
      parameterHintsPreviousIcon: '“显示上一个参数”提示的图标。',
    },
    'vs/editor/contrib/peekView/browser/peekView': {
      inReferenceSearchEditor: '速览中是否嵌入了当前代码编辑器',
      'label.close': '关闭',
      peekViewBorder: '速览视图边框和箭头颜色。',
      peekViewEditorBackground: '速览视图编辑器背景色。',
      peekViewEditorGutterBackground: '速览视图编辑器中装订线的背景色。',
      peekViewEditorMatchHighlight: '在速览视图编辑器中匹配突出显示颜色。',
      peekViewEditorMatchHighlightBorder:
        '在速览视图编辑器中匹配项的突出显示边框。',
      peekViewEditorStickScrollBackground: '速览视图编辑器中粘滞滚动的背景色。',
      peekViewResultsBackground: '速览视图结果列表背景色。',
      peekViewResultsFileForeground: '速览视图结果列表中文件节点的前景色。',
      peekViewResultsMatchForeground: '速览视图结果列表中行节点的前景色。',
      peekViewResultsMatchHighlight: '在速览视图结果列表中匹配突出显示颜色。',
      peekViewResultsSelectionBackground:
        '速览视图结果列表中所选条目的背景色。',
      peekViewResultsSelectionForeground:
        '速览视图结果列表中所选条目的前景色。',
      peekViewTitleBackground: '速览视图标题区域背景颜色。',
      peekViewTitleForeground: '速览视图标题颜色。',
      peekViewTitleInfoForeground: '速览视图标题信息颜色。',
    },
    'vs/editor/contrib/quickAccess/browser/gotoLineQuickAccess': {
      cannotRunGotoLine: '先打开文本编辑器然后跳转到行。',
      gotoLineColumnLabel: '转到第 {0} 行第 {1} 个字符。',
      gotoLineLabel: '转到行 {0}。',
      gotoLineLabelEmpty: '当前行: {0}，字符: {1}。 键入要导航到的行号。',
      gotoLineLabelEmptyWithLimit:
        '当前行: {0}，字符: {1}。键入要导航到的行号(介于 1 至 {2} 之间)。',
    },
    'vs/editor/contrib/quickAccess/browser/gotoSymbolQuickAccess': {
      _constructor: '构造函数 ({0})',
      array: '数组({0})',
      boolean: '布尔值({0})',
      cannotRunGotoSymbolWithoutEditor:
        '要转到符号，首先打开具有符号信息的文本编辑器。',
      cannotRunGotoSymbolWithoutSymbolProvider:
        '活动文本编辑器不提供符号信息。',
      class: '类({0})',
      constant: '常量({0})',
      enum: '枚举({0})',
      enumMember: '枚举成员({0})',
      event: '事件({0})',
      field: '字段({0})',
      file: '文件({0})',
      function: '函数({0})',
      interface: '接口({0})',
      key: '键({0})',
      method: '方法({0})',
      modules: '模块({0})',
      namespace: '命名空间({0})',
      noMatchingSymbolResults: '没有匹配的编辑器符号',
      noSymbolResults: '没有编辑器符号',
      number: '数字({0})',
      object: '对象({0})',
      openToBottom: '在底部打开',
      openToSide: '在侧边打开',
      operator: '运算符({0})',
      package: '包({0})',
      property: '属性({0})',
      string: '字符串({0})',
      struct: '结构({0})',
      symbols: '符号({0})',
      typeParameter: '类型参数({0})',
      variable: '变量({0})',
    },
    'vs/editor/contrib/readOnlyMessage/browser/contribution': {
      'editor.readonly': '无法在只读编辑器中编辑',
      'editor.simple.readonly': '无法在只读输入中编辑',
    },
    'vs/editor/contrib/rename/browser/rename': {
      aria: '成功将“{0}”重命名为“{1}”。摘要: {2}',
      enablePreview: '启用/禁用重命名之前预览更改的功能',
      label: '正在将“{0}”重命名为“{1}”',
      'no result': '无结果。',
      quotableLabel: '将 {0} 重命名为 {1}',
      'rename.failed': '重命名无法计算修改',
      'rename.failedApply': '重命名无法应用修改',
      'rename.label': '重命名符号',
      resolveRenameLocationFailed: '解析重命名位置时发生未知错误',
    },
    'vs/editor/contrib/rename/browser/renameInputField': {
      label: '按 {0} 进行重命名，按 {1} 进行预览',
      renameAriaLabel: '重命名输入。键入新名称并按 "Enter" 提交。',
      renameInputVisible: '重命名输入小组件是否可见',
    },
    'vs/editor/contrib/smartSelect/browser/smartSelect': {
      miSmartSelectGrow: '扩大选区(&&E)',
      miSmartSelectShrink: '缩小选区(&&S)',
      'smartSelect.expand': '展开选择',
      'smartSelect.shrink': '收起选择',
    },
    'vs/editor/contrib/snippet/browser/snippetController2': {
      hasNextTabstop: '在代码片段模式下时是否存在下一制表位',
      hasPrevTabstop: '在代码片段模式下时是否存在上一制表位',
      inSnippetMode: '编辑器目前是否在代码片段模式下',
      next: '转到下一个占位符...',
    },
    'vs/editor/contrib/snippet/browser/snippetVariables': {
      April: '四月',
      AprilShort: '4月',
      August: '八月',
      AugustShort: '8月',
      December: '十二月',
      DecemberShort: '12月',
      February: '二月',
      FebruaryShort: '2月',
      Friday: '星期五',
      FridayShort: '周五',
      January: '一月',
      JanuaryShort: '1月',
      July: '七月',
      JulyShort: '7月',
      June: '六月',
      JuneShort: '6月',
      March: '三月',
      MarchShort: '3月',
      May: '5月',
      MayShort: '5月',
      Monday: '星期一',
      MondayShort: '周一',
      November: '十一月',
      NovemberShort: '11 月',
      October: '十月',
      OctoberShort: '10月',
      Saturday: '星期六',
      SaturdayShort: '周六',
      September: '九月',
      SeptemberShort: '9月',
      Sunday: '星期天',
      SundayShort: '周日',
      Thursday: '星期四',
      ThursdayShort: '周四',
      Tuesday: '星期二',
      TuesdayShort: '周二',
      Wednesday: '星期三',
      WednesdayShort: '周三',
    },
    'vs/editor/contrib/stickyScroll/browser/stickyScrollActions': {
      focusStickyScroll: '聚焦粘性滚动',
      'goToFocusedStickyScrollLine.title': '转到聚焦的粘性滚动行',
      miStickyScroll: '粘滞滚动(&&S)',
      mifocusStickyScroll: '聚焦粘性滚动(&&F)',
      mitoggleStickyScroll: '切换粘滞滚动(&&T)',
      'selectEditor.title': '选择编辑器',
      'selectNextStickyScrollLine.title': '选择下一个粘性滚动行',
      'selectPreviousStickyScrollLine.title': '选择上一个粘性滚动行',
      stickyScroll: '粘滞滚动',
      toggleStickyScroll: '切换粘滞滚动',
    },
    'vs/editor/contrib/suggest/browser/suggest': {
      acceptSuggestionOnEnter: '按 Enter 时是否会插入建议',
      suggestWidgetDetailsVisible: '建议详细信息是否可见',
      suggestWidgetHasSelection: '是否以任何建议为中心',
      suggestWidgetMultipleSuggestions: '是否存在多条建议可供选择',
      suggestionCanResolve: '当前建议是否支持解析更多详细信息',
      suggestionHasInsertAndReplaceRange: '当前建议是否具有插入和替换行为',
      suggestionInsertMode: '默认行为是否是插入或替换',
      suggestionMakesTextEdit: '插入当前建议是否会导致更改或导致已键入所有内容',
    },
    'vs/editor/contrib/suggest/browser/suggestController': {
      'accept.insert': '插入',
      'accept.replace': '替换',
      'aria.alert.snippet': '选择“{0}”后进行了其他 {1} 次编辑',
      'detail.less': '显示更多',
      'detail.more': '显示更少',
      'suggest.reset.label': '重置建议小组件大小',
      'suggest.trigger.label': '触发建议',
    },
    'vs/editor/contrib/suggest/browser/suggestWidget': {
      ariaCurrenttSuggestionReadDetails: '{0}，文档: {1}',
      editorSuggestWidgetBackground: '建议小组件的背景色。',
      editorSuggestWidgetBorder: '建议小组件的边框颜色。',
      editorSuggestWidgetFocusHighlightForeground:
        '当某项获得焦点时，在建议小组件中突出显示的匹配项的颜色。',
      editorSuggestWidgetForeground: '建议小组件的前景色。',
      editorSuggestWidgetHighlightForeground:
        '建议小组件中匹配内容的高亮颜色。',
      editorSuggestWidgetSelectedBackground: '建议小组件中所选条目的背景色。',
      editorSuggestWidgetSelectedForeground: '建议小组件中所选条目的前景色。',
      editorSuggestWidgetSelectedIconForeground:
        '建议小组件中所选条目的图标前景色。',
      editorSuggestWidgetStatusForeground: '建议小组件状态的前景色。',
      'label.desc': '{0}，{1}',
      'label.detail': '{0}{1}',
      'label.full': '{0}{1}，{2}',
      suggest: '建议',
      'suggestWidget.loading': '正在加载...',
      'suggestWidget.noSuggestions': '无建议。',
    },
    'vs/editor/contrib/suggest/browser/suggestWidgetDetails': {
      'details.close': '关闭',
      loading: '正在加载…',
    },
    'vs/editor/contrib/suggest/browser/suggestWidgetRenderer': {
      readMore: '了解详细信息',
      suggestMoreInfoIcon: '建议小组件中的详细信息的图标。',
    },
    'vs/editor/contrib/suggest/browser/suggestWidgetStatus': {
      content: '{0} ({1})',
    },
    'vs/editor/contrib/symbolIcons/browser/symbolIcons': {
      'symbolIcon.arrayForeground':
        '数组符号的前景色。这些符号将显示在大纲、痕迹导航栏和建议小组件中。',
      'symbolIcon.booleanForeground':
        '布尔符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.classForeground':
        '类符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.colorForeground':
        '颜色符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.constantForeground':
        '常量符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.constructorForeground':
        '构造函数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.enumeratorForeground':
        '枚举符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.enumeratorMemberForeground':
        '枚举器成员符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.eventForeground':
        '事件符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.fieldForeground':
        '字段符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.fileForeground':
        '文件符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.folderForeground':
        '文件夹符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.functionForeground':
        '函数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.interfaceForeground':
        '接口符号的前景色。这些符号将显示在大纲、痕迹导航栏和建议小组件中。',
      'symbolIcon.keyForeground':
        '键符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.keywordForeground':
        '关键字符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.methodForeground':
        '方法符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.moduleForeground':
        '模块符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.namespaceForeground':
        '命名空间符号的前景颜色。这些符号出现在轮廓、痕迹导航栏和建议小部件中。',
      'symbolIcon.nullForeground':
        '空符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.numberForeground':
        '数字符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.objectForeground':
        '对象符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.operatorForeground':
        '运算符符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.packageForeground':
        '包符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.propertyForeground':
        '属性符号的前景色。这些符号出现在大纲、痕迹导航栏和建议小组件中。',
      'symbolIcon.referenceForeground':
        '参考符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.snippetForeground':
        '片段符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.stringForeground':
        '字符串符号的前景颜色。这些符号出现在轮廓、痕迹导航栏和建议小部件中。',
      'symbolIcon.structForeground':
        '结构符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.textForeground':
        '文本符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.typeParameterForeground':
        '类型参数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.unitForeground':
        '单位符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
      'symbolIcon.variableForeground':
        '变量符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。',
    },
    'vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode': {
      'toggle.tabMovesFocus': '切换 Tab 键移动焦点',
      'toggle.tabMovesFocus.off': 'Tab 键将插入制表符',
      'toggle.tabMovesFocus.on': 'Tab 键将移动到下一可聚焦的元素',
    },
    'vs/editor/contrib/tokenization/browser/tokenization': {
      forceRetokenize: '开发人员: 强制重新进行标记',
    },
    'vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter': {
      'action.unicodeHighlight.disableHighlightingInComments':
        '禁用批注中字符的突出显示',
      'action.unicodeHighlight.disableHighlightingInStrings':
        '禁用字符串中字符的突出显示',
      'action.unicodeHighlight.disableHighlightingOfAmbiguousCharacters':
        '禁止突出显示歧义字符',
      'action.unicodeHighlight.disableHighlightingOfInvisibleCharacters':
        '禁止突出显示不可见字符',
      'action.unicodeHighlight.disableHighlightingOfNonBasicAsciiCharacters':
        '禁止突出显示非基本 ASCII 字符',
      'action.unicodeHighlight.showExcludeOptions': '显示排除选项',
      'unicodeHighlight.adjustSettings': '调整设置',
      'unicodeHighlight.allowCommonCharactersInLanguage':
        '允许语言“{0}”中更常见的 unicode 字符。',
      'unicodeHighlight.characterIsAmbiguous':
        '字符 {0} 可能会与字符 {1} 混淆，后者在源代码中更为常见。',
      'unicodeHighlight.characterIsAmbiguousASCII':
        '字符 {0} 可能会与 ASCII 字符 {1} 混淆，后者在源代码中更为常见。',
      'unicodeHighlight.characterIsInvisible': '字符 {0} 不可见。',
      'unicodeHighlight.characterIsNonBasicAscii':
        '字符 {0} 不是基本 ASCII 字符。',
      'unicodeHighlight.configureUnicodeHighlightOptions':
        '配置 Unicode 突出显示选项',
      'unicodeHighlight.disableHighlightingInComments.shortLabel':
        '禁用批注中的突出显示',
      'unicodeHighlight.disableHighlightingInStrings.shortLabel':
        '禁用字符串中的突出显示',
      'unicodeHighlight.disableHighlightingOfAmbiguousCharacters.shortLabel':
        '禁用不明确的突出显示',
      'unicodeHighlight.disableHighlightingOfInvisibleCharacters.shortLabel':
        '禁用不可见突出显示',
      'unicodeHighlight.disableHighlightingOfNonBasicAsciiCharacters.shortLabel':
        '禁用非 ASCII 突出显示',
      'unicodeHighlight.excludeCharFromBeingHighlighted':
        '在突出显示内容中排除{0}',
      'unicodeHighlight.excludeInvisibleCharFromBeingHighlighted':
        '不突出显示 {0} (不可见字符)',
      'unicodeHighlighting.thisDocumentHasManyAmbiguousUnicodeCharacters':
        '本文档包含许多不明确的 unicode 字符',
      'unicodeHighlighting.thisDocumentHasManyInvisibleUnicodeCharacters':
        '本文档包含许多不可见的 unicode 字符',
      'unicodeHighlighting.thisDocumentHasManyNonBasicAsciiUnicodeCharacters':
        '本文档包含许多非基本 ASCII unicode 字符',
      warningIcon: '扩展编辑器中随警告消息一同显示的图标。',
    },
    'vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators': {
      'unusualLineTerminators.detail':
        '文件“{0}”包含一个或多个异常的行终止符，例如行分隔符(LS)或段落分隔符(PS)。\r\n\r\n建议从文件中删除它们。可通过“editor.unusualLineTerminators”进行配置。',
      'unusualLineTerminators.fix': '删除异常行终止符(&&R)',
      'unusualLineTerminators.ignore': '忽略',
      'unusualLineTerminators.message': '检测到异常行终止符',
      'unusualLineTerminators.title': '异常行终止符',
    },
    'vs/editor/contrib/wordHighlighter/browser/highlightDecorations': {
      overviewRulerWordHighlightForeground:
        '用于突出显示符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      overviewRulerWordHighlightStrongForeground:
        '用于突出显示写权限符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      overviewRulerWordHighlightTextForeground:
        '符号在文本中出现时的概述标尺标记颜色。颜色必须透明，以免隐藏下层的修饰。',
      wordHighlight:
        '读取访问期间符号的背景色，例如读取变量时。颜色必须透明，以免隐藏下面的修饰效果。',
      wordHighlightBorder: '符号在进行读取访问操作时的边框颜色，例如读取变量。',
      wordHighlightStrong:
        '写入访问过程中符号的背景色，例如写入变量时。颜色必须透明，以免隐藏下面的修饰效果。',
      wordHighlightStrongBorder:
        '符号在进行写入访问操作时的边框颜色，例如写入变量。',
      wordHighlightText:
        '符号在文本中出现时的背景色。颜色必须透明，以免隐藏下层的修饰。',
      wordHighlightTextBorder: '符号在文本中出现时的边框颜色。',
    },
    'vs/editor/contrib/wordHighlighter/browser/wordHighlighter': {
      'wordHighlight.next.label': '转到下一个突出显示的符号',
      'wordHighlight.previous.label': '转到上一个突出显示的符号',
      'wordHighlight.trigger.label': '触发符号高亮',
    },
    'vs/editor/contrib/wordOperations/browser/wordOperations': {
      deleteInsideWord: '删除 Word',
    },
    'vs/platform/action/common/actionCommonCategories': {
      developer: '开发人员',
      file: '文件',
      help: '帮助',
      preferences: '首选项',
      test: '测试',
      view: '查看',
    },
    'vs/platform/actions/browser/buttonbar': {
      labelWithKeybinding: '{0} ({1})',
    },
    'vs/platform/actions/browser/menuEntryActionViewItem': {
      titleAndKb: '{0} ({1})',
      titleAndKbAndAlt: '{0}\r\n[{1}] {2}',
    },
    'vs/platform/actions/browser/toolbar': {
      hide: '隐藏',
      resetThisMenu: '重置菜单',
    },
    'vs/platform/actions/common/menuResetAction': {
      title: '重置所有菜单',
    },
    'vs/platform/actions/common/menuService': {
      'hide.label': '隐藏“{0}”',
    },
    'vs/platform/actionWidget/browser/actionList': {
      customQuickFixWidget: '操作小组件',
      'customQuickFixWidget.labels': '{0}，禁用原因: {1}',
      label: '按 {0} 以应用',
      'label-preview': '按 {0} 以应用，按 {1} 以预览',
    },
    'vs/platform/actionWidget/browser/actionWidget': {
      'acceptSelected.title': '接受所选操作',
      codeActionMenuVisible: '操作小组件列表是否可见',
      'hideCodeActionWidget.title': '隐藏操作小组件',
      'previewSelected.title': '预览所选操作',
      'selectNextCodeAction.title': '选择下一个操作',
      'selectPrevCodeAction.title': '选择上一个操作',
    },
    'vs/platform/audioCues/browser/audioCueService': {
      'audioCues.chatRequestSent': '已发送聊天请求',
      'audioCues.chatResponsePending': '聊天响应挂起',
      'audioCues.chatResponseReceived': '已收到聊天响应',
      'audioCues.diffLineDeleted': '已删除差异行',
      'audioCues.diffLineInserted': '已插入差异线',
      'audioCues.diffLineModified': '差异行已修改',
      'audioCues.lineHasBreakpoint.name': '行上的断点',
      'audioCues.lineHasError.name': '行上的错误',
      'audioCues.lineHasFoldedArea.name': '行上的折叠区域',
      'audioCues.lineHasInlineSuggestion.name': '行上的内联建议',
      'audioCues.lineHasWarning.name': '行上的警告',
      'audioCues.noInlayHints': '行上无嵌入提示',
      'audioCues.notebookCellCompleted': '笔记本单元格已完成',
      'audioCues.notebookCellFailed': '笔记本单元格失败',
      'audioCues.onDebugBreak.name': '调试程序已在断点处停止',
      'audioCues.taskCompleted': '任务已完成',
      'audioCues.taskFailed': '任务失败',
      'audioCues.terminalBell': '终端钟',
      'audioCues.terminalCommandFailed': '终端命令失败',
      'audioCues.terminalQuickFix.name': '终端快速修复',
    },
    'vs/platform/configuration/common/configurationRegistry': {
      'config.policy.duplicate':
        '无法注册 "{0}"。关联的策略 {1} 已向 {2} 注册。',
      'config.property.duplicate': '无法注册“{0}”。此属性已注册。',
      'config.property.empty': '无法注册空属性',
      'config.property.languageDefault':
        '无法注册“{0}”。其符合描述特定语言编辑器设置的表达式 "\\\\[.*\\\\]$"。请使用 "configurationDefaults"。',
      'defaultLanguageConfiguration.description':
        '配置要为 {0} 语言替代的设置。',
      'defaultLanguageConfigurationOverrides.title': '默认语言配置替代',
      'overrideSettings.defaultDescription':
        '针对某种语言，配置替代编辑器设置。',
      'overrideSettings.errorMessage': '此设置不支持按语言配置。',
    },
    'vs/platform/contextkey/browser/contextKeyService': {
      getContextKeyInfo: '用于返回上下文键的相关信息的命令',
    },
    'vs/platform/contextkey/common/contextkey': {
      'contextkey.parser.error.closingParenthesis': '右括号 ")"',
      'contextkey.parser.error.emptyString': '上下文键表达式为空',
      'contextkey.parser.error.emptyString.hint':
        '忘记写入表达式了吗? 还可以放置 "false" 或 "true" 以始终分别评估为 false 或 true。',
      'contextkey.parser.error.expectedButGot': '应为: {0}\r\n收到的: "{1}"。',
      'contextkey.parser.error.noInAfterNot': '"not" 后面的 "in"。',
      'contextkey.parser.error.unexpectedEOF': '意外的表达式结尾',
      'contextkey.parser.error.unexpectedEOF.hint': '忘记放置上下文键了吗?',
      'contextkey.parser.error.unexpectedToken': '意外的令牌',
      'contextkey.parser.error.unexpectedToken.hint':
        '忘记在令牌之前放置 && 或 || 了吗?',
      'contextkey.scanner.errorForLinter': '意外的令牌。',
      'contextkey.scanner.errorForLinterWithHint': '意外的令牌。提示: {0}',
    },
    'vs/platform/contextkey/common/contextkeys': {
      inputFocus: '键盘焦点是否在输入框中',
      isIOS: '操作系统是否为 iOS',
      isLinux: '操作系统是否为 Linux',
      isMac: '操作系统是否 macOS',
      isMacNative: '操作系统是否是非浏览器平台上的 macOS',
      isMobile: '平台是否为 Web 浏览器',
      isWeb: '平台是否为 Web 浏览器',
      isWindows: '操作系统是否为 Windows',
      productQualityType: 'VS Code 的质量类型',
    },
    'vs/platform/contextkey/common/scanner': {
      'contextkey.scanner.hint.didYouForgetToEscapeSlash':
        '忘记转义 "/"(斜杠)字符了吗? 在该字符前放置两个反斜杠以进行转义，例如 "\\\\/"。',
      'contextkey.scanner.hint.didYouForgetToOpenOrCloseQuote':
        '忘记左引号或右引号了吗?',
      'contextkey.scanner.hint.didYouMean1': '你指的是 {0} 吗?',
      'contextkey.scanner.hint.didYouMean2': '你指的是 {0} 还是 {1}?',
      'contextkey.scanner.hint.didYouMean3': '你指的是 {0}、{1} 还是 {2}?',
    },
    'vs/platform/dialogs/common/dialogs': {
      cancelButton: '取消',
      moreFile: '...1 个其他文件未显示',
      moreFiles: '...{0} 个其他文件未显示',
      okButton: '确定(&&O)',
      yesButton: '是(&&Y)',
    },
    'vs/platform/dialogs/electron-main/dialogMainService': {
      open: '打开',
      openFile: '打开文件',
      openFolder: '打开文件夹',
      openWorkspace: '打开(&&O)',
      openWorkspaceTitle: '从文件打开工作区',
    },
    'vs/platform/dnd/browser/dnd': {
      fileTooLarge:
        '文件太大，无法以无标题的编辑器形式打开。请先将其上传到文件资源管理器，然后重试。',
    },
    'vs/platform/environment/node/argv': {
      add: '将文件夹添加到上一个活动窗口。',
      category: '使用 --list-extensions 时，按提供的类别筛选已安装的扩展。',
      cliDataDir: '应在其中存储 CLI 元数据的目录。',
      'deprecated.useInstead': '请改用 {0}。',
      diff: '将两个文件相互比较。',
      disableChromiumSandbox:
        '仅当需要在 Linux 上以 sudo 用户身份启动应用程序或在 Windows 上的 applocker 环境中以提升的用户身份运行时，才使用此选项。',
      disableExtension:
        '禁用提供的扩展。此选项不会持久化，并且仅在命令打开新窗口时有效。',
      disableExtensions:
        '禁用所有已安装的扩展。此选项不会持久化，并且仅在命令打开新窗口时有效。',
      disableGPU: '禁用 GPU 硬件加速。',
      experimentalApis:
        '为扩展启用实验性 API 功能。可以输入一个或多个扩展的 ID 来进行单独启用。',
      extensionHomePath: '设置扩展的根路径。',
      extensionsManagement: '扩展管理',
      goto: '打开路径下的文件并定位到特定行和特定列。',
      help: '打印使用情况。',
      'inspect-brk-extensions':
        '允许扩展宿主在启动后暂停时进行扩展的调试和分析。您可以在开发人员工具中找到连接 URI。',
      'inspect-extensions':
        '允许调试和分析扩展。您可以在开发人员工具中找到连接 URI。',
      'install prerelease': '使用 --install-extension 时安装扩展的预发行版本',
      installExtension:
        "安装或更新扩展。参数是 VSIX 的扩展 ID 或路径。扩展的标识符为 '${publisher}.${name}'。使用 '--force' 参数更新到最新版本。若要安装特定版本，请提供 '@${version}'。例如:'vscode.csharp@1.2.3'。",
      listExtensions: '列出已安装的扩展。',
      locale: '要使用的区域设置(例如 en-US 或 zh-TW)。',
      log: '要使用的日志级别。默认值为 "info"。允许的值为 "critical"、"error"、"warn"、"info"、"debug"、"trace"、"off"。还可以通过以下格式传递扩展 ID 和日志级别以配置扩展的日志级别: "${publisher}.${name}:${logLevel}"。例如: "vscode.csharp:trace"。可以接收一个或多个此类条目。',
      merge:
        '通过提供文件的两个修改版本的路径、两个修改版本的共同来源，以及保存合并结果的输出文件来执行三向合并。',
      newWindow: '强制打开新窗口。',
      options: '选项',
      optionsUpperCase: '选项',
      paths: '路径',
      'prof-startup': '启动期间运行 CPU 探查器。',
      profileName:
        '使用给定的配置文件打开所提供的文件夹或工作区，并将配置文件与工作区相关联。如果配置文件不存在，则会创建一个新的空配置文件。必须提供文件夹或工作区才能使配置文件生效。',
      reuseWindow: '强制在已打开的窗口中打开文件或文件夹。',
      showVersions: '使用 --list-extensions 时，显示已安装扩展的版本。',
      status: '打印进程使用情况和诊断信息。',
      stdinUnix:
        '要从 stdin 中读取，请追加 "-" (例如 "ps aux | grep code | {0} -\')',
      stdinWindows:
        '要读取其他程序的输出，请追加 "-" (例如 "echo Hello World | {0} -\')',
      subcommands: '子命令',
      telemetry: '显示 VS Code 收集的所有遥测事件。',
      troubleshooting: '故障排查',
      'turn sync': '打开或关闭同步。',
      uninstallExtension: '卸载扩展。',
      unknownCommit: '未知提交',
      unknownVersion: '未知版本',
      usage: '使用情况',
      userDataDir: '指定保存用户数据的目录。可用于打开多个不同的 Code 实例。',
      verbose: '打印详细输出(表示 - 等待)。',
      version: '打印版本。',
      wait: '等文件关闭后再返回。',
    },
    'vs/platform/environment/node/argvHelper': {
      deprecatedArgument: '已弃用选项“{0}”: {1}',
      emptyValue: '选项“{0}”需要非空值。忽略该选项。',
      gotoValidation:
        '"--goto" 模式中的参数格式应为 "FILE(:LINE(:CHARACTER))"。',
      multipleValues: '对选项“{0}”进行了多次定义。使用值“{1}”。',
      unknownOption:
        '警告: "{0}"不在已知选项列表中，但仍传递给 Electron/Chromium。',
      unknownSubCommandOption: '警告:“{0}”不在子命令“{1}”的已知选项列表中',
    },
    'vs/platform/extensionManagement/common/abstractExtensionManagementService':
      {
        MarketPlaceDisabled: '市场未启用',
        'incompatible platform': "'{0}' 扩展在 {1} 中对于 {2} 不可用。",
        'malicious extension': "无法安装 '{0}' 扩展，因为其被报告为存在问题。",
        multipleDependentsError:
          '无法卸载扩展“{0}”。“{1}”、“{2}”以及其他扩展都依赖于它。',
        multipleIndirectDependentsError:
          '无法卸载扩展“{0}”。该操作会一并卸载依赖于它的扩展“{1}”、“{2}”、“{3}”和其他扩展。',
        notFoundCompatibleDependency:
          '无法安装“{0}”扩展，因为它与当前 {1} 版本不兼容(版本 {2})。',
        notFoundCompatiblePrereleaseDependency:
          '无法安装“{0}”扩展的预发布版本，因为它与当前 {1} 版本(版本 {2})不兼容。',
        notFoundReleaseExtension: "由于 '{0}' 扩展没有发布版本，因此无法安装。",
        singleDependentError: '无法卸载扩展“{0}”。扩展“{1}”依赖于它。',
        singleIndirectDependentError:
          '无法卸载扩展“{0}”。该操作会一并卸载依赖于它的扩展“{1}”和“{2}”。',
        twoDependentsError: '无法卸载扩展“{0}”。扩展“{1}”和“{2}”依赖于它。',
        twoIndirectDependentsError:
          '无法卸载扩展“{0}”。该操作会一并卸载依赖于它的扩展“{1}”、“{2}”和“{3}”。',
      },
    'vs/platform/extensionManagement/common/extensionManagement': {
      extensions: '扩展',
      preferences: '首选项',
    },
    'vs/platform/extensionManagement/common/extensionManagementCLI': {
      alreadyInstalled: '已安装扩展“{0}”。',
      'alreadyInstalled-checkAndUpdate':
        '已安装扩展 "{0}" v{1}。使用 "--force" 选项更新到最新版本，或提供 "@<version>" 以安装特定版本，例如: "{2}@1.2.3"。',
      builtin: '扩展“{0}”是内置扩展，无法卸载',
      cancelInstall: '已取消安装扩展“{0}”。',
      cancelVsixInstall: '已取消安装扩展“{0}”。',
      'error while installing extensions': '安装扩展时出错: {0}',
      forceDowngrade:
        '已安装扩展“{0}”v{1} 的较新版本。请使用 "--force" 选项降级到旧版本。',
      forceUninstall:
        '用户已将扩展“{0}”标记为内置扩展。请使用 "--force" 选项将其卸载。',
      'installation failed': '未能安装扩展: {0}',
      installing: '正在安装扩展“{0}”...',
      'installing builtin ': '正在安装内置扩展“{0}”...',
      'installing builtin with version': '正在安装内置扩展“{0}”v{1}…',
      'installing with version': '正在安装扩展“{0}”v{1}...',
      installingExtensions: '正在安装扩展…',
      installingExtensionsOnLocation: '正在 {0} 上安装扩展…',
      listFromLocation: '{0} 上安装的扩展:',
      notFound: '找不到扩展“{0}”。',
      notInstalled: '未安装扩展“{0}”。',
      notInstalleddOnLocation: '{1} 上未安装扩展“{0}”。',
      successInstall: '已成功安装扩展“{0}”v{1}。',
      successUninstall: '已成功卸载扩展“{0}”!',
      successUninstallFromLocation: '已成功从 {1} 卸载扩展“{0}”!',
      successVsixInstall: '已成功安装扩展“{0}”。',
      uninstalling: '正在卸载 {0}…',
      updateMessage: '将扩展 "{0}" 更新到版本 {1}',
      useId: '确认使用了包括发布者在内的完整扩展 ID，例如: {0}',
    },
    'vs/platform/extensionManagement/common/extensionNls': {
      missingNLSKey: '无法找到键 {0} 的消息。',
    },
    'vs/platform/extensionManagement/common/extensionsScannerService': {
      fileReadFail: '无法读取文件 {0}: {1}。',
      jsonInvalidFormat: '格式 {0} 无效: 应为 JSON 对象。',
      jsonParseFail: '无法解析 {0}: [{1}, {2}] {3}.',
      jsonParseInvalidType: '清单文件 {0} 无效: 不是 JSON 对象。',
      jsonsParseReportErrors: '未能分析 {0}: {1}。',
    },
    'vs/platform/extensionManagement/node/extensionManagementService': {
      MarketPlaceDisabled: '市场未启用',
      'Not a Marketplace extension': '只能重新安装商店中的扩展',
      'cannot read': '无法从 {0} 读取扩展',
      errorDeleting:
        '安装扩展“{1}”时无法删除现有文件夹“{0}”。请手动删除此文件夹，然后重试',
      incompatible: '无法安装扩展“{0}”，因为它与 VS Code“{1}”不兼容。',
      removeError: '删除扩展时出错: {0}。请重启 VS Code，然后重试。',
      renameError: '将 {0} 重命名为 {1} 时发生未知错误',
      restartCode: '请在重新安装{0}之前重新启动 VS Code。',
    },
    'vs/platform/extensionManagement/node/extensionManagementUtil': {
      invalidManifest: 'VSIX 无效: package.json 不是 JSON 文件。',
    },
    'vs/platform/extensions/common/extensionValidator': {
      'extensionDescription.activationEvents1':
        '属性“{0}”可以省略，否则其类型必须是 `string[]`',
      'extensionDescription.activationEvents2':
        '如果扩展没有“{1}”或“{2}”属性，则应省略属性“{0}”。',
      'extensionDescription.browser1':
        '属性“{0}”可以省略，否则其类型必须是 `string`',
      'extensionDescription.browser2':
        '应在扩展文件夹({1})中包含 `browser` ({0})。这可能会使扩展不可移植。',
      'extensionDescription.engines':
        '属性“{0}”是必要属性，其类型必须是 `object`',
      'extensionDescription.engines.vscode':
        '属性“{0}”是必需的，其类型必须是 `string`',
      'extensionDescription.extensionDependencies':
        '属性“{0}”可以省略，否则其类型必须是 `string[]`',
      'extensionDescription.extensionKind':
        '仅当同时定义了属性“main”时，才能定义属性“{0}”。',
      'extensionDescription.main1':
        '属性 `{0}` 可以省略，否则其类型必须是 `string`',
      'extensionDescription.main2':
        '应在扩展文件夹({1})中包含 `main` ({0})。这可能会使扩展不可移植。',
      'extensionDescription.name': '属性“{0}”是必需的，其类型必须是 `string`',
      'extensionDescription.publisher':
        '属性 publisher 的类型必须是 `string`。',
      'extensionDescription.version':
        '属性“{0}”是必需的，其类型必须是 `string`',
      notSemver: '扩展版本与 semver 不兼容。',
      versionMismatch: '扩展与 Code {0} 不兼容。扩展需要: {1}。',
      versionSpecificity1:
        '"engines.vscode" ({0}) 中指定的版本不够具体。对于 1.0.0 之前的 vscode 版本，请至少定义主要和次要想要的版本。例如: ^0.10.0、0.10.x、0.11.0 等。',
      versionSpecificity2:
        '"engines.vscode" ({0}) 中指定的版本不够具体。对于 1.0.0 之后的 vscode 版本，请至少定义主要想要的版本。例如: ^1.10.0、1.10.x、1.x.x、2.x.x 等。',
      versionSyntax:
        '无法解析 "engines.vscode" 的值 {0}。请改为如 ^1.22.0, ^1.22.x 等。',
    },
    'vs/platform/externalTerminal/node/externalTerminalService': {
      'console.title': 'VS Code 控制台',
      'ext.term.app.not.found': '找不到终端应用程序 "{0}"',
      'linux.term.failed': '“{0}”失败，退出代码为 {1}',
      'mac.terminal.script.failed': '脚本“{0}”失败，退出代码为 {1}',
      'mac.terminal.type.not.supported': '不支持“{0}”',
      'press.any.key': '按任意键继续...',
    },
    'vs/platform/files/browser/htmlFileSystemProvider': {
      fileSystemNotAllowedError: '权限不足。请重试并允许该操作。',
      fileSystemRenameError: '仅文件支持重命名。',
    },
    'vs/platform/files/browser/indexedDBFileSystemProvider': {
      dirIsNotEmpty: '目录不为空',
      fileExceedsStorageQuota: '文件超出可用存储配额',
      fileIsDirectory: '文件为目录',
      fileNotDirectory: '文件不是目录',
      fileNotExists: '文件不存在',
      internal: 'IndexedDB 文件系统提供程序中发生内部错误。({0})',
    },
    'vs/platform/files/common/files': {
      sizeB: '{0} B',
      sizeGB: '{0} GB',
      sizeKB: '{0} KB',
      sizeMB: '{0} MB',
      sizeTB: '{0} TB',
      unknownError: '未知错误',
    },
    'vs/platform/files/common/fileService': {
      deleteFailedAtomicUnsupported:
        '无法自动删除文件"{0}"，因为提供程序不支持它。',
      deleteFailedNonEmptyFolder: '无法删除非空文件夹“{0}”。',
      deleteFailedNotFound: "无法删除不存在的文件 '{0}'",
      deleteFailedTrashAndAtomicUnsupported:
        '无法以原子方式删除文件 "{0}"，因为已启用使用回收站。',
      deleteFailedTrashUnsupported:
        '无法通过回收站删除文件"{0}"，因为提供程序不支持它。',
      'err.read': "无法读取文件'{0}' ({1})",
      'err.readonly': '无法修改只读文件“{0}”',
      'err.write': '无法写入文件"{0}"({1})',
      fileExists: '如果未设置覆盖标记，则无法创建文件“{0}”，因为它已存在',
      fileIsDirectoryReadError: '无法读取实际上是一个目录的文件"{0}"',
      fileIsDirectoryWriteError: '无法写入实际上是一个目录的文件"{0}"',
      fileModifiedError: '自以下时间已修改的文件:',
      fileNotFoundError: "无法解析不存在的文件 '{0}'",
      fileNotModifiedError: '自以下时间未修改的文件:',
      fileTooLargeError: '无法读取文件“{0}”，该文件太大，无法打开',
      invalidPath: '无法解析具有相对文件路径"{0}"的文件系统提供程序',
      mkdirExistsError: '无法创建已存在但不是目录的文件夹"{0}"',
      noProviderFound: 'ENOPRO: 未找到资源 "{0}" 的文件系统提供程序',
      unableToMoveCopyError1:
        '当源"{0}"与目标"{1}"在不区分大小写的文件系统上具有不同路径大小写时，无法复制',
      unableToMoveCopyError2: '当源"{0}"是目标"{1}"的父级时，无法移动/复制。',
      unableToMoveCopyError3:
        '无法移动/复制"{0}"，因为目标"{1}"已存在于目标位置。',
      unableToMoveCopyError4:
        '无法将"{0}"移动/复制到"{1}"中，因为文件将替换包含该文件的文件夹。',
      writeFailedAtomicUnlock: '无法解锁文件 "{0}"，因为已启用原子写入。',
      writeFailedAtomicUnsupported:
        '无法以原子方式写入文件 "{0}"，因为提供程序不支持它。',
      writeFailedUnlockUnsupported: '无法解锁文件“{0}”，因为提供程序不支持它。',
    },
    'vs/platform/files/common/io': {
      fileTooLargeError: '文件太大，无法打开',
    },
    'vs/platform/files/electron-main/diskFileSystemProviderServer': {
      binFailed: '未能将“{0}”移动到回收站',
      trashFailed: '未能将“{0}”移动到废纸篓',
    },
    'vs/platform/files/node/diskFileSystemProvider': {
      copyError: '无法将 "{0}" 复制到 "{1}" ({2}) 中。',
      fileCopyErrorPathCase: '文件不能复制到仅大小写不同的相同路径',
      fileExists: '文件已存在',
      fileMoveCopyErrorExists:
        '目标上的文件已存在，因此不会移动/复制到其中，除非指定了覆盖',
      fileMoveCopyErrorNotFound: '要移动/复制的文件不存在',
      fileNotExists: '文件不存在',
      moveError: '无法将 "{0}" 移动到 "{1}" ({2}) 中。',
    },
    'vs/platform/history/browser/contextScopedHistoryWidget': {
      suggestWidgetVisible: '建议是否可见',
    },
    'vs/platform/issue/electron-main/issueMainService': {
      cancel: '取消',
      confirmCloseIssueReporter: '您的输入将不会保存。确实要关闭此窗口吗？',
      issueReporter: '问题报告程序',
      issueReporterWriteToClipboard:
        '数据太多，无法直接发送到 GitHub。数据将被复制到剪贴板，请将其粘贴到打开的 GitHub 问题页。',
      local: '本地',
      ok: '确定(&&O)',
      processExplorer: '进程管理器',
      'trace.detail': '请创建问题并手动附加以下文件:\r\n{0}',
      'trace.message': '已成功创建跟踪文件',
      'trace.ok': '确定(&&O)',
      yes: '是(&&Y)',
    },
    'vs/platform/keybinding/common/abstractKeybindingService': {
      'first.chord': '({0})已按下。正在等待按下第二个键...',
      'missing.chord': '组合键({0}，{1})不是命令。',
      'next.chord': '已按下({0})。正在等待第二个键...',
    },
    'vs/platform/keyboardLayout/common/keyboardConfig': {
      dispatch: '控制按键的分派逻辑以使用 "code" (推荐) 或 "keyCode"。',
      keyboardConfigurationTitle: '键盘',
      mapAltGrToCtrlAlt: '控制是否应将 AltGraph+ 修饰符视为 Ctrl+Alt+。',
    },
    'vs/platform/languagePacks/common/languagePacks': {
      currentDisplayLanguage: ' (当前)',
    },
    'vs/platform/languagePacks/common/localizedStrings': {
      close: '关闭',
      find: '查找',
      open: '打开',
    },
    'vs/platform/list/browser/listService': {
      'Fast Scroll Sensitivity': '按下"Alt"时滚动速度倍增。',
      'Mouse Wheel Scroll Sensitivity':
        '对鼠标滚轮滚动事件的 `deltaX` 和 `deltaY` 乘上的系数。',
      defaultFindMatchTypeSettingKey:
        '控制在工作台中搜索列表和树时使用的匹配类型。',
      'defaultFindMatchTypeSettingKey.contiguous': '在搜索时使用连续匹配。',
      'defaultFindMatchTypeSettingKey.fuzzy': '在搜索时使用模糊匹配。',
      defaultFindModeSettingKey: '控制工作台中列表和树的默认查找模式。',
      'defaultFindModeSettingKey.filter': '搜索时筛选元素。',
      'defaultFindModeSettingKey.highlight':
        '搜索时突出显示元素。进一步向上和向下导航将仅遍历突出显示的元素。',
      'expand mode':
        '控制在单击文件夹名称时如何扩展树文件夹。请注意，如果不适用，某些树和列表可能会选择忽略此设置。',
      'horizontalScrolling setting':
        '控制工作台上的列表和树是否支持水平滚动。警告: 打开此设置会影响性能。',
      keyboardNavigationSettingKey:
        '控制工作台中的列表和树的键盘导航样式。它可为“简单”、“突出显示”或“筛选”。',
      'keyboardNavigationSettingKey.filter':
        '筛选器键盘导航将筛选出并隐藏与键盘输入不匹配的所有元素。',
      'keyboardNavigationSettingKey.highlight':
        '高亮键盘导航会突出显示与键盘输入相匹配的元素。进一步向上和向下导航将仅遍历突出显示的元素。',
      'keyboardNavigationSettingKey.simple':
        '简单键盘导航聚焦与键盘输入相匹配的元素。仅对前缀进行匹配。',
      keyboardNavigationSettingKeyDeprecated:
        '请改用 "workbench.list.defaultFindMode" 和 "workbench.list.typeNavigationMode"。',
      'list smoothScrolling setting': '控制列表和树是否具有平滑滚动效果。',
      'list.scrollByPage': '控制在滚动条中单击时是否逐页单击。',
      multiSelectModifier:
        '在通过鼠标多选树和列表条目时使用的修改键 (例如“资源管理器”、“打开的编辑器”和“源代码管理”视图)。“在侧边打开”功能所需的鼠标动作 (若可用) 将会相应调整，不与多选修改键冲突。',
      'multiSelectModifier.alt':
        '映射为 `Alt` (Windows 和 Linux) 或 `Option` (macOS)。',
      'multiSelectModifier.ctrlCmd':
        '映射为 `Ctrl` (Windows 和 Linux) 或 `Command` (macOS)。',
      openModeModifier:
        '控制如何使用鼠标打开树和列表中的项(若支持)。请注意，如果此设置不适用，某些树和列表可能会选择忽略它。',
      'render tree indent guides': '控制树是否应呈现缩进参考线。',
      'tree indent setting': '控制树缩进(以像素为单位)。',
      typeNavigationMode:
        '控制类型导航在工作台的列表和树中的工作方式。如果设置为 "trigger"，则在运行 "list.triggerTypeNavigation" 命令后，类型导航将开始。',
      workbenchConfigurationTitle: '工作台',
    },
    'vs/platform/markers/common/markers': {
      'sev.error': '错误',
      'sev.info': '信息',
      'sev.warning': '警告',
    },
    'vs/platform/menubar/electron-main/menubar': {
      cancel: '取消',
      mAbout: '关于 {0}',
      mBringToFront: '全部置于顶层',
      mEdit: '编辑(&&E)',
      mFile: '文件(&&F)',
      mGoto: '转到(&&G)',
      mHelp: '帮助(&&H)',
      mHide: '隐藏 {0}',
      mHideOthers: '隐藏其他',
      mMergeAllWindows: '合并所有窗口',
      mMinimize: '最小化',
      mMoveTabToNewWindow: '移动标签页到新窗口',
      mNewTab: '新建标签页',
      mRun: '运行(&&R)',
      mSelection: '选择(&&S)',
      mServices: '服务',
      mShowAll: '全部显示',
      mShowNextTab: '显示下一个选项卡',
      mShowPreviousTab: '显示上一个选项卡',
      mTerminal: '终端(&&T)',
      mView: '查看(&&V)',
      mWindow: '窗口',
      mZoom: '缩放',
      miCheckForUpdates: '检查更新(&&U)...',
      miCheckingForUpdates: '正在检查更新...',
      miDownloadUpdate: '下载可用更新(&&O)',
      miDownloadingUpdate: '正在下载更新...',
      miInstallUpdate: '安装更新(&&U)...',
      miInstallingUpdate: '正在安装更新...',
      miNewWindow: '新建窗口(&&W)',
      miPreferences: '首选项(&&P)',
      miQuit: '退出 {0}',
      miRestartToUpdate: '重新启动以更新(&&U)',
      miSwitchWindow: '切换窗口(&&W)...',
      quit: '退出(&&Q)',
      quitMessage: '是否确实要退出?',
    },
    'vs/platform/native/electron-main/nativeHostMainService': {
      cancel: '取消',
      cantCreateBinFolder: '无法安装 Shell 命令“{0}”。',
      cantUninstall: '无法卸载 Shell 命令“{0}”。',
      ok: '确定(&&O)',
      sourceMissing: '在 "{0}" 中找不到 shell 脚本',
      warnEscalation:
        '{0}将通过 "osascript" 提示需要管理员权限才可安装 shell 命令。',
      warnEscalationUninstall:
        '{0} 将使用 "osascript" 来提示获取管理员权限，从而卸载 Shell 命令。',
    },
    'vs/platform/quickinput/browser/commandsQuickAccess': {
      canNotRun: '命令 "{0}" 导致错误',
      commandPickAriaLabelWithKeybinding: '{0}, {1}',
      commonlyUsed: '常用',
      morecCommands: '其他命令',
      recentlyUsed: '最近使用',
    },
    'vs/platform/quickinput/browser/helpQuickAccess': {
      helpPickAriaLabel: '{0}, {1}',
    },
    'vs/platform/quickinput/browser/quickInput': {
      custom: '自定义',
      inputModeEntry: '按 "Enter" 以确认或按 "Esc" 以取消',
      inputModeEntryDescription: '{0} (按 "Enter" 以确认或按 "Esc" 以取消)',
      ok: '确定',
      'quickInput.back': '上一步',
      'quickInput.backWithKeybinding': '后退 ({0})',
      'quickInput.checkAll': '切换所有复选框',
      'quickInput.countSelected': '已选 {0} 项',
      'quickInput.steps': '{0}/{1}',
      'quickInput.visibleCount': '{0} 个结果',
      'quickInputBox.ariaLabel': '在此输入可缩小结果范围。',
    },
    'vs/platform/quickinput/browser/quickInputList': {
      quickInput: '快速输入',
    },
    'vs/platform/quickinput/browser/quickInputUtils': {
      executeCommand: '单击以执行命令 "{0}"',
    },
    'vs/platform/quickinput/browser/quickPickPin': {
      pinCommand: '固定命令',
      pinnedCommand: '已固定命令',
      'terminal.commands.pinned': '已固定',
    },
    'vs/platform/remoteTunnel/common/remoteTunnel': {
      remoteTunnelLog: '远程隧道服务',
    },
    'vs/platform/remoteTunnel/node/remoteTunnelService': {
      'remoteTunnelService.authorizing': '正在以 {0} 的身份连接({1})',
      'remoteTunnelService.building': '正在从源生成 CLI',
      'remoteTunnelService.openTunnel': '正在打开隧道',
      'remoteTunnelService.openTunnelWithName': '正在打开隧道 {0}',
    },
    'vs/platform/request/common/request': {
      httpConfigurationTitle: 'HTTP',
      proxy:
        '要使用的代理设置。如果未设置，则将从 "http_proxy" 和 "https_proxy" 环境变量中继承。',
      proxyAuthorization:
        '要作为每个网络请求的 "Proxy-Authorization" 标头发送的值。',
      proxySupport: '对扩展使用代理支持。',
      proxySupportFallback:
        '在未找到代理的情况下，启用扩展的代理支持，回退到请求选项。',
      proxySupportOff: '禁用对扩展的代理支持。',
      proxySupportOn: '为扩展启用代理支持。',
      proxySupportOverride: '为扩展启用代理支持，覆盖请求选项。',
      request: '网络请求',
      strictSSL: '控制是否根据提供的 CA 列表验证代理服务器证书。',
      systemCertificates:
        '控制是否应从操作系统加载 CA 证书。(在 Windows 和 macOS 上, 关闭此窗口后需要重新加载窗口。)',
    },
    'vs/platform/shell/node/shellEnv': {
      resolveShellEnvError: '无法解析 shell 环境: {0}',
      resolveShellEnvExitError:
        '来自生成的 shell 的意外退出代码(代码 {0}、信号 {1})',
      resolveShellEnvTimeout:
        '无法在合理的时间内解析 shell 环境。请检查 shell 配置，然后重启。',
    },
    'vs/platform/telemetry/common/telemetryLogAppender': {
      telemetryLog: '遥测{0}',
    },
    'vs/platform/telemetry/common/telemetryService': {
      enableTelemetryDeprecated:
        '如果此设置为 false，则无论新设置的值如何，都不会发送遥测数据。已弃用，推荐使用 {0} 设置。',
      'telemetry.crashReports': '崩溃报告',
      'telemetry.docsAndPrivacyStatement':
        '详细了解[我们收集的数据]({0})和我们的[隐私声明]({1})。',
      'telemetry.docsStatement': '详细了解[我们收集的数据]({0})。',
      'telemetry.enableTelemetry':
        '启用要收集的诊断数据。这有助于我们更好地了解 {0} 的执行情况以及哪里需要改进。',
      'telemetry.enableTelemetryMd':
        '启用要收集的诊断数据。这有助于我们更好地了解 {0} 的执行情况以及哪里需要改进。[阅读详细信息]({1})关于我们收集的内容和隐私声明。',
      'telemetry.errors': '错误遥测',
      'telemetry.restart': '若要使崩溃报告更改生效，必须完全重新启动应用程序。',
      'telemetry.telemetryLevel.crash': '发送 OS 级别故障报告。',
      'telemetry.telemetryLevel.default': '发送使用情况数据、错误、故障报告。',
      'telemetry.telemetryLevel.deprecated':
        '****注意:*** 如果此设置为“关闭”，则无论其他遥测设置如何，都不会发送遥测数据。如果此设置为“关闭”以外的任何选项，并且使用弃用的设置禁用遥测，则不会发送遥测数据。*',
      'telemetry.telemetryLevel.error': '发送常规错误遥测和故障报告。',
      'telemetry.telemetryLevel.off': '禁用所有产品遥测。',
      'telemetry.telemetryLevel.tableDescription':
        '下表概述了每个设置所发送的数据:',
      'telemetry.telemetryLevelMd':
        '控制 {0} 遥测、第一方扩展遥测和参与的第三方扩展遥测。一些第三方扩展可能不遵守此设置。请查阅特定扩展的文档以确定。遥测有助于我们更好地了解 {0} 的执行情况、需要改进的地方以及功能的使用方式。',
      'telemetry.usage': '用法数据',
      telemetryConfigurationTitle: '遥测',
    },
    'vs/platform/terminal/common/terminalLogService': {
      terminalLoggerName: '终端',
    },
    'vs/platform/terminal/common/terminalPlatformConfiguration': {
      'terminal.integrated.automationProfile.linux':
        '要在 Linux 上用于自动化相关终端使用(如任务和调试)的终端配置文件。',
      'terminal.integrated.automationProfile.osx':
        '要在 macOS 上用于自动化相关终端使用(如任务和调试)的终端配置文件。',
      'terminal.integrated.automationProfile.windows':
        '要用于自动化相关终端使用(如任务和调试)的终端配置文件。如果设置了 {0} (现已弃用)，则当前将忽略此设置。',
      'terminal.integrated.confirmIgnoreProcesses':
        '使用 {0} 设置时要忽略的一组流程名称。',
      'terminal.integrated.defaultProfile.linux':
        'Linux 上的默认终端配置文件。',
      'terminal.integrated.defaultProfile.osx': 'macOS 上的默认终端配置文件。',
      'terminal.integrated.defaultProfile.windows':
        'Windows 上的默认终端配置文件。',
      'terminal.integrated.inheritEnv':
        '新 shell 是否应从 VS Code 继承其环境，这可能会生成登录 shell，以确保初始化 $PATH 和其他开发变量。这不会对 Windows 造成影响。',
      'terminal.integrated.persistentSessionScrollback':
        '控制重新连接到永久性终端会话时将还原的最大行数。增加此数量将以占用更多内存为代价还原更多的回滚行，并增加在启动时连接到终端所需的时间。此设置需要重启才能生效，并应设置为小于或等于 `#terminal.integrated.scrollback#` 的值。',
      'terminal.integrated.profile':
        '一组用于 {0} 的终端配置文件自定义，可在该平台上添加、移除或更改终端的启动方式。配置文件由强制路径、可选参数和其他演示选项组成。\r\n\r\n要替代现有配置文件，请使用其配置文件名称作为键，例如:\r\n\r\n{1}\r\n\r\n{2}详细了解如何对配置文件进行配置{3}。',
      'terminal.integrated.showLinkHover': '是否显示终端输出中链接的悬停。',
      'terminal.integrated.useWslProfiles':
        '控制是否在终端下拉列表中显示 WSL 发行版',
      'terminalAutomationProfile.path': 'shell 可执行文件的单个路径。',
      terminalIntegratedConfigurationTitle: '集成终端',
      'terminalProfile.args': '用于运行 shell 可执行文件的可选参数集。',
      'terminalProfile.color': '要与终端图标关联的主题颜色 ID。',
      'terminalProfile.env':
        '具有将添加到终端配置文件进程的环境变量的对象。设置为 "null" 以从基本环境中删除环境变量。',
      'terminalProfile.icon': '要与终端图标关联的 codicon ID。',
      'terminalProfile.linuxExtensionId': '扩展终端的 ID',
      'terminalProfile.linuxExtensionIdentifier': '提供此配置文件的扩展。',
      'terminalProfile.linuxExtensionTitle': '扩展终端的名称',
      'terminalProfile.osxExtensionId': '扩展终端的 ID',
      'terminalProfile.osxExtensionIdentifier': '提供此配置文件的扩展。',
      'terminalProfile.osxExtensionTitle': '扩展终端的名称',
      'terminalProfile.overrideName':
        '控制配置文件名称是否替代自动检测到的名称。',
      'terminalProfile.path':
        '指向 shell 可执行文件的单一路径或一个路径数组(当一个路径失败时，这些路径将被用作回退)。',
      'terminalProfile.windowsExtensionId': '扩展终端的 ID',
      'terminalProfile.windowsExtensionIdentifier': '提供此配置文件的扩展。',
      'terminalProfile.windowsExtensionTitle': '扩展终端的名称',
      'terminalProfile.windowsSource':
        '将自动检测 shell 路径的配置文件源。请注意，非标准可执行文件位置不受支持，必须在新的配置文件中手动创建。',
    },
    'vs/platform/terminal/common/terminalProfiles': {
      terminalAutomaticProfile: '自动检测默认值',
    },
    'vs/platform/terminal/node/ptyHostMain': {
      ptyHost: 'Pty 主机',
    },
    'vs/platform/terminal/node/ptyService': {
      'terminal-history-restored': '还原的历史记录',
    },
    'vs/platform/terminal/node/terminalProcess': {
      'launchFail.cwdDoesNotExist': '启动目录(cwd)“{0}”不存在',
      'launchFail.cwdNotDirectory': '启动目录(cwd)“{0}”不是一个目录',
      'launchFail.executableDoesNotExist': 'shell 可执行文件“{0}”的路径不存在',
      'launchFail.executableIsNotFileOrSymlink':
        'shell 可执行文件 "{0}" 的路径非文件或符号链接',
    },
    'vs/platform/theme/common/colorRegistry': {
      activeContrastBorder:
        '在活动元素周围额外的一层边框，用来提高对比度从而区别其他元素。',
      activeLinkForeground: '活动链接颜色。',
      badgeBackground:
        'Badge 背景色。Badge 是小型的信息标签，如表示搜索结果数量的标签。',
      badgeForeground:
        'Badge 前景色。Badge 是小型的信息标签，如表示搜索结果数量的标签。',
      breadcrumbsBackground: '导航路径项的背景色。',
      breadcrumbsFocusForeground: '焦点导航路径的颜色',
      breadcrumbsSelectedBackground: '导航路径项选择器的背景色。',
      breadcrumbsSelectedForeground: '已选导航路径项的颜色。',
      buttonBackground: '按钮背景色。',
      buttonBorder: '按钮边框颜色。',
      buttonForeground: '按钮前景色。',
      buttonHoverBackground: '按钮在悬停时的背景颜色。',
      buttonSecondaryBackground: '辅助按钮背景色。',
      buttonSecondaryForeground: '辅助按钮前景色。',
      buttonSecondaryHoverBackground: '悬停时的辅助按钮背景色。',
      buttonSeparator: '按钮分隔符颜色。',
      chartsBlue: '图表可视化效果中使用的蓝色。',
      chartsForeground: '图表中使用的前景颜色。',
      chartsGreen: '图表可视化效果中使用的绿色。',
      chartsLines: '用于图表中的水平线条的颜色。',
      chartsOrange: '图表可视化效果中使用的橙色。',
      chartsPurple: '图表可视化效果中使用的紫色。',
      chartsRed: '图表可视化效果中使用的红色。',
      chartsYellow: '图表可视化效果中使用的黄色。',
      'checkbox.background': '复选框小部件的背景颜色。',
      'checkbox.border': '复选框小部件的边框颜色。',
      'checkbox.foreground': '复选框小部件的前景色。',
      'checkbox.select.background':
        '选择复选框小组件所在的元素时该小组件的背景色。',
      'checkbox.select.border':
        '选择复选框小组件所在的元素时该小组件的边框颜色。',
      contrastBorder:
        '在元素周围额外的一层边框，用来提高对比度从而区别其他元素。',
      descriptionForeground: '提供其他信息的说明文本的前景色，例如标签文本。',
      diffDiagonalFill:
        '差异编辑器的对角线填充颜色。对角线填充用于并排差异视图。',
      'diffEditor.unchangedCodeBackground': '差异编辑器中未更改代码的背景色。',
      'diffEditor.unchangedRegionBackground': '差异编辑器中未更改块的背景色。',
      'diffEditor.unchangedRegionForeground': '差异编辑器中未更改块的前景色。',
      diffEditorBorder: '两个文本编辑器之间的边框颜色。',
      diffEditorInserted:
        '已插入的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      diffEditorInsertedLineGutter: '插入行的边距的背景色。',
      diffEditorInsertedLines:
        '已插入的行的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      diffEditorInsertedOutline: '插入的文本的轮廓颜色。',
      diffEditorOverviewInserted: '插入内容的差异概述标尺前景。',
      diffEditorOverviewRemoved: '删除内容的差异概述标尺前景。',
      diffEditorRemoved:
        '已删除的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      diffEditorRemovedLineGutter: '删除行的边距的背景色。',
      diffEditorRemovedLines:
        '已删除的行的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      diffEditorRemovedOutline: '被删除文本的轮廓颜色。',
      disabledForeground:
        '已禁用元素的整体前景色。仅在未由组件替代时才能使用此颜色。',
      dropdownBackground: '下拉列表背景色。',
      dropdownBorder: '下拉列表边框。',
      dropdownForeground: '下拉列表前景色。',
      dropdownListBackground: '下拉列表背景色。',
      editorBackground: '编辑器背景色。',
      'editorError.background':
        '编辑器中错误文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      'editorError.foreground': '编辑器中错误波浪线的前景色。',
      editorFindMatch: '当前搜索匹配项的颜色。',
      editorFindMatchBorder: '当前搜索匹配项的边框颜色。',
      editorForeground: '编辑器默认前景色。',
      'editorHint.foreground': '编辑器中提示波浪线的前景色。',
      editorInactiveSelection:
        '非活动编辑器中所选内容的颜色，颜色必须透明，以免隐藏下面的装饰效果。',
      'editorInfo.background':
        '编辑器中信息文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      'editorInfo.foreground': '编辑器中信息波浪线的前景色。',
      editorInlayHintBackground: '内联提示的背景色',
      editorInlayHintBackgroundParameter: '参数内联提示的背景色',
      editorInlayHintBackgroundTypes: '类型内联提示的背景色',
      editorInlayHintForeground: '内联提示的前景色',
      editorInlayHintForegroundParameter: '参数内联提示的前景色',
      editorInlayHintForegroundTypes: '类型内联提示的前景色',
      editorLightBulbAutoFixForeground: '用于灯泡自动修复操作图标的颜色。',
      editorLightBulbForeground: '用于灯泡操作图标的颜色。',
      editorSelectionBackground: '编辑器所选内容的颜色。',
      editorSelectionForeground: '用以彰显高对比度的所选文本的颜色。',
      editorSelectionHighlight:
        '具有与所选项相关内容的区域的颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      editorSelectionHighlightBorder: '与所选项内容相同的区域的边框颜色。',
      editorStickyScrollBackground: '编辑器的粘滞滚动背景色',
      editorStickyScrollHoverBackground: '编辑器悬停背景色上的粘滞滚动',
      'editorWarning.background':
        '编辑器中警告文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。',
      'editorWarning.foreground': '编辑器中警告波浪线的前景色。',
      editorWidgetBackground: '编辑器组件(如查找/替换)背景颜色。',
      editorWidgetBorder:
        '编辑器小部件的边框颜色。此颜色仅在小部件有边框且不被小部件重写时适用。',
      editorWidgetForeground: '编辑器小部件的前景色，如查找/替换。',
      editorWidgetResizeBorder:
        '编辑器小部件大小调整条的边框颜色。此颜色仅在小部件有调整边框且不被小部件颜色覆盖时使用。',
      errorBorder: '如果设置，编辑器中错误的双下划线颜色。',
      errorForeground: '错误信息的整体前景色。此颜色仅在不被组件覆盖时适用。',
      findMatchHighlight:
        '其他搜索匹配项的颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      findMatchHighlightBorder: '其他搜索匹配项的边框颜色。',
      findRangeHighlight:
        '限制搜索范围的颜色。颜色不能不透明，以免隐藏底层装饰。',
      findRangeHighlightBorder:
        '限制搜索的范围的边框颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      focusBorder: '焦点元素的整体边框颜色。此颜色仅在不被其他组件覆盖时适用。',
      foreground: '整体前景色。此颜色仅在不被组件覆盖时适用。',
      highlight: '在列表或树中搜索时，其中匹配内容的高亮颜色。',
      hintBorder: '如果设置，编辑器中提示的双下划线颜色。',
      hoverBackground: '编辑器悬停提示的背景颜色。',
      hoverBorder: '光标悬停时编辑器的边框颜色。',
      hoverForeground: '编辑器悬停的前景颜色。',
      hoverHighlight:
        '在下面突出显示悬停的字词。颜色必须透明，以免隐藏下面的修饰效果。',
      iconForeground: '工作台中图标的默认颜色。',
      infoBorder: '如果设置，编辑器中信息的双下划线颜色。',
      inputBoxActiveOptionBorder: '输入字段中已激活选项的边框颜色。',
      inputBoxBackground: '输入框背景色。',
      inputBoxBorder: '输入框边框。',
      inputBoxForeground: '输入框前景色。',
      'inputOption.activeBackground': '输入字段中选项的背景悬停颜色。',
      'inputOption.activeForeground': '输入字段中已激活的选项的前景色。',
      'inputOption.hoverBackground': '输入字段中激活选项的背景颜色。',
      inputPlaceholderForeground: '输入框中占位符的前景色。',
      inputValidationErrorBackground: '输入验证结果为错误级别时的背景色。',
      inputValidationErrorBorder: '严重性为错误时输入验证的边框颜色。',
      inputValidationErrorForeground: '输入验证结果为错误级别时的前景色。',
      inputValidationInfoBackground: '输入验证结果为信息级别时的背景色。',
      inputValidationInfoBorder: '严重性为信息时输入验证的边框颜色。',
      inputValidationInfoForeground: '输入验证结果为信息级别时的前景色。',
      inputValidationWarningBackground: '严重性为警告时输入验证的背景色。',
      inputValidationWarningBorder: '严重性为警告时输入验证的边框颜色。',
      inputValidationWarningForeground: '输入验证结果为警告级别时的前景色。',
      invalidItemForeground:
        '列表或树中无效项的前景色，例如资源管理器中没有解析的根目录。',
      keybindingLabelBackground:
        '键绑定标签背景色。键绑定标签用于表示键盘快捷方式。',
      keybindingLabelBorder:
        '键绑定标签边框色。键绑定标签用于表示键盘快捷方式。',
      keybindingLabelBottomBorder:
        '键绑定标签边框底部色。键绑定标签用于表示键盘快捷方式。',
      keybindingLabelForeground:
        '键绑定标签前景色。键绑定标签用于表示键盘快捷方式。',
      listActiveSelectionBackground:
        '已选项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listActiveSelectionForeground:
        '已选项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listActiveSelectionIconForeground:
        '已选项在列表/树活动时的列表/树图标前景颜色。活动的列表/树具有键盘焦点，非活动的则没有。',
      listDeemphasizedForeground: '取消强调的项目的列表/树前景颜色。',
      listDropBackground: '使用鼠标移动项目时，列表或树进行拖放的背景颜色。',
      listErrorForeground: '包含错误的列表项的前景颜色。',
      listFilterMatchHighlight: '筛选后的匹配项的背景颜色。',
      listFilterMatchHighlightBorder: '筛选后的匹配项的边框颜色。',
      listFilterWidgetBackground: '列表和树中类型筛选器小组件的背景色。',
      listFilterWidgetNoMatchesOutline:
        '当没有匹配项时，列表和树中类型筛选器小组件的轮廓颜色。',
      listFilterWidgetOutline: '列表和树中类型筛选器小组件的轮廓颜色。',
      listFilterWidgetShadow: '列表和树中类型筛选器小组件的阴影颜色。',
      listFocusAndSelectionOutline:
        '当列表/树处于活动状态且已选择时，重点项的列表/树边框颜色。活动的列表/树具有键盘焦点，但非活动的则没有。',
      listFocusBackground:
        '焦点项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listFocusForeground:
        '焦点项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listFocusHighlightForeground:
        '在列表或树中搜索时，匹配活动聚焦项的突出显示内容的列表/树前景色。',
      listFocusOutline:
        '列表/树活动时，焦点项目的列表/树边框色。活动的列表/树具有键盘焦点，非活动的没有。',
      listHoverBackground: '使用鼠标移动项目时，列表或树的背景颜色。',
      listHoverForeground: '鼠标在项目上悬停时，列表或树的前景颜色。',
      listInactiveFocusBackground:
        '非活动的列表或树控件中焦点项的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listInactiveFocusOutline:
        '列表/数非活动时，焦点项目的列表/树边框色。活动的列表/树具有键盘焦点，非活动的没有。',
      listInactiveSelectionBackground:
        '已选项在列表或树非活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listInactiveSelectionForeground:
        '已选项在列表或树非活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。',
      listInactiveSelectionIconForeground:
        '已选项在列表/树非活动时的图标前景颜色。活动的列表/树具有键盘焦点，非活动的则没有。',
      listWarningForeground: '包含警告的列表项的前景颜色。',
      menuBackground: '菜单项的背景颜色。',
      menuBorder: '菜单的边框颜色。',
      menuForeground: '菜单项的前景颜色。',
      menuSelectionBackground: '菜单中所选菜单项的背景色。',
      menuSelectionBorder: '菜单中所选菜单项的边框颜色。',
      menuSelectionForeground: '菜单中选定菜单项的前景色。',
      menuSeparatorBackground: '菜单中分隔线的颜色。',
      mergeBorder: '内联合并冲突中标头和分割线的边框颜色。',
      mergeCommonContentBackground:
        '内联合并冲突中的常见祖先内容背景。颜色必须透明，以免隐藏下面的修饰效果。',
      mergeCommonHeaderBackground:
        '内联合并冲突中的常见祖先标头背景。颜色必须透明，以免隐藏下面的修饰效果。',
      mergeCurrentContentBackground:
        '内联合并冲突中的当前内容背景。颜色必须透明，以免隐藏下面的修饰效果。',
      mergeCurrentHeaderBackground:
        '当前标题背景的内联合并冲突。颜色不能不透明，以免隐藏底层装饰。',
      mergeIncomingContentBackground:
        '内联合并冲突中的传入内容背景。颜色必须透明，以免隐藏下面的修饰效果。',
      mergeIncomingHeaderBackground:
        '内联合并冲突中的传入标题背景。颜色必须透明，以免隐藏下面的修饰效果。',
      minimapBackground: '迷你地图背景颜色。',
      minimapError: '用于错误的迷你地图标记颜色。',
      minimapFindMatchHighlight: '用于查找匹配项的迷你地图标记颜色。',
      minimapForegroundOpacity:
        '在缩略图中呈现的前景元素的不透明度。例如，"#000000c0" 将呈现不透明度为 75% 的元素。',
      minimapSelectionHighlight: '编辑器选区在迷你地图中对应的标记颜色。',
      minimapSelectionOccurrenceHighlight:
        '用于重复编辑器选择的缩略图标记颜色。',
      minimapSliderActiveBackground: '单击时，迷你地图滑块的背景颜色。',
      minimapSliderBackground: '迷你地图滑块背景颜色。',
      minimapSliderHoverBackground: '悬停时，迷你地图滑块的背景颜色。',
      overviewRuleWarning: '用于警告的迷你地图标记颜色。',
      overviewRulerCommonContentForeground:
        '内联合并冲突中共同祖先区域的概览标尺前景色。',
      overviewRulerCurrentContentForeground:
        '内联合并冲突中当前版本区域的概览标尺前景色。',
      overviewRulerFindMatchForeground:
        '用于查找匹配项的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      overviewRulerIncomingContentForeground:
        '内联合并冲突中传入的版本区域的概览标尺前景色。',
      overviewRulerSelectionHighlightForeground:
        '用于突出显示所选内容的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。',
      pickerBackground:
        '背景颜色快速选取器。快速选取器小部件是选取器(如命令调色板)的容器。',
      pickerForeground:
        '前景颜色快速选取器。快速选取器小部件是命令调色板等选取器的容器。',
      pickerGroupBorder: '快速选取器分组边框的颜色。',
      pickerGroupForeground: '快速选取器分组标签的颜色。',
      pickerTitleBackground:
        '标题背景颜色快速选取器。快速选取器小部件是命令调色板等选取器的容器。',
      problemsErrorIconForeground: '用于问题错误图标的颜色。',
      problemsInfoIconForeground: '用于问题信息图标的颜色。',
      problemsWarningIconForeground: '用于问题警告图标的颜色。',
      progressBarBackground: '表示长时间操作的进度条的背景色。',
      'quickInput.list.focusBackground deprecation':
        '请改用 quickInputList.focusBackground',
      'quickInput.listFocusBackground': '焦点项目的快速选择器背景色。',
      'quickInput.listFocusForeground': '焦点项目的快速选择器前景色。',
      'quickInput.listFocusIconForeground': '焦点项目的快速选取器图标前景色。',
      sashActiveBorder: '活动框格的边框颜色。',
      scrollbarShadow: '表示视图被滚动的滚动条阴影。',
      scrollbarSliderActiveBackground: '滚动条滑块在被点击时的背景色。',
      scrollbarSliderBackground: '滚动条滑块背景色',
      scrollbarSliderHoverBackground: '滚动条滑块在悬停时的背景色',
      'search.resultsInfoForeground': '搜索 Viewlet 完成消息中文本的颜色。',
      'searchEditor.editorFindMatchBorder': '搜索编辑器查询匹配的边框颜色。',
      'searchEditor.queryMatch': '搜索编辑器查询匹配的颜色。',
      selectionBackground:
        '工作台所选文本的背景颜色(例如输入字段或文本区域)。注意，本设置不适用于编辑器。',
      snippetFinalTabstopHighlightBackground:
        '代码片段中最后的 Tab 位的高亮背景色。',
      snippetFinalTabstopHighlightBorder:
        '代码片段中最后的制表位的高亮边框颜色。',
      snippetTabstopHighlightBackground: '代码片段 Tab 位的高亮背景色。',
      snippetTabstopHighlightBorder: '代码片段 Tab 位的高亮边框颜色。',
      statusBarBackground: '编辑器悬停状态栏的背景色。',
      tableColumnsBorder: '列之间的表边框颜色。',
      tableOddRowsBackgroundColor: '奇数表行的背景色。',
      textBlockQuoteBackground: '文本中块引用的背景颜色。',
      textBlockQuoteBorder: '文本中块引用的边框颜色。',
      textCodeBlockBackground: '文本中代码块的背景颜色。',
      textLinkActiveForeground: '文本中链接在点击或鼠标悬停时的前景色 。',
      textLinkForeground: '文本中链接的前景色。',
      textPreformatForeground: '预格式化文本段的前景色。',
      textSeparatorForeground: '文字分隔符的颜色。',
      toolbarActiveBackground: '将鼠标悬停在操作上时的工具栏背景',
      toolbarHoverBackground: '使用鼠标悬停在操作上时显示工具栏背景',
      toolbarHoverOutline: '使用鼠标悬停在操作上时显示工具栏轮廓',
      treeInactiveIndentGuidesStroke: '非活动缩进参考线的树描边颜色。',
      treeIndentGuidesStroke: '缩进参考线的树描边颜色。',
      warningBorder: '如果设置，编辑器中警告的双下划线颜色。',
      widgetBorder: '编辑器内小组件(如查找/替换)的边框颜色。',
      widgetShadow: '编辑器内小组件(如查找/替换)的阴影颜色。',
    },
    'vs/platform/theme/common/iconRegistry': {
      'iconDefinition.fontCharacter': '与图标定义关联的字体字符。',
      'iconDefinition.fontId':
        '要使用的字体的 ID。如果未设置，则使用最先定义的字体。',
      nextChangeIcon: '“转到下一个编辑器位置”图标。',
      previousChangeIcon: '“转到上一个编辑器位置”图标。',
      widgetClose: '小组件中“关闭”操作的图标。',
    },
    'vs/platform/theme/common/tokenClassificationRegistry': {
      abstract: '用于抽象符号的样式。',
      async: '用于异步的符号的样式。',
      class: '类样式。',
      comment: '注释的样式。',
      declaration: '所有符号声明的样式。',
      decorator: '修饰器和注释的样式。',
      deprecated: '用于已弃用的符号的样式。',
      documentation: '用于文档中引用的样式。',
      enum: '枚举的样式。',
      enumMember: '枚举成员的样式。',
      event: '事件的样式。',
      function: '函数样式',
      interface: '接口样式。',
      keyword: '关键字的样式。',
      labels: '文本样式',
      macro: '宏样式。',
      member: '成员函数的样式',
      method: '成员(成员函数)的样式',
      modification: '用于写入访问的样式。',
      namespace: '命名空间的样式。',
      number: '数字样式。',
      operator: '运算符的样式。',
      parameter: '参数样式。',
      property: '属性的样式。',
      readonly: '用于只读符号的样式。',
      regexp: '表达式的样式。',
      'schema.fontStyle.error':
        '字形必须为 "italic" (斜体)、"bold" (粗体)、"underline" (下划线)、"strikethrough" (删除线) 或是上述的组合。空字符串将取消设置的所有字形。',
      'schema.token.background.warning': '暂不支持标记背景色。',
      'schema.token.bold':
        '将字形设置为粗体或取消粗体设置。请注意，如果存在 "fontStyle"，则会替代此设置。',
      'schema.token.fontStyle':
        '设置规则的所有字形: "italic" (斜体)、"bold" (粗体)、"underline" (下划线)、"strikethrough" (删除线) 或是上述的组合。所有未列出的字形都将取消设置。空字符串将取消设置的所有字形。',
      'schema.token.fontStyle.none': '无 (清除继承的设置)',
      'schema.token.foreground': '标记的前景色。',
      'schema.token.italic':
        '将字形设置为倾斜或取消倾斜设置。请注意，如果存在 "fontStyle"，则会替代此设置。',
      'schema.token.settings': '标记的颜色和样式。',
      'schema.token.strikethrough':
        '将字形设置为下划线或取消下划线设置。请注意，如果存在 "fontStyle"，则会替代此设置。',
      'schema.token.underline':
        '将字形设置为下划线或取消下划线设置。请注意，如果存在 "fontStyle"，则会替代此设置。',
      static: '用于静态符号的样式。',
      string: '字符串的样式。',
      struct: '结构样式。',
      type: '类型的样式。',
      typeParameter: '类型参数的样式。',
      variable: '变量的样式。',
    },
    'vs/platform/undoRedo/common/undoRedoService': {
      cannotResourceRedoDueToInProgressUndoRedo:
        '无法重做“{0}”，因为已有一项撤消或重做操作正在运行。',
      cannotResourceUndoDueToInProgressUndoRedo:
        '无法撤销“{0}”，因为已有一项撤消或重做操作正在运行。',
      cannotWorkspaceRedo: '无法在所有文件中重做“{0}”。{1}',
      cannotWorkspaceRedoDueToChanges:
        '无法对所有文件重做“{0}”，因为已更改 {1}',
      cannotWorkspaceRedoDueToInMeantimeUndoRedo:
        '无法跨所有文件重做“{0}”，因为同时发生了一项撤消或重做操作',
      cannotWorkspaceRedoDueToInProgressUndoRedo:
        '无法跨所有文件重做“{0}”，因为 {1} 上已有一项撤消或重做操作正在运行',
      cannotWorkspaceUndo: '无法在所有文件中撤消“{0}”。{1}',
      cannotWorkspaceUndoDueToChanges:
        '无法撤消所有文件的“{0}”，因为已更改 {1}',
      cannotWorkspaceUndoDueToInMeantimeUndoRedo:
        '无法跨所有文件撤销“{0}”，因为同时发生了一项撤消或重做操作',
      cannotWorkspaceUndoDueToInProgressUndoRedo:
        '无法跨所有文件撤销“{0}”，因为 {1} 上已有一项撤消或重做操作正在运行',
      confirmDifferentSource: '是否要撤消“{0}”?',
      'confirmDifferentSource.no': '否',
      'confirmDifferentSource.yes': '是(&&Y)',
      confirmWorkspace: '是否要在所有文件中撤消“{0}”?',
      externalRemoval: '以下文件已关闭并且已在磁盘上修改: {0}。',
      noParallelUniverses: '以下文件已以不兼容的方式修改: {0}。',
      nok: '撤消此文件(&&F)',
      ok: '在 {0} 个文件中撤消(&&U)',
    },
    'vs/platform/update/common/update.config.contribution': {
      default: '启用自动更新检查。代码将定期自动检查更新。',
      deprecated: '此设置已弃用，请改用“{0}”。',
      enableWindowsBackgroundUpdates:
        '启用在 Windows 上后台下载和安装新的 VS Code 版本。',
      enableWindowsBackgroundUpdatesTitle: '在 Windows 上启用后台更新',
      manual: '禁用自动后台更新检查。如果手动检查更新，更新将可用。',
      none: '禁用更新。',
      showReleaseNotes:
        '在更新后显示发行说明。发行说明将从 Microsoft 联机服务中获取。',
      start: '仅在启动时检查更新。禁用自动后台更新检查。',
      updateConfigurationTitle: '更新',
      updateMode:
        '配置是否接收自动更新。更改后需要重新启动。更新是从微软在线服务获取的。',
    },
    'vs/platform/userDataProfile/common/userDataProfile': {
      defaultProfile: '默认',
    },
    'vs/platform/userDataSync/common/abstractSynchronizer': {
      incompatible:
        '无法同步 {0}，因为它的本地版本 {1} 与其远程版本 {2} 不兼容',
      'incompatible sync data': '无法分析同步数据，因为它与当前版本不兼容。',
    },
    'vs/platform/userDataSync/common/keybindingsSync': {
      errorInvalidSettings:
        '无法同步键绑定，因为文件中的内容无效。请打开文件并进行更正。',
    },
    'vs/platform/userDataSync/common/settingsSync': {
      errorInvalidSettings: '无法同步设置，因为设置文件中存在错误/警告。',
    },
    'vs/platform/userDataSync/common/userDataAutoSyncService': {
      'default service changed': '默认服务已更改，因此无法同步',
      'service changed': '同步服务已更改，因此无法同步',
      'session expired': '无法同步，因为当前会话已过期',
      'turned off': '无法同步，因为同步在云中已关闭',
      'turned off machine':
        '无法同步，因为已从另一台计算机上关闭了此计算机上的同步。',
    },
    'vs/platform/userDataSync/common/userDataSync': {
      'app.extension.identifier.errorMessage':
        '预期的格式 "${publisher}.${name}"。例如: "vscode.csharp"。',
      'settings sync': '设置同步',
      'settingsSync.ignoredExtensions':
        '同步时要忽略的扩展列表。扩展的标识符始终为 "${publisher}.${name}"。例如: "vscode.csharp"。',
      'settingsSync.ignoredSettings': '配置在同步时要忽略的设置。',
      'settingsSync.keybindingsPerPlatform': '为每个平台各自同步键绑定。',
    },
    'vs/platform/userDataSync/common/userDataSyncLog': {
      userDataSyncLog: '设置同步',
    },
    'vs/platform/userDataSync/common/userDataSyncMachines': {
      'error incompatible':
        '无法读取计算机数据，因为当前版本不兼容。请更新 {0}，然后重试。',
    },
    'vs/platform/userDataSync/common/userDataSyncResourceProvider': {
      'incompatible sync data': '无法分析同步数据，因为它与当前版本不兼容。',
    },
    'vs/platform/windows/electron-main/windowImpl': {
      appGone: '窗口意外终止',
      appGoneDetailEmptyWindow:
        '对此造成的不便，我们深表歉意。可以打开新的空窗口以重新启动。',
      appGoneDetailWorkspace:
        '我们对此不便表示抱歉! 请重启该窗口以从上次停止的位置继续。',
      appGoneDetails: '窗口意外终止(原因: "{0}"，代码: "{1}")',
      appStalled: '窗口未响应',
      appStalledDetail: '你可以重新打开或关闭窗口，或者保持等待。',
      close: '关闭(&&C)',
      doNotRestoreEditors: '不还原编辑器',
      hiddenMenuBar: '你仍可以通过 Alt 键访问菜单栏。',
      newWindow: '新建窗口(&&N)',
      reopen: '重新打开(&&R)',
      wait: '继续等待(&&K)',
    },
    'vs/platform/windows/electron-main/windowsMainService': {
      allow: '允许(&&A)',
      cancel: '取消(&&C)',
      confirmOpenDetail:
        '路径“{0}”使用不允许的主机。除非信任主机，否则应按“取消”',
      confirmOpenMessage: '在允许的主机列表中找不到主机“{0}”。是否仍要允许?',
      doNotAskAgain: '永久允许主机 "{0}"',
      learnMore: '了解详细信息(&&L)',
      ok: '确定(&&O)',
      pathNotExistDetail: '此计算机上不存在路径“{0}”。',
      pathNotExistTitle: '路径不存在',
      uriInvalidDetail: 'URI“{0}”无效，无法打开。',
      uriInvalidTitle: '无法打开 uri',
    },
    'vs/platform/workspace/common/workspace': {
      codeWorkspace: 'Code 工作区',
    },
    'vs/platform/workspace/common/workspaceTrust': {
      trusted: '受信任',
      untrusted: '受限模式',
    },
    'vs/platform/workspaces/electron-main/workspacesHistoryMainService': {
      newWindow: '新窗口',
      newWindowDesc: '打开新窗口',
      recentFolders: '最近使用的文件夹',
      recentFoldersAndWorkspaces: '最近使用的文件夹和工作区',
      untitledWorkspace: '无标题(工作区)',
      workspaceName: '{0} (工作区)',
    },
    'vs/platform/workspaces/electron-main/workspacesManagementMainService': {
      ok: '确定(&&O)',
      workspaceOpenedDetail:
        '已在另一个窗口打开工作区。请先关闭该窗口，然后重试。',
      workspaceOpenedMessage: '无法保存工作区“{0}”',
    },
    'vs/server/node/remoteExtensionHostAgentCli': {
      remotecli: '远程 CLI',
    },
    'vs/server/node/serverEnvironmentService': {
      acceptLicenseTerms:
        '如果已设置，则用户接受服务器许可条款，并将在没有用户提示的情况下启用服务器。',
      'connection-token': '必须包含在所有请求中的机密。',
      'connection-token-file': '包含连接令牌的文件的路径。',
      'default-folder':
        '未在浏览器 URL 中指定输入时要打开的工作区文件夹。已针对当前工作目录解析相对或绝对路径。',
      'default-workspace':
        '未在浏览器 URL 中指定输入时要打开的工作区。已针对当前工作目录解析相对或绝对路径。',
      host: '服务器应侦听的主机名或 IP 地址。如果未设置，则默认为 “localhost”。',
      port: '服务器应侦听的端口。如果传递了 0，则会选取一个随机的空闲端口。如果传递了采用 num-num 格式的范围，则将从范围中选择(包含结束)空闲端口。',
      serverDataDir: '指定保存服务器数据的目录。',
      'socket-path': '服务器要侦听的套接字文件的路径。',
      'start-server':
        '安装或卸载扩展时启动服务器。将与 “install-extension”、“install-builtin-extension” 和 “uninstall-extension” 结合使用。',
      'telemetry-level':
        '设置初始遥测级别。有效级别为: “off”、 crash”、“error” 和 “all”。如果未指定，服务器将在客户端连接之前发送遥测数据，然后将使用客户端遥测设置。将此项设置为 “off” 等效于 --disable-telemetry',
      'without-connection-token':
        '在没有连接令牌的情况下运行。仅当通过其他方式保护连接时才使用此项。',
    },
    'vs/server/node/serverServices': {
      remoteExtensionLog: '服务器',
    },
    'win32/i18n/messages': {
      AddContextMenuFiles:
        '将“通过 %1 打开”操作添加到 Windows 资源管理器文件上下文菜单',
      AddContextMenuFolders:
        '将“通过 %1 打开”操作添加到 Windows 资源管理器目录上下文菜单',
      AddToPath: '添加到 PATH (需要重启 shell)',
      AdditionalIcons: '其他图标:',
      AssociateWithFiles: '将 %1 注册为受支持的文件类型的编辑器',
      ConfirmUninstall: '确定要完全删除 %1 及其所有组件?',
      CreateDesktopIcon: '创建桌面图标(&D)',
      CreateQuickLaunchIcon: '创建 "快速启动" 图标(&Q)',
      FinishedLabel:
        '安装程序已在计算机上安装好 [name]。选择安装的快捷方式即可启动该应用程序。',
      OpenWithCodeContextMenu: '使用 %1 打开(&I)',
      Other: '其他:',
      RunAfter: '安装后运行 %1',
      SourceFile: '%1 源文件',
    },
    'vs/code/electron-main/app': {
      cancel: '否(&&N)',
      confirmOpenDetail:
        '如果你未发起此请求，则可能表示有人试图攻击你的系统。除非你采取了明确操作来发起此请求，否则应按“否”',
      confirmOpenMessage:
        '外部应用程序想要在 {1} 中打开“{0}”。是否要打开此文件或文件夹?',
      open: '是(&Y)',
    },
    'vs/code/electron-main/main': {
      close: '关闭(&C)',
      mainLog: '主进程',
      secondInstanceAdmin: '{0} 的另一个实例已在以管理员身份运行。',
      secondInstanceAdminDetail: '请先关闭另一个实例，然后重试。',
      secondInstanceNoResponse: '{0} 的另一实例正在运行但没有响应',
      secondInstanceNoResponseDetail: '请先关闭其他所有实例，然后重试。',
      startupDataDirError: '无法写入程序用户数据。',
      startupUserDataAndExtensionsDirErrorDetail:
        '{0}\r\n\r\n请确保以下目录是可写的:\r\n\r\n{1}',
      statusWarning:
        '警告: --status 参数只能在已运行 {0} 时使用。请在启动 {0} 后再次运行它。',
    },
    'vs/code/electron-sandbox/issue/issueReporterPage': {
      chooseExtension: '扩展',
      completeInEnglish: '请使用英文进行填写。',
      descriptionEmptyValidation: '需要描述。',
      details: '请输入详细信息。',
      disableExtensions: '禁用所有扩展并重新加载窗口',
      disableExtensionsLabelText:
        '请试着在{0}之后重现问题。如果此问题仅在扩展运行时才能重现，那么这可能是一个扩展的问题。',
      extensionWithNoBugsUrl:
        '问题报告程序无法为此扩展创建问题，因为它没有指定用于报告问题的 URL。请查看此扩展的应用商店页面，以便查看是否有其他说明。',
      extensionWithNonstandardBugsUrl:
        '问题报告程序无法为此扩展创建问题。请访问{0}报告问题。',
      issueSourceEmptyValidation: '问题源是必需的。',
      issueSourceLabel: '提交到',
      issueTitleLabel: '标题',
      issueTitleRequired: '请输入标题。',
      issueTypeLabel: '这是一个',
      reviewGuidanceLabel:
        '在此处报告问题之前，请<a href="https://github.com/microsoft/vscode/wiki/Submitting-Bugs-and-Suggestions" target="_blank">查看我们提供的指南</a>。',
      sendExperiments: '包括 A/B 试验信息',
      sendExtensions: '包含已启用的扩展',
      sendProcessInfo: '包含当前运行中的进程',
      sendSystemInfo: '包含系统信息',
      sendWorkspaceInfo: '包含工作区元数据',
      show: '显示',
      titleEmptyValidation: '标题是必需的。',
      titleLengthValidation: '标题太长。',
    },
    'vs/code/electron-sandbox/issue/issueReporterService': {
      bugDescription:
        '请分享能稳定重现此问题的必要步骤，并包含实际和预期的结果。我们支持 GitHub 版的 Markdown。您将能在 GitHub 上预览时编辑这个问题并添加截图。',
      bugReporter: 'Bug 报告',
      closed: '已关闭',
      createOnGitHub: '在 GitHub 上创建',
      description: '说明',
      disabledExtensions: '扩展已禁用',
      elsewhereDescription:
        '"{0}" 扩展更倾向于使用外部问题报告器。要转到该问题报告体验，请点击下面的按钮。',
      extension: '扩展',
      featureRequest: '功能请求',
      featureRequestDescription:
        '请描述您希望能够使用的功能。我们支持 GitHub 版的 Markdown。您将能在 GitHub 上预览时编辑问题并添加截图。',
      handlesIssuesElsewhere: '此扩展处理 VS Code 之外的问题',
      hide: '隐藏',
      loadingData: '正在加载数据…',
      marketplace: '扩展市场',
      noCurrentExperiments: '无当前试验。',
      noSimilarIssues: '没有找到类似问题',
      open: '打开',
      openIssueReporter: '打开外部问题报告器',
      pasteData:
        '所需的数据太大，无法直接发送。我们已经将其写入剪贴板，请粘贴。',
      performanceIssue: '性能问题',
      performanceIssueDesciption:
        '这个性能问题是在什么时候发生的? 是在启动时，还是在一系列特定的操作之后? 我们支持 GitHub 版的 Markdown。您将能在 GitHub 上预览时编辑这个问题并添加截图。',
      previewOnGitHub: '在 GitHub 中预览',
      rateLimited: '超出 GitHub 查询限制。请稍候。',
      selectSource: '选择源',
      show: '显示',
      similarIssues: '类似的问题',
      stepsToReproduce: '重现步骤',
      unknown: '不知道',
      vscode: 'Visual Studio Code',
    },
    'vs/code/electron-sandbox/processExplorer/processExplorerMain': {
      copy: '复制',
      copyAll: '全部复制',
      cpu: 'CPU (%)',
      debug: '调试',
      forceKillProcess: '强制结束进程',
      killProcess: '结束进程',
      memory: '内存(MB)',
      name: '进程名称',
      pid: 'PID',
    },
    'vs/code/node/cliProcessMain': {
      cli: 'CLI',
    },
    'vs/code/node/sharedProcess/sharedProcessMain': {
      sharedLog: '共享进程',
    },
    'vs/workbench/api/browser/mainThreadAuthentication': {
      accountLastUsedDate: '上次使用此帐户的时间: {0}',
      allow: '允许(&&A)',
      confirmLogin: '扩展"{0}"希望使用{1}登录。',
      confirmRelogin: '扩展“{0}”希望你使用 {1} 重新登录。',
      manageExtensions: '选择可以访问此帐户的扩展',
      manageTrustedExtensions: '管理受信任的扩展',
      'manageTrustedExtensions.cancel': '取消',
      noTrustedExtensions: '尚无任何扩展使用此帐户。',
      notUsed: '未使用此帐户',
      signOut: '退出登录(&&S)',
      signOutMessage:
        '帐户“{0}”已由以下扩展使用: \r\n\r\n{1}\r\n\r\n 是否注销这些扩展?',
      signOutMessageSimple: '注销“{0}”?',
      signedOut: '已成功注销。',
    },
    'vs/workbench/api/browser/mainThreadCLICommands': {
      'cannot be installed':
        '无法安装“{0}”扩展，因为它被声明为不在此安装程序中运行。',
    },
    'vs/workbench/api/browser/mainThreadComments': {
      commentsViewIcon: '查看备注视图的图标。',
    },
    'vs/workbench/api/browser/mainThreadCustomEditors': {
      defaultEditLabel: '编辑',
      vetoExtHostRestart: '无法保存自定义编辑器“{0}”。',
    },
    'vs/workbench/api/browser/mainThreadEditSessionIdentityParticipant': {
      'timeout.onWillCreateEditSessionIdentity':
        '10000ms 后已中止 onWillCreateEditSessionIdentity-event',
    },
    'vs/workbench/api/browser/mainThreadExtensionService': {
      disabledDep:
        '无法激活“{0}”扩展，因为它依赖于“{1}”扩展，该扩展已禁用。是否要启用扩展并重新加载窗口?',
      disabledDepNoAction: '无法激活“{0}”扩展，因为它依赖于被禁用的“{1}”扩展。',
      'enable dep': '启用和重新加载',
      'install missing dep': '安装并重新加载',
      manageWorkspaceTrust: '管理工作区信任',
      notSupportedInWorkspace:
        '无法激活 "{0}" 扩展，因为它依赖于当前工作区中不支持的 "{1}" 扩展',
      reload: '重新加载窗口',
      'reload window':
        '无法激活 "{0}" 扩展, 因为它依赖于未加载的 "{1}" 扩展。是否要重新加载窗口以加载扩展名？',
      restrictedMode:
        '无法激活 "{0}" 扩展，因为它依赖于受限模式下不支持的 "{1}" 扩展',
      uninstalledDep:
        '无法激活 "{0}" 扩展, 因为它依赖于未安装的 "{1}" 扩展。是否要安装扩展并重新加载窗口？',
      unknownDep: '无法激活“{0}”扩展，因为它依赖未知的“{1}”扩展。',
    },
    'vs/workbench/api/browser/mainThreadFileSystemEventService': {
      again: '不再询问',
      'ask.1.copy': '扩展 "{0}" 希望通过复制此文件来进行重构更改',
      'ask.1.create': '扩展 "{0}" 希望通过创建此文件来进行重构更改',
      'ask.1.delete': '扩展 "{0}" 希望通过删除此文件来进行重构更改',
      'ask.1.move': '扩展 "{0}" 希望通过移动此文件来进行重构更改',
      'ask.N.copy': '{0} 扩展希望通过复制此文件来进行重构更改',
      'ask.N.create': '{0} 扩展希望通过创建此文件来进行重构更改',
      'ask.N.delete': '{0} 扩展希望通过删除此文件来进行重构更改',
      'ask.N.move': '{0} 扩展希望通过移动此文件来进行重构更改',
      cancel: '跳过更改',
      label: '“文件操作需要预览”的重置选项',
      'msg-copy': '正在运行“文件复制”参与者…',
      'msg-create': '正在运行"文件创建"参与者...',
      'msg-delete': '正在运行"文件删除"参与者...',
      'msg-rename': '正在运行"文件重命名"参与者...',
      'msg-write': '正在运行“文件写入”参与者...',
      ok: '确定(&&O)',
      preview: '显示预览(&&P)',
    },
    'vs/workbench/api/browser/mainThreadMessageService': {
      cancel: '取消',
      defaultSource: '扩展',
      extensionSource: '{0} (扩展)',
      manageExtension: '管理扩展',
      ok: '确定(&&O)',
    },
    'vs/workbench/api/browser/mainThreadNotebookSaveParticipant': {
      'timeout.onWillSave': '1750ms 后中止 onWillSaveNotebookDocument-event',
    },
    'vs/workbench/api/browser/mainThreadProgress': {
      manageExtension: '管理扩展',
    },
    'vs/workbench/api/browser/mainThreadSaveParticipant': {
      'timeout.onWillSave': '在 1750ms 后终止了 onWillSaveTextDocument 事件',
    },
    'vs/workbench/api/browser/mainThreadTask': {
      'task.label': '{0}: {1}',
    },
    'vs/workbench/api/browser/mainThreadTunnelService': {
      'remote.tunnel.openTunnel':
        '扩展 {0} 具有转发端口 {1}。需要以超级用户身份运行，才能在本地使用端口 {2}。',
      'remote.tunnelsView.elevationButton': '使用端口 {0} 作为 Sudo…',
    },
    'vs/workbench/api/browser/mainThreadUriOpeners': {
      openerFailedMessage: '无法使用 "{0}" 打开 uri: {1}',
      openerFailedUseDefault: '使用默认 opener 打开',
    },
    'vs/workbench/api/browser/mainThreadWebviews': {
      errorMessage: '还原视图时出错: {0}',
    },
    'vs/workbench/api/browser/mainThreadWorkspace': {
      folderStatusChangeFolder: '扩展“{0}”更改了工作区中的文件夹',
      folderStatusMessageAddMultipleFolders:
        '扩展“{0}”添加了 {1} 个文件夹到工作区',
      folderStatusMessageAddSingleFolder: '扩展“{0}”添加了 1 个文件夹到工作区',
      folderStatusMessageRemoveMultipleFolders:
        '扩展“{0}”从工作区删除了 {1} 个文件夹',
      folderStatusMessageRemoveSingleFolder:
        '扩展“{0}”从工作区删除了 1 个文件夹',
    },
    'vs/workbench/api/browser/statusBarExtensionPoint': {
      accessibilityInformation:
        '定义在状态栏条目聚焦时要使用的角色和 aria 标签。',
      'accessibilityInformation.label':
        '状态栏条目的 aria 标签。默认为条目的文本。',
      'accessibilityInformation.role':
        '定义屏幕阅读器如何与其交互的状态栏条目的角色。有关 aria 角色的详细信息，请参阅此处 https://w3c.github.io/aria/#widget_roles',
      alignment: '状态栏条目的对齐方式。',
      command: '点击状态栏条目时要执行的命令。',
      id: '状态栏条目的标识符。在扩展中必须具有唯一性。调用 "vscode.window.createStatusBarItem(id, ...)"-API 时必须使用相同的值',
      invalid: '状态栏项贡献无效。',
      name: '条目名称，例如“Python 语言指示器”、“Git 状态”等。尽量使名称长度保持较短，但其描述性足以让用户了解状态栏项包含的内容。',
      priority: '状态栏条目的优先级。值越高，意味着应在左侧显示更多项。',
      text: '要为该条目显示的文本。可以使用 "$(<name>)" 语法(例如 "Hello $(globe)!")在文本中嵌入图标',
      tooltip: '条目的工具提示文本。',
      'vscode.extension.contributes.statusBarItems': '将项目贡献到状态栏。',
    },
    'vs/workbench/api/browser/viewsExtensionPoint': {
      ViewContainerDoesnotExist:
        '视图容器“{0}”不存在。所有注册到其中的视图将被添加到“资源管理器”中。',
      ViewContainerRequiresProposedAPI:
        '查看容器“{0}”需要将 “enabledApiProposals: [“contribViewsRemote”]” 添加到“远程”。',
      duplicateView1: '无法注册具有相同 ID“{0}”的多个视图',
      duplicateView2: '已注册 ID 为“{0}”的视图。',
      optenum: '属性“{0}”可被省略或必须是 {1} 之一',
      optstring: '属性 "{0}" 可以省略，或者必须为 "string" 类型',
      requirearray: '视图必须是一个数组',
      requireidstring:
        '属性“{0}”是必需的，并且必须为具有非空值的类型 `string`。只允许使用字母数字字符、 “_” 和 “-”。',
      requirenonemptystring:
        '属性“{0}”是必需的，并且必须为具有非空值的类型 `string`',
      requirestring: '属性 "{0}" 是必需项并且必须为 "string" 类型',
      unknownViewType: '未知视图类型“{0}”。',
      'viewcontainer requirearray': '视图容器必须为数组',
      'views.container.activitybar': '向活动栏提供视图容器',
      'views.container.panel': '向面板提供视图容器',
      'views.contributed': '向“提供的视图”容器提供视图',
      'views.debug': '向活动栏中的“调试”容器提供视图',
      'views.explorer': '向活动栏中的“资源管理器”容器提供视图',
      'views.remote':
        '在活动栏中为远程容器提供视图。要为此容器提供帮助，需要启用enableProposedApi。',
      'views.scm': '向活动栏中的“源代码管理”容器提供视图',
      'views.test': '向活动栏中的“测试”容器提供视图',
      'vscode.extension.contributes.view.contextualTitle':
        '当视图移出其原始位置时的用户可读上下文。默认情况下，将使用视图的容器名称。',
      'vscode.extension.contributes.view.group': '视图中的嵌套组',
      'vscode.extension.contributes.view.icon':
        '视图图标的路径。无法显示视图名称时，将显示视图图标。可以接受任何图像文件类型，但建议图标采用 SVG 格式。',
      'vscode.extension.contributes.view.id':
        '视图的标识符。这在所有视图中都应是唯一的。建议将扩展 ID 包含在视图 ID 中。使用此选项通过 "vscode.window.registerTreeDataProviderForView" API 注册数据提供程序。也可通过将 "onView:${id}" 事件注册为 "activationEvents" 来触发激活扩展。',
      'vscode.extension.contributes.view.initialState':
        '首次安装扩展时视图的初始状态。用户一旦通过折叠、移动或隐藏视图更改视图状态，就不再使用初始状态。',
      'vscode.extension.contributes.view.initialState.collapsed':
        '视图将在视图容器中折叠显示。',
      'vscode.extension.contributes.view.initialState.hidden':
        '视图不会显示在视图容器中，但可通过视图菜单和其他视图入口点发现，而且用户可取消隐藏视图。',
      'vscode.extension.contributes.view.initialState.visible':
        '视图的默认初始状态。但在大多数容器中，视图将展开，但某些内置容器(资源管理器、scm 和调试)显示所有已折叠的参与视图，无论“可见性”如何，都是如此。',
      'vscode.extension.contributes.view.name': '用户可读的视图名称。将显示它',
      'vscode.extension.contributes.view.remoteName':
        '与此视图关联的远程类型的名称',
      'vscode.extension.contributes.view.tree':
        '该视图由 "createTreeView" 创建的 "TreeView" 提供支持。',
      'vscode.extension.contributes.view.type':
        '视图的类型。对于基于树状视图的视图，这可以是 "tree"，对于基于 Web 视图的视图，这可以是 "webview"。默认值为 "tree"。',
      'vscode.extension.contributes.view.webview':
        '该视图由 "registerWebviewViewProvider" 注册的 "WebviewView" 提供支持。',
      'vscode.extension.contributes.view.when': '为真时才显示此视图的条件',
      'vscode.extension.contributes.views': '向编辑器提供视图',
      'vscode.extension.contributes.views.containers.icon':
        '容器图标的路径。图标大小为 24x24，并居中放置在 50x40 的区域内，其填充颜色为 "rgb(215, 218, 224)" 或 "#d7dae0"。所有图片格式均可用，推荐使用 SVG 格式。',
      'vscode.extension.contributes.views.containers.id':
        '用于标识容器的唯一 ID，视图能在容器内通过 "view" 参与点提供。',
      'vscode.extension.contributes.views.containers.title':
        '人类可读的用于表示此容器的字符串',
      'vscode.extension.contributes.viewsContainers': '向编辑器提供视图容器',
      'vscode.extension.contributs.view.size':
        '视图的初始大小。大小的行为将类似于 css “flex” 属性，并将在首次显示视图时设置初始大小。在侧栏中，这是视图的高度。仅当同一扩展同时拥有视图和视图容器时，才考虑此值。',
    },
    'vs/workbench/api/common/configurationExtensionPoint': {
      'config.property.defaultConfiguration.warning':
        '无法注册“{0}”的配置默认值。仅支持可重写计算机、窗口、资源和可重写语言范围设置的默认值。',
      'config.property.duplicate': '无法注册“{0}”。此属性已注册。',
      'invalid.allOf':
        '"configuration.allOf" 已被弃用且不应被使用。你可以将多个配置单元作为数组传递给 "configuration" 参与点。',
      'invalid.properties': 'configuration.properties 必须是对象',
      'invalid.property': '配置对象属性“{0}”必须是对象',
      'invalid.title': 'configuration.title 必须是字符串',
      'scope.application.description': '只能在用户设置中进行配置的配置。',
      'scope.deprecationMessage':
        '设置后，该属性将被标记为已弃用，并将给定的消息显示为解释。',
      'scope.description':
        '配置适用的作用域。可用作用域包括"application"、"machine"、"window"、"resource"和"machine-overridable"。',
      'scope.editPresentation': '指定后，控制字符串设置的表示格式。',
      'scope.enumDescriptions': '枚举值的说明',
      'scope.enumItemLabels':
        '要在“设置”编辑器中显示的枚举值的标签。指定后，{0}值仍显示在标签之后，但突出显示较少。',
      'scope.ignoreSync': '启用后，“设置同步”默认不会同步此配置的用户值。',
      'scope.language-overridable.description':
        '可在语言特定设置中配置的资源配置。',
      'scope.machine-overridable.description':
        '也可在工作区或文件夹设置中配置的计算机配置。',
      'scope.machine.description': '只能在用户设置或远程设置中配置的配置。',
      'scope.markdownDeprecationMessage':
        '设置后，该属性将被标记为已弃用，并按 Markdown 格式显示给定的消息作为解释。',
      'scope.markdownDescription': 'Markdown 格式的说明。',
      'scope.markdownEnumDescriptions': 'Markdown 格式的枚举值说明。',
      'scope.multilineText.description': '该值将显示在文本区域中。',
      'scope.order':
        '指定后，提供此设置相对于同一类别中其他设置的顺序。在未设置此属性的设置之前，将放置具有顺序属性的设置。',
      'scope.resource.description':
        '可在用户、远程、工作区或文件夹设置中对其进行配置的配置。',
      'scope.singlelineText.description': '该值将显示在输入框中。',
      'scope.window.description':
        '可在用户、远程或工作区设置中对其进行配置的配置。',
      unknownWorkspaceProperty: '未知的工作区配置属性',
      'vscode.extension.contributes.configuration': '用于配置字符串。',
      'vscode.extension.contributes.configuration.order':
        '指定后，提供此类别的设置相对于其他类别的顺序。',
      'vscode.extension.contributes.configuration.properties':
        '配置属性的描述。',
      'vscode.extension.contributes.configuration.properties.schema':
        '配置属性的架构。',
      'vscode.extension.contributes.configuration.property.empty':
        '属性不应为空。',
      'vscode.extension.contributes.configuration.title':
        '当前设置类别的标题。此标签将在“设置”编辑器中以副标题形式呈现。如果标题与扩展显示名称相同，则类别将分组到主扩展标题下。',
      'workspaceConfig.extensions.description': '工作区扩展',
      'workspaceConfig.folders.description': '将载入到工作区的文件夹列表。',
      'workspaceConfig.launch.description': '工作区启动配置',
      'workspaceConfig.name.description': '文件夹的可选名称。',
      'workspaceConfig.path.description':
        '文件路径。例如 "/root/folderA" 或 "./folderA"。后者表示根据工作区文件位置进行解析的相对路径。',
      'workspaceConfig.remoteAuthority': '工作区所在的远程服务器。',
      'workspaceConfig.settings.description': '工作区设置',
      'workspaceConfig.tasks.description': '工作区任务配置',
      'workspaceConfig.transient': '重启或重新加载时，暂时性工作区将消失。',
      'workspaceConfig.uri.description': '文件夹的 URI',
    },
    'vs/workbench/api/common/extHostChat': {
      emptyResponse: '提供程序返回了 null 响应',
      errorResponse: '提供程序出错: {0}',
    },
    'vs/workbench/api/common/extHostDiagnostics': {
      limitHit: '未显示 {0} 个进一步的错误和警告。',
    },
    'vs/workbench/api/common/extHostExtensionService': {
      extensionTestError: '路径 {0} 未指向有效的扩展测试运行程序。',
      extensionTestError1: '无法加载测试运行程序。',
    },
    'vs/workbench/api/common/extHostLanguageFeatures': {
      defaultDropLabel: '使用“{0}”扩展删除',
      defaultPasteLabel: '使用“{0}”扩展粘贴',
    },
    'vs/workbench/api/common/extHostLogService': {
      local: '扩展宿主',
      remote: '扩展主机(远程)',
      worker: '扩展主机(辅助角色)',
    },
    'vs/workbench/api/common/extHostProgress': {
      extensionSource: '{0} (扩展)',
    },
    'vs/workbench/api/common/extHostStatusBar': {
      extensionLabel: '{0} (扩展)',
      'status.extensionMessage': '扩展状态',
    },
    'vs/workbench/api/common/extHostTelemetry': {
      extensionTelemetryLog: '扩展遥测{0}',
    },
    'vs/workbench/api/common/extHostTerminalService': {
      'launchFail.idMissingOnExtHost': '在扩展主机上找不到 ID 为 {0} 的终端',
    },
    'vs/workbench/api/common/extHostTreeViews': {
      'treeView.duplicateElement': 'ID 为 {0} 的元素已被注册',
    },
    'vs/workbench/api/common/extHostWorkspace': {
      updateerror: '扩展“{0}”未能更新工作区文件夹: {1}',
    },
    'vs/workbench/api/common/jsonValidationExtensionPoint': {
      'contributes.jsonValidation': '用于 json 架构配置。',
      'contributes.jsonValidation.fileMatch':
        '要匹配的文件模式(或模式数组)，例如"package.json"或"*. launch"。排除模式以"!"开头',
      'contributes.jsonValidation.url':
        '到扩展文件夹(\'./\')的架构 URL ("http:"、"https:")或相对路径。',
      'invalid.fileMatch':
        '"configuration.jsonValidation.fileMatch"必须定义为字符串或字符串数组。',
      'invalid.jsonValidation': 'configuration.jsonValidation 必须是数组',
      'invalid.path.1':
        '"contributes.{0}.url" ({1})应包含在扩展的文件夹({2})内。这可能会使扩展不可移植。',
      'invalid.url': 'configuration.jsonValidation.url 必须是 URL 或相对路径',
      'invalid.url.fileschema':
        'configuration.jsonValidation.url 是无效的相对 URL: {0}',
      'invalid.url.schema':
        '"configuration.jsonValidation.url" 必须是绝对 URL 或者以 "./" 开头，以引用扩展中的架构。',
    },
    'vs/workbench/api/node/extHostDebugService': {
      'debug.terminal.title': '调试流程',
    },
    'vs/workbench/api/node/extHostTunnelService': {
      'tunnelPrivacy.private': '专用',
      'tunnelPrivacy.public': '公共',
    },
    'vs/workbench/browser/actions/developerActions': {
      'inspect context keys': '检查上下文键值',
      'keyboardShortcutsFormat.command': '命令标题。',
      'keyboardShortcutsFormat.commandAndKeys': '命令标题和密钥。',
      'keyboardShortcutsFormat.commandWithGroup': '以其组为前缀的命令标题。',
      'keyboardShortcutsFormat.commandWithGroupAndKeys':
        '命令标题和密钥，其中命令以其组为前缀。',
      'keyboardShortcutsFormat.keys': '密钥。',
      logStorage: '记录存储数据库内容',
      logWorkingCopies: '日志工作副本',
      'screencastMode.fontSize': '控制截屏模式键盘的字体大小(以像素为单位)。',
      'screencastMode.hideSingleEditorCursorMoves':
        '在截屏视频模式下隐藏单个编辑器光标移动命令。',
      'screencastMode.keyboardOverlayTimeout':
        '控制截屏模式下键盘覆盖显示的时长(以毫秒为单位)。',
      'screencastMode.keyboardShortcutsFormat':
        '控制显示快捷方式时键盘覆盖中显示的内容。',
      'screencastMode.location.verticalPosition':
        '控制截屏模式叠加的垂直偏移,从底部作为工作台高度的百分比。',
      'screencastMode.mouseIndicatorColor':
        '控制截屏视频模式下鼠标指示器的十六进制(#RGB、#RGBA、#RRGGBB 或 #RRGGBBAA)的颜色。',
      'screencastMode.mouseIndicatorSize':
        '控制截屏模式下鼠标光标的大小(以像素为单位)。',
      'screencastMode.onlyKeyboardShortcuts':
        '在屏幕广播模式下仅显示键盘快捷方式(不包括操作名称)。',
      screencastModeConfigurationTitle: '截屏模式',
      storageLogDialogDetails:
        '从菜单中打开开发人员工具，并选择“控制台”选项卡。',
      storageLogDialogMessage: '存储数据库内容已记录到开发人员工具中。',
      'toggle screencast mode': '切换屏幕模式',
    },
    'vs/workbench/browser/actions/helpActions': {
      keybindingsReference: '键盘快捷方式参考',
      miDocumentation: '文档(&&D)',
      miKeyboardShortcuts: '键盘快捷方式参考(&&K)',
      miLicense: '查看许可证(&&V)',
      miPrivacyStatement: '隐私声明(&&Y)',
      miTipsAndTricks: '贴士和技巧(&&C)',
      miTwitter: 'Twitter 上和我们互动(&&J)',
      miUserVoice: '搜索功能请求(&&S)',
      miVideoTutorials: '视频教程(&&V)',
      newsletterSignup: '订阅 VS Code 新闻邮件',
      openDocumentationUrl: '文档',
      openLicenseUrl: '查看许可证',
      openPrivacyStatement: '隐私声明',
      openTipsAndTricksUrl: '提示与技巧',
      openTwitterUrl: '在 Twitter 上和我们互动',
      openUserVoiceUrl: '搜索功能请求',
      openVideoTutorialsUrl: '视频教程',
    },
    'vs/workbench/browser/actions/layoutActions': {
      active: '活动',
      activityBar: '活动栏',
      activityBarLeft: '表示活动栏在左侧位置',
      activityBarRight: '表示活动栏在右侧位置',
      centerLayoutIcon: '表示居中布局模式',
      centerPanel: '居中',
      centeredLayout: '居中布局',
      close: '关闭',
      closeSidebar: '关闭主侧栏',
      cofigureLayoutIcon: '图标表示工作台布局配置。',
      'compositePart.hideSideBarLabel': '隐藏主边栏',
      configureLayout: '配置布局',
      customizeLayout: '自定义布局...',
      customizeLayoutQuickPickTitle: '自定义布局',
      decreaseEditorHeight: '降低编辑器高度',
      decreaseEditorWidth: '降低编辑器宽度',
      decreaseViewSize: '减小当前视图大小',
      fullScreenIcon: '表示全屏',
      fullscreen: '全屏',
      increaseEditorHeight: '增加编辑器高度',
      increaseEditorWidth: '增加编辑器宽度',
      increaseViewSize: '增加当前视图大小',
      justifyPanel: '两端对齐',
      layoutModes: '模式',
      leftPanel: '左对齐',
      leftSideBar: '左对齐',
      menuBar: '菜单栏',
      menuBarIcon: '表示菜单栏',
      miActivityBar: '活动栏(&&A)',
      miAppearance: '外观(&&A)',
      miMenuBar: '菜单栏(&&B)',
      miMenuBarNoMnemonic: '菜单栏',
      miMoveSidebarLeft: '向左移动主侧栏(&M)',
      miMoveSidebarRight: '向右移动主侧栏(&&M)',
      miShowEditorArea: '显示编辑区域(&&E)',
      miStatusbar: '状态栏(&&T)',
      miToggleCenteredLayout: '居中布局(&&C)',
      miToggleZenMode: '禅模式',
      'move second sidebar left': '向左移动辅助边栏',
      'move second sidebar right': '向右移动辅助边栏',
      'move side bar right': '向右移动主侧栏',
      'move sidebar left': '向左移动主侧栏',
      'move sidebar right': '向右移动主侧栏',
      moveFocusedView: '移动焦点视图',
      'moveFocusedView.error.noFocusedView': '当前没有重点视图。',
      'moveFocusedView.error.nonMovableView': '当前焦点视图不可移动。',
      'moveFocusedView.newContainerInPanel': '新建面板条目',
      'moveFocusedView.newContainerInSidePanel': '新建辅助侧栏条目',
      'moveFocusedView.newContainerInSidebar': '新侧边栏条目',
      'moveFocusedView.selectDestination': '选择视图的目标',
      'moveFocusedView.selectView': '选择要移动的视图',
      'moveFocusedView.title': '视图: 移动 {0}',
      moveSidebarLeft: '向左移动主侧栏',
      moveSidebarRight: '向右移动主侧栏',
      moveView: '移动视图',
      panel: '面板',
      panelAlignment: '面板对齐方式',
      panelBottom: '表示底部面板',
      panelBottomCenter: '表示底部面板对齐方式设为居中',
      panelBottomJustify: '表示设置底部面板对齐方式设为两端对齐',
      panelBottomLeft: '表示底部面板对齐方式设为左对齐',
      panelBottomRight: '表示底部面板对齐方式设为右对齐',
      panelContainer: '面板/{0}',
      panelLeft: '表示左侧位置的侧栏',
      panelLeftOff: '表示已关闭的左侧位置的侧栏',
      panelRight: '表示右侧位置的侧栏',
      panelRightOff: '表示已关闭的右侧位置的侧栏',
      'primary sidebar': '主侧边栏',
      'primary sidebar mnemonic': '主侧边栏(&&P)',
      'resetFocusedView.error.noFocusedView': '当前没有重点视图。',
      resetFocusedViewLocation: '重置焦点视图位置',
      resetViewLocations: '重置视图位置',
      'restore defaults': '还原默认值',
      rightPanel: '右对齐',
      rightSideBar: '右对齐',
      secondarySideBar: '辅助侧边栏',
      secondarySideBarContainer: '辅助侧栏/{0}',
      selectToHide: '选择以隐藏',
      selectToShow: '选择以显示',
      sideBar: '主侧栏',
      sideBarPosition: '主侧栏位置',
      sidebar: '侧边栏',
      sidebarContainer: '侧边栏/{0}',
      statusBar: '状态栏',
      statusBarIcon: '表示状态栏',
      toggleActivityBar: '切换活动栏可见性',
      toggleCenteredLayout: '切换居中布局',
      toggleEditor: '切换编辑器区域可见性',
      toggleMenuBar: '切换菜单栏',
      toggleSideBar: '切换主侧栏',
      toggleSidebar: '切换主侧栏可见性',
      toggleSidebarPosition: '切换主侧栏位置',
      toggleStatusbar: '切换状态栏可见性',
      toggleTabs: '切换标签页可见性',
      toggleVisibility: '可见性',
      toggleZenMode: '切换禅模式',
      zenMode: '禅模式',
      zenModeIcon: '表示禅模式',
    },
    'vs/workbench/browser/actions/navigationActions': {
      focusNextPart: '专注下一部分',
      focusPreviousPart: '专注上一部分',
      navigateDown: '导航到下方视图',
      navigateLeft: '导航到左侧视图',
      navigateRight: '导航到右侧视图',
      navigateUp: '导航到上方视图',
    },
    'vs/workbench/browser/actions/quickAccessActions': {
      quickNavigateNext: '在 Quick Open 中导航到下一个',
      quickNavigatePrevious: '在 Quick Open 中导航到上一个',
      quickOpen: '转到文件...',
      quickOpenWithModes: 'Quick Open',
      quickSelectNext: '在 Quick Open 中选择“下一步”',
      quickSelectPrevious: '在 Quick Open 中选择“上一步”',
    },
    'vs/workbench/browser/actions/textInputActions': {
      copy: '复制',
      cut: '剪切',
      paste: '粘贴',
      redo: '恢复',
      selectAll: '选择全部',
      undo: '撤消',
    },
    'vs/workbench/browser/actions/windowActions': {
      about: '关于',
      blur: '从具有焦点的元素中删除键盘焦点',
      dirtyFolder: '包含未保存的文件的文件夹',
      dirtyFolderConfirm: '是否要打开文件夹以查看未保存的文件?',
      dirtyFolderConfirmDetail:
        '在保存或还原所有未保存的文件之前，无法删除包含未保存的文件的文件夹。',
      dirtyRecentlyOpenedFolder: '包含未保存的文件的文件夹',
      dirtyRecentlyOpenedWorkspace: '包含未保存的文件的工作区',
      dirtyWorkspace: '包含未保存的文件的工作区',
      dirtyWorkspaceConfirm: '是否要打开工作区以查看未保存的文件?',
      dirtyWorkspaceConfirmDetail:
        '在保存或还原所有未保存的文件之前，无法删除包含未保存的文件的工作区。',
      files: '文件',
      folders: '文件夹',
      miAbout: '关于(&&A)',
      miConfirmClose: '关闭前确认',
      miMore: '更多(&&M)...',
      miNewWindow: '新建窗口(&&W)',
      miOpenRecent: '打开最近的文件(&&R)',
      miToggleFullScreen: '全屏(&&F)',
      newWindow: '新建窗口',
      openRecent: '打开最近的文件…',
      openRecentPlaceholder:
        '选中以打开(按 Ctrl 键强制打开新窗口，或按 Alt 键打开同一窗口)',
      openRecentPlaceholderMac:
        '选中以打开(按 Cmd 键强制打开新窗口，或按 Option 键打开同一窗口)',
      quickOpenRecent: '快速打开最近的文件…',
      recentDirtyFolderAriaLabel: '{0}，包含未保存的更改的文件夹',
      recentDirtyWorkspaceAriaLabel: '{0}，包含未保存的更改的工作区',
      reloadWindow: '重新加载窗口',
      remove: '从最近打开中删除',
      toggleFullScreen: '切换全屏',
      workspacesAndFolders: '文件夹和工作区',
    },
    'vs/workbench/browser/actions/workspaceActions': {
      closeWorkspace: '关闭工作区',
      duplicateWorkspace: '复制工作区',
      duplicateWorkspaceInNewWindow: '在新窗口中复制工作区',
      globalRemoveFolderFromWorkspace: '将文件夹从工作区删除…',
      miAddFolderToWorkspace: '将文件夹添加到工作区(&&D)...',
      miCloseFolder: '关闭文件夹(&&F)',
      miCloseWorkspace: '关闭工作区(&&W)',
      miOpen: '打开(&&O)...',
      miOpenFile: '打开文件(&&O)...',
      miOpenFolder: '打开文件夹(&&F)...',
      miOpenWorkspace: '从文件打开工作区(&&K)...',
      miSaveWorkspaceAs: '将工作区另存为...',
      openFile: '打开文件...',
      openFileFolder: '打开...',
      openFolder: '打开文件夹...',
      openWorkspaceAction: '从文件打开工作区...',
      openWorkspaceConfigFile: '打开工作区配置文件',
      saveWorkspaceAsAction: '将工作区另存为...',
      workspaces: '工作区',
    },
    'vs/workbench/browser/actions/workspaceCommands': {
      add: '添加(&&A)',
      addFolderToWorkspace: '将文件夹添加到工作区...',
      addFolderToWorkspaceTitle: '将文件夹添加到工作区',
      workspaceFolderPickerPlaceholder: '选择工作区文件夹',
    },
    'vs/workbench/browser/editor': {
      pinned: '{0}，已固定',
      preview: '{0}，预览',
    },
    'vs/workbench/browser/parts/activitybar/activitybarActions': {
      authProviderUnavailable: '{0} 当前不可用',
      focusActivityBar: '将焦点放在活动栏上',
      hideAccounts: '隐藏帐户',
      loading: '正在加载...',
      manage: '管理 {0} (配置文件)',
      manageTrustedExtensions: '管理受信任的扩展',
      nextSideBarView: '下一个主侧栏视图',
      noAccounts: '你未登录任何帐户',
      previousSideBarView: '上一个主侧栏视图',
      signOut: '注销',
    },
    'vs/workbench/browser/parts/activitybar/activitybarPart': {
      accounts: '帐户',
      accountsViewBarIcon: '视图栏中的“帐户”图标。',
      hideActivitBar: '隐藏活动栏',
      hideMenu: '隐藏菜单',
      manage: '管理',
      menu: '菜单',
      resetLocation: '重置位置',
      settingsViewBarIcon: '视图栏中的“设置”图标。',
    },
    'vs/workbench/browser/parts/auxiliarybar/auxiliaryBarActions': {
      focusAuxiliaryBar: '将焦点置于辅助侧栏',
      hideAuxiliaryBar: '隐藏辅助侧栏',
      'secondary sidebar': '辅助侧边栏',
      'secondary sidebar mnemonic': '辅助侧边栏(&&D)',
      toggleAuxiliaryBar: '切换辅助侧栏可见性',
      toggleAuxiliaryIconLeft: '用于在其左侧位置切换辅助栏的图标。',
      toggleAuxiliaryIconLeftOn: '用于打开其左侧位置辅助栏的图标。',
      toggleAuxiliaryIconRight: '用于在其右侧位置关闭辅助栏的图标。',
      toggleAuxiliaryIconRightOn: '用于打开其右侧位置辅助栏的图标。',
      toggleSecondarySideBar: '切换辅助侧栏',
    },
    'vs/workbench/browser/parts/auxiliarybar/auxiliaryBarPart': {
      'hide second side bar': '隐藏辅助侧栏',
      'move second side bar left': '向左移动辅助边栏',
      'move second side bar right': '向右移动辅助边栏',
    },
    'vs/workbench/browser/parts/banner/bannerPart': {
      focusBanner: '焦点横幅',
    },
    'vs/workbench/browser/parts/compositeBar': {
      activityBarAriaLabel: '活动视图切换器',
    },
    'vs/workbench/browser/parts/compositeBarActions': {
      additionalViews: '其他视图',
      badgeTitle: '{0} - {1}',
      hide: '隐藏“{0}”',
      hideBadge: '隐藏徽章',
      keep: '保留“{0}”',
      manageExtension: '管理扩展',
      numberBadge: '{0} ({1})',
      showBadge: '显示徽章',
      titleKeybinding: '{0} ({1})',
      toggle: '切换已固定的视图',
      toggleBadge: '切换视图徽章',
    },
    'vs/workbench/browser/parts/compositePart': {
      ariaCompositeToolbarLabel: '{0}操作',
      titleTooltip: '{0} ({1})',
      viewsAndMoreActions: '视图和更多操作…',
    },
    'vs/workbench/browser/parts/dialogs/dialogHandler': {
      aboutDetail: '版本: {0}\r\n提交: {1}\r\n日期: {2}\r\n浏览器: {3}',
      copy: '复制(&&C)',
      ok: '确定',
    },
    'vs/workbench/browser/parts/editor/accessibilityStatus': {
      screenReaderDetected: '已为屏幕阅读器优化',
      'screenReaderDetectedExplanation.answerNo': '否',
      'screenReaderDetectedExplanation.answerYes': '是',
      'screenReaderDetectedExplanation.question':
        '你是否在使用屏幕阅读器操作 VS Code?',
      'status.editor.screenReaderMode': '屏幕阅读器模式',
    },
    'vs/workbench/browser/parts/editor/binaryDiffEditor': {
      metadataDiff: '{0} ↔ {1}',
    },
    'vs/workbench/browser/parts/editor/binaryEditor': {
      binaryEditor: '二进制查看器',
      binaryError:
        '此文件是二进制文件或使用了不受支持的文本编码，所以无法在文本编辑器中显示。',
      openAnyway: '仍然打开',
    },
    'vs/workbench/browser/parts/editor/breadcrumbs': {
      enabled: '启用/禁用导航路径。',
      filepath: '控制是否及如何在“导航路径”视图中显示文件路径。',
      'filepath.last': '在导航路径视图中仅显示文件路径的最后一个元素。',
      'filepath.off': '不在导航路径视图中显示文件路径。',
      'filepath.on': '在导航路径视图中显示文件路径。',
      'filteredTypes.array': '启用后，痕迹导航栏将显示“数组”符号。',
      'filteredTypes.boolean': '启用后，痕迹导航栏将显示“布尔”符号。',
      'filteredTypes.class': '启用后，痕迹导航栏显示“类”符号。',
      'filteredTypes.constant': '启用后，痕迹导航栏将显示“常量”符号。',
      'filteredTypes.constructor': '启用后，痕迹符将显示“构造函数”符号。',
      'filteredTypes.enum': '启用后，痕迹导航栏将显示“枚举”符号。',
      'filteredTypes.enumMember':
        '启用后，痕迹导航栏将显示 "enumMember" 符号。',
      'filteredTypes.event': '启用后，痕迹导航栏将显示“事件”符号。',
      'filteredTypes.field': '启用后，痕迹导航栏将显示“字段”符号。',
      'filteredTypes.file': '启用后，痕迹导航栏将显示“文件”符号。',
      'filteredTypes.function': '启用后，痕迹导航栏将显示“函数”符号。',
      'filteredTypes.interface': '启用后，痕迹导航栏将显示“接口”符号。',
      'filteredTypes.key': '启用后，痕迹导航栏将显示“键”符号。',
      'filteredTypes.method': '启用后，痕迹导航栏将显示“方法”符号。',
      'filteredTypes.module': '启用后，痕迹导航栏将显示“模块”符号。',
      'filteredTypes.namespace': '启用后，痕迹导航栏将显示“命名空间”符号。',
      'filteredTypes.null': '启用后，痕迹导航栏将显示 "null" 符号。',
      'filteredTypes.number': '启用后，痕迹导航栏将显示“数字”符号。',
      'filteredTypes.object': '启用后，痕迹导航栏将显示“对象”符号。',
      'filteredTypes.operator': '启用后，痕迹导航栏将显示“运算符”符号。',
      'filteredTypes.package': '启用后，痕迹导航栏将显示“包”符号。',
      'filteredTypes.property': '启用后，痕迹导航栏将显示“属性”符号。',
      'filteredTypes.string': '启用后，痕迹导航栏将显示“字符串”符号。',
      'filteredTypes.struct': '启用后，痕迹导航栏将显示“结构”符号。',
      'filteredTypes.typeParameter':
        '启用后，痕迹导航栏将显示 "typeParameter" 符号。',
      'filteredTypes.variable': '启用后，痕迹导航栏将显示“变量”符号。',
      icons: '使用图标渲染面包屑导航项。',
      symbolSortOrder: '控制“导航路径”大纲视图中符号的排序方式。',
      'symbolSortOrder.name': '以字母顺序显示符号大纲。',
      'symbolSortOrder.position': '以文件位置顺序显示符号大纲。',
      'symbolSortOrder.type': '以符号类型顺序显示符号大纲。',
      symbolpath: '控制是否及如何在“导航路径”视图中显示符号。',
      'symbolpath.last': '在导航路径视图中仅显示当前符号。',
      'symbolpath.off': '不在导航路径视图中显示符号。',
      'symbolpath.on': '在“导航路径”视图中显示所有符号。',
      title: '导航路径',
    },
    'vs/workbench/browser/parts/editor/breadcrumbsControl': {
      breadcrumbsActive: '焦点是否在痕迹导航上',
      breadcrumbsPossible: '编辑器是否可显示痕迹导航',
      breadcrumbsVisible: '痕迹导航当前是否可见',
      'cmd.focus': '聚焦到“导航路径”视图',
      'cmd.focusAndSelect': '聚焦并选择痕迹导航',
      'cmd.toggle': '切换导航路径',
      'cmd.toggle2': '痕迹导航',
      empty: '无元素',
      miBreadcrumbs: '切换痕迹导航(&&B)',
      miBreadcrumbs2: '痕迹导航(&&B)',
      separatorIcon: '痕迹导航中分隔符的图标。',
    },
    'vs/workbench/browser/parts/editor/breadcrumbsPicker': {
      breadcrumbs: '痕迹导航',
    },
    'vs/workbench/browser/parts/editor/editor.contribution': {
      activeGroupEditorsByMostRecentlyUsedQuickAccess:
        '按最近使用显示活动组中的编辑器',
      allEditorsByAppearanceQuickAccess: '按外观显示所有打开的编辑器',
      allEditorsByMostRecentlyUsedQuickAccess: '按最近使用显示所有打开的编辑器',
      binaryDiffEditor: '二进制差异编辑器',
      close: '关闭',
      closeAll: '全部关闭',
      closeAllSaved: '关闭已保存',
      closeEditor: '关闭编辑器',
      closeEditorGroup: '关闭编辑器组',
      closeEditorsInGroup: '关闭组中的所有编辑器',
      closeGroupAction: '关闭组',
      closeOtherEditors: '关闭组中其他编辑器',
      closeOthers: '关闭其他',
      closePinnedEditor: '关闭固定的编辑器',
      closeRight: '关闭右侧标签页',
      closeRightEditors: '关闭组中右侧编辑器',
      closeSavedEditors: '关闭组中已保存的编辑器',
      editorQuickAccessPlaceholder: '键入要打开的编辑器名称。',
      'ignoreTrimWhitespace.label': '忽略前导/尾随空格差异',
      inlineView: '内联视图',
      joinInGroup: '合并组',
      keepEditor: '保留编辑器',
      keepOpen: '保持打开状态',
      lockGroup: '锁定组',
      miClearRecentOpen: '清除最近打开记录(&&C)',
      miEditorLayout: '编辑器布局(&&L)',
      miFirstSideEditor: '编辑器中的第一侧(&&F)',
      miFocusAboveGroup: '上方组(&&A)',
      miFocusBelowGroup: '下方组(&&B)',
      miFocusFifthGroup: '第 5 组(&&5)',
      miFocusFirstGroup: '第 1 组(&&1)',
      miFocusFourthGroup: '第 4 组(&&4)',
      miFocusLeftGroup: '左侧组(&&L)',
      miFocusRightGroup: '右侧组(&&R)',
      miFocusSecondGroup: '第 2 组(&&2)',
      miFocusThirdGroup: '第 3 组(&&3)',
      miJoinEditorInGroup: '加入组(&&G)',
      miJoinEditorInGroupWithoutMnemonic: '合并组',
      miLastEditLocation: '上次编辑位置(&&L)',
      miNextEditor: '下一个编辑器(&&N)',
      miNextEditorInGroup: '组中的下一个编辑器(&&N)',
      miNextGroup: '下一个组(&&N)',
      miNextRecentlyUsedEditor: '下一个使用过的编辑器(&&N)',
      miNextUsedEditorInGroup: '组中下一个使用过的编辑器(&&N)',
      miPreviousEditor: '上一个编辑器(&&P)',
      miPreviousEditorInGroup: '组中的上一个编辑器(&&P)',
      miPreviousGroup: '上一个组(&&P)',
      miPreviousRecentlyUsedEditor: '上一个使用过的编辑器(&&P)',
      miPreviousUsedEditorInGroup: '组中上一个使用过的编辑器(&&P)',
      miReopenClosedEditor: '重新打开已关闭的编辑器(&&R)',
      miSecondSideEditor: '编辑器中的第二侧(&&S)',
      miShare: '共享',
      miSingleColumnEditorLayout: '单列(&&S)',
      miSingleColumnEditorLayoutWithoutMnemonic: '单一',
      miSplitEditorDown: '向下拆分(&&D)',
      miSplitEditorDownWithoutMnemonic: '向下拆分',
      miSplitEditorInGroup: '在组中拆分(&&G)',
      miSplitEditorInGroupWithoutMnemonic: '在组中拆分',
      miSplitEditorLeft: '向左拆分(&&L)',
      miSplitEditorLeftWithoutMnemonic: '向左拆分',
      miSplitEditorRight: '向右拆分(&&R)',
      miSplitEditorRightWithoutMnemonic: '向右拆分',
      miSplitEditorUp: '向上拆分(&&U)',
      miSplitEditorUpWithoutMnemonic: '向上拆分',
      miSwitchEditor: '切换编辑器(&&E)',
      miSwitchGroup: '切换组(&&G)',
      miThreeColumnsEditorLayout: '三列(&&H)',
      miThreeColumnsEditorLayoutWithoutMnemonic: '三列',
      miThreeRowsEditorLayout: '三行(&&R)',
      miThreeRowsEditorLayoutWithoutMnemonic: '三行',
      miTwoByTwoGridEditorLayout: '2x2 网格(&&G)',
      miTwoByTwoGridEditorLayoutWithoutMnemonic: '2x2 网格',
      miTwoColumnsBottomEditorLayout: '底部双列(&&C)',
      miTwoColumnsBottomEditorLayoutWithoutMnemonic: '底部双列',
      miTwoColumnsEditorLayout: '双列(&&T)',
      miTwoColumnsEditorLayoutWithoutMnemonic: '两列',
      miTwoRowsEditorLayout: '双行(&&W)',
      miTwoRowsEditorLayoutWithoutMnemonic: '双行',
      miTwoRowsRightEditorLayout: '右侧双行(&&O)',
      miTwoRowsRightEditorLayoutWithoutMnemonic: '右侧双行',
      'navigate.next.label': '下一个更改',
      'navigate.prev.label': '上一个更改',
      nextChangeIcon: '差异编辑器中下一个更改操作的图标',
      pin: '固定',
      pinEditor: '固定编辑器',
      previousChangeIcon: '差异编辑器中上一个更改操作的图标',
      reopenWith: '重新打开编辑器的方式…',
      showOpenedEditors: '显示打开的编辑器',
      'showTrimWhitespace.label': '显示前导/尾随空格差异',
      sideBySideEditor: '并排编辑器',
      splitDown: '向下拆分',
      splitEditorDown: '向下拆分编辑器',
      splitEditorRight: '向右拆分编辑器',
      splitInGroup: '在组中拆分',
      splitLeft: '向左拆分',
      splitRight: '向右拆分',
      splitUp: '向上拆分',
      textDiffEditor: '文本差异编辑器',
      textEditor: '文本编辑器',
      toggleLockGroup: '锁定组',
      togglePreviewMode: '启用预览编辑器',
      toggleSplitEditorInGroupLayout: '切换布局',
      toggleTabs: '启用选项卡',
      toggleWhitespace: '差异编辑器中“切换空白”操作的图标',
      unlockEditorGroup: '解锁组',
      unlockGroupAction: '解锁组',
      unpin: '取消固定',
      unpinEditor: '取消固定编辑器',
    },
    'vs/workbench/browser/parts/editor/editorActions': {
      clearButtonLabel: '清除(&&C)',
      clearEditorHistory: '清除编辑器历史记录',
      clearRecentFiles: '清除最近打开',
      closeAllEditors: '关闭所有编辑器',
      closeAllGroups: '关闭所有编辑器组',
      closeEditor: '关闭编辑器',
      closeEditorInAllGroups: '在所有组中关闭此编辑器',
      closeEditorsInOtherGroups: '关闭其他组中的编辑器',
      closeEditorsToTheLeft: '关闭组中左侧编辑器',
      closeOneEditor: '关闭',
      confirmClearDetail: '此操作不可逆!',
      confirmClearEditorHistoryMessage: '是否要清除最近打开的编辑器的历史记录?',
      confirmClearRecentsMessage: '是否要清除最近打开的所有文件和工作区?',
      duplicateActiveGroupDown: '向下复制编辑器组',
      duplicateActiveGroupLeft: '向左复制编辑器组',
      duplicateActiveGroupRight: '向右复制编辑器组',
      duplicateActiveGroupUp: '向上复制编辑器组',
      editorLayoutSingle: '单列编辑器布局',
      editorLayoutThreeColumns: '三列编辑器布局',
      editorLayoutThreeRows: '三行编辑器布局',
      editorLayoutTwoByTwoGrid: '2x2 网格编辑器布局',
      editorLayoutTwoColumns: '双列编辑器布局',
      editorLayoutTwoColumnsBottom: '底部双列编辑器布局',
      editorLayoutTwoRows: '双行编辑器布局',
      editorLayoutTwoRowsRight: '右侧双行编辑器布局',
      evenEditorGroups: '重置编辑器组大小',
      firstEditorInGroup: '打开组中的第一个编辑器',
      focusAboveGroup: '专注上述编辑器组',
      focusActiveEditorGroup: '聚焦到活动编辑器组',
      focusBelowGroup: '专注以下编辑器组',
      focusFirstEditorGroup: '聚焦于第一个编辑器组',
      focusLastEditorGroup: '聚焦到最终组编辑器',
      focusLeftGroup: '聚焦到左侧编辑器组',
      focusNextGroup: '聚焦到下一组编辑器',
      focusPreviousGroup: '聚焦到上一组编辑器',
      focusRightGroup: '聚焦到右侧编辑器组',
      joinAllGroups: '合并所有编辑器组',
      joinTwoGroups: '将编辑器组与下一组合并',
      lastEditorInGroup: '打开组中最后一个编辑器',
      maximizeEditor: '最大化编辑器组并隐藏侧栏',
      miBack: '返回(&&B)',
      miForward: '前进(&&F)',
      minimizeOtherEditorGroups: '最大化编辑器组',
      moveActiveGroupDown: '向下移动编辑器组',
      moveActiveGroupLeft: '向左移动编辑器组',
      moveActiveGroupRight: '向右移动编辑器组',
      moveActiveGroupUp: '向上移动编辑器组',
      moveEditorLeft: '向左移动编辑器',
      moveEditorRight: '向右移动编辑器',
      moveEditorToAboveGroup: '将编辑器移动到上述组',
      moveEditorToBelowGroup: '将编辑器移动到以下组',
      moveEditorToFirstGroup: '将编辑器移动到第一组',
      moveEditorToLastGroup: '将编辑器移动到最后一组',
      moveEditorToLeftGroup: '将编辑器移动到左侧组',
      moveEditorToNextGroup: '将编辑器移动到下一组',
      moveEditorToPreviousGroup: '将编辑器移动到上一组',
      moveEditorToRightGroup: '将编辑器移动到右侧组',
      navigateBack: '返回',
      navigateBackInEdits: '编辑位置中的“返回”',
      navigateBackInNavigations: '导航位置中的“返回”',
      navigateEditorGroups: '在编辑器组间进行导航',
      navigateEditorHistoryByInput: '从历史记录中快速打开上一个编辑器',
      navigateForward: '前进',
      navigateForwardInEdits: '编辑位置中的“前进”',
      navigateForwardInNavigations: '导航位置中的“前进”',
      navigatePrevious: '转到上一页',
      navigatePreviousInEdits: '编辑位置中的“转到上一页”',
      navigatePreviousInNavigationLocations: '导航位置中的“转到上一页”',
      navigateToLastEditLocation: '转到上一编辑位置',
      navigateToLastNavigationLocation: '转到上一导航位置',
      newGroupAbove: '在上方新建编辑器组',
      newGroupBelow: '在下方新建编辑器组',
      newGroupLeft: '在左侧新建编辑器组',
      newGroupRight: '在右侧新建编辑器组',
      nextEditorInGroup: '打开组中的下一个编辑器',
      openNextEditor: '打开下一个编辑器',
      openNextRecentlyUsedEditor: '打开下一个最近使用的编辑器',
      openNextRecentlyUsedEditorInGroup: '打开组中下一个最近使用的编辑器',
      openPreviousEditor: '打开上一个编辑器',
      openPreviousEditorInGroup: '打开组中上一个编辑器',
      openPreviousRecentlyUsedEditor: '打开上一个最近使用的编辑器',
      openPreviousRecentlyUsedEditorInGroup: '打开组中上一个最近使用的编辑器',
      quickOpenLeastRecentlyUsedEditor: '快速打开最近使用频率最低的编辑器',
      quickOpenLeastRecentlyUsedEditorInGroup:
        '快速打开组中最近使用频率最低的编辑器',
      quickOpenPreviousRecentlyUsedEditor: '快速打开上一个最近使用过的编辑器',
      quickOpenPreviousRecentlyUsedEditorInGroup:
        '快速打开组中上一个最近使用过的编辑器',
      reopenClosedEditor: '重新打开已关闭的编辑器',
      reopenTextEditor: '使用文本编辑器重新打开编辑器',
      revertAndCloseActiveEditor: '还原并关闭编辑器',
      showAllEditors: '按外观显示所有编辑器',
      showAllEditorsByMostRecentlyUsed: '按最近使用显示所有编辑器',
      showEditorsInActiveGroup: '按最近使用显示活动组中的编辑器',
      splitEditor: '拆分编辑器',
      splitEditorGroupDown: '向下拆分编辑器',
      splitEditorGroupLeft: '向左拆分编辑器',
      splitEditorGroupRight: '向右拆分编辑器',
      splitEditorGroupUp: '向上拆分编辑器',
      splitEditorOrthogonal: '正交拆分编辑器',
      splitEditorToAboveGroup: '将编辑器拆分为上述组',
      splitEditorToBelowGroup: '将编辑器拆分为以下组',
      splitEditorToFirstGroup: '将编辑器拆分为第一组',
      splitEditorToLastGroup: '将编辑器拆分为最后一个组',
      splitEditorToLeftGroup: '将编辑器拆分为左组',
      splitEditorToNextGroup: '将编辑器拆分为下一组',
      splitEditorToPreviousGroup: '将编辑器拆分为上一组',
      splitEditorToRightGroup: '将编辑器拆分为右组',
      toggleEditorType: '切换编辑器类型',
      toggleEditorWidths: '切换编辑器组大小',
      unpinEditor: '取消固定编辑器',
    },
    'vs/workbench/browser/parts/editor/editorCommands': {
      compare: '比较',
      'editorCommand.activeEditorCopy.arg.description':
        "参数属性\r\n\t* 'to': 提供复制位置的字符串值。\r\n\t* 'value': 提供要复制的位置数或绝对位置数的数字值。",
      'editorCommand.activeEditorCopy.arg.name': '活动编辑器复制参数',
      'editorCommand.activeEditorCopy.description': '按组复制活动编辑器',
      'editorCommand.activeEditorMove.arg.description':
        '参数属性:\r\n\t* "to": 表示向何处移动的字符串值。\r\n\t* "by": 表示移动单位的字符串值 (按选项卡或按组)。\r\n\t* "value": 表示移动的位置数量或移动到的绝对位置的数字型值。',
      'editorCommand.activeEditorMove.arg.name': '活动编辑器移动参数',
      'editorCommand.activeEditorMove.description':
        '按标签或按组移动活动编辑器',
      focusLeftSideEditor: '在活动编辑器中专注第一侧',
      focusOtherSideEditor: '在活动编辑器中专注其他侧',
      focusRightSideEditor: '在活动编辑器中专注第二侧',
      joinEditorInGroup: '在组中加入编辑器',
      lockEditorGroup: '锁定编辑器组',
      splitEditorInGroup: '在组中拆分编辑器',
      toggleEditorGroupLock: '切换编辑器组锁定',
      toggleInlineView: '切换内联视图',
      toggleJoinEditorInGroup: '在组中切换拆分编辑器',
      toggleSplitEditorInGroupLayout: '切换组中拆分编辑器的布局',
      unlockEditorGroup: '解锁编辑器组',
    },
    'vs/workbench/browser/parts/editor/editorConfiguration': {
      'editor.editorAssociations':
        '将 [glob 模式](https://aka.ms/vscode-glob-patterns)配置到编辑器(例如 `"*.hex": "hexEditor.hexedit"`)。这些优先于默认行为。',
      editorLargeFileSizeConfirmation:
        '在要求在编辑器中打开时进行确认之前，控制以 MB 为单位的文件的最小大小。请注意，此设置可能不适用于所有编辑器类型和环境。',
      interactiveWindow: '交互窗口',
      markdownPreview: 'Markdown 预览',
      'workbench.editor.autoLockGroups':
        '如果与列出的其中一个类型匹配的编辑器作为编辑器组中的第一个编辑器打开，且打开了多个组，则该组会自动锁定。锁定的组仅用于在用户手势(例如拖放等)显式选择时打开编辑器，默认情况下不使用。因此，锁定的组中的活动编辑器不太可能被意外替换为其他编辑器。',
      'workbench.editor.defaultBinaryEditor':
        '检测为二进制文件的默认编辑器。如果未定义，将向用户显示选取器。',
    },
    'vs/workbench/browser/parts/editor/editorDropTarget': {
      dropIntoEditorPrompt: '按住 __{0}__ 以放入编辑器中',
    },
    'vs/workbench/browser/parts/editor/editorGroupView': {
      ariaLabelGroupActions: '空编辑器组操作',
      emptyEditorGroup: '{0} (空)',
      groupAriaLabel: '编辑器组{0}',
      groupLabel: '第 {0} 组',
    },
    'vs/workbench/browser/parts/editor/editorGroupWatermark': {
      'watermark.findInFiles': '在文件中查找',
      'watermark.newUntitledFile': '新的无标题文本文件',
      'watermark.openFile': '打开文件',
      'watermark.openFileFolder': '打开文件或文件夹',
      'watermark.openFolder': '打开文件夹',
      'watermark.openRecent': '打开最近的文件',
      'watermark.quickAccess': '转到文件',
      'watermark.showCommands': '显示所有命令',
      'watermark.showSettings': '显示设置',
      'watermark.startDebugging': '开始调试',
      'watermark.toggleFullscreen': '切换全屏',
      'watermark.toggleTerminal': '切换终端',
    },
    'vs/workbench/browser/parts/editor/editorPanes': {
      editorOpenErrorDialog: '无法打开“{0}”',
      ok: '确定(&&O)',
    },
    'vs/workbench/browser/parts/editor/editorPlaceholder': {
      errorEditor: '编辑器错误',
      manageTrust: '管理工作区信任',
      requiresFolderTrustText:
        '该文件未在编辑器中显示，因为尚未向该文件夹授予信任。',
      requiresWorkspaceTrustText:
        '该文件未在编辑器中显示，因为尚未向该工作区夹授予信任。',
      retry: '重试',
      trustRequiredEditor: '需要工作区信任',
      unavailableResourceErrorEditorText:
        '由于找不到该文件，因此无法打开编辑器。',
      unknownErrorEditorTextWithError: '由于意外错误，无法打开编辑器: {0}',
      unknownErrorEditorTextWithoutError: '由于意外错误，无法打开编辑器。',
    },
    'vs/workbench/browser/parts/editor/editorQuickAccess': {
      closeEditor: '关闭编辑器',
      entryAriaLabelDirty: '{0}，个未保存的更改',
      entryAriaLabelWithGroup: '{0}, {1}',
      entryAriaLabelWithGroupDirty: '{0}, 个未保存的更改，{1}',
      noViewResults: '没有匹配的编辑器',
    },
    'vs/workbench/browser/parts/editor/editorStatus': {
      autoDetect: '自动检测',
      changeEncoding: '更改文件编码',
      changeEndOfLine: '更改行尾序列',
      changeMode: '更改语言模式',
      columnSelectionModeEnabled: '列选择',
      configureAssociationsExt: '“{0}”的配置文件关联...',
      configureModeSettings: '配置“{0}”语言基础设置...',
      currentAssociation: '当前关联',
      currentProblem: '当前问题',
      disableColumnSelectionMode: '禁用列选择模式',
      disableTabMode: '禁用辅助功能模式',
      endOfLineCarriageReturnLineFeed: 'CRLF',
      endOfLineLineFeed: 'LF',
      fileInfo: '文件信息',
      gotoLine: '转到行/列',
      guessedEncoding: '通过内容猜测',
      indentConvert: '转换文件',
      indentView: '更改视图',
      languageDescription: '({0}) - 已配置的语言',
      languageDescriptionConfigured: '({0})',
      languagesPicks: '语言(标识符)',
      multiSelection: '{0} 选择',
      multiSelectionRange: '{0} 选择(已选择 {1} 个字符)',
      noEditor: '当前没有活动的文本编辑器',
      noFileEditor: '此时无活动文件',
      noWritableCodeEditor: '活动代码编辑器为只读模式。',
      pickAction: '选择操作',
      pickEncodingForReopen: '选择文件编码以重新打开文件',
      pickEncodingForSave: '选择用于保存的文件编码',
      pickEndOfLine: '选择行尾序列',
      pickLanguage: '选择语言模式',
      pickLanguageToConfigure: '选择要与“{0}”关联的语言模式',
      reopenWithEncoding: '通过编码重新打开',
      saveWithEncoding: '通过编码保存',
      selectEOL: '选择行尾序列',
      selectEncoding: '选择编码',
      selectIndentation: '选择缩进',
      selectLanguageMode: '选择语言模式',
      showLanguageExtensions: '搜索“{0}”的应用市场扩展程序...',
      singleSelection: '行 {0}，列 {1}',
      singleSelectionRange: '行 {0}，列 {1} (已选择{2})',
      spacesAndTabsSize: '空格: {0}(选项卡大小: {1})',
      spacesSize: '空格: {0}',
      'status.editor.columnSelectionMode': '列选择模式',
      'status.editor.encoding': '编辑器编码',
      'status.editor.eol': '编辑器结束行',
      'status.editor.indentation': '编辑器缩进',
      'status.editor.info': '文件信息',
      'status.editor.mode': '编辑器语言',
      'status.editor.selection': '编辑器选择',
      'status.editor.tabFocusMode': '辅助功能模式',
      tabFocusModeEnabled: '按 Tab 移动焦点',
      tabSize: '制表符长度: {0}',
    },
    'vs/workbench/browser/parts/editor/sideBySideEditor': {
      sideBySideEditor: '并排编辑器',
    },
    'vs/workbench/browser/parts/editor/tabsTitleControl': {
      ariaLabelTabActions: '选项卡操作',
    },
    'vs/workbench/browser/parts/editor/textCodeEditor': {
      textEditor: '文本编辑器',
    },
    'vs/workbench/browser/parts/editor/textDiffEditor': {
      fileTooLargeForHeapErrorWithSize:
        '文本比较编辑器中至少有一个文件未显示，因为它非常大({0})。',
      fileTooLargeForHeapErrorWithoutSize:
        '文本比较编辑器中至少有一个文件未显示，因为它非常大。',
      textDiffEditor: '文本差异编辑器',
    },
    'vs/workbench/browser/parts/editor/textEditor': {
      editor: '编辑器',
    },
    'vs/workbench/browser/parts/editor/titleControl': {
      ariaLabelEditorActions: '编辑器操作',
      draggedEditorGroup: '{0} (+{1})',
    },
    'vs/workbench/browser/parts/notifications/notificationsActions': {
      clearAllIcon: '通知中“全部清除”操作的图标。',
      clearIcon: '通知中“清除”操作的图标。',
      clearNotification: '清除通知',
      clearNotifications: '清除所有通知',
      collapseIcon: '通知中“折叠”操作的图标。',
      collapseNotification: '折叠通知',
      configureIcon: '通知中“配置”操作的图标。',
      configureNotification: '配置通知',
      copyNotification: '复制文本',
      doNotDisturbIcon: '通知中“静音全部操作”的图标。',
      expandIcon: '通知中“展开”操作的图标。',
      expandNotification: '展开通知',
      hideIcon: '通知中“隐藏”操作的图标。',
      hideNotificationsCenter: '隐藏通知',
      toggleDoNotDisturbMode: '切换“请勿打扰”模式',
    },
    'vs/workbench/browser/parts/notifications/notificationsAlerts': {
      alertErrorMessage: '错误: {0}',
      alertInfoMessage: '信息: {0}',
      alertWarningMessage: '警告: {0}',
    },
    'vs/workbench/browser/parts/notifications/notificationsCenter': {
      notifications: '通知',
      notificationsCenterWidgetAriaLabel: '通知中心',
      notificationsEmpty: '无新通知',
      notificationsToolbar: '通知中心操作',
    },
    'vs/workbench/browser/parts/notifications/notificationsCommands': {
      acceptNotificationPrimaryAction: '接受通知主要操作',
      clearAllNotifications: '清除所有通知',
      focusNotificationToasts: '将焦点放在通知横幅上',
      hideNotifications: '隐藏通知',
      notifications: '通知',
      showNotifications: '显示通知',
      toggleDoNotDisturbMode: '切换“请勿打扰”模式',
    },
    'vs/workbench/browser/parts/notifications/notificationsList': {
      notificationAriaLabel: '{0}，通知',
      notificationWithSourceAriaLabel: '{0}，源: {1}，通知',
      notificationsList: '通知列表',
    },
    'vs/workbench/browser/parts/notifications/notificationsStatus': {
      hideNotifications: '隐藏通知',
      noNotifications: '无新通知',
      noNotificationsWithProgress: '无新通知({0} 正在进行中)',
      notifications: '{0} 条新通知',
      notificationsWithProgress: '{0} 条新通知({1} 个正在进行中)',
      oneNotification: '1 条新通知',
      oneNotificationWithProgress: '1 条新通知({0} 条正在进行中)',
      'status.doNotDisturb': '请勿打扰',
      'status.doNotDisturbTooltip': '已启用“请勿打扰”模式',
      'status.message': '状态消息',
      'status.notifications': '通知',
      zeroNotifications: '没有通知',
    },
    'vs/workbench/browser/parts/notifications/notificationsToasts': {
      notificationAriaLabel: '{0}，通知',
      notificationWithSourceAriaLabel: '{0}，源: {1}，通知',
    },
    'vs/workbench/browser/parts/notifications/notificationsViewer': {
      executeCommand: '单击以执行命令 "{0}"',
      notificationActions: '通知操作',
      notificationSource: '来源: {0}',
    },
    'vs/workbench/browser/parts/panel/panelActions': {
      alignPanel: '对齐面板',
      alignPanelCenter: '将面板对齐设置为“居中”',
      alignPanelCenterShort: '居中',
      alignPanelJustify: '将面板对齐设置为“两端对齐”',
      alignPanelJustifyShort: '两端对齐',
      alignPanelLeft: '将面板对齐方式设置为“左对齐”',
      alignPanelLeftShort: '左',
      alignPanelRight: '将面板对齐方式设置为“右对齐”',
      alignPanelRightShort: '右',
      closeIcon: '用于关闭面板的图标。',
      closePanel: '关闭面板',
      closeSecondarySideBar: '关闭辅助侧栏',
      focusPanel: '聚焦到面板中',
      hidePanel: '隐藏面板',
      maximizeIcon: '用于最大化面板的图标。',
      maximizePanel: '最大化面板大小',
      minimizePanel: '恢复面板大小',
      movePanelToSecondarySideBar: '将面板视图移动到辅助侧栏',
      moveSidePanelToPanel: '将辅助侧栏视图移动到面板',
      nextPanelView: '下一个面板视图',
      panelMaxNotSupported: '仅当面板居中对齐时，才支持最大化面板。',
      positionPanel: '面板位置',
      positionPanelBottom: '将面板移至底部',
      positionPanelBottomShort: '底部',
      positionPanelLeft: '将面板移至左侧',
      positionPanelLeftShort: '左',
      positionPanelRight: '将面板移至右侧',
      positionPanelRightShort: '右',
      previousPanelView: '上一个面板视图',
      restoreIcon: '用于还原面板的图标。',
      'toggle panel': '面板',
      'toggle panel mnemonic': '面板(&&P)',
      toggleMaximizedPanel: '切换最大化面板',
      togglePanel: '切换面板',
      togglePanelOffIcon: '用于在面板打开时关闭面板的图标。',
      togglePanelOnIcon: '用于在面板关闭时打开面板的图标。',
      togglePanelVisibility: '切换面板可见性',
    },
    'vs/workbench/browser/parts/panel/panelPart': {
      'align panel': '对齐面板',
      hidePanel: '"隐藏" 面板',
      moreActions: '更多操作...',
      'panel position': '面板位置',
      'panel.emptyMessage': '将视图拖动到此处显示。',
      resetLocation: '重置位置',
    },
    'vs/workbench/browser/parts/sidebar/sidebarActions': {
      focusSideBar: '将焦点置于主侧栏',
    },
    'vs/workbench/browser/parts/statusbar/statusbarActions': {
      focusStatusBar: '焦点状态栏',
      hide: '隐藏“{0}”',
    },
    'vs/workbench/browser/parts/statusbar/statusbarPart': {
      hideStatusBar: '隐藏状态栏',
    },
    'vs/workbench/browser/parts/titlebar/commandCenterControl': {
      'commandCenter-activeBackground': '命令中心的活动背景色',
      'commandCenter-activeBorder': '命令中心的活动边框颜色',
      'commandCenter-activeForeground': '命令中心的活动前景色',
      'commandCenter-background': '命令中心背景色',
      'commandCenter-border': '命令中心的边框颜色',
      'commandCenter-foreground': '命令中心前景色',
      'commandCenter-inactiveBorder': '窗口处于非活动状态时命令中心的边框颜色',
      'commandCenter-inactiveForeground':
        '窗口处于非活动状态时命令中心的前景色',
      'label.dfl': '搜索',
      label1: '{0} {1}',
      label2: '{0} {1}',
      title: '搜索 {0} ({1}) - {2}',
      title2: '搜索 {0} - {1}',
    },
    'vs/workbench/browser/parts/titlebar/menubarControl': {
      DownloadingUpdate: '正在下载更新...',
      checkForUpdates: '检查更新(&&U)...',
      checkingForUpdates: '正在检查更新...',
      'download now': '下载更新(&&O)',
      focusMenu: '聚焦应用程序菜单',
      goToSetting: '打开设置',
      'installUpdate...': '安装更新(&&U)...',
      installingUpdate: '正在安装更新...',
      mEdit: '编辑(&&E)',
      mFile: '文件(&&F)',
      mGoto: '转到(&&G)',
      mHelp: '帮助(&&H)',
      mPreferences: '首选项',
      mSelection: '选择(&&S)',
      mTerminal: '终端(&&T)',
      mView: '查看(&&V)',
      'menubar.customTitlebarAccessibilityNotification':
        '为您启用了辅助功能支持。对于最易于访问的体验, 我们建议使用自定义标题栏样式。',
      restartToUpdate: '重新启动以更新(&&U)',
    },
    'vs/workbench/browser/parts/titlebar/titlebarPart': {
      focusTitleBar: '焦点标题栏',
      'toggle.commandCenter': '命令中心',
      'toggle.layout': '布局控件',
    },
    'vs/workbench/browser/parts/titlebar/windowTitle': {
      devExtensionWindowTitlePrefix: '[扩展开发宿主]',
      userIsAdmin: '[管理员]',
      userIsSudo: '[超级用户]',
    },
    'vs/workbench/browser/parts/views/checkbox': {
      checked: '已选中',
      unchecked: '未选中',
    },
    'vs/workbench/browser/parts/views/treeView': {
      collapseAll: '全部折叠',
      'command-error':
        '运行命令 {1} 错误: {0}。这可能是由提交 {1} 的扩展引起的。',
      'no-dataprovider': '没有可提供视图数据的已注册数据提供程序。',
      refresh: '刷新',
      'treeView.enableCollapseAll': 'ID 为 {0} 的树状视图是否启用全部折叠。',
      'treeView.enableRefresh': 'ID 为 {0} 的树状视图是否启用刷新。',
      'treeView.toggleCollapseAll': 'ID 为 {0} 的树状视图是否切换为全部折叠。',
    },
    'vs/workbench/browser/parts/views/viewFilter': {
      'more filters': '更多筛选器...',
    },
    'vs/workbench/browser/parts/views/viewPane': {
      viewPaneContainerCollapsedIcon: '已折叠的视图窗格容器的图标。',
      viewPaneContainerExpandedIcon: '已展开的视图窗格容器的图标。',
      viewToolbarAriaLabel: '{0}操作',
    },
    'vs/workbench/browser/parts/views/viewPaneContainer': {
      viewMoveDown: '向下移动视图',
      viewMoveLeft: '向左移动视图',
      viewMoveRight: '向右移动视图',
      viewMoveUp: '向上移动视图',
      views: '视图',
      viewsMove: '移动视图',
    },
    'vs/workbench/browser/parts/views/viewsService': {
      'focus view': '焦点在 {0} 视图上',
      resetViewLocation: '重置位置',
      'show view': '显示 {0}',
      'toggle view': '切换 {0}',
    },
    'vs/workbench/browser/quickaccess': {
      inQuickOpen: '键盘焦点是否在快速打开控件中',
    },
    'vs/workbench/browser/web.main': {
      rendererLog: '窗口',
      reset: '重置用户数据',
      'reset user data message':
        '是否要重置数据(设置、键绑定、扩展、代码段和 UI 状态)并重新加载?',
    },
    'vs/workbench/browser/window': {
      learnMore: '了解详细信息(&&L)',
      open: '打开(&&O)',
      'openExternalDialogButtonInstall.v3': '安装(&&I)',
      'openExternalDialogButtonRetry.v2': '重试(&&T)',
      'openExternalDialogDetail.v2':
        '我们已在你的计算机上启动 {0}。\r\n\r\n如果 {1} 未启动，请重试或在下面安装。',
      openExternalDialogDetailNoInstall:
        '我们已你的计算机上启动 {0}。\r\n\r\n如果 {1} 未启动，请在下面重试。',
      openExternalDialogTitle: '全部完成。现在可以关闭此选项卡。',
      reload: '重新加载(&&R)',
      shutdownError: '出现意外错误，需要重新加载此页面。',
      shutdownErrorDetail: '工作台在运行时被意外释放。',
      unableToOpenExternal:
        '浏览器已中断新选项卡或窗口的打开。仍然按“打开”以将其打开。',
    },
    'vs/workbench/browser/workbench': {
      loaderErrorNative: '未能加载所需文件。请重启应用程序重试。详细信息: {0}',
    },
    'vs/workbench/browser/workbench.contribution': {
      activeEditorLong:
        '"${activeEditorLong}": 文件的完整路径 (例如 /Users/Development/myFolder/myFileFolder/myFile.txt)。',
      activeEditorMedium:
        '"${activeEditorMedium}": 相对于工作区文件夹的文件路径 (例如, myFolder/myFileFolder/myFile.txt)。',
      activeEditorShort: '"${activeEditorShort}": 文件名 (例如 myFile.txt)。',
      activeFolderLong:
        '"${activeFolderLong}": 文件所在文件夹的完整路径 (例如 /Users/Development/myFolder/myFileFolder)。',
      activeFolderMedium:
        '"${activeFolderMedium}": 相对于工作区文件夹的、包含文件的文件夹的路径, (例如 myFolder/myFileFolder)。',
      activeFolderShort:
        '"${activeFolderShort}": 文件所在的文件夹名称 (例如, myFileFolder)。',
      activityBarIconClickBehavior:
        '控制在工作台中单击活动栏图标时出现的行为。',
      activityBarVisibility: '控制工作台中活动栏的可见性。',
      appName: '"${appName}": 例如 VS Code。',
      centeredLayoutAutoResize:
        '如果在居中布局中打开了超过一组编辑器，控制是否自动将宽度调整为最大宽度值。当回到只打开了一组编辑器的状态，将自动将宽度调整为原始的居中宽度值。',
      centeredLayoutDynamicWidth:
        '调整窗口大小时，居中布局尝试维持常量宽度的控件。',
      closeEmptyGroups:
        '控制编辑器组中最后一个选项卡关闭时这个空组的行为。若启用，将自动关闭空组。若禁用，空组仍将保留在网格布局中。',
      closeOnFileDelete:
        '控制在会话期间显示已打开文件的编辑器是否应在被其他进程删除或重命名时自动关闭。禁用此功能将使编辑器在此类事件中保持打开状态。请注意，从应用程序内删除将始终关闭编辑器，且永远不会关闭具有未保存更改的编辑器以保留数据。',
      closeOnFocusLost: '控制 Quick Open 是否在其失去焦点时自动关闭。',
      commandHistory:
        '控制命令面板中保留最近使用命令的数量。设置为 0 时禁用命令历史功能。',
      confirmBeforeClose:
        '控制是否在关闭窗口或退出应用程序之前显示确认对话框。',
      confirmBeforeCloseWeb:
        '控制在关闭浏览器选项卡或窗口之前是否显示确认对话框。请注意，即使已启用，浏览器仍可能决定在不进行确认的情况下关闭选项卡或窗口，并且此设置仅作为提示，并非在所有情况下都起作用。',
      customMenuBarAltFocus:
        '控制是否通过按 Alt 键聚焦菜单栏。此设置对使用 Alt 键切换菜单栏没有任何影响。',
      'decorations.badges': '控制编辑器文件修饰是否应使用徽章。',
      'decorations.colors': '控制编辑器文件修饰是否应使用颜色。',
      dirty: '`${dirty}`: 表明活动编辑器具有未保存更改的时间的指示器。',
      doubleClickTabToToggleEditorGroupSizes:
        '控制在双击选项卡时是否最大化/还原编辑器组。禁用 `#workbench.editor.showTabs#` 时，将忽略此值。',
      editorOpenPositioning:
        '控制编辑器打开的位置。选择 `left` 或 `right` 可分别在当前活动编辑器的左侧或右侧打开。选择 `first` (最前) 或 `last` (最后) 打开的位置与当前活动编辑器无关。',
      editorTabCloseButton:
        '控制编辑器的选项卡关闭按钮的位置，或者在设置为 "off" 时禁用它们。当 "#workbench.editor.showTabs#" 处于禁用状态时，将忽略此值。',
      enableMenuBarMnemonics:
        '控制是否可通过 Alt 键快捷键打开主菜单。如果禁用助记符，则可将这些 Alt 键快捷键绑定到编辑器命令。',
      enablePreview:
        '控制打开的编辑器是否显示为预览编辑器。预览编辑器不会保持打开状态，在将其显式设置为保持打开(通过双击或编辑)前可以重用，并以斜体显示文件名。',
      enablePreviewFromCodeNavigation:
        '控制当从编辑器开始进行代码导航时，编辑器是否保持为预览状态。预览编辑器不会保持打开状态，在将其显式设置为保持打开(通过双击或编辑)前将会重用。当 `#workbench.editor.enablePreview#` 处于禁用状态时，将忽略此值。',
      enablePreviewFromQuickOpen:
        '控制通过 Quick Open 打开的编辑器是否显示为预览编辑器。预览编辑器不会保持打开状态，并且在将其显式设置为保持打开(通过双击或编辑)前将会重用。启用后，在选择前按住 Ctrl 可在非预览模式下打开编辑器。当 `#workbench.editor.enablePreview#` 处于禁用状态时，将忽略此值。',
      exclude:
        '配置路径或 [glob 模式](https://aka.ms/vscode-glob-patterns)以排除本地文件历史记录中的文件。glob 模式的计算结果始终是相对于工作区文件夹路径所在的位置，除非它们是绝对路径。更改此设置不会影响现有的本地文件历史记录条目。',
      focusRecentEditorAfterClose:
        '控制是否按最常使用的顺序或从左到右的顺序关闭选项卡。',
      folderName:
        '"${folderName}": 文件所在工作区文件夹的名称 (例如 myFolder)。',
      folderPath:
        '"${folderpath}": 文件所在工作区文件夹的路径 (例如 /Users/Development/myFolder)。',
      fontAliasing: '控制在工作台中字体的渲染方式。',
      highlightModifiedTabs:
        '控制是否在具有未保存更改的编辑器的选项卡上绘制顶部边框。当禁用 `#workbench.editor.showTabs#` 时，会忽略此值。',
      layoutControlEnabled:
        '控制布局控件是否显示在自定义标题栏中。此设置仅在将 {0} 设置为 {1} 时才会生效。',
      layoutControlEnabledWeb: '控制是否显示标题栏中的布局控件。',
      layoutControlType:
        '控制自定义标题栏中的布局控件是显示为单个菜单按钮还是多个 UI 切换。',
      'layoutcontrol.type.both': '显示下拉列表和切换按钮。',
      'layoutcontrol.type.menu': '显示包含布局选项下拉列表的单个按钮。',
      'layoutcontrol.type.toggles':
        '显示用于切换面板和侧边栏可见性的多个按钮。',
      limitEditorsEnablement:
        '控制打开的编辑器数是否应受限制。启用后，最近使用较少的编辑器将关闭，以为新打开的编辑器腾出空间。',
      limitEditorsExcludeDirty:
        '控制打开的编辑器的最大数目是否应排除脏编辑器以计入配置的限制。',
      limitEditorsMaximum:
        '控制打开编辑器的最大数量。使用 {0} 设置控制每个编辑器组或跨所有组的限制。',
      localHistoryEnabled:
        '控制是否启用本地文件历史记录。启用后，所保存编辑器文件内容将存储到备份位置，以便稍后可以还原或查看内容。更改此设置不会影响现有本地文件历史记录条目。',
      localHistoryMaxFileEntries:
        '控制每个文件的最大本地文件历史记录条目数。当文件的本地文件历史记录条目数超过此数目时，将丢弃最早的条目。',
      localHistoryMaxFileSize:
        '控制考虑用于本地历史记录的文件最大大小(KB)。较大的文件将不会添加到本地历史记录中。更改此设置不会影响现有本地文件历史记录条目。',
      menuBarVisibility:
        '控制菜单栏的可见性。“切换”设置表示菜单栏处于隐藏状态，只需按一下 Alt 键即可显示。“精简”设置会将菜单移到边栏中。',
      'menuBarVisibility.mac':
        '控制菜单栏的可见性。“切换”设置表示菜单栏处于隐藏状态，执行“聚焦应用程序菜单”将显示菜单栏。“精简”设置会将菜单移到边栏中。',
      mergeWindow:
        '配置时间间隔(以秒为单位)，在此间隔期间，本地文件历史记录中的最后一个条目将替换为正在添加的条目。这有助于减少所添加的条目总数，例如启用自动保存时。此设置仅应用于具有相同源的条目。更改此设置不会影响现有本地文件历史记录条目。',
      mouseBackForwardToNavigate:
        '允许使用鼠标按钮四和五执行“返回”和“前进”命令。',
      navigationScope: '控制编辑器中“返回”和“前进”等命令的历史导航范围。',
      openDefaultKeybindings:
        '控制在打开按键绑定设置时是否同时打开显示所有默认按键绑定的编辑器。',
      openDefaultSettings:
        '控制在打开设置时是否同时打开显示所有默认设置的编辑器。',
      openFilesInNewWindow:
        '控制是否应在使用命令行或文件对话框时在新窗口中打开文件。\r\n请注意，此设置可能会被忽略(例如，在使用 `--new-window` 或 `--reuse-window` 命令行选项时)。',
      openFilesInNewWindowMac:
        '控制是否应在使用命令行或文件对话框时在新窗口中打开文件。\r\n请注意，此设置可能会被忽略(例如，在使用 `--new-window` 或 `--reuse-window` 命令行选项时)。',
      openFoldersInNewWindow:
        '控制打开文件夹时是在新窗口打开还是替换上一个活动窗口。\r\n注意，此设置可能会被忽略 (例如，在使用 `--new-window` 或 `--reuse-window` 命令行选项时)。',
      panelDefaultLocation:
        '控制新工作区中面板(终端、调试控制台、输出、问题)的默认位置。它可以显示在编辑器区域的底部、右侧或左侧。',
      panelOpensMaximized:
        '控制面板是否以最大化方式打开。它可以始终以最大化方式打开、永不以最大化方式打开或以关闭前的最后一个状态打开。',
      perEditorGroup:
        '控制最大打开的编辑器的限制是否应应用于每个编辑器组或所有编辑器组。',
      pinnedTabSizing:
        '控制固定的编辑器选项卡的大小。固定的选项卡排在所有打开的选项卡的开头，并且在取消固定之前，通常不会关闭。当 "#workbench.editor.showTabs#" 处于禁用状态时，会忽略此值。',
      preserveInput: '当再次打开命令面板时，控制是否恢复上一次输入的内容。',
      profileName:
        '"${profileName}": 在其中打开工作区的配置文件的名称(例如数据科学(配置文件))。如果使用默认配置文件，则忽略此选项。',
      remoteName: '`${remoteName}`: 例如 SSH',
      restoreViewState:
        '关闭编辑器后重新打开时，将还原最后的编辑器视图状态(例如滚动位置)。编辑器视图状态按编辑器组存储，并在组关闭时被放弃。使用 {0} 设置以跨所有编辑器组使用最后已知的视图状态，以防找不到编辑器组之前的视图状态。',
      revealIfOpen:
        '控制是否在打开的任何可见组中显示编辑器。如果禁用，编辑器将优先在当前活动的编辑器组中打开。如果启用，将显示在已打开的编辑器，而不是在当前活动的编辑器组中再次打开。请注意，有些情况下会忽略此设置，例如，强制编辑器在特定组中打开或在当前活动组的一侧打开。',
      rootName:
        '`${rootName}`: 具有可选远程名称和工作区指示器的工作区的名称(如果适用)(例如 myFolder、myRemoteFolder [SSH] 或 myWorkspace [工作区])。',
      rootNameShort:
        '`${rootNameShort}`: 已缩短的工作区名称，不包含后缀(例如 myFolder、myRemoteFolder 或 myWorkspace)。',
      rootPath:
        '"${rootPath}": 打开的工作区或文件夹的文件路径 (例如 /Users/Development/myWorkspace)。',
      scrollToSwitchTabs:
        '控制在滚动到选项卡上方时是否打开这些选项卡。默认情况下，选项卡仅在鼠标滚动时呈现，但不打开。可通过在滚动时按住 Shift 键来更改滚动期间的此行为。当 "#workbench.editor.showTabs#" 处于禁用状态时，将忽略此值。',
      'security.allowedUNCHosts':
        '无需用户确认即可允许的一组 UNC 主机名(无前导或尾随反斜杠，例如 `192.168.0.1` 或 `my-server`)。如果正在访问的 UNC 主机是此设置不允许访问的或未通过用户确认进行确认，则会发生错误并停止操作。更改此设置时需要重启。有关此设置的详细信息，请访问 https://aka.ms/vscode-windows-unc。',
      'security.allowedUNCHosts.patternErrorMessage':
        'UNC 主机名不得包含反斜杠。',
      'security.restrictUNCAccess':
        '如果已启用，则仅允许访问 "#security.allowedUNCHosts#" 设置允许的或用户确认后的 UNC 主机名。有关此设置的详细信息，可访问 https://aka.ms/vscode-windows-unc。',
      separator:
        '"${separator}": 一种条件分隔符 ("-"), 仅在被包含值或静态文本的变量包围时显示。',
      'settings.editor.desc': '配置默认使用的设置编辑器。',
      'settings.editor.json': '使用 json 文件编辑器。',
      'settings.editor.ui': '使用设置 ui 编辑器。',
      sharedViewState:
        '跨所有编辑器组保留最新的编辑器视图状态(例如滚动位置等)并在未找到编辑器组的特定编辑器视图状态时进行还原。',
      showEditorTabs: '控制打开的编辑器是否显示在选项卡中。',
      showIcons:
        '控制是否在打开的编辑器中显示图标。这要求同时启用文件图标主题。',
      sideBarLocation:
        '控制主边栏和活动栏的位置。它们可以显示在工作台的左侧或右侧。辅助边栏将显示在工作台的另一侧。',
      sideBySideDirection:
        '控制编辑器在并排打开时(例如从资源管理器)出现的默认位置。默认在当前活动编辑器右侧打开。若更改为 "down"，则在当前活动编辑器下方打开。',
      splitInGroupLayout: '控制在编辑器组中垂直或水平拆分编辑器时的布局。',
      splitOnDragAndDrop:
        '通过将编辑器或文件放到编辑器区域的边缘，控制是否可以由拖放操作拆分编辑器组。',
      splitSizing: '拆分编辑器组时控制编辑器组大小。',
      statusBarVisibility: '控制工作台底部状态栏的可见性。',
      suggestCommands: '控制命令面板是否应包含常用命令的列表。',
      tabDescription: '控制编辑器标签的格式。',
      tabScrollbarHeight:
        '控制编辑器标题区域中用于选项卡和面包屑的滚动条的高度。',
      tabSizing:
        '控制编辑器选项卡的大小。当 "#workbench.editor.showTabs#" 处于禁用状态时，会忽略此值。',
      'tips.enabled': '启用后，当没有打开编辑器时将显示水印提示。',
      untitledHint: '控制编辑器中是否应显示无标题文本提示。',
      untitledLabelFormat: '控制无标题编辑器的标签格式。',
      useSemanticSimilarity:
        '控制命令面板是否应包含类似的命令。必须安装提供语义相似性的扩展。',
      useSplitJSON: '控制在将设置编辑为 json 时是否使用拆分 json 编辑器。',
      viewVisibility:
        '控制是否显示视图头部的操作项。视图头部操作项可以一直，或是仅当聚焦到和悬停在视图上时显示。',
      'window.commandCenter':
        '将命令启动器与窗口标题一起显示。仅当 {0} 设置为 {1} 时，此设置才会生效。',
      'window.commandCenterWeb': '将命令启动器与窗口标题一起显示。',
      'window.confirmBeforeClose.always': '始终询问确认。',
      'window.confirmBeforeClose.always.web':
        '始终尝试请求确认。请注意，浏览器仍可能在未经确认的情况下决定关闭标签页或窗口。',
      'window.confirmBeforeClose.keyboardOnly': '仅在已使用键绑定时请求确认。',
      'window.confirmBeforeClose.keyboardOnly.web':
        '仅在检测到使用了键绑定关闭窗口时请求确认。请注意，在某些情况下可能无法进行检测。',
      'window.confirmBeforeClose.never': '从不显式请求确认。',
      'window.confirmBeforeClose.never.web':
        '除非即将丢失数据，否则绝不明确询问确认。',
      'window.menuBarVisibility.classic':
        '菜单显示在窗口顶部，并且仅在全屏模式下隐藏。',
      'window.menuBarVisibility.compact':
        '菜单在边栏中显示为紧凑按钮。当 {0} 为 {1} 时，会忽略此值。',
      'window.menuBarVisibility.compact.web': '菜单在边栏中显示为紧凑按钮。',
      'window.menuBarVisibility.hidden': '菜单始终隐藏。',
      'window.menuBarVisibility.toggle':
        '菜单处于隐藏状态，但通过按 Alt 键可在窗口顶部显示。',
      'window.menuBarVisibility.toggle.mac':
        '菜单处于隐藏状态，但通过执行“聚焦应用程序菜单”命令可在窗口顶部显示。',
      'window.menuBarVisibility.visible':
        '即使在全屏模式下，菜单也始终显示在窗口顶部。',
      'window.openFilesInNewWindow.default':
        '在新窗口中打开文件，除非文件从应用程序内进行选取 (例如，通过“文件”菜单)。',
      'window.openFilesInNewWindow.defaultMac':
        '在文件所在文件夹的已有窗口中或在上一个活动窗口中打开文件，除非其通过“程序坞”(Dock) 或“访达”(Finder) 打开。',
      'window.openFilesInNewWindow.off':
        '在文件所在文件夹的已有窗口中或在上一个活动窗口中打开文件。',
      'window.openFilesInNewWindow.on': '在新窗口中打开文件。',
      'window.openFoldersInNewWindow.default':
        '在新窗口中打开文件夹，除非文件夹从应用程序内进行选取 (例如，通过“文件”菜单)。',
      'window.openFoldersInNewWindow.off': '文件夹将替换上一个活动窗口。',
      'window.openFoldersInNewWindow.on': '在新窗口中打开文件夹。',
      'window.titleSeparator': '{0} 使用的分隔符。',
      windowConfigurationTitle: '窗口',
      windowTitle: '根据活动编辑器控制窗口标题。变量是根据上下文替换的:',
      'workbench.activityBar.iconClickBehavior.focus':
        '如果单击的项已可见，则将焦点放在边栏上。',
      'workbench.activityBar.iconClickBehavior.toggle':
        '如果单击的项已可见，则隐藏边栏。',
      'workbench.editor.historyBasedLanguageDetection':
        '允许在语言检测中使用编辑器历史记录。这会导致自动语言检测偏向于最近打开的语言，并允许自动语言检测使用较小的输入进行操作。',
      'workbench.editor.labelFormat.default':
        '显示文件名。当启用选项卡且在同一组内有两个相同名称的文件时，将添加每个文件路径中可以用于区分的部分。在选项卡被禁用且编辑器活动时，将显示相对于工作区文件夹的路径。',
      'workbench.editor.labelFormat.long': '显示文件名后跟其绝对路径。',
      'workbench.editor.labelFormat.medium':
        '显示文件名及其相对于工作区文件夹的路径。',
      'workbench.editor.labelFormat.short': '显示文件名后跟其目录名。',
      'workbench.editor.languageDetection':
        '控制是否自动检测文本编辑器中的语言，除非该语言已由语言选择器显式设置。这也可以按语言确定范围，以便你可以指定不希望关闭的语言。这对于像 Markdown 这样的语言很有用，因为它通常包含可能会欺骗语言检测的其他语言，使其认为它是嵌入语言而不是 Markdown。',
      'workbench.editor.navigationScopeDefault':
        '浏览所有打开的编辑器和编辑器组。',
      'workbench.editor.navigationScopeEditor': '仅在活动编辑器中导航。',
      'workbench.editor.navigationScopeEditorGroup':
        '仅在活动编辑器组的编辑器中导航。',
      'workbench.editor.pinnedTabSizing.compact':
        '固定的选项卡将以紧凑形式显示，其中只包含图标或编辑器名称的第一个字母。',
      'workbench.editor.pinnedTabSizing.normal':
        '固定的选项卡会继承未固定的选项卡的外观。',
      'workbench.editor.pinnedTabSizing.shrink':
        '固定的选项卡缩小至紧凑的固定大小，显示编辑器名称的各部分。',
      'workbench.editor.preferBasedLanguageDetection':
        '启用后，将编辑器历史记录考虑在内的语言检测模型将获得更高的优先级。',
      'workbench.editor.showLanguageDetectionHints':
        '启用后，当编辑器语言与检测到的内容语言不匹配时，显示状态栏快速修复。',
      'workbench.editor.showLanguageDetectionHints.editors':
        '在无标题文本编辑器中显示',
      'workbench.editor.showLanguageDetectionHints.notebook':
        '在笔记本编辑器中显示',
      'workbench.editor.splitInGroupLayoutHorizontal': '从左到右定位编辑器。',
      'workbench.editor.splitInGroupLayoutVertical': '从上到下定位编辑器。',
      'workbench.editor.splitSizingAuto':
        '将所有编辑器组拆分为相等的部分，除非某部分的大小已更改。',
      'workbench.editor.splitSizingDistribute':
        '将所有编辑器组拆分为相等的部分。',
      'workbench.editor.splitSizingSplit': '将活动编辑器组拆分为相等的部分。',
      'workbench.editor.tabSizing.fit':
        '始终将标签页保持足够大，能够完全显示编辑器标签。',
      'workbench.editor.tabSizing.fixed':
        '使所有选项卡的大小相同，同时允许它们在可用空间不足以同时显示所有选项卡时变小。',
      'workbench.editor.tabSizing.shrink':
        '在不能同时显示所有选项卡时，允许选项卡缩小。',
      'workbench.editor.tabSizingFixedMaxWidth':
        '控制将`#workbench.editor.tabSizing#`大小设置为`fixed`时选项卡的最大宽度。',
      'workbench.editor.tabSizingFixedMinWidth':
        '控制将 `#workbench.editor.tabSizing#` 大小设置为 `fixed` 时选项卡的最小宽度。',
      'workbench.editor.titleScrollbarSizing.default': '默认大小。',
      'workbench.editor.titleScrollbarSizing.large':
        '增加大小，以便更轻松地通过鼠标抓取。',
      'workbench.editor.untitled.labelFormat.content':
        '无标题文件的名称派生自其第一行的内容，除非它有关联的文件路径。如果行为空或不包含单词字符，它将回退到名称。',
      'workbench.editor.untitled.labelFormat.name':
        '无标题文件的名称不是从文件的内容派生的。',
      'workbench.fontAliasing.antialiased':
        '进行像素而不是次像素级别的字体平滑。可能会导致字体整体显示得更细。',
      'workbench.fontAliasing.auto':
        '根据显示器 DPI 自动应用 `default` 或 `antialiased` 选项。',
      'workbench.fontAliasing.default':
        '次像素平滑字体。将在大多数非 retina 显示器上显示最清晰的文字。',
      'workbench.fontAliasing.none':
        '禁用字体平滑。将显示边缘粗糙、有锯齿的文字。',
      'workbench.hover.delay':
        '控制为工作台项显示悬停之前的延迟时间(以毫秒为单位)(例如，一些扩展提供了树状视图项)。已经可见的项可能需要刷新，然后才会反映出此设置更改。',
      'workbench.panel.opensMaximized.always': '始终以最大化方式打开面板。',
      'workbench.panel.opensMaximized.never':
        '永不以最大化方式打开面板。面板将以非最大化方式打开。',
      'workbench.panel.opensMaximized.preserve': '以关闭面板前的状态打开面板。',
      'workbench.quickOpen.preserveInput':
        '在打开 Quick Open 视图时，控制是否自动恢复上一次输入的值。',
      'workbench.reduceMotion': '控制工作台是否应以更少的动画呈现。',
      'workbench.reduceMotion.auto': '根据 OS 配置减少运动呈现。',
      'workbench.reduceMotion.off': '不要减少运动呈现',
      'workbench.reduceMotion.on': '始终减少动作呈现。',
      wrapTabs:
        '控制当超出可用空间时，选项卡是否应在多行之间换行，或者是否应显示滚动条。当 "#workbench.editor.showTabs#" 处于禁用状态时，将忽略此值。',
      'zenMode.centerLayout': '控制在打开禅模式时是否启用居中布局。',
      'zenMode.fullScreen': '控制在打开禅模式时是否将工作台切换到全屏。',
      'zenMode.hideActivityBar':
        '控制在打开禅模式时是否隐藏工作台左侧或右侧的活动栏。',
      'zenMode.hideLineNumbers': '控制在打开禅模式时是否隐藏编辑器行号。',
      'zenMode.hideStatusBar': '控制在打开禅模式时是否隐藏工作台底部的状态栏。',
      'zenMode.hideTabs': '控制在打开禅模式时是否隐藏工作台选项卡。',
      'zenMode.restore': '控制在禅模式下退出的窗口是否应还原为禅模式。',
      'zenMode.silentNotifications':
        '控制在禅模式下是否应启用通知请勿打扰模式。如果为 true，则仅弹出错误通知。',
      zenModeConfigurationTitle: '禅模式',
    },
    'vs/workbench/common/configuration': {
      applicationConfigurationTitle: '应用程序',
      securityConfigurationTitle: '安全性',
      workbenchConfigurationTitle: '工作台',
    },
    'vs/workbench/common/contextkeys': {
      activeAuxiliary: '活动辅助面板的标识符',
      activeEditor: '活动编辑器的标识符',
      activeEditorAvailableEditorIds: '可用于活动编辑器的可用编辑器标识符',
      activeEditorCanRevert: '活动编辑器是否可以还原',
      activeEditorCanToggleReadonly: '活动编辑器是否可以在只读或可写之间切换',
      activeEditorGroupEmpty: '活动编辑器组是否为空',
      activeEditorGroupIndex: '活动编辑器组的索引',
      activeEditorGroupLast: '活动编辑器组是否为最后一个组',
      activeEditorGroupLocked: '活动编辑器组是否已锁定',
      activeEditorIsDirty: '活动编辑器是否具有未保存的更改',
      activeEditorIsFirstInGroup: '活动编辑器是否为其组中的第一个编辑器',
      activeEditorIsLastInGroup: '活动编辑器是否是其组中的最后一个编辑器',
      activeEditorIsNotPreview: '活动编辑器是否未在预览模式下',
      activeEditorIsPinned: '活动编辑器是否已固定',
      activeEditorIsReadonly: '活动编辑器是否只读',
      activePanel: '活动面板的标识符',
      activeViewlet: '活动 viewlet 的标识符',
      auxiliaryBarFocus: '辅助栏是否具有键盘焦点',
      auxiliaryBarVisible: '辅助栏是否可见',
      bannerFocused: '键盘焦点是否在横幅上',
      dirtyWorkingCopies: '是否有具有未保存更改的工作副本',
      editorAreaVisible: '编辑器区域是否可见',
      editorIsOpen: '编辑器是否打开',
      editorTabsVisible: '编辑器选项卡是否可见',
      embedderIdentifier: '根据产品服务的嵌入器标识符(如果已定义)',
      focusedView: '具有键盘焦点的视图的标识符',
      groupEditorsCount: '打开的编辑器组数',
      inZenMode: '是否已启用 Zen 模式',
      isCenteredLayout: '是否已启用居中布局',
      isFileSystemResource: '资源是否由文件系统提供程序支持',
      isFullscreen: '窗口是否处于全屏模式',
      multipleEditorGroups: '是否打开了多个编辑器组',
      notificationCenterVisible: '通知中心是否可见',
      notificationFocus: '键盘焦点是否在通知上',
      notificationToastsVisible: '通知 toast 是否可见',
      panelAlignment:
        '面板的对齐方式:“居中”、“向左对齐”、“向右对齐”或“两端对齐”',
      panelFocus: '键盘焦点是否在面板上',
      panelMaximized: '面板是否已最大化',
      panelPosition: '面板的位置，始终为“底部”',
      panelVisible: '面板是否可见',
      remoteName:
        '窗口连接到的远程项的名称；如果未连接到任何远程项，则为空字符串',
      resource: '包含方案和路径的资源的完整值',
      resourceDirname: '资源所在的文件夹的名称',
      resourceExtname: '资源的扩展名',
      resourceFilename: '资源的文件名',
      resourceLangId: '资源的语言标识符',
      resourcePath: '资源的完整路径',
      resourceScheme: '资源的方案',
      resourceSet: '资源是否存在',
      sideBarFocus: '键盘焦点是否在侧栏上',
      sideBarVisible: '侧栏是否可见',
      sideBySideEditorActive: '并行编辑器是否处于活动状态',
      splitEditorsVertically: '编辑器是否垂直拆分',
      statusBarFocused: '键盘焦点是否在状态栏上',
      temporaryWorkspace: '当前工作区的方案来自临时文件系统。',
      textCompareEditorActive: '文本比较编辑器是否处于活动状态',
      textCompareEditorVisible: '文本比较编辑器是否可见',
      virtualWorkspace: '当前工作区的方案来自虚拟文件系统或空字符串。',
      workbenchState:
        '窗口中打开的工作区类型:“空”(无工作区)、“文件夹”(单个文件夹)或“工作区”(多根工作区)',
      workspaceFolderCount: '工作区中根文件夹的数量',
    },
    'vs/workbench/common/editor': {
      builtinProviderDisplayName: '内置',
      configureEditorLargeFileConfirmation: '配置限制',
      openLargeFile: '仍然打开',
      'promptOpenWith.defaultEditor.displayName': '文本编辑器',
    },
    'vs/workbench/common/editor/diffEditorInput': {
      sideBySideLabels: '{0} ↔ {1}',
    },
    'vs/workbench/common/editor/sideBySideEditorInput': {
      sideBySideLabels: '{0} - {1}',
    },
    'vs/workbench/common/editor/textEditorModel': {
      languageAutoDetected: '自动检测到语言 {0}，且其设置为语言模式。',
    },
    'vs/workbench/common/theme': {
      activityBarActiveBackground:
        '活动项的活动栏背景颜色。活动栏显示在最左侧或右侧，并允许在侧栏视图之间切换。',
      activityBarActiveBorder:
        '活动项的活动栏边框颜色。活动栏显示在最左侧或右侧，并允许在侧栏视图之间切换。',
      activityBarActiveFocusBorder:
        '活动项的活动栏焦点边框颜色。活动栏显示在最左侧或右侧，并允许在侧栏视图之间切换。',
      activityBarBackground:
        '活动栏背景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换。',
      activityBarBadgeBackground:
        '活动通知徽章背景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换。',
      activityBarBadgeForeground:
        '活动通知徽章前景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换。',
      activityBarBorder:
        '活动栏分隔侧边栏的边框颜色。活动栏显示在最左侧或最右侧，并可以切换侧边栏的视图。',
      activityBarDragAndDropBorder:
        '拖放活动栏项的反馈颜色。活动栏显示在最左侧或最右侧，并允许在侧边栏视图之间切换。',
      activityBarForeground:
        '活动栏项在活动时的前景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换。',
      activityBarInActiveForeground:
        '活动栏项在非活动时的前景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换。',
      'banner.background': '横幅背景颜色。横幅显示在窗口的标题栏下。',
      'banner.foreground': '横幅前景色。横幅显示在窗口的标题栏下。',
      'banner.iconForeground': '横幅图标颜色。横幅显示在窗口的标题栏下。',
      editorDragAndDropBackground:
        '拖动编辑器时的背景颜色。此颜色应有透明度，以便编辑器内容能透过背景。',
      editorDropIntoPromptBackground:
        '拖动文件时编辑器上显示的文本背景色。此文本通知用户可以按住 Shift 放入编辑器中。',
      editorDropIntoPromptBorder:
        '拖动文件时在编辑器上显示的文本边框颜色。此文本通知用户可以按住 Shift 来拖入编辑器中。',
      editorDropIntoPromptForeground:
        '拖动文件时编辑器上显示的文本前景色。此文本通知用户可以按住 Shift 来拖入编辑器中。',
      editorGroupBorder:
        '将多个编辑器组彼此分隔开的颜色。编辑器组是编辑器的容器。',
      editorGroupEmptyBackground:
        '空编辑器组的背景色。编辑器组是编辑器的容器。',
      editorGroupFocusedEmptyBorder:
        '空编辑器组被聚焦时的边框颜色。编辑组是编辑器的容器。',
      editorGroupHeaderBackground:
        '禁用选项卡 ("workbench.editor.showTabs": false) 时编辑器组标题颜色。编辑器组是编辑器的容器。',
      editorPaneBackground: '居中编辑器布局中左侧与右侧编辑器窗格的背景色。',
      editorTitleContainerBorder:
        '编辑器组标题标头的边框颜色。编辑器组是编辑器的容器。',
      'extensionBadge.remoteBackground': '扩展视图中远程徽标的背景色。',
      'extensionBadge.remoteForeground': '扩展视图中远程徽标的前景色。',
      lastPinnedTabBorder:
        '用于将固定的选项卡与其他选项卡隔开的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      menubarSelectionBackground: '菜单栏中选定菜单项的背景色。',
      menubarSelectionBorder: '菜单栏中所选菜单项的边框颜色。',
      menubarSelectionForeground: '菜单栏中选定菜单项的前景色。',
      notificationCenterBorder: '通知中心的边框颜色。通知从窗口右下角滑入。',
      notificationCenterHeaderBackground:
        '通知中心头部的背景色。通知从窗口右下角滑入。',
      notificationCenterHeaderForeground:
        '通知中心头部的前景色。通知从窗口右下角滑入。',
      notificationToastBorder: '通知横幅的边框颜色。通知从窗口右下角滑入。',
      notificationsBackground: '通知的背景色。通知从窗口右下角滑入。',
      notificationsBorder:
        '通知中心中分隔通知的边框的颜色。通知从窗口右下角滑入。',
      notificationsErrorIconForeground:
        '用于错误通知图标的颜色。通知从窗口右下角滑入。',
      notificationsForeground: '通知的前景色。通知从窗口右下角滑入。',
      notificationsInfoIconForeground:
        '用于信息通知图标的颜色。通知从窗口右下角滑入。',
      notificationsLink: '通知链接的前景色。通知从窗口右下角滑入。',
      notificationsWarningIconForeground:
        '用于警告通知图标的颜色。通知从窗口右下角滑入。',
      panelActiveTitleBorder:
        '活动面板标题的边框颜色。面板显示在编辑器区域下方，并包含输出和集成终端等视图。',
      panelActiveTitleForeground:
        '活动面板的标题颜色。面板显示在编辑器区域下方，并包含输出和集成终端等视图。',
      panelBackground:
        '面板的背景色。面板显示在编辑器区域下方，可包含输出和集成终端等视图。',
      panelBorder:
        '将面板与编辑器隔开的边框的颜色。面板显示在编辑区域下方，包含输出和集成终端等视图。',
      panelDragAndDropBorder:
        '拖放面板标题的反馈颜色。面板显示在编辑器区域的下方，包含输出和集成终端等视图。',
      panelInactiveTitleForeground:
        '非活动面板的标题颜色。面板显示在编辑器区域下方，并包含输出和集成终端等视图。',
      panelInputBorder: '用于面板中输入内容的输入框边框。',
      panelSectionBorder:
        '当多个视图在面板中水平堆叠时使用的面板区域边框颜色。面板显示在编辑器区域下方，其中包含输出和集成终端等视图。面板部分是嵌套在面板中的视图。',
      panelSectionDragAndDropBackground:
        '拖放面板区域的反馈颜色。颜色应具有透明度，以便面板区域仍可以显示出来。面板显示在编辑器区域的下方，包含输出和集成终端等视图。面板部分是嵌套在面板中的视图。',
      panelSectionHeaderBackground:
        '面板区域标题背景色。面板显示在编辑器区域的下方，包含输出和集成终端等视图。面板部分是嵌套在面板中的视图。',
      panelSectionHeaderBorder:
        '当多个视图在面板中垂直堆叠时使用的面板区域标题边框颜色。面板显示在编辑器区域下方，其中包含输出和集成终端等视图。面板部分是嵌套在面板中的视图。',
      panelSectionHeaderForeground:
        '面板区域标题前景色。面板显示在编辑器区域的下方，包含输出和集成终端等视图。面板部分是嵌套在面板中的视图。',
      profileBadgeBackground:
        '配置文件徽章背景色。配置文件徽章显示在活动栏中设置齿轮图标的顶部。',
      profileBadgeForeground:
        '配置文件徽章前景颜色。配置文件徽章显示在活动栏中设置齿轮图标的顶部。',
      sideBarBackground: '侧边栏背景色。侧边栏是资源管理器和搜索等视图的容器。',
      sideBarBorder:
        '侧边栏分隔编辑器的边框颜色。侧边栏包含资源管理器、搜索等视图。',
      sideBarDragAndDropBackground:
        '侧边栏中的部分在拖放时的反馈颜色。此颜色应有透明度，以便侧边栏中的部分仍能透过。侧边栏是资源管理器和搜索等视图的容器。侧边栏部分是嵌套在侧边栏中的视图。',
      sideBarForeground: '侧边栏前景色。侧边栏是资源管理器和搜索等视图的容器。',
      sideBarSectionHeaderBackground:
        '侧边栏部分标题背景色。此侧边栏是资源管理器和搜索等视图的容器。侧边栏部分是在侧边栏中嵌套的视图。',
      sideBarSectionHeaderBorder:
        '侧边栏部分标题边界色。侧栏是类似资源管理器和搜索等视图的容器。侧栏部分是在侧栏中嵌套的视图。',
      sideBarSectionHeaderForeground:
        '侧边栏部分标题前景色。侧栏是类似资源管理器和搜索等视图的容器。侧栏部分是在侧栏中嵌套的视图。',
      sideBarTitleForeground:
        '侧边栏标题前景色。侧边栏是资源管理器和搜索等视图的容器。',
      'sideBySideEditor.horizontalBorder':
        '在编辑器组中上下并排显示时，用于分隔两个编辑器的颜色。',
      'sideBySideEditor.verticalBorder':
        '在编辑器组中左右并排显示时，用于区分两个编辑器的颜色。',
      statusBarBackground:
        '工作区或文件夹打开时状态栏的背景色。状态栏显示在窗口底部。',
      statusBarBorder:
        '状态栏分隔侧边栏和编辑器的边框颜色。状态栏显示在窗口底部。',
      statusBarErrorItemBackground:
        '状态栏错误项的背景颜色。错误项比状态栏中的其他条目更醒目以显示错误条件。状态栏显示在窗口底部。',
      statusBarErrorItemForeground:
        '状态错误项的前景色。错误项比状态栏中的其他条目更醒目以显示错误条件。状态栏显示在窗口底部。',
      statusBarFocusBorder:
        '聚焦于键盘导航时状态栏的边框颜色。状态栏显示在窗口底部。',
      statusBarForeground:
        '工作区或文件夹打开时状态栏的前景色。状态栏显示在窗口底部。',
      statusBarItemActiveBackground:
        '单击时的状态栏项背景色。状态栏显示在窗口底部。',
      statusBarItemCompactHoverBackground:
        '悬停在包含两个悬停的项时的状态栏项背景色。状态栏显示在窗口底部。',
      statusBarItemFocusBorder:
        '聚焦于键盘导航时的状态栏项目边框颜色。状态栏显示在窗口底部。',
      statusBarItemHostBackground: '状态栏上远程指示器的背景色。',
      statusBarItemHostForeground: '状态栏上远程指示器的前景色。',
      statusBarItemHoverBackground:
        '悬停时的状态栏项背景色。状态栏显示在窗口底部。',
      statusBarNoFolderBackground:
        '没有打开文件夹时状态栏的背景色。状态栏显示在窗口底部。',
      statusBarNoFolderBorder:
        '当没有打开文件夹时，用来使状态栏与侧边栏、编辑器分隔的状态栏边框颜色。状态栏显示在窗口底部。',
      statusBarNoFolderForeground:
        '没有打开文件夹时状态栏的前景色。状态栏显示在窗口底部。',
      statusBarProminentItemBackground:
        '状态栏突出显示项的背景颜色。突出显示项比状态栏中的其他条目更醒目以表明其重要性。在命令面板中更改“切换 Tab 键是否移动焦点”可查看示例。状态栏显示在窗口底部。',
      statusBarProminentItemForeground:
        '状态栏突出的项目前景色。突出的项目从其他状态栏条目中脱颖而出, 以表明重要性。从命令调色板中更改 "切换选项卡键移动焦点" 的模式以查看示例。状态栏显示在窗口的底部。',
      statusBarProminentItemHoverBackground:
        '状态栏突出显示项在被悬停时的背景颜色。突出显示项比状态栏中的其他条目更醒目以表明其重要性。在命令面板中更改“切换 Tab 键是否移动焦点”可查看示例。状态栏显示在窗口底部。',
      statusBarWarningItemBackground:
        '状态栏警告项的背景颜色。警告项比状态栏中的其他条目更醒目以显示警告条件。状态栏显示在窗口底部。',
      statusBarWarningItemForeground:
        '状态错误项的前景色。错误项比状态栏中的其他条目更醒目以显示错误条件。状态栏显示在窗口底部。',
      tabActiveBackground:
        '活动选项卡的背景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabActiveBorder:
        '活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组。',
      tabActiveBorderTop:
        '活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组。',
      tabActiveForeground:
        '活动组中活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabActiveModifiedBorder:
        '活动组中已修改的活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabActiveUnfocusedBorder:
        '在失去焦点的编辑器组中的活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组。',
      tabActiveUnfocusedBorderTop:
        '在失去焦点的编辑器组中的活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组。',
      tabBorder:
        '用于将选项卡彼此分隔开的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组。',
      tabHoverBackground:
        '选项卡被悬停时的背景色。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabHoverBorder:
        '选项卡被悬停时用于突出显示的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabHoverForeground:
        '悬停时选项卡的前景色。选项卡是编辑器区域中的编辑器的容器。可在一个编辑器组中打开多个选项卡。可存在多个编辑器组。',
      tabInactiveBackground:
        '非活动选项卡的背景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabInactiveForeground:
        '活动组中非活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabInactiveModifiedBorder:
        '活动组中已修改的非活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabUnfocusedActiveBackground:
        '非焦点组中的活动选项卡背景色。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabUnfocusedActiveForeground:
        '一个失去焦点的编辑器组中的活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabUnfocusedHoverBackground:
        '非焦点组选项卡被悬停时的背景色。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabUnfocusedHoverBorder:
        '非焦点组选项卡被悬停时用于突出显示的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabUnfocusedHoverForeground:
        '悬停时不带焦点的组中的选项卡前景色。选项卡是编辑器区域中的编辑器的容器。可在一个编辑器组中打开多个选项卡。可存在多个编辑器组。',
      tabUnfocusedInactiveBackground:
        '不带焦点的组中处于非活动状态的选项卡的背景色。选项卡是编辑器区域中的编辑器的容器。可在一个编辑器组中打开多个选项卡。可存在多个编辑器组。',
      tabUnfocusedInactiveForeground:
        '在一个失去焦点的组中非活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      tabsContainerBackground:
        '启用选项卡时编辑器组标题的背景颜色。编辑器组是编辑器的容器。',
      tabsContainerBorder:
        '选项卡启用时编辑器组标题的边框颜色。编辑器组是编辑器的容器。',
      titleBarActiveBackground: '窗口处于活动状态时的标题栏背景色。',
      titleBarActiveForeground: '窗口处于活动状态时的标题栏前景色。',
      titleBarBorder: '标题栏边框颜色。',
      titleBarInactiveBackground: '窗口处于非活动状态时的标题栏背景色。',
      titleBarInactiveForeground: '窗口处于非活动状态时的标题栏前景色。',
      unfocusedActiveModifiedBorder:
        '未聚焦组中已修改的活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      unfocusedINactiveModifiedBorder:
        '未聚焦组中已修改的非活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。',
      windowActiveBorder:
        '窗口处于活动状态时用于窗口边框的颜色。当使用自定义标题栏时，仅在 macOS 和 Linux 桌面客户端中受支持。',
      windowInactiveBorder:
        '窗口处于非活动状态时用于窗口边框的颜色。当使用自定义标题栏时，仅在 macOS 和 Linux 桌面客户端中受支持。',
    },
    'vs/workbench/common/views': {
      defaultViewIcon: '默认视图图标。',
      duplicateId: '已注册 ID 为“{0}”的视图',
      'treeView.notRegistered': '未注册 ID 为 "{0}" 的树状视图。',
    },
    'vs/workbench/electron-sandbox/actions/developerActions': {
      configureRuntimeArguments: '配置运行时参数',
      openUserDataFolder: '打开用户数据文件夹',
      reloadWindowWithExtensionsDisabled: '在禁用扩展的情况下重新加载',
      toggleDevTools: '切换开发人员工具',
    },
    'vs/workbench/electron-sandbox/actions/installActions': {
      install: '在 PATH 中安装“{0}”命令',
      shellCommand: 'Shell 命令',
      successFrom: '已成功从 PATH 卸载 Shell 命令“{0}”。',
      successIn: '已成功在 PATH 中安装了 Shell 命令“{0}”。',
      uninstall: '从 PATH 中卸载“{0}”命令',
    },
    'vs/workbench/electron-sandbox/actions/windowActions': {
      close: '关闭窗口',
      closeWindow: '关闭窗口',
      current: '当前窗口',
      miCloseWindow: '关闭窗口(&&W)',
      miZoomIn: '放大(&&Z)',
      miZoomOut: '缩小(&&Z)',
      miZoomReset: '重置缩放(&&R)',
      quickSwitchWindow: '快速切换窗口...',
      switchWindow: '切换窗口...',
      switchWindowPlaceHolder: '选择切换的窗口',
      windowDirtyAriaLabel: '{0}，个具有未保存更改的窗口',
      zoomIn: '放大',
      zoomOut: '缩小',
      zoomReset: '重置缩放',
    },
    'vs/workbench/electron-sandbox/desktop.contribution': {
      'application.shellEnvironmentResolutionTimeout':
        '控制在应用程序尚未从终端启动时放弃解析 shell 环境之前的超时(以秒为单位)。有关详细信息，请参阅我们的 [文档](https://go.microsoft.com/fwlink/?linkid=2149667)。',
      'argv.crashReporterId': '用于关联从此应用实例发送的崩溃报表的唯一 ID。',
      'argv.disableChromiumSandbox':
        '禁用 Chromium 沙盒。当在 Linux 上以提升的权限运行 VS Code 并在 Windows 上的 Applocker 下运行时，这很有用。',
      'argv.disableHardwareAcceleration':
        '禁用硬件加速。仅当遇到图形问题时才更改此选项。',
      'argv.enableCrashReporter':
        '允许禁用崩溃报告；如果更改了值，则应重启应用。',
      'argv.enebleProposedApi':
        '为扩展 ID (如 "vscode.git")的列表启用建议的 API。建议的 API 不稳定，可能随时中断且不发出警告。仅应针对扩展开发和测试目的设置该项。',
      'argv.force-renderer-accessibility':
        '强制渲染器可访问。仅当在 Linux 上使用屏幕阅读器时才更改此设置。在其他平台上，渲染器将自动可访问。如果已启用 editor.accessibilitySupport:，则会自动设置此标志。',
      'argv.forceColorProfile':
        '允许替代要使用的颜色配置文件。如果发现颜色显示不佳，请尝试将此设置为 "srgb" 并重启。',
      'argv.locale': '要使用的显示语言。选取其他语言需要安装关联的语言包。',
      'argv.logLevel':
        '要使用的日志级别。默认值为 “info”。允许的值为 “error”、“warn”、“info”、“debug”、“trace” 和 “off”。',
      closeWhenEmpty:
        '控制在关闭最后一个编辑器时是否关闭整个窗口。此设置仅适用于没有显示文件夹的窗口。',
      dialogStyle: '调整对话框窗口的外观。',
      enableCrashReporterDeprecated:
        '如果此设置为 false，则无论新设置的值如何，都不会发送遥测数据。由于合并到 {0} 设置，目前已弃用。',
      keyboardConfigurationTitle: '键盘',
      mergeAllWindowTabs: '合并所有窗口',
      miExit: '退出(&&X)',
      moveWindowTabToNewWindow: '将窗口选项卡移动到新窗口',
      newTab: '新建窗口标签页',
      newWindowDimensions:
        '控制在已有窗口时新开窗口的尺寸。请注意，此设置对第一个打开的窗口无效。第一个窗口将始终恢复关闭前的大小和位置。',
      openWithoutArgumentsInNewWindow:
        '在另一实例无参启动时，控制是打开新的空窗口或是聚焦到最后运行的实例。\r\n注意，此设置可能会被忽略 (例如，在使用 `--new-window` 或 `--reuse-window` 命令行选项时)。',
      restoreFullscreen:
        '若窗口在处于全屏模式时退出，控制其在恢复时是否还原到全屏模式。',
      restoreWindows:
        '控制在第一次启动后窗口重新打开的方式。如果应用程序已在运行，则此设置不起任何作用。',
      showNextWindowTab: '显示下一个窗口选项卡',
      showPreviousTab: '显示上一个窗口选项卡',
      'telemetry.enableCrashReporting':
        '启用要收集的崩溃报告。这有助于我们提高稳定性。\r\n此选项需重启才可生效。',
      telemetryConfigurationTitle: '遥测',
      titleBarStyle:
        '调整窗口标题栏的外观。在 Linux 和 Windows 上，此设置也会影响应用程序和上下文菜单的外观。更改需要完全重新启动才能应用。',
      toggleWindowTabsBar: '切换窗口选项卡栏',
      'touchbar.enabled': '启用键盘上的 macOS 触控栏按钮 (若可用)。',
      'touchbar.ignored':
        '触摸栏中不应显示的条目的一组标识符(例如 "workbench.action.navigateBack")。',
      'window.clickThroughInactive':
        '启用后，点击非活动窗口后将在激活窗口的同时触发光标之下的元素 (若可点击)。禁用后，点击非活动窗口仅能激活窗口，再次点击才能触发元素。',
      'window.doubleClickIconToClose':
        '如果启用，当双击标题栏中的应用程序图标时，此设置将关闭窗口。该窗口将无法使用图标拖动。仅当 `#window.titleBarStyle#` 设置为 `自定义` 时，此设置才有效。',
      'window.nativeFullScreen':
        '控制是否在 macOS 上使用原生全屏。禁用此设置可禁止 macOS 在全屏时创建新空间。',
      'window.nativeTabs':
        '启用 macOS Sierra 窗口选项卡。请注意，更改在完全重新启动程序后才能生效。同时，开启原生选项卡将禁用自定义标题栏样式。',
      'window.newWindowDimensions.default': '在屏幕中心打开新窗口。',
      'window.newWindowDimensions.fullscreen': '在全屏模式下打开新窗口。',
      'window.newWindowDimensions.inherit':
        '以与上一个活动窗口相同的尺寸打开新窗口。',
      'window.newWindowDimensions.maximized': '打开最大化的新窗口。',
      'window.newWindowDimensions.offset':
        '打开与上次活动窗口具有相同尺寸的新窗口，并带有偏移位置。',
      'window.openWithoutArgumentsInNewWindow.off':
        '聚焦到上一活动的运行实例。',
      'window.openWithoutArgumentsInNewWindow.on': '打开一个新的空窗口。',
      'window.reopenFolders.all':
        '重新打开所有窗口，除非已打开文件夹、工作区或文件(例如从命令行)。',
      'window.reopenFolders.folders':
        '重新打开已打开文件夹或工作区的所有窗口，除非已打开文件夹、工作区或文件(例如从命令行)。',
      'window.reopenFolders.none':
        '从不重新打开窗口。如果文件夹或工作区未打开(例如从命令行)，将出现一个空窗口。',
      'window.reopenFolders.one':
        '重新打开上一个活动窗口，除非已打开文件夹、工作区或文件(例如从命令行)。',
      'window.reopenFolders.preserve':
        '始终重新打开所有窗口。如果打开文件夹或工作区(例如从命令行打开)，它将作为新窗口打开，除非它之前已打开。如果打开文件，则这些文件将在其中一个已还原的窗口中打开。',
      windowConfigurationTitle: '窗口',
      windowControlsOverlay:
        '使用平台提供的窗口控件，而不是基于 HTML 的窗口控件。需要完全重启才能应用更改。',
      zoomLevel:
        '调整窗口的缩放级别。原始大小是 0，每次递增(例如 1)或递减(例如 -1)表示放大或缩小 20%。也可以输入小数以便以更精细的粒度调整缩放级别。',
    },
    'vs/workbench/electron-sandbox/desktop.main': {
      'join.closeStorage': '正在保存 UI 状态',
    },
    'vs/workbench/electron-sandbox/parts/dialogs/dialogHandler': {
      aboutDetail:
        '版本: {0}\r\n提交: {1}\r\n日期: {2}\r\n电子: {3}\r\nElectronBuildId: {4}\r\nChromium: {5}\r\nNode.js: {6}\r\nV8: {7}\r\nOS: {8}',
      copy: '复制(&&C)',
      okButton: '确定',
    },
    'vs/workbench/electron-sandbox/window': {
      'appRootWarning.banner':
        '在更新时，存储在安装文件夹(“{0}”)中的文件可能会被覆盖或删除(不可撤销)，而不会发出警告。',
      closeWindowButtonLabel: '关闭窗口(&&C)',
      closeWindowMessage: '是否确实要关闭窗口?',
      configure: '配置',
      doNotAskAgain: '不再询问',
      downloadArmBuild: '下载',
      exitButtonLabel: '退出(&&E)',
      keychainWriteError: '将登录信息写入密钥链失败，出现错误“{0}”。',
      learnMore: '了解详细信息',
      loaderCycle: 'AMD 模块中存在一个依赖项循环需要解决!',
      loginButton: '登录(&&L)',
      macoseolBannerLearnMore: '了解详细信息',
      macoseolarialabel: '{0}。使用导航键访问横幅操作。',
      macoseolmessage:
        '{1} 上的 {0} 将很快停止接收更新。请考虑升级 macOS 版本。',
      password: '密码',
      proxyAuthRequired: '需要代理身份验证',
      proxyDetail: '代理 {0} 需要用户名和密码。',
      quitButtonLabel: '退出(&&Q)',
      quitMessage: '是否确实要退出?',
      quitMessageMac: '是否确实要退出?',
      rememberCredentials: '记住我的凭据',
      resolveShellEnvironment: '正在解析 shell 环境...',
      restart: '重启',
      runningAsRoot: '不建议以 root 用户身份运行 {0}。',
      runningTranslated:
        '你正在运行 {0} 的仿真版本。为了获得更好的性能，请下载适用于计算机的本机 arm64 版本的 {0} 内部版本。',
      shutdownErrorClose: '意外错误导致无法关闭窗口',
      shutdownErrorDetail: '错误: {0}',
      shutdownErrorLoad: '意外错误导致无法更改工作区',
      shutdownErrorQuit: '意外错误导致无法退出应用程序',
      shutdownErrorReload: '意外错误导致无法重新加载窗口',
      shutdownForceClose: '仍然关闭',
      shutdownForceLoad: '仍然更改',
      shutdownForceQuit: '仍然退出',
      shutdownForceReload: '仍然重新加载',
      shutdownTitleClose: '关闭窗口需要的时间较长...',
      shutdownTitleLoad: '更改工作区需要的时间较长...',
      shutdownTitleQuit: '退出应用程序需要的时间较长...',
      shutdownTitleReload: '重新加载窗口需要的时间较长...',
      troubleshooting: '故障排除指南',
      username: '用户名',
      willShutdownDetail: '以下操作仍在运行: \r\n{0}',
      windowseolBannerLearnMore: '了解详细信息',
      windowseolarialabel: '{0}。使用导航键访问横幅操作。',
      windowseolmessage:
        '{1} 上的 {0} 将很快停止接收更新。请考虑升级 Windows 版本。',
    },
    'vs/workbench/contrib/accessibility/browser/accessibility.contribution': {
      'editor-help': '编辑器辅助功能帮助',
      hoverAccessibleView: '悬停辅助视图',
    },
    'vs/workbench/contrib/accessibility/browser/accessibilityContribution': {
      accessibilityConfigurationTitle: '辅助功能',
      'editor.action.accessibilityHelp': '打开辅助功能帮助',
      'editor.action.accessibleView': '打开辅助视图',
      'verbosity.chat.description':
        '提供有关将焦点放在聊天输入上时如何访问聊天帮助菜单的信息',
      'verbosity.diffEditor.description':
        '提供有关如何在差异编辑器聚焦时在差异编辑器中导航更改的信息',
      'verbosity.interactiveEditor.description':
        '提供有关在以输入为焦点时如何访问内联编辑器聊天辅助功能帮助菜单的信息',
      'verbosity.keybindingsEditor.description':
        '提供有关当焦点在行上时如何在键绑定编辑器中更改键绑定的信息',
      'verbosity.notebook':
        '提供有关在笔记本单元格聚焦时如何聚焦单元格容器或内部编辑器的信息。',
      'verbosity.terminal.description':
        '提供有关在终端处于焦点时如何访问终端辅助功能帮助菜单的信息',
    },
    'vs/workbench/contrib/accessibility/browser/accessibleView': {
      'disable-help-hint':
        '\r\n若要禁用此功能的 `accessibility.verbosity` 提示，请立即按 D。\r\n',
      'exit-tip': '通过 Esc 键退出此菜单。',
      openDoc:
        '\r\n现在按 H 打开一个浏览器窗口, 其中包含有关辅助功能的详细信息。\r\n',
    },
    'vs/workbench/contrib/audioCues/browser/audioCues.contribution': {
      'audioCues.chatRequestSent': '发出聊天请求时播放声音。',
      'audioCues.chatResponsePending': '在响应挂起时循环播放声音。',
      'audioCues.chatResponseReceived': '在收到响应时循环播放声音。',
      'audioCues.debouncePositionChanges': '是否应停用位置更改',
      'audioCues.diffLineDeleted':
        '当焦点移到差异审阅模式下的已删除行或下一/上一个更改时播放声音',
      'audioCues.diffLineInserted':
        '当焦点移动到差异审阅模式下的插入行或下一个/上一个更改时播放声音',
      'audioCues.diffLineModified':
        '当焦点移到差异审阅模式下修改的行或下一/上一个更改时播放声音',
      'audioCues.enabled.auto': '附加屏幕阅读器时，启用音频提示。',
      'audioCues.enabled.off': '禁用音频提示。',
      'audioCues.enabled.on': '启用音频提示。',
      'audioCues.lineHasBreakpoint': '当有效行具有断点时播放声音。',
      'audioCues.lineHasError': '当有效行出现错误时播放声音。',
      'audioCues.lineHasFoldedArea': '当有效行具有可展开的折叠区域时播放声音。',
      'audioCues.lineHasInlineSuggestion': '当有效行具有内联建议时播放声音。',
      'audioCues.lineHasWarning': '当有效行出现警告时播放声音。',
      'audioCues.noInlayHints':
        '尝试读取包含无内嵌提示的内嵌提示的行时播放声音。',
      'audioCues.notebookCellCompleted':
        '在成功完成笔记本单元格执行时播放声音。',
      'audioCues.notebookCellFailed': '在笔记本单元格执行失败时播放声音。',
      'audioCues.onDebugBreak': '当调试程序在断点上停止时播放声音。',
      'audioCues.taskCompleted': '任务完成时播放声音。',
      'audioCues.taskFailed': '任务失败时播放声音(非零退出代码)。',
      'audioCues.terminalCommandFailed':
        '当终端命令失败时播放声音(非零退出代码)。',
      'audioCues.terminalQuickFix': '当终端快速修复可用时播放声音。',
      'audioCues.volume': '音频提示音量百分比(0-100)。',
    },
    'vs/workbench/contrib/audioCues/browser/commands': {
      'audioCues.help': '帮助: 列出音频提示',
      'audioCues.help.placeholder': '选择要播放的音频提示',
      'audioCues.help.settings': '启用/禁用音频提示',
      disabled: '已禁用',
    },
    'vs/workbench/contrib/bulkEdit/browser/bulkEditService': {
      'areYouSureQuiteBulkEdit.detail': '{0} 正在进行。',
      changeWorkspace: '更改工作区(&&W)',
      'changeWorkspace.message': '是否确实要更改工作区?',
      closeTheWindow: '关闭窗口(&&C)',
      'closeTheWindow.message': '是否确实要关闭窗口?',
      fileOperation: '文件操作',
      nothing: '未做编辑',
      quit: '退出(&&Q)',
      'quit.message': '是否确实要退出?',
      'refactoring.autoSave': '控制是否自动保存作为重构一部分的文件',
      reloadTheWindow: '重新加载窗口(&&R)',
      'reloadTheWindow.message': '是否确实要重新加载窗口?',
      'summary.0': '未做编辑',
      'summary.n0': '在 1 个文件中进行了 {0} 次编辑',
      'summary.nm': '在 {1} 个文件中进行了 {0} 次编辑',
      'summary.textFiles':
        '已在 {1} 文件中执行 {0} 文本编辑，且已创建或删除{2} 文件',
      workspaceEdit: '工作区编辑',
    },
    'vs/workbench/contrib/bulkEdit/browser/preview/bulkEdit.contribution': {
      Discard: '放弃重构',
      apply: '应用重构',
      cat: '重构预览',
      continue: '继续(&&C)',
      detail: '按"继续"放弃以前的重构，继续当前重构。',
      groupByFile: '按文件分组更改',
      groupByType: '按类型分组更改',
      overlap: '正在预览另一个重构。',
      panel: '重构预览',
      refactorPreviewViewIcon: '查看重构预览视图的图标。',
      toogleSelection: '切换更改',
    },
    'vs/workbench/contrib/bulkEdit/browser/preview/bulkEditPane': {
      cancel: '放弃',
      'conflict.1': '无法应用重构，因为“{0}”在此期间进行了修改。',
      'conflict.N': '无法应用重构，因为其他 {0} 个文件在此期间进行了修改。',
      create: '创建',
      'edt.title.1': '{0}(重构预览)',
      'edt.title.2': '{0}({1}、重构预览)',
      'edt.title.del': '{0}(删除、重构预览)',
      'empty.msg': '调用代码操作(如重命名操作)，在此处查看其更改的预览。',
      ok: '应用',
      rename: '重命名',
    },
    'vs/workbench/contrib/bulkEdit/browser/preview/bulkEditPreview': {
      default: '其他',
    },
    'vs/workbench/contrib/bulkEdit/browser/preview/bulkEditTree': {
      'aria.create': '创建{0}',
      'aria.createAndEdit': '创建{0}，同时进行文本编辑',
      'aria.del': '行 {0}，正在删除 {1}',
      'aria.delete': '删除 {0}',
      'aria.deleteAndEdit': '正在删除 {0}，同时进行文本编辑',
      'aria.editOnly': '{0}，进行文本编辑',
      'aria.insert': '行{0}，插入{1}',
      'aria.rename': '将 {0} 重命名为 {1}',
      'aria.renameAndEdit': '将{0}重命名为{1}，同时进行文本编辑',
      'aria.replace': '行{0}，用{2}替换{1}',
      bulkEdit: '批量编辑',
      'detail.create': '(正在创建)',
      'detail.del': '(删除)',
      'detail.rename': '(重命名)',
      'rename.label': '{0} → {1}',
      title: '{0} - {1}',
    },
    'vs/workbench/contrib/callHierarchy/browser/callHierarchy.contribution': {
      callHierarchyDirection: '调用层次结构是否显示传入或传出的调用',
      callHierarchyVisible: '当前是否正在显示调用层次结构预览',
      close: '关闭',
      editorHasCallHierarchyProvider: '调用层次结构提供程序是否可用',
      error: '未能显示调用层次结构',
      'no.item': '无结果',
      showIncomingCallsIcons: '“调用层次结构”视图中传入调用的图标。',
      showOutgoingCallsIcon: '“调用层次结构”视图中传出调用的图标。',
      title: '速览调用层次结构',
      'title.incoming': '显示来电',
      'title.outgoing': '显示去电',
      'title.refocus': '重新聚焦调用层次结构',
    },
    'vs/workbench/contrib/callHierarchy/browser/callHierarchyPeek': {
      callFrom: '来自"{0}"的调用',
      callsTo: '"{0}"的调用方',
      'empt.callsFrom': '没有来自 "{0}" 的调用',
      'empt.callsTo': '没有"{0}"的调用方',
      'title.loading': '正在加载...',
    },
    'vs/workbench/contrib/callHierarchy/browser/callHierarchyTree': {
      from: '来自 {0} 的调用',
      to: '{0} 的调用方',
      'tree.aria': '调用层次结构',
    },
    'vs/workbench/contrib/chat/browser/actions/chatAccessibilityHelp': {
      'chat-help-label': '聊天辅助功能帮助',
      'chat.announcement':
        '聊天答复将在他们进入时公布。答复将指示代码块的数量(如果有)，然后指示响应的其余部分。',
      'chat.audioCues':
        '可通过具有 audioCues.chat 前缀的设置更改音频提示。默认情况下，如果请求超过 4 秒，你将听到一个音频提示，指示仍在进行中。',
      'chat.overview':
        '聊天视图由输入框和请求/响应列表组成。输入框用于发出请求，列表用于显示响应。',
      'chat.requestHistory':
        '在输入框中，使用向上和向下箭头导航请求历史记录。编辑输入并使用 Enter 或提交按钮运行新请求。',
      'inline-chat-label': '内联聊天辅助功能帮助',
      'inlineChat.access':
        '可通过代码操作激活，也可直接使用“内联聊天: 启动代码聊天”命令({0})激活。',
      'inlineChat.contextActions':
        '上下文菜单操作可运行以 /fix 或 /explain 为前缀的请求。键入 / 可发现更多现成的命令。',
      'inlineChat.diff':
        '进入差异编辑器后，使用({0})进入评审模式。使用向上和向下箭头导航包含建议的更改的行。',
      'inlineChat.diffNoKb':
        '再次点击选项卡进入具有更改的差异编辑器，并使用“转到下一个差异”命令进入审阅模式。使用向上/向下箭头浏览具有建议更改的行。',
      'inlineChat.explain':
        '当请求以 /explain 为前缀时，响应将解释当前所选内容中的代码，聊天视图将重点显示。',
      'inlineChat.fix':
        '当请求以 /fix 为前缀时，响应将指示当前代码的问题。将呈现差异编辑器，并可通过制表符进行访问。',
      'inlineChat.overview':
        '内联聊天发生在代码编辑器中，并考虑到当前所选内容。对当前编辑器进行更改很有用。例如，修复诊断、文档或重构代码。请注意，AI 生成的代码可能不正确。',
      'inlineChat.requestHistory':
        '在输入框中，使用 {0} 和 {1} 导航请求历史记录。编辑输入并使用 Enter 或“提交”按钮来运行新请求。',
      'inlineChat.toolbar': '使用选项卡访问命令、状态、消息响应等条件部分。',
      'workbench.action.chat.clear':
        '若要清除请求/响应列表，请调用“聊天清除”命令({0})。',
      'workbench.action.chat.clearNoKb':
        '若要清除请求/响应列表，请调用“聊天清除”命令；当前无法通过键绑定触发此命令。',
      'workbench.action.chat.focus':
        '若要将焦点放在聊天请求/响应列表上(可使用向上和向下箭头进行导航)，请调用“将焦点放在聊天上”命令({0})。',
      'workbench.action.chat.focusInput':
        '若要将焦点放在聊天请求的输入框上，请调用“将焦点放在聊天输入上”命令({0})',
      'workbench.action.chat.focusNoKb':
        '若要将焦点放在聊天请求/响应列表上(可使用向上和向下箭头进行导航)，请调用“将焦点放在聊天列表上”命令；当前无法通过键绑定触发此命令。',
      'workbench.action.chat.nextCodeBlock':
        '若要将焦点放在响应中的下一个代码块上，请调用“聊天: 下一个代码块”命令({0})。',
      'workbench.action.chat.nextCodeBlockNoKb':
        '若要将焦点放在响应中的下一个代码块上，请调用“聊天: 下一个代码块”命令；当前无法通过键绑定触发此命令。',
      'workbench.action.interactiveSession.focusInputNoKb':
        '若要将焦点放在聊天请求的输入框上，请调用“将焦点放在聊天输入上”命令；当前无法通过键绑定触发此命令。',
    },
    'vs/workbench/contrib/chat/browser/actions/chatActions': {
      'actions.chat.acceptInput': '接受聊天输入',
      'actions.interactiveSession.focus': '焦点聊天列表',
      'chat.category': '聊天',
      'interactiveSession.clearHistory.label': '清除输入历史记录',
      'interactiveSession.focusInput.label': '焦点聊天输入',
      'interactiveSession.history.delete': '删除',
      'interactiveSession.history.label': '显示历史记录',
      'interactiveSession.history.pick': '选择要还原的聊天会话',
      'interactiveSession.open': '打开编辑器({0})',
    },
    'vs/workbench/contrib/chat/browser/actions/chatClearActions': {
      'interactiveSession.clear.label': '清除',
    },
    'vs/workbench/contrib/chat/browser/actions/chatCodeblockActions': {
      'interactive.copyCodeBlock.label': '复制',
      'interactive.insertCodeBlock.label': '在光标处插入',
      'interactive.insertIntoNewFile.label': '插入到新文件中',
      'interactive.nextCodeBlock.label': '下一个代码块',
      'interactive.previousCodeBlock.label': '上一个代码块',
      'interactive.runInTerminal.label': '在终端中运行',
    },
    'vs/workbench/contrib/chat/browser/actions/chatCopyActions': {
      'interactive.copyAll.label': '全部复制',
      'interactive.copyItem.label': '复制',
    },
    'vs/workbench/contrib/chat/browser/actions/chatExecuteActions': {
      'interactive.cancel.label': '取消',
      'interactive.submit.label': '提交',
    },
    'vs/workbench/contrib/chat/browser/actions/chatImportExport': {
      'chat.export.label': '导出会话',
      'chat.file.label': '聊天会话',
      'chat.import.label': '导入会话',
    },
    'vs/workbench/contrib/chat/browser/actions/chatMoveActions': {
      'chat.openInEditor.label': '在编辑器中打开会话',
      'interactiveSession.openInEditor.label': '在编辑器中打开会话',
      'interactiveSession.openInSidebar.label': '在边栏中打开会话',
    },
    'vs/workbench/contrib/chat/browser/actions/chatQuickInputActions': {
      askQuickQuestion: '快速提问',
      askabot: '向 {0} 提问',
    },
    'vs/workbench/contrib/chat/browser/actions/chatTitleActions': {
      'chat.remove.label': '移除请求和响应',
      'interactive.helpful.label': '有用',
      'interactive.insertIntoNotebook.label': '插入笔记本',
      'interactive.unhelpful.label': '无用',
    },
    'vs/workbench/contrib/chat/browser/chat.contribution': {
      chat: '聊天',
      chatAccessibleView: '聊天辅助视图',
      'interactiveSession.editor.fontFamily': '控制聊天代码块中的字体系列。',
      'interactiveSession.editor.fontSize':
        '控制聊天代码块中的字号(以像素为单位)。',
      'interactiveSession.editor.fontWeight': '控制聊天代码块中的字体粗细。',
      'interactiveSession.editor.lineHeight':
        '聊天代码块中的行高(以像素为单位)。使用 0 可根据字号计算行高。',
      'interactiveSession.editor.wordWrap': '控制行是否应整合在聊天代码块中。',
      interactiveSessionConfigurationTitle: '聊天',
    },
    'vs/workbench/contrib/chat/browser/chatContributionServiceImpl': {
      'chat.viewContainer.label': '聊天',
      'vscode.extension.contributes.interactiveSession':
        '为交互式会话提供程序做出贡献',
      'vscode.extension.contributes.interactiveSession.icon':
        '此交互式会话提供程序的图标。',
      'vscode.extension.contributes.interactiveSession.id':
        '此交互式会话提供程序的唯一标识符。',
      'vscode.extension.contributes.interactiveSession.label':
        '此交互式会话提供程序的显示名称。',
      'vscode.extension.contributes.interactiveSession.when':
        '条件必须为 true 才能启用此交互式会话提供程序。',
    },
    'vs/workbench/contrib/chat/browser/chatEditorInput': {
      chatEditorName: '聊天',
    },
    'vs/workbench/contrib/chat/browser/chatInputPart': {
      'actions.chat.accessibiltyHelp':
        '聊天输入，键入内容进行提问或者键入 / 来查找主题，按 Enter 可发送请求。使用 {0} 查看聊天辅助功能帮助。',
      chatInput: '聊天输入',
      'chatInput.accessibilityHelpNoKb':
        '聊天输入，在此处键入代码，然后按 Enter 运行。有关详细信息，请使用“聊天辅助功能帮助”命令。',
    },
    'vs/workbench/contrib/chat/browser/chatListRenderer': {
      chat: '聊天',
      'chat.codeBlock.toolbar': '代码块工具栏',
      'chat.codeBlock.toolbarVerbose': '可通过选项卡访问的代码块的工具栏',
      'chat.codeBlockHelp': '代码块',
      'chat.codeBlockLabel': '代码块 {0}',
      multiCodeBlock: '{0} 个代码块: {1}',
      singleCodeBlock: '1 个代码块: {0}',
    },
    'vs/workbench/contrib/chat/browser/chatWidget': {
      clear: '清除会话',
    },
    'vs/workbench/contrib/chat/browser/contrib/chatInputEditorContrib': {
      'interactive.input.placeholderNoCommands': '提问',
      'interactive.input.placeholderWithCommands': '提问或键入主题的 "/"',
    },
    'vs/workbench/contrib/chat/common/chatColors': {
      'chat.requestBackground': '聊天请求的背景色。',
      'chat.requestBorder': '聊天请求的边框颜色。',
    },
    'vs/workbench/contrib/chat/common/chatContextKeys': {
      chatRequest: '聊天项是一个请求',
      chatResponse: '聊天项是一个响应。',
      hasChatProvider: '注册某些聊天提供程序时为 True。',
      inChat: '当焦点位于聊天小组件中时为 true，否则为 false。',
      inInteractiveInput: '当焦点位于聊天输入中时为 true，否则为 false。',
      interactiveInputHasText: '如果聊天输入包含文本，则为 True。',
      interactiveSessionRequestInProgress: '当前请求仍在进行时为 True。',
      interactiveSessionResponseHasProviderId:
        '当提供程序已向此响应分配 ID 时为 True。',
      interactiveSessionResponseVote:
        '对响应投赞成票后，其设置为 "up"。投反对票时，设置为 "down"。否则为空字符串。',
    },
    'vs/workbench/contrib/chat/common/chatServiceImpl': {
      emptyResponse: '提供程序返回了 null 响应',
    },
    'vs/workbench/contrib/chat/common/chatViewModel': {
      thinking: '思考中',
    },
    'vs/workbench/contrib/codeActions/browser/codeActionsContribution': {
      codeActionsOnSave: '要在保存时运行的代码操作种类。',
      'codeActionsOnSave.fixAll': '控制是否应在文件保存时运行自动修复操作。',
      'codeActionsOnSave.generic': '控制是否应在文件保存时运行"{0}"操作。',
    },
    'vs/workbench/contrib/codeActions/common/codeActionsExtensionPoint': {
      'contributes.codeActions': '配置资源要使用的编辑器。',
      'contributes.codeActions.description': '代码操作的说明。',
      'contributes.codeActions.kind': '贡献代码操作的"代码操作种类"。',
      'contributes.codeActions.languages': '启用代码操作的语言模式。',
      'contributes.codeActions.title': 'UI 中使用的代码操作的标签。',
    },
    'vs/workbench/contrib/codeActions/common/documentationExtensionPoint': {
      'contributes.documentation': '贡献的文档。',
      'contributes.documentation.refactoring': '为重构提供了文档。',
      'contributes.documentation.refactoring.command': '命令已执行。',
      'contributes.documentation.refactoring.title': 'UI 中使用的文档的标签。',
      'contributes.documentation.refactoring.when': '当子句。',
      'contributes.documentation.refactorings': '为重构提供了文档。',
    },
    'vs/workbench/contrib/codeEditor/browser/accessibility/accessibility': {
      accessibilityHelpTitle: '辅助功能帮助',
      auto_off: '编辑器被配置为自动检测是否附加了屏幕阅读器，当前未检测到。',
      auto_on: '编辑器自动检测到已附加屏幕阅读器。',
      auto_unknown:
        '编辑器被配置为使用平台 API 以检测是否附加了屏幕阅读器，但当前运行时不支持此功能。',
      changeConfigToOnMac:
        '要配置编辑器对屏幕阅读器进行永久优化，请按 Command+E。',
      changeConfigToOnWinLinux:
        '要配置编辑器对屏幕阅读器进行永久优化，请按 Ctrl+E。',
      configuredOff: '编辑器被配置为不对屏幕阅读器的使用进行优化。',
      configuredOn:
        '编辑器配置为针对屏幕阅读器的使用情况进行永久优化 - 可以通过“切换屏幕阅读器辅助功能模式”命令或编辑设置“editor.accessibilitySupport”来更改此设置',
      emergencyConfOn: '现在将设置 "editor.accessibilitySupport" 更改为 "on"。',
      introMsg: '感谢试用 VS Code 的辅助功能选项。',
      openDocMac:
        '按 Command+H 以打开浏览器窗口，其中包含更多有关 VS Code 辅助功能的信息。',
      openDocWinLinux:
        '按 Ctrl+H 以打开浏览器窗口，其中包含更多有关 VS Code 辅助功能的信息。',
      openingDocs: '正在打开 VS Code 辅助功能文档页面。',
      outroMsg: '你可以按 Esc 或 Shift+Esc 消除此工具提示并返回到编辑器。',
      status: '状态:',
      tabFocusModeOffMsg:
        '在当前编辑器中按 Tab 将插入制表符。通过按 {0} 切换此行为。',
      tabFocusModeOffMsgNoKb:
        '在当前编辑器中按 Tab 会插入制表符。当前无法通过键绑定触发命令 {0}。',
      tabFocusModeOnMsg:
        '在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。通过按 {0} 切换此行为。',
      tabFocusModeOnMsgNoKb:
        '在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。当前无法通过按键绑定触发命令 {0}。',
      toggleScreenReaderMode: '切换屏幕阅读器辅助功能模式',
    },
    'vs/workbench/contrib/codeEditor/browser/diffEditorHelper': {
      hintTimeout: '差异算法已提前停止(在 {0} ms 之后)',
      hintWhitespace: '显示空白差异',
      removeTimeout: '删除限制',
    },
    'vs/workbench/contrib/codeEditor/browser/find/simpleFindWidget': {
      ariaSearchNoInput: '输入搜索输入',
      ariaSearchNoResult: '为“{1}”找到 {0}',
      ariaSearchNoResultEmpty: '已找到 {0}',
      ariaSearchNoResultWithLineNumNoCurrentMatch: '为“{1}”找到 {0}',
      'label.closeButton': '关闭',
      'label.find': '查找',
      'label.nextMatchButton': '下一个匹配项',
      'label.previousMatchButton': '上一个匹配项',
      'placeholder.find': '查找(⇅ 历史记录)',
    },
    'vs/workbench/contrib/codeEditor/browser/inspectEditorTokens/inspectEditorTokens':
      {
        inspectEditorTokens: '开发人员: 检查编辑器标记和作用域',
        'inspectTMScopesWidget.loading': '正在加载...',
      },
    'vs/workbench/contrib/codeEditor/browser/inspectKeybindings': {
      'workbench.action.inspectKeyMap': '检查密钥映射',
      'workbench.action.inspectKeyMapJSON': '检查按键映射(JSON)',
    },
    'vs/workbench/contrib/codeEditor/browser/languageConfigurationExtensionPoint':
      {
        formatError: '{0}: 格式无效，应为 JSON 对象。',
        parseErrors: '错误分析 {0}: {1}',
        'schema.autoCloseBefore':
          '在自动闭合设置为 "languageDefined" 时，定义使括号或引号自动闭合的光标后面的字符。通常是不会成为表达式开头的一组字符。',
        'schema.autoClosingPairs':
          '定义括号对。当输入左方括号时，将自动插入右方括号。',
        'schema.autoClosingPairs.notIn': '定义禁用了自动配对的作用域列表。',
        'schema.blockComment.begin': '作为块注释开头的字符序列。',
        'schema.blockComment.end': '作为块注释结尾的字符序列。',
        'schema.blockComments': '定义块注释的标记方式。',
        'schema.brackets':
          '定义增加或减少缩进的括号符号。当方括号对着色已启用且未定义{0}时，这还将定义按其嵌套级别着色的括号对。',
        'schema.closeBracket': '右方括号字符或字符串序列。',
        'schema.colorizedBracketPairs':
          '定义在启用括号对着色时由其嵌套级别着色的括号对。此处包含的任何不包含在{0}中的括号都将自动包含在{0}中。',
        'schema.comments': '定义注释符号',
        'schema.folding': '此语言的折叠设置。',
        'schema.folding.markers':
          '语言特定的折叠标记。例如，"#region" 与 "#endregion"。开始与结束标记的正则表达式需设计得效率高，因其将对每一行的内容进行测试。',
        'schema.folding.markers.end':
          '结束标记的正则表达式模式。其应以 "^" 开始。',
        'schema.folding.markers.start':
          '开始标记的正则表达式模式。其应以 "^" 开始。',
        'schema.folding.offSide':
          '若一种语言使用缩进表示其代码块，它将遵循越位规则 (off-side rule)。若设置此项，空白行将属于其之后的代码块。',
        'schema.indentationRules': '语言的缩进设置。',
        'schema.indentationRules.decreaseIndentPattern':
          '如果某行文本匹配此模式，则其后所有行都应被取消缩进一次 (直到匹配其他规则)。',
        'schema.indentationRules.decreaseIndentPattern.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.indentationRules.decreaseIndentPattern.flags':
          'decreaseIndentPattern 的正则表达式标志。',
        'schema.indentationRules.decreaseIndentPattern.pattern':
          'decreaseIndentPattern 的正则表达式模式。',
        'schema.indentationRules.increaseIndentPattern':
          '如果一行文本匹配此模式，则之后所有内容都应被缩进一次(直到匹配其他规则)。',
        'schema.indentationRules.increaseIndentPattern.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.indentationRules.increaseIndentPattern.flags':
          'increaseIndentPattern 的正则表达式标志。',
        'schema.indentationRules.increaseIndentPattern.pattern':
          'increaseIndentPattern 的正则表达式模式。',
        'schema.indentationRules.indentNextLinePattern':
          '如果某一行匹配此模式，那么仅此行之后的**下一行**应缩进一次。',
        'schema.indentationRules.indentNextLinePattern.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.indentationRules.indentNextLinePattern.flags':
          'indentNextLinePattern 的正则表达式标志。',
        'schema.indentationRules.indentNextLinePattern.pattern':
          'indentNextLinePattern 的正则表达式模式。',
        'schema.indentationRules.unIndentedLinePattern':
          '如果某一行匹配此模式，那么不应更改此行的缩进，且不应针对其他规则对其进行计算。',
        'schema.indentationRules.unIndentedLinePattern.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.indentationRules.unIndentedLinePattern.flags':
          'unIndentedLinePattern 的正则表达式标志。',
        'schema.indentationRules.unIndentedLinePattern.pattern':
          'unIndentedLinePattern 的正则表达式模式。',
        'schema.lineComment': '作为行注释开头的字符序列。',
        'schema.onEnterRules': '按 Enter 时要评估的语言规则。',
        'schema.onEnterRules.action': '要执行的操作。',
        'schema.onEnterRules.action.appendText':
          '描述要追加到新行后和缩进后的文本。',
        'schema.onEnterRules.action.indent': '描述如何处理缩进',
        'schema.onEnterRules.action.indent.indent':
          '(相对于上一行的缩进)插入一次新行和缩进。',
        'schema.onEnterRules.action.indent.indentOutdent':
          '插入两个新行: \r\n - 第一行缩进并将包含游标\r\n - 第二行在同一缩进级别',
        'schema.onEnterRules.action.indent.none':
          '插入新行并复制上一行的缩进。',
        'schema.onEnterRules.action.indent.outdent':
          '(相对于上一行的缩进)插入一次新行和凸排。',
        'schema.onEnterRules.action.removeText':
          '描述要从新行的缩进中移除的字符数。',
        'schema.onEnterRules.afterText':
          '只有游标后的文本匹配此正则表达式时才会执行此规则。',
        'schema.onEnterRules.afterText.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.onEnterRules.afterText.flags': 'afterText 的正则表达式标志。',
        'schema.onEnterRules.afterText.pattern': 'afterText 的正则表达式模式。',
        'schema.onEnterRules.beforeText':
          '只有游标前的文本匹配此正则表达式时才会执行此规则。',
        'schema.onEnterRules.beforeText.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.onEnterRules.beforeText.flags': 'beforeText 的正则表达式标志。',
        'schema.onEnterRules.beforeText.pattern':
          'beforeText 的正则表达式模式。',
        'schema.onEnterRules.previousLineText':
          '只有该行上方的文本匹配此正则表达式时才会执行此规则。',
        'schema.onEnterRules.previousLineText.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.onEnterRules.previousLineText.flags':
          'previousLineText 的正则表达式标志。',
        'schema.onEnterRules.previousLineText.pattern':
          'previousLineText 的正则表达式模式。',
        'schema.openBracket': '左方括号字符或字符串序列。',
        'schema.surroundingPairs': '定义可用于包围所选字符串的括号对。',
        'schema.wordPattern':
          '定义一下在编程语言里什么东西会被当做是一个单词。',
        'schema.wordPattern.flags': '用于匹配文本的正则表达式标志。',
        'schema.wordPattern.flags.errorMessage':
          '必须匹配模式“/^([gimuy]+)$/”。',
        'schema.wordPattern.pattern': '用于匹配文本的正则表达式模式。',
      },
    'vs/workbench/contrib/codeEditor/browser/largeFileOptimizations': {
      largeFile:
        '{0}: 为减少内存使用并避免卡顿或崩溃，我们已关闭对此大型文件内容的标记、折行和折叠。',
      removeOptimizations: '强制启用功能',
      reopenFilePrompt: '请重新打开文件以使此设置生效。',
    },
    'vs/workbench/contrib/codeEditor/browser/outline/documentSymbolsOutline': {
      document: '文档符号',
    },
    'vs/workbench/contrib/codeEditor/browser/outline/documentSymbolsTree': {
      '1.problem': '此元素存在 1 个问题',
      Array: '数组',
      Boolean: '布尔值',
      Class: '类',
      Constant: '常数',
      Constructor: '构造函数',
      Enum: '枚举',
      EnumMember: '枚举成员',
      Event: '事件',
      Field: '字段',
      File: '文件',
      Function: '函数',
      Interface: '接口',
      Key: '键',
      Method: '方法',
      Module: '模块',
      'N.problem': '此元素存在 {0} 个问题',
      Namespace: '命名空间',
      Null: 'Null',
      Number: '数字',
      Object: '对象',
      Operator: '运算符',
      Package: '包',
      Property: '属性',
      String: '字符串',
      Struct: '结构',
      TypeParameter: '类型参数',
      Variable: '变量',
      'deep.problem': '包含存在问题的元素',
      'title.template': '{0} ({1})',
    },
    'vs/workbench/contrib/codeEditor/browser/quickaccess/gotoLineQuickAccess': {
      gotoLine: '转到行/列...',
      gotoLineQuickAccess: '转到行/列',
      gotoLineQuickAccessPlaceholder:
        '键入要转到的行号和可选列(例如，42:5表示第 42 行和第 5 列)。',
    },
    'vs/workbench/contrib/codeEditor/browser/quickaccess/gotoSymbolQuickAccess':
      {
        empty: '无匹配项',
        gotoSymbol: '转到编辑器中的符号...',
        gotoSymbolByCategoryQuickAccess: '按类别转到编辑器中的符号',
        gotoSymbolQuickAccess: '转到编辑器中的符号',
        gotoSymbolQuickAccessPlaceholder: '键入要转到的符号的名称。',
        miGotoSymbolInEditor: '转到编辑器中的符号(&&S)…',
      },
    'vs/workbench/contrib/codeEditor/browser/saveParticipants': {
      'codeAction.apply': '正在应用代码操作“{0}”。',
      codeaction: '快速修复',
      'codeaction.get2': '从 "{0}" ([configure]({1}))中获取代码操作。',
      formatting2: '正在运行 "{0}" 格式化程序([configure]({1}))。',
    },
    'vs/workbench/contrib/codeEditor/browser/toggleColumnSelection': {
      miColumnSelection: '列选择模式(&&S)',
      toggleColumnSelection: '切换列选择模式',
    },
    'vs/workbench/contrib/codeEditor/browser/toggleMinimap': {
      miMinimap: '缩略图(&&M)',
      toggleMinimap: '切换到迷你地图',
    },
    'vs/workbench/contrib/codeEditor/browser/toggleMultiCursorModifier': {
      miMultiCursorAlt: '切换为“Alt+单击”进行多光标功能',
      miMultiCursorCmd: '切换为“Cmd+单击”进行多光标功能',
      miMultiCursorCtrl: '切换为“Ctrl+单击”进行多光标功能',
      toggleLocation: '切换多行修改键',
    },
    'vs/workbench/contrib/codeEditor/browser/toggleRenderControlCharacter': {
      miToggleRenderControlCharacters: '显示控制字符(&&C)',
      toggleRenderControlCharacters: '切换控制字符',
    },
    'vs/workbench/contrib/codeEditor/browser/toggleRenderWhitespace': {
      miToggleRenderWhitespace: '显示空格(&&R)',
      toggleRenderWhitespace: '切换呈现空格',
    },
    'vs/workbench/contrib/codeEditor/browser/toggleWordWrap': {
      editorWordWrap: '编辑器当前是否正在使用自动换行。',
      miToggleWordWrap: '自动换行(&&W)',
      'toggle.wordwrap': '查看: 切换自动换行',
      unwrapMinified: '在此文件禁用折行',
      wrapMinified: '在此文件启用折行',
    },
    'vs/workbench/contrib/codeEditor/browser/untitledTextEditorHint/untitledTextEditorHint':
      {
        message:
          '[[选择语言]]或[[填充模版]]或[[打开其他编辑器]]以开始使用。\r\n开始键入以关闭或[[不再显示]]此信息。',
      },
    'vs/workbench/contrib/codeEditor/electron-sandbox/selectionClipboard': {
      'actions.pasteSelectionClipboard': '粘贴选择剪贴板',
    },
    'vs/workbench/contrib/codeEditor/electron-sandbox/startDebugTextMate': {
      startDebugTextMate: '启动文本配对语法语法日志记录',
    },
    'vs/workbench/contrib/commands/common/commands.contribution': {
      runCommands: '运行命令',
      'runCommands.commands': '要运行的命令',
      'runCommands.description': '运行多个命令',
      'runCommands.invalidArgs':
        '"runCommands" 收到类型错误的参数。请查看传递给该命令的参数。',
      'runCommands.noCommandsToRun':
        '"runCommands" 尚未收到要运行的命令。忘记在 "runCommands" 参数中传递命令了吗?',
    },
    'vs/workbench/contrib/comments/browser/commentColors': {
      commentThreadActiveRangeBackground: '当前选定或悬停注释范围的背景色。',
      commentThreadActiveRangeBorder: '当前选定或悬停注释范围的边框颜色。',
      commentThreadRangeBackground: '注释范围的背景色。',
      commentThreadRangeBorder: '注释范围的边框颜色。',
      resolvedCommentBorder: '已解析评论的边框和箭头颜色。',
      resolvedCommentIcon: '解析批注的图标颜色。',
      unresolvedCommentBorder: '未解析评论的边框和箭头颜色。',
      unresolvedCommentIcon: '未解析批注的图标颜色。',
    },
    'vs/workbench/contrib/comments/browser/commentGlyphWidget': {
      editorGutterCommentGlyphForeground: '编辑器装订线中评论字形的装饰颜色。',
      editorGutterCommentRangeForeground:
        '用于标注范围的编辑器装订线装饰颜色。此颜色应不透明。',
      editorGutterCommentUnresolvedGlyphForeground:
        '编辑器装订线修饰颜色，用于注释未解析注释线程的字形。',
      'editorOverviewRuler.commentForeground':
        '解析批注的编辑器概述标尺修饰颜色。此颜色应为不透明。',
      'editorOverviewRuler.commentUnresolvedForeground':
        '编辑器概述未解析注释的标尺修饰颜色。此颜色应为不透明。',
    },
    'vs/workbench/contrib/comments/browser/commentNode': {
      commentAddReactionDefaultError: '未能删除评论回应',
      commentAddReactionError: '未能删除评论回应: {0}。',
      commentDeleteReactionDefaultError: '未能删除评论回应',
      commentDeleteReactionError: '未能删除评论回应: {0}。',
      commentToggleReaction: '切换反应',
      commentToggleReactionDefaultError: '切换注释反应失败',
      commentToggleReactionError: '切换注释反应失败: {0}。',
    },
    'vs/workbench/contrib/comments/browser/commentReply': {
      newComment: '键入新注释',
      reply: '回复...',
    },
    'vs/workbench/contrib/comments/browser/comments.contribution': {
      'comments.maxHeight': '控制注释小组件是滚动还是展开。',
      'comments.openPanel.deprecated':
        '此设置已弃用，取而代之的是 `comments.openView`。',
      'comments.openView': '控制评论视图应何时打开。',
      'comments.openView.file':
        '批注视图将在具有注释的文件处于活动状态时打开。',
      'comments.openView.firstFile':
        '如果在此会话期间尚未打开注释视图，则它将在带注释文件处于活动状态的会话期间首次打开。',
      'comments.openView.never': '注释视图永远不会打开。',
      'comments.visible':
        '控制具有注释范围和注释的编辑器中注释栏和注释线程的可见性。注释仍可通过“注释”视图访问，并会导致以运行命令 “Comments: Toggle Editor Commenting” 切换注释的相同方式切换打开注释。',
      commentsConfigurationTitle: '评论',
      openComments: '控制评论面板应何时打开。',
      useRelativeTime: '确定是否在注释时间戳中使用相对时间，(例如"1 天前")。',
    },
    'vs/workbench/contrib/comments/browser/commentsController': {
      hasCommentingRange: '活动光标处的位置是否具有评论范围',
      pickCommentService: '选择 "注释提供程序"',
    },
    'vs/workbench/contrib/comments/browser/commentsEditorContribution': {
      'comments.addCommand': '添加对当前所选内容的注释',
      'comments.collapseAll': '折叠所有注释',
      'comments.expandAll': '展开所有注释',
      'comments.expandUnresolved': '展开未解决注释',
      'comments.toggleCommenting': '切换编辑器注释',
      nextCommentThreadAction: '转到下一条评论串',
      previousCommentThreadAction: '转到上一个评论线程',
    },
    'vs/workbench/contrib/comments/browser/commentService': {
      hasCommentingProvider: '打开的工作区是否具有注释或注释范围。',
    },
    'vs/workbench/contrib/comments/browser/commentsTreeViewer': {
      commentCount: '1 条注释',
      commentLine: '[Ln {0}]',
      commentRange: '[Ln {0}-{1}]',
      'comments.view.title': '注释',
      commentsCount: '{0} 条注释',
      image: '图片',
      imageWithLabel: '图片: {0}',
      lastReplyFrom: '来自 {0} 的最新回复',
    },
    'vs/workbench/contrib/comments/browser/commentsView': {
      collapseAll: '全部折叠',
      'comments.filter.ariaLabel': '筛选注释',
      'comments.filter.placeholder': '筛选器(例如文本、作者)',
      expandAll: '全部展开',
      resourceWithCommentLabel:
        '{3} 中第 {1} 行第 {2} 列中来自 ${0} 的注释，源: {4}',
      resourceWithCommentLabelFile: '来自 {1} 中 $ {0} 的注释，源: {2}',
      resourceWithCommentThreadsLabel: '{0} 中的注释，完整路径: {1}',
      rootCommentsLabel: '当前工作区的注释',
      'showing filtered results': '正在显示第 {0} 页(共 {1} 页)',
      totalUnresolvedComments: '{0} 未解析的注释',
    },
    'vs/workbench/contrib/comments/browser/commentsViewActions': {
      comments: '注释',
      commentsClearFilterText: '清除筛选器文本',
      focusCommentsFilter: '焦点注释筛选器',
      focusCommentsList: '焦点注释视图',
      resolved: '显示已解决',
      'toggle resolved': '切换已解决注释',
      'toggle unresolved': '切换未解决注释',
      unresolved: '显示未解决',
    },
    'vs/workbench/contrib/comments/browser/commentThreadBody': {
      commentThreadAria: '使用 {0} 评论。{1} 评论线程。',
      'commentThreadAria.document':
        '在整个文档上有 {0} 条注释的注释线程。 {1}。',
      'commentThreadAria.withRange':
        '通过 {2} 注释行 {1} 上具有 {0} 注释的线程。{3}。',
    },
    'vs/workbench/contrib/comments/browser/commentThreadHeader': {
      collapseIcon: '用于折叠审阅注释的图标。',
      'label.collapse': '折叠',
      startThread: '开始讨论',
    },
    'vs/workbench/contrib/comments/browser/reactionsAction': {
      'comment.reactionLabelMany': '{0}{1} 个带有 {2} 的回应',
      'comment.reactionLabelNone': '{0}{1} 个回应',
      'comment.reactionLabelOne': '{0}1 个带有 {1} 的回应',
      'comment.toggleableReaction': '切换回应，',
      pickReactions: '选取反应...',
    },
    'vs/workbench/contrib/comments/common/commentContextKeys': {
      comment: '注释的上下文值',
      commentController: '与注释线程关联的注释控制器 ID',
      commentIsEmpty: '在注释没有输入时设置',
      commentThread: '注释线程的上下文值',
      commentThreadIsEmpty: '在注释线程没有注释时设置',
    },
    'vs/workbench/contrib/comments/common/commentModel': {
      noComments: '此工作区中尚无注释。',
    },
    'vs/workbench/contrib/customEditor/common/contributedCustomEditors': {
      builtinProviderDisplayName: '内置',
    },
    'vs/workbench/contrib/customEditor/common/customEditor': {
      'context.customEditor': '当前处于活动状态的自定义编辑器的 viewType。',
    },
    'vs/workbench/contrib/customEditor/common/extensionPoint': {
      'contributes.customEditors': '提供的自定义编辑器。',
      'contributes.displayName':
        '自定义编辑器的用户可读名称。当选择要使用的编辑器时，向用户显示此名称。',
      'contributes.priority':
        '控制在用户打开文件时是否自动启用自定义编辑器。用户可能会使用 "workbench.editorAssociations" 设置覆盖此项。',
      'contributes.priority.default':
        '在用户打开资源时自动使用此编辑器，前提是没有为该资源注册其他默认的自定义编辑器。',
      'contributes.priority.option':
        '在用户打开资源时不会自动使用此编辑器，但用户可使用 `Reopen With` 命令切换到此编辑器。',
      'contributes.selector': '为其启用了自定义编辑器的一组 glob。',
      'contributes.selector.filenamePattern': '为其启用了自定义编辑器的 glob。',
      'contributes.viewType':
        '自定义编辑器的标识符。它在所有自定义编辑器中都必须是唯一的，因此建议将扩展 ID 作为 "viewType" 的一部分包括在内。在使用 "vscode.registerCustomEditorProvider" 和在 "onCustomEditor:${id}" [激活事件](https://code.visualstudio.com/api/references/activation-events)中注册自定义编辑器时，使用 "viewType"。',
    },
    'vs/workbench/contrib/debug/browser/baseDebugView': {
      'debug.lazyButton.tooltip': '单击以展开',
    },
    'vs/workbench/contrib/debug/browser/breakpointEditorContribution': {
      addBreakpoint: '添加断点',
      addConditionalBreakpoint: '添加条件断点...',
      addLogPoint: '添加记录点...',
      breakpoint: '断点',
      breakpointHasConditionDisabled:
        '此{0}的{1}将在删除后丢失。请考虑仅启用此{0}。',
      breakpointHasConditionEnabled:
        '此{0}的{1}将在删除后丢失。请考虑仅禁用此{0}。',
      condition: '条件',
      'debugIcon.breakpointCurrentStackframeForeground':
        '当前断点堆栈帧的图标颜色。',
      'debugIcon.breakpointDisabledForeground': '禁用断点的图标颜色。',
      'debugIcon.breakpointForeground': '断点图标颜色。',
      'debugIcon.breakpointStackframeForeground': '所有断点堆栈帧的图标颜色。',
      'debugIcon.breakpointUnverifiedForeground': '未验证断点的图标颜色。',
      disable: '禁用(&&D)',
      disableBreakpoint: '禁用{0}',
      disableBreakpointOnLine: '禁用行断点',
      disableInlineColumnBreakpoint: '禁用第 {0} 列的内联断点',
      disableLogPoint: '{0} {1}',
      editBreakpoint: '编辑 {0}…',
      editBreakpoints: '编辑断点',
      editInlineBreakpointOnColumn: '编辑第 {0} 列的内联断点',
      editLineBreakpoint: '编辑行断点',
      enable: '启用(&&E)',
      enableBreakpoint: '启用 {0}',
      enableBreakpointOnLine: '启用行断点',
      enableBreakpoints: '启用第 {0} 列的内联断点',
      enableDisableBreakpoints: '启用/禁用断点',
      logPoint: '记录点',
      message: '消息',
      removeBreakpoint: '删除 {0}',
      removeBreakpoints: '删除断点',
      removeInlineBreakpointOnColumn: '删除第 {0} 列的内联断点',
      removeLineBreakpoint: '删除行断点',
      removeLogPoint: '移除 {0}(&&R)',
      runToLine: '运行到行',
    },
    'vs/workbench/contrib/debug/browser/breakpointsView': {
      access: '访问',
      activateBreakpoints: '切换激活断点',
      addFunctionBreakpoint: '添加函数断点',
      breakpoint: '断点',
      breakpointUnsupported: '调试器不支持此类型的断点',
      breakpoints: '断点',
      dataBreakpoint: '数据断点',
      dataBreakpointUnsupported: '此调试类型不支持数据断点',
      dataBreakpointsNotSupported: '此调试类型不支持数据断点',
      disableAllBreakpoints: '禁用所有断点',
      disabledBreakpoint: '已禁用的断点',
      disabledLogpoint: '已禁用的记录点',
      editBreakpoint: '编辑函数断点…',
      editCondition: '编辑条件…',
      editHitCount: '编辑命中次数…',
      enableAllBreakpoints: '启用所有断点',
      exceptionBreakpointAriaLabel: '类型异常断点条件',
      exceptionBreakpointPlaceholder: '在表达式结果为 true 时中断',
      expression: '表达式条件: {0}',
      expressionAndHitCount: '表达式: {0} | 命中次数: {1}',
      expressionCondition: '表达式条件: {0}',
      functionBreakPointExpresionAriaLabel:
        '类型表达式。表达式计算结果为 true 时，函数断点将中断',
      functionBreakPointHitCountAriaLabel:
        '类型命中次数。达到命中次数时，函数断点将中断。',
      functionBreakPointInputAriaLabel: '键入函数断点。',
      functionBreakpoint: '函数断点',
      functionBreakpointExpressionPlaceholder: '在表达式结果为 true 时中断',
      functionBreakpointHitCountPlaceholder: '在到达命中次数时中断',
      functionBreakpointPlaceholder: '要断开的函数',
      functionBreakpointUnsupported: '不受此调试类型支持的函数断点',
      functionBreakpointsNotSupported: '此调试类型不支持函数断点',
      hitCount: '命中次数: {0}',
      instructionBreakpoint: '指令断点',
      instructionBreakpointAtAddress: '地址 {0} 处的指令断点',
      instructionBreakpointUnsupported: '不受此调试类型支持的指令断点',
      logMessage: '日志消息: {0}',
      miDisableAllBreakpoints: '禁用所有断点(&&L)',
      miEnableAllBreakpoints: '启用所有断点(&&E)',
      miFunctionBreakpoint: '函数断点(&&F)...',
      miRemoveAllBreakpoints: '删除所有断点(&&A)',
      read: '读取',
      reapplyAllBreakpoints: '重新应用所有断点',
      removeAllBreakpoints: '删除所有断点',
      removeBreakpoint: '删除断点',
      unverifiedBreakpoint: '未验证的断点',
      unverifiedExceptionBreakpoint: '未验证的异常断点',
      unverifiedLogpoint: '未验证的记录点',
      write: '写入',
    },
    'vs/workbench/contrib/debug/browser/breakpointWidget': {
      breakpointType: '断点类型',
      breakpointWidgetExpressionPlaceholder:
        '在表达式结果为真时中断。按 "Enter" 键确认，"Esc" 键取消。',
      breakpointWidgetHitCountPlaceholder:
        '在命中次数条件满足时中断。按 "Enter" 键确认，"Esc" 键取消。',
      breakpointWidgetLogMessagePlaceholder:
        '断点命中时记录的消息。{} 内的表达式将被替换。按 "Enter" 键确认，"Esc" 键取消。',
      expression: '表达式',
      hitCount: '命中次数',
      logMessage: '日志消息',
    },
    'vs/workbench/contrib/debug/browser/callStackEditorContribution': {
      focusedStackFrameLineHighlight: '堆栈帧中焦点一行的高亮背景色。',
      topStackFrameLineHighlight: '堆栈帧中顶部一行的高亮背景色。',
    },
    'vs/workbench/contrib/debug/browser/callStackView': {
      callStackAriaLabel: '调试调用堆栈',
      collapse: '全部折叠',
      loadAllStackFrames: '加载多个堆栈帧',
      paused: '已暂停',
      pausedOn: '因 {0} 已暂停',
      restartFrame: '重启框架',
      running: '正在运行',
      session: '会话',
      sessionLabel: '会话 {0} {1}',
      showMoreAndOrigin: '显示另外 {0} 个: {1}',
      showMoreStackFrames: '显示另外 {0} 个堆栈帧',
      showMoreStackFrames2: '显示更多堆栈框架',
      stackFrameAriaLabel: '堆栈帧 {0}，行 {1}，{2}',
      threadAriaLabel: '线程 {0} {1}',
    },
    'vs/workbench/contrib/debug/browser/debug.contribution': {
      SetNextStatement: '设置下一语句',
      addToWatchExpressions: '添加到监视',
      allowBreakpointsEverywhere: '允许在任何文件中设置断点。',
      always: '始终在状态栏中显示调试',
      breakWhenValueChanges: '值更改时中断',
      breakWhenValueIsAccessed: '值访问时中断',
      breakWhenValueIsRead: '值读取时中断',
      breakpoints: '断点',
      callStack: '调用堆栈',
      cancel: '取消调试。',
      copyAsExpression: '复制表达式',
      copyStackTrace: '复制调用堆栈',
      copyValue: '复制值',
      'debug.autoExpandLazyVariables':
        '自动显示调试器延迟解析的变量的值，例如 getter。',
      'debug.confirmOnExit': '如果存在活动调试会话，控制是否确认窗口关闭时间。',
      'debug.confirmOnExit.always': '始终确认是否存在调试会话。',
      'debug.confirmOnExit.never': '从不确认。',
      'debug.console.acceptSuggestionOnEnter':
        '控制是否应在调试控制台中输入时接受建议。enter 还用于评估调试控制台中键入的任何内容。',
      'debug.console.closeOnEnd':
        '控制调试控制台是否应在调试会话结束时自动关闭。',
      'debug.console.collapseIdenticalLines':
        '控制调试控制台是否应折叠相同的行，并显示出现次数和徽章。',
      'debug.console.fontFamily': '控制调试控制台中的字体系列。',
      'debug.console.fontSize': '控制调试控制台中的字号(以像素为单位)。',
      'debug.console.historySuggestions':
        '控制调试控制台是否应建议以前键入的输入。',
      'debug.console.lineHeight':
        '设置调试控制台中的行高(以像素为单位)。使用 0 可根据字号计算行高。',
      'debug.console.wordWrap': '控制是否应在调试控制台中换行。',
      'debug.disassemblyView.showSourceCode': '在反汇编视图中显示源代码。',
      'debug.enableStatusBarColor': '调试器处于活动状态时的颜色状态栏',
      'debug.focusEditorOnBreak': '控制调试器中断时编辑器是否应聚焦。',
      'debug.focusWindowOnBreak':
        '控制当调试器中断时，工作台窗口是否应获得焦点。',
      'debug.onTaskErrors': '控制在运行预启动任务后遇到错误时应该怎么做。',
      'debug.saveBeforeStart': '控制在启动调试会话前要保存哪些编辑器。',
      'debug.saveBeforeStart.allEditorsInActiveGroup':
        '在启动调试会话之前，保存活动组中的所有编辑器。',
      'debug.saveBeforeStart.nonUntitledEditorsInActiveGroup':
        '在启动调试会话之前，保存活动组中的所有编辑器(无标题的编辑器除外)。',
      'debug.saveBeforeStart.none': '在启动调试会话之前，不保存任何编辑器。',
      'debug.terminal.clearBeforeReusing':
        '在集成或外部终端中启动新的调试会话之前，请清除终端。',
      debugAnyway: '忽略任务错误并开始调试。',
      debugCategory: '调试',
      debugConfigurationTitle: '调试',
      debugFocusConsole: '聚焦到“调试控制台”视图',
      debugPanel: '调试控制台',
      disassembly: '反汇编',
      editWatchExpression: '编辑表达式',
      inlineBreakpoint: '内联断点',
      inlineValues: '当处于调试过程中时，在编辑器中内联显示变量值。',
      'inlineValues.focusNoScroll':
        '如果语言支持内联值位置，则在调试时在编辑器中内联显示变量值。',
      'inlineValues.off': '在调试时，绝不在编辑器中内联显示变量值。',
      'inlineValues.on': '在调试时，始终在编辑器中内联显示变量值。',
      jumpToCursor: '跳转到光标',
      launch:
        "全局调试启动配置。应当作为跨工作区共享的 'launch.json' 的替代方法。",
      loadedScripts: '已载入的脚本',
      mRun: '运行(&&R)',
      miAddConfiguration: '添加配置(&&D)...',
      miContinue: '继续(&&C)',
      miInlineBreakpoint: '内联断点(&&O)',
      miInstallAdditionalDebuggers: '安装附加调试器(&&I)...',
      miNewBreakpoint: '新建断点(&&N)',
      'miRestart Debugging': '重启调试(&&R)',
      miRun: '以非调试模式运行(&&W)',
      miStartDebugging: '启动调试(&&S)',
      miStepInto: '单步执行(&&I)',
      miStepOut: '单步停止(&&U)',
      miStepOver: '逐过程(&&O)',
      miStopDebugging: '停止调试(&&S)',
      miToggleDebugConsole: '调试控制台(&&B)',
      miViewRun: '运行(&&R)',
      never: '从不在状态栏中显示调试',
      onFirstSessionStart: '仅于第一次启动调试后在状态栏中显示调试',
      openDebug: '控制何时打开“调试”视图。',
      openExplorerOnEnd: '在调试会话结束时自动打开资源管理器视图。',
      prompt: '提示用户。',
      removeWatchExpression: '删除表达式',
      restartFrame: '重启框架',
      run: '运行或调试...',
      'run and debug': '运行和调试',
      setValue: '设置值',
      showBreakpointsInOverviewRuler: '控制断点是否应显示在概览标尺中。',
      showErrors: '显示问题视图且不开始调试。',
      showInStatusBar: '控制应在何时显示调试状态栏。',
      showInlineBreakpointCandidates:
        '控制调试时是否应在编辑器中显示内联断点候选修饰。',
      showSubSessionsInToolBar:
        '控制调试子会话是否显示在调试工具栏中。当此设置为 false 时, 子会话上的 stop 命令也将停止父会话。',
      startDebugPlaceholder: '键入准备运行的启动配置的名称。',
      startDebuggingHelp: '开始调试',
      tasksQuickAccessHelp: '显示所有调试控制台',
      tasksQuickAccessPlaceholder: '键入要打开的调试控制台的名称。',
      terminateThread: '终止线程',
      toolBarLocation:
        '控制调试工具栏的位置。可在所有视图中“浮动”、在调试视图中“停靠”，也可“隐藏”。',
      variables: '变量',
      viewMemory: '查看二进制数据',
      watch: '监视',
    },
    'vs/workbench/contrib/debug/browser/debugActionViewItems': {
      addConfigTo: '添加配置({0})…',
      addConfiguration: '添加配置…',
      debugLaunchConfigurations: '调试启动配置',
      debugSession: '调试会话',
      noConfigurations: '没有配置',
    },
    'vs/workbench/contrib/debug/browser/debugAdapterManager': {
      CouldNotFindLanguage:
        '没有用于调试 {0} 的扩展。我们是否应在市场中找到 {0} 扩展?',
      debugName: '配置名称；显示在启动配置下拉菜单中。',
      debugNoType: '不可省略调试器的 "type" 属性，且其类型必须是 "string" 。',
      debugPostDebugTask: '调试会话结束后运行的任务。',
      debugPrelaunchTask: '调试会话开始前要运行的任务。',
      debugServer:
        '仅用于调试扩展开发: 如果已指定端口，VS 代码会尝试连接到在服务器模式中运行的调试适配器',
      findExtension: '查找 {0} 扩展(&&F)',
      installExt: '安装扩展...',
      installLanguage: '安装 {0} 的扩展...',
      selectDebug: '选择调试器',
      suggestedDebuggers: '建议',
      suppressMultipleSessionWarning:
        '在尝试多次启动同一调试配置时禁用该警告。',
    },
    'vs/workbench/contrib/debug/browser/debugColors': {
      'debugIcon.continueForeground': '用于继续的调试工具栏图标。',
      'debugIcon.disconnectForeground': '用于断开连接的调试工具栏图标。',
      'debugIcon.pauseForeground': '用于暂停的调试工具栏图标。',
      'debugIcon.restartForeground': '用于重启的调试工具栏图标。',
      'debugIcon.startForeground': '用于开始调试的调试工具栏图标。',
      'debugIcon.stepBackForeground': '用于后退的调试工具栏图标。',
      'debugIcon.stepIntoForeground': '用于单步执行的调试工具栏图标。',
      'debugIcon.stepOutForeground': '用于单步执行的调试工具栏图标。',
      'debugIcon.stepOverForeground': '用于跳过的调试工具栏图标。',
      'debugIcon.stopForeground': '用于停止的调试工具栏图标。',
      debugToolBarBackground: '调试工具栏背景颜色。',
      debugToolBarBorder: '调试工具栏边框颜色。',
    },
    'vs/workbench/contrib/debug/browser/debugCommands': {
      addConfiguration: '添加配置…',
      addInlineBreakpoint: '添加内联断点',
      callStackBottom: '导航到调用堆栈底部',
      callStackDown: '向下导航调用堆栈',
      callStackTop: '导航到调用堆栈顶部',
      callStackUp: '向上导航调用堆栈',
      chooseLocation: '选择特定位置',
      continueDebug: '继续',
      debug: '调试',
      disconnect: '断开连接',
      disconnectSuspend: '断开连接和暂停',
      'editor.debug.action.stepIntoTargets.none': '没有可用的步骤目标',
      focusSession: '聚焦到“会话”视图',
      jumpToCursor: '跳转到光标',
      nextDebugConsole: '聚焦下一个调试控制台',
      noExecutableCode: '当前光标位置没有关联的可执行代码。',
      openLaunchJson: '打开“{0}”',
      openLoadedScript: '打开已加载脚本...',
      pauseDebug: '暂停',
      prevDebugConsole: '聚焦上一个调试控制台',
      restartDebug: '重启',
      selectAndStartDebugging: '选择并开始调试',
      selectDebugConsole: '选择调试控制台',
      selectDebugSession: '选择调试会话',
      startDebug: '开始调试',
      startWithoutDebugging: '开始执行(不调试)',
      stepIntoDebug: '单步调试',
      stepIntoTargetDebug: '单步执行目标',
      stepOutDebug: '单步跳出',
      stepOverDebug: '逐过程',
      stop: '停止',
    },
    'vs/workbench/contrib/debug/browser/debugConfigurationManager': {
      'DebugConfig.failed':
        '无法在 ".vscode" 文件夹({0})内创建 "launch.json" 文件。',
      editLaunchConfig: '在 launch.json 中编辑调试配置',
      selectConfiguration: '选择启动配置',
      'user settings': '用户设置',
      workspace: '工作区',
    },
    'vs/workbench/contrib/debug/browser/debugConsoleQuickAccess': {
      'workbench.action.debug.startDebug': '启动新的调试会话',
    },
    'vs/workbench/contrib/debug/browser/debugEditorActions': {
      EditBreakpointEditorAction: '调试: 编辑断点',
      addToWatch: '添加到监视',
      closeExceptionWidget: '关闭异常小组件',
      conditionalBreakpointEditorAction: '调试: 添加条件断点...',
      'editor.debug.action.stepIntoTargets.notAvailable': '此处不提供步骤目标',
      evaluateInDebugConsole: '在调试控制台中评估',
      goToNextBreakpoint: '调试: 转到下一个断点',
      goToPreviousBreakpoint: '调试: 转到上一个断点',
      logPointEditorAction: '调试: 添加记录点...',
      miConditionalBreakpoint: '条件断点(&&C)...',
      miDisassemblyView: '反汇编视图(&&D)',
      miEditBreakpoint: '编辑断点(&&E)',
      miLogPoint: '记录点(&&L)...',
      miToggleBreakpoint: '切换断点(&&B)',
      mitogglesource: '&&ToggleSource',
      openDisassemblyView: '打开反汇编视图',
      runToCursor: '运行到光标处',
      showDebugHover: '调试: 显示悬停',
      stepIntoTargets: '单步执行目标',
      toggleBreakpointAction: '调试: 切换断点',
      toggleDisassemblyViewSourceCode: '在反汇编视图中切换源代码',
    },
    'vs/workbench/contrib/debug/browser/debugEditorContribution': {
      'editor.inlineValuesBackground': '调试内联值背景的颜色。',
      'editor.inlineValuesForeground': '调试内联值文本的颜色。',
    },
    'vs/workbench/contrib/debug/browser/debugHover': {
      quickTip: '按住 {0} 键可切换到编辑器语言悬停',
      treeAriaLabel: '调试悬停',
      variableAriaLabel: '{0}，值 {1}，变量，调试',
    },
    'vs/workbench/contrib/debug/browser/debugIcons': {
      breakpointsActivate: '“断点”视图中“激活”操作的图标。',
      breakpointsRemoveAll: '“断点”视图中“全部删除”操作的图标。',
      breakpointsViewIcon: '查看断点视图的图标。',
      callStackViewIcon: '查看调用堆栈视图的图标。',
      callstackViewSession: '“调用堆栈”视图中会话图标的图标。',
      debugBreakpoint: '断点的图标。',
      debugBreakpointConditional: '条件断点的图标。',
      debugBreakpointConditionalDisabled: '已禁用的条件断点的图标。',
      debugBreakpointConditionalUnverified: '未验证的条件断点的图标。',
      debugBreakpointData: '数据断点的图标。',
      debugBreakpointDataDisabled: '已禁用的数据断点的图标。',
      debugBreakpointDataUnverified: '未验证的数据断点的图标。',
      debugBreakpointDisabled: '已禁用的断点的图标。',
      debugBreakpointFunction: '函数断点的图标。',
      debugBreakpointFunctionDisabled: '已禁用的函数断点的图标。',
      debugBreakpointFunctionUnverified: '未验证的函数断点的图标。',
      debugBreakpointHint: '在编辑器字形边距中悬停时显示的断点提示的图标。',
      debugBreakpointLog: '日志断点的图标。',
      debugBreakpointLogDisabled: '已禁用的日志断点的图标。',
      debugBreakpointLogUnverified: '未验证的日志断点的图标。',
      debugBreakpointUnsupported: '不受支持的断点的图标。',
      debugBreakpointUnverified: '未验证的断点的图标。',
      debugCollapseAll: '调试视图中“全部折叠”操作的图标。',
      debugConfigure: '“调试配置”操作的图标。',
      debugConsole: '调试控制台的“打开”操作的图标。',
      debugConsoleClearAll: '调试控制台中“全部清除”操作的图标。',
      debugConsoleEvaluationInput: '调试评估输入标记的图标。',
      debugConsoleEvaluationPrompt: '调试评估提示的图标。',
      debugConsoleViewIcon: '查看调试控制台视图的图标。',
      debugContinue: '“调试继续”操作的图标。',
      debugDisconnect: '“调试断开”操作的图标。',
      debugGripper: '调试条控制手柄的图标。',
      debugInspectMemory: '检查内存操作的图标。',
      debugPause: '“调试暂停”操作的图标。',
      debugRemoveConfig: '用于删除调试配置的图标。',
      debugRestart: '“调试重启”操作的图标。',
      debugRestartFrame: '“调试重启帧”操作的图标。',
      debugReverseContinue: '“调试反向继续”操作的图标。',
      debugRun: '运行或调试操作的图标。',
      debugStackframe: '编辑器字形边距中显示的堆栈帧的图标。',
      debugStackframeFocused: '编辑器字形边距中显示的具有焦点的堆栈帧的图标。',
      debugStart: '“调试启动”操作的图标。',
      debugStepBack: '“调试单步后退”操作的图标。',
      debugStepInto: '“调试进入子函数”的图标。',
      debugStepOut: '“调试跳出子函数”操作的图标。',
      debugStepOver: '“调试越过子函数”操作的图标。',
      debugStop: '“调试停止”操作的图标。',
      loadedScriptsViewIcon: '查看已加载脚本视图的图标。',
      runViewIcon: '查看运行视图的图标。',
      variablesViewIcon: '查看变量视图的图标。',
      watchExpressionRemove: '监视视图中“删除”操作的图标。',
      watchExpressionsAdd: '监视视图中“添加”操作的图标。',
      watchExpressionsAddFuncBreakpoint: '监视视图中“添加函数断点”操作的图标。',
      watchExpressionsRemoveAll: '监视视图中“全部删除”操作的图标。',
      watchViewIcon: '查看监视视图的图标。',
    },
    'vs/workbench/contrib/debug/browser/debugQuickAccess': {
      addConfigTo: '添加配置({0})…',
      addConfiguration: '添加配置…',
      configure: '配置',
      contributed: '已提供',
      customizeLaunchConfig: '配置启动配置',
      noDebugResults: '没有匹配的启动配置',
      providerAriaLabel: '{0} 已提供的配置',
      removeLaunchConfig: '删除启动配置',
    },
    'vs/workbench/contrib/debug/browser/debugService': {
      '1activeSession': '1 个活动会话',
      breakpointAdded: '已添加断点，行 {0}，文件 {1}',
      breakpointRemoved: '已删除断点，行 {0}，文件 {1}',
      compoundMustHaveConfigurations:
        '复合项必须拥有 "configurations" 属性集，才能启动多个配置。',
      configMissing: '"launch.json" 中缺少配置“{0}”。',
      debugAdapterCrash: '调试适配器进程意外终止 ({0})',
      debugRequesMissing: '所选的调试配置缺少属性“{0}”。',
      debugRequestNotSupported: '所选调试配置的属性“{0}”的值“{1}”不受支持。',
      debugTrust: '调试从你的工作区执行生成任务和程序代码。',
      debugTypeMissing: '所选的启动配置缺少属性 "type"。',
      debugTypeNotSupported: '配置的类型“{0}”不受支持。',
      debuggingPaused: '{0}，调试已暂停 {1}，{2}: {3}',
      installAdditionalDebuggers: '安装 {0} 扩展',
      launchJsonDoesNotExist: '传递的工作区文件夹没有 "launch.json"。',
      multipleConfigurationNamesInWorkspace:
        '工作区中存在多个启动配置“{0}”。请使用文件夹名称来限定配置。',
      multipleSession: '“{0}”已在运行。是否要启动另一个实例?',
      nActiveSessions: '{0}个活动会话',
      noConfigurationNameInWorkspace: '在工作区中找不到启动配置“{0}”。',
      noFolderWithName: '无法在复合项“{2}”中为配置“{1}”找到名为“{0}”的文件夹。',
      noFolderWorkspaceDebugError:
        '无法调试活动文件。请确保它已保存且你已为该文件类型安装了调试扩展。',
      runTrust: '运行会从你的工作区执行生成任务和程序代码。',
    },
    'vs/workbench/contrib/debug/browser/debugSession': {
      debuggingStarted: '已开始调试。',
      debuggingStopped: '已停止调试。',
      noDebugAdapter: '没有可用的调试程序，无法发送“{0}”',
      sessionNotReadyForBreakpoints: '会话还没有为断点做好准备',
    },
    'vs/workbench/contrib/debug/browser/debugSessionPicker': {
      'moveFocusedView.selectView': '按名称搜索调试会话',
      'workbench.action.debug.spawnFrom': '已从 {1} 生成会话 {0}',
      'workbench.action.debug.startDebug': '启动新的调试会话',
    },
    'vs/workbench/contrib/debug/browser/debugStatus': {
      debugTarget: '调试: {0}',
      selectAndStartDebug: '选择并启动调试配置',
      'status.debug': '调试',
    },
    'vs/workbench/contrib/debug/browser/debugTaskRunner': {
      DebugTaskNotFound: '找不到指定的任务。',
      DebugTaskNotFoundWithTaskId: '找不到任务“{0}”。',
      abort: '中止',
      debugAnyway: '仍要调试(&&D)',
      invalidTaskReference: '无法在其他工作区文件夹的启动配置中引用任务“{0}”。',
      preLaunchTaskError: '运行 preLaunchTask“{0}”后存在错误。',
      preLaunchTaskErrors: '运行 preLaunchTask“{0}”后存在错误。',
      preLaunchTaskExitCode: 'preLaunchTask“{0}”已终止，退出代码为 {1}。',
      preLaunchTaskTerminated: '启动前任务"{0}"终止。',
      remember: '记住我在用户设置中的选择',
      rememberTask: '记住我对此任务的选择',
      showErrors: '显示错误(&&S)',
      taskNotTracked: '无法跟踪任务“{0}”。请确保已定义了问题匹配程序。',
      taskNotTrackedWithTaskId:
        '无法跟踪任务“{0}”。请确保已定义了问题匹配程序。',
    },
    'vs/workbench/contrib/debug/browser/debugToolBar': {
      'notebook.moreRunActionsLabel': '更多...',
      reverseContinue: '反向',
      stepBackDebug: '后退',
    },
    'vs/workbench/contrib/debug/browser/debugViewlet': {
      debugPanel: '调试控制台',
      miOpenConfigurations: '打开配置(&&C)',
      selectWorkspaceFolder:
        '选择工作区文件夹以在其中创建 launch.json 文件或将其添加到工作区配置文件',
      startAdditionalSession: '启动其他会话',
    },
    'vs/workbench/contrib/debug/browser/disassemblyView': {
      disassemblyTableColumnLabel: '说明',
      disassemblyView: '反汇编视图',
      editorOpenedFromDisassemblyDescription: '从反汇编',
      instructionAddress: '地址',
      instructionBytes: '字节',
      instructionNotAvailable: '反汇编不可用。',
      instructionText: '指令',
    },
    'vs/workbench/contrib/debug/browser/exceptionWidget': {
      close: '关闭',
      debugExceptionWidgetBackground: '异常小组件背景颜色。',
      debugExceptionWidgetBorder: '异常小组件边框颜色。',
      exceptionThrown: '出现异常。',
      exceptionThrownWithId: '发生异常: {0}',
    },
    'vs/workbench/contrib/debug/browser/linkDetector': {
      fileLink: '按住 Ctrl 并单击以 {0}',
      fileLinkMac: '按住 Cmd 并单击以 {0}',
      fileLinkWithPath: '按住 Ctrl 并单击以 {0}{1}',
      fileLinkWithPathMac: '按住 Cmd 并单击以 {0}{1}',
      followForwardedLink: '执行使用转发端口的链接',
      followLink: '执行链接',
    },
    'vs/workbench/contrib/debug/browser/loadedScriptsView': {
      loadedScriptsAriaLabel: '在调试中已加载的脚本',
      loadedScriptsFolderAriaLabel: '文件夹 {0}，已加载的脚本，调试',
      loadedScriptsRootFolderAriaLabel: '工作区文件夹 {0}，已加载的脚本，调试',
      loadedScriptsSession: '调试会话',
      loadedScriptsSessionAriaLabel: '会话 {0}，已加载的脚本，调试',
      loadedScriptsSourceAriaLabel: '{0}，已加载的脚本，调试',
    },
    'vs/workbench/contrib/debug/browser/rawDebugSession': {
      canNotStart:
        '调试器需要为调试对象打开新选项卡或窗口，但浏览器阻止了此选项卡或窗口。必须授予权限以继续。',
      continue: '继续(&&C)',
      moreInfo: '详细信息',
      noDebugAdapter: '未找到任何调试程序。无法发送“{0}”。',
      noDebugAdapterStart: '没有调试适配器，无法启动调试会话。',
    },
    'vs/workbench/contrib/debug/browser/repl': {
      'actions.repl.acceptInput': '接受 REPL 的输入',
      'actions.repl.copyAll': '调试: 复制控制台所有内容',
      clearRepl: '清除控制台',
      collapse: '全部折叠',
      copy: '复制',
      copyAll: '全部复制',
      debugConsole: '调试控制台',
      debugConsoleCleared: '调试控制台已清除',
      paste: '粘贴',
      'repl.action.filter': 'REPL 将内容聚焦到筛选器',
      selectRepl: '选择调试控制台',
      'showing filtered repl lines': '正在显示第 {0} 页(共 {1} 页)',
      startDebugFirst: '请发起调试会话来对表达式求值',
      'workbench.debug.filter.placeholder': '筛选器(例如 text、!exclude)',
    },
    'vs/workbench/contrib/debug/browser/replViewer': {
      debugConsole: '调试控制台',
      occurred: '，发生了 {0} 次',
      replGroup: '调试控制器组 {0}',
      replRawObjectAriaLabel: '调试控制台变量 {0}，值 {1}',
      replVariableAriaLabel: '变量 {0}，值 {1}',
    },
    'vs/workbench/contrib/debug/browser/statusbarColorProvider': {
      statusBarDebuggingBackground:
        '调试程序时状态栏的背景色。状态栏显示在窗口底部',
      statusBarDebuggingBorder:
        '调试程序时区别于侧边栏和编辑器的状态栏边框颜色。状态栏显示在窗口底部。',
      statusBarDebuggingForeground:
        '调试程序时状态栏的前景色。状态栏显示在窗口底部',
    },
    'vs/workbench/contrib/debug/browser/variablesView': {
      cancel: '取消',
      collapse: '全部折叠',
      install: '安装',
      variableAriaLabel: '{0}，值 {1}',
      variableScopeAriaLabel: '范围 {0}',
      variableValueAriaLabel: '键入新的变量值',
      variablesAriaTreeLabel: '调试变量',
      'viewMemory.install.progress': '正在安装十六进制编辑器...',
      'viewMemory.prompt':
        '要有十六进制编辑器扩展才能检查二进制数据。是否要立即安装?',
    },
    'vs/workbench/contrib/debug/browser/watchExpressionsView': {
      addWatchExpression: '添加表达式',
      collapse: '全部折叠',
      removeAllWatchExpressions: '删除所有表达式',
      typeNewValue: '键入新值',
      watchAriaTreeLabel: '调试监视表达式',
      watchExpressionAriaLabel: '{0}，值 {1}',
      watchExpressionInputAriaLabel: '键入监视表达式',
      watchExpressionPlaceholder: '要监视的表达式',
      watchVariableAriaLabel: '{0}，值 {1}',
    },
    'vs/workbench/contrib/debug/browser/welcomeView': {
      allDebuggersDisabled:
        '禁用所有调试扩展。启用调试扩展或从市场安装新的扩展。',
      customizeRunAndDebug:
        '要自定义运行和调试[创建 launch.json 文件](command:{0})。',
      customizeRunAndDebugOpenFolder:
        '要自定义运行和调试，请[打开文件夹](command:{0}) 并创建一个启动.json 文件。',
      detectThenRunAndDebug: '[显示所有自动调试配置](command:{0})。',
      openAFileWhichCanBeDebugged: '[打开文件](command:{0})，可调试或运行。',
      run: '运行',
      runAndDebugAction: '[运行和调试{0}](command:{1})',
    },
    'vs/workbench/contrib/debug/common/abstractDebugAdapter': {
      timeout: '对于“{1}”，{0} 毫秒后超时 ',
    },
    'vs/workbench/contrib/debug/common/debug': {
      breakWhenValueChangesSupported:
        '如果焦点会话支持在值发生更改时中断，则为 True。',
      breakWhenValueIsAccessedSupported:
        '如果焦点断点支持在值被访问时中断，则为 True。',
      breakWhenValueIsReadSupported:
        '如果焦点断点支持在值被读取时中断，则为 True。',
      breakpointInputFocused:
        '当输入框在 "BREAKPOINTS " 视图中具有焦点时为 True。',
      breakpointItemType:
        '表示 "BREAKPOINTS " 视图中具有焦点的元素的项类型。例如: "breakpoint"、"exceptionBreakppint"、"functionBreakpoint"、"dataBreakpoint"',
      breakpointSupportsCondition: '焦点断点支持条件时为 True。',
      breakpointWidgetVisibile:
        '如果显示断点编辑器区域小组件，则为 True；否则为 false。',
      breakpointsExist: '当至少存在一个断点时为 True。',
      breakpointsFocused:
        '如果 "BREAKPOINTS" 视图处于焦点，则为 True；否则为 false。',
      callStackItemStopped:
        '当停止调用堆栈中具有焦点的项目时为 true。在内部用于调用堆栈视图中的内联菜单。',
      callStackItemType:
        '表示“调用堆栈”视图中聚焦元素的项目类型。例如: "session"、"thread"、"stackFrame"',
      callStackSessionHasOneThread:
        '当调用堆栈视图中具有焦点的会话恰好具有一个线程时为 true。在内部用于调用堆栈视图中的内联菜单。',
      callStackSessionIsAttach:
        '当调用堆栈视图中的会话是“附加”状态时为 true，否则为 false。在内部用于调用堆栈视图中的内联菜单。',
      canViewMemory: '指示视图中的项是否具有关联的内存引用。',
      debugConfigurationType: '所选启动配置的调试类型。例如 "python"。',
      debugExtensionsAvailable: '如果至少安装并启用了一个调试扩展，则为 True。',
      debugProtocolVariableMenuContext:
        '表示 "VARIABLES" 视图中调试适配器针对焦点变量设置的上下文。',
      debugSetExpressionSupported:
        '当焦点会话支持 “setExpression” 请求时为 True。',
      debugSetVariableSupported: '焦点会话支持 "setVariable" 请求时为 True。',
      debugState:
        '焦点调试会话所处的状态。以下项之一:“非活动”、“正在初始化”、“已停止”或“正在运行”。',
      debugType: '活动调试会话的调试类型。例如 "python"。',
      debugUX:
        '调试 UX 状态。当没有调试配置时，它为“简单”，否则为“默认”。用于确定何时在调试 viewlet 中显示“欢迎”视图。',
      debuggerDisabled: "已安装配置的调试类型 '{0}'，但其在此环境中不受支持。",
      debuggersAvailable: '如果至少有一个调试扩展处于活动状态，则为 True。',
      disassembleRequestSupported: '当重点会话支持反汇编请求时为 True。',
      disassemblyViewFocus: '当聚焦反汇编视图时为 True。',
      exceptionWidgetVisible: '当异常小组件可见时为 True。',
      expressionSelected:
        '如果在 "WATCH" 或 "VARIABLES" 视图中打开表达式输入框，则为 True，否则为 false。',
      focusedSessionIsAttach: '焦点会话为“附加”时为 True。',
      focusedStackFrameHasInstructionReference:
        '当焦点堆栈帧具有指令指针引用时为 true。',
      hasDebugged: '如果调试会话已启动至少一次，则为 true，否则为 false。',
      inBreakpointWidget:
        '当焦点位于断点编辑器区域小组件中时为 True，否则为 false。',
      inDebugMode: '调试时为 True，否则为 false。',
      inDebugRepl: '当焦点位于调试控制台中时为 True，否则为 false。',
      internalConsoleOptions: '控制应在何时打开内部调试控制台。',
      jumpToCursorSupported: '当焦点会话支持 "jumpToCursor" 请求时为 True。',
      languageSupportsDisassembleRequest:
        '如果当前编辑器中的语言支持反汇编请求，则为 True。',
      loadedScriptsItemType:
        '表示 "LOADED SCRIPTS " 视图中具有焦点的元素的项类型。',
      loadedScriptsSupported:
        '如果焦点会话支持 "LOADED SCRIPTS " 视图，则为 True',
      multiSessionDebug: '活动调试会话多于 1 个时为 True。',
      multiSessionRepl: '调试控制台多于 1 个时为 True。',
      restartFrameSupported: '焦点会话支持 "restartFrame" 请求时为 True。',
      stackFrameSupportsRestart: '焦点堆栈帧支持 "restartFrame" 时为 True。',
      stepBackSupported: '焦点会话支持 "stepBack" 请求时为 True。',
      stepIntoTargetsSupported:
        '焦点会话支持 "stepIntoTargets" 请求时为 True。',
      suspendDebuggeeSupported: '如果重点会话支持暂停调试对象功能，则为 True。',
      terminateDebuggeeSupported:
        '如果焦点会话支持终止调试对象功能，则为 True。',
      variableEvaluateNamePresent:
        '在焦点变量设置了 “evalauteName” 字段时为 True。',
      variableIsReadonly: '当焦点变量为只读时为 True。',
      variablesFocused: '当 "VARIABLES" 视图处于焦点时为 True，否则为 false',
      watchExpressionsExist: '至少存在一个监视表达式时为 True，否则为 false。',
      watchExpressionsFocused: '"WATCH " 视图处于焦点时为 True，否则为 false。',
      watchItemType:
        '表示“监视”视图中聚焦元素的项目类型。例如: "expression"、"variable"',
    },
    'vs/workbench/contrib/debug/common/debugContentProvider': {
      canNotResolveSource: '无法加载源“{0}”。',
      canNotResolveSourceWithError: '无法加载源“{0}”: {1}。',
      unable: '无法解析无调试会话的资源',
    },
    'vs/workbench/contrib/debug/common/debugger': {
      'cannot.find.da': '找不到类型为 "{0}" 的调试适配器。',
      debugLinuxConfiguration: '特定于 Linux 的启动配置属性。',
      debugOSXConfiguration: '特定于 OS X 的启动配置属性。',
      debugRequest: '请求配置类型。可以是“启动”或“附加”。',
      debugType: '配置类型。',
      debugTypeNotRecognised:
        '无法识别此调试类型。确保已经安装并启用相应的调试扩展。',
      debugWindowsConfiguration: '特定于 Windows 的启动配置属性。',
      'launch.config.comment1': '使用 IntelliSense 了解相关属性。 ',
      'launch.config.comment2': '悬停以查看现有属性的描述。',
      'launch.config.comment3': '欲了解更多信息，请访问: {0}',
      node2NotSupported:
        '不再支持 "node2"，改用 "node"，并将 "protocol" 属性设为 "inspector"。',
    },
    'vs/workbench/contrib/debug/common/debugLifecycle': {
      'debug.debugSessionCloseConfirmationPlural':
        '存在活动的调试会话，是否确定要终止它们?',
      'debug.debugSessionCloseConfirmationSingular':
        '存在活动的调试会话，是否确定要终止它?',
      'debug.stop': '停止调试(&&S)',
    },
    'vs/workbench/contrib/debug/common/debugModel': {
      breakpointDirtydHover: '未验证的断点。对文件进行了修改，请重启调试会话。',
      invalidVariableAttributes: '无效的变量属性',
      notAvailable: '不可用',
      paused: '已暂停',
      pausedOn: '因 {0} 已暂停',
      running: '正在运行',
      startDebugFirst: '请发起调试会话来对表达式求值',
    },
    'vs/workbench/contrib/debug/common/debugSchemas': {
      'app.launch.json.compound.folder': '复合项所在的文件夹的名称。',
      'app.launch.json.compound.name': '复合的名称。在启动配置下拉菜单中显示。',
      'app.launch.json.compound.stopAll':
        '控制手动终止一个会话是否将停止所有复合会话。',
      'app.launch.json.compounds':
        '复合列表。每个复合可引用多个配置，这些配置将一起启动。',
      'app.launch.json.compounds.configurations':
        '将作为此复合的一部分启动的配置名称。',
      'app.launch.json.configurations':
        '配置列表。使用 IntelliSense 添加新配置或编辑现有配置。',
      'app.launch.json.title': '启动',
      'app.launch.json.version': '此文件格式的版本。',
      compoundPrelaunchTask: '要在任何复合配置开始之前运行的任务。',
      presentation:
        '有关如何在调试配置下拉列表和命令面板中显示此配置的演示选项。',
      'presentation.group':
        '此配置所属的组。用于在配置下拉列表和命令面板中分组和排序。',
      'presentation.hidden': '控制此配置是否应显示在配置下拉列表和命令面板中。',
      'presentation.order':
        '此配置在组内的顺序。用于在配置下拉列表和命令面板中分组和排序。',
      useUniqueNames: '配置名称必须唯一。',
      'vscode.extension.contributes.breakpoints': '添加断点。',
      'vscode.extension.contributes.breakpoints.language': '对此语言允许断点。',
      'vscode.extension.contributes.breakpoints.when':
        '必须为 true 才能启用此语言中断点的条件。如果子句适用，请考虑将其与调试器匹配。',
      'vscode.extension.contributes.debuggers': '用于调试适配器。',
      'vscode.extension.contributes.debuggers.args':
        '要传递给适配器的可选参数。',
      'vscode.extension.contributes.debuggers.configurationAttributes':
        '用于验证 "launch.json" 的 JSON 架构配置。',
      'vscode.extension.contributes.debuggers.configurationSnippets':
        '用于在 "launch.json" 中添加新配置的代码段。',
      'vscode.extension.contributes.debuggers.deprecated':
        '将此调试类型标记为已弃用的可选消息。',
      'vscode.extension.contributes.debuggers.initialConfigurations':
        '用于生成初始 "launch.json" 的配置。',
      'vscode.extension.contributes.debuggers.label':
        '显示此调试适配器的名称。',
      'vscode.extension.contributes.debuggers.languages':
        '可能被视为“默认调试程序”的调试扩展的语言列表。',
      'vscode.extension.contributes.debuggers.linux': 'Linux 特定的设置。',
      'vscode.extension.contributes.debuggers.linux.runtime':
        '用于 Linux 的运行时。',
      'vscode.extension.contributes.debuggers.osx': 'macOS 特定的设置。',
      'vscode.extension.contributes.debuggers.osx.runtime':
        '用于 macOS 的运行时。',
      'vscode.extension.contributes.debuggers.program':
        '调试适配器程序的路径。该路径是绝对路径或相对于扩展文件夹的相对路径。',
      'vscode.extension.contributes.debuggers.runtime':
        '可选运行时，以防程序属性不可执行，但需要运行时。',
      'vscode.extension.contributes.debuggers.runtimeArgs': '可选运行时参数。',
      'vscode.extension.contributes.debuggers.strings':
        '由此调试适配器提供的 UI 字符串。',
      'vscode.extension.contributes.debuggers.strings.unverifiedBreakpoints':
        '当此调试适配器支持的语言中存在未经验证的断点时，此消息将显示在断点悬停时和断点视图中。支持 Markdown 和命令链接。',
      'vscode.extension.contributes.debuggers.type':
        '此调试适配器的唯一标识符。',
      'vscode.extension.contributes.debuggers.variables':
        '正在将 "launch. json" 中的交互式变量(例如 ${action.pickProcess})映射到命令。',
      'vscode.extension.contributes.debuggers.when':
        '必须为 true 才能启用此类型调试器的条件。请考虑根据需要为此项使用 “shellExecutionSupported”、“virtualWorkspace”、“resourceScheme” 或扩展定义的上下文键。',
      'vscode.extension.contributes.debuggers.windows': 'Windows 特定的设置。',
      'vscode.extension.contributes.debuggers.windows.runtime':
        '用于 Windows 的运行时。',
    },
    'vs/workbench/contrib/debug/common/debugSource': {
      unknownSource: '未知源',
    },
    'vs/workbench/contrib/debug/common/disassemblyViewInput': {
      disassemblyInputName: '反汇编',
    },
    'vs/workbench/contrib/debug/common/loadedScriptsPicker': {
      'moveFocusedView.selectView': '按名称搜索加载的脚本',
    },
    'vs/workbench/contrib/debug/common/replModel': {
      consoleCleared: '控制台已清除',
    },
    'vs/workbench/contrib/debug/node/debugAdapter': {
      debugAdapterBinNotFound: '调试适配器可执行的“{0}”不存在。',
      debugAdapterCannotDetermineExecutable:
        '无法确定调试适配器“{0}”的可执行文件。',
      unableToLaunchDebugAdapter: '无法从“{0}”启动调试适配器。',
      unableToLaunchDebugAdapterNoArgs: '无法启动调试适配器。',
    },
    'vs/workbench/contrib/deprecatedExtensionMigrator/browser/deprecatedExtensionMigrator.contribution':
      {
        'bracketPairColorizer.notification':
          '扩展“括号对着色器”已禁用，因为它已被弃用。',
        'bracketPairColorizer.notification.action.enableNative':
          '启用本机括号对着色',
        'bracketPairColorizer.notification.action.showMoreInfo': '详细信息',
        'bracketPairColorizer.notification.action.uninstall': '卸载扩展',
      },
    'vs/workbench/contrib/editSessions/browser/editSessions.contribution': {
      autoResumeWorkingChanges:
        '控制是否为当前工作区自动继续存储在云中的可用工作更改。',
      'autoResumeWorkingChanges.off': '从不尝试从云中继续工作更改。',
      'autoResumeWorkingChanges.onReload':
        '在窗口重新加载时自动从云中继续可用的工作更改。',
      autoStoreWorkingChanges: '正在存储当前工作更改...',
      'autoStoreWorkingChanges.off': '从不尝试在云中自动存储工作更改。',
      'autoStoreWorkingChanges.onShutdown':
        '在窗口关闭时自动将当前工作更改存储在云中。',
      autoStoreWorkingChangesDescription:
        '控制是否为当前工作区自动将可用工作更改存储在云中。此设置在 Web 中无效。',
      'check for pending cloud changes': '检查挂起的云更改',
      checkingForWorkingChanges: '检查挂起的云更改...',
      'client too old': '请升级到较新版本的 {0} 以从云中恢复工作更改。',
      cloudChangesPartialMatchesEnabled:
        '控制是否显示与当前会话部分匹配的云更改。',
      'continue edit session in local folder': '在本地文件夹中打开',
      'continue with cloud changes': '选择是否将工作更改带上。',
      'continue working on': '继续处理...',
      'continueEditSession.openLocalFolder.title.v2':
        '选择要继续在其中工作的本地文件夹',
      continueEditSessionExtPoint: '提供用于在其他环境中继续当前编辑会话的选项',
      'continueEditSessionExtPoint.command':
        "要执行的命令的标识符。必须在 'commands'-section 中声明该命令，并返回一个 URI，表示可以继续执行当前编辑会话的其他环境。",
      'continueEditSessionExtPoint.description':
        '选项的文档页面的 URL 或返回此 URL 的命令。',
      'continueEditSessionExtPoint.group': '此项所属的组。',
      'continueEditSessionExtPoint.qualifiedName':
        '此项的完全限定名称，用于在菜单中显示。',
      'continueEditSessionExtPoint.remoteGroup': '此项在远程指示器中所属的组。',
      'continueEditSessionExtPoint.when': '此条件必须为 true 才能显示此项。',
      'continueEditSessionItem.builtin': '内置',
      'continueEditSessionItem.openInLocalFolder.v2': '在本地文件夹中打开',
      'continueEditSessionPick.title.v2':
        '选择开发环境以继续在以下位置处理 {0}',
      'continueOn.installAdditional': '安装其他开发环境选项',
      continueOnCloudChanges:
        '控制在使用“继续工作”时是否提示用户将工作更改存储在云中。',
      'continueOnCloudChanges.off':
        '除非用户已启用云更改，否则请勿通过“继续工作”将工作更改存储在云中。',
      'continueOnCloudChanges.promptForAuth':
        '通过“继续工作”，提示用户登录以在云中存储工作更改。',
      'continueWorkingOn.existingLocalFolder': '继续在现有本地文件夹中工作',
      editSessionPartialMatch:
        '你在此工作区的云中有待处理的工作更改。是否要恢复它们?',
      learnMoreTooltip: '了解详细信息',
      'no cloud changes': '没有从云中恢复的更改。',
      'no cloud changes for ref': '无法从云中恢复 ID {0} 的更改。',
      'no working changes to store':
        '已跳过在云中存储工作更改，因为没有要存储的编辑。',
      'payload failed': '无法存储工作更改。',
      'payload too large': '你的工作更改超出了大小限制，无法存储。',
      resume: '继续',
      'resume cloud changes': '从序列化数据继续更改',
      'resume edit session warning 1':
        '从云中恢复工作更改将覆盖 {0}。是否要继续?',
      'resume edit session warning many':
        '从云中恢复工作更改将覆盖以下 {0} 文件。是否要继续?',
      'resume failed': '无法从云中恢复工作更改。',
      'resume latest cloud changes': '从云恢复最新更改',
      'resuming working changes window': '正在恢复工作更改...',
      'show cloud changes': '显示云更改',
      'show log': '显示日志',
      'store working changes': '正在存储工作更改...',
      'store working changes in cloud': '在云中存储工作更改',
      'store your working changes': '正在存储工作更改...',
      'storing working changes': '正在存储工作更改...',
      'with cloud changes': '是，继续并进行工作更改',
      'without cloud changes': '否，继续但不进行工作更改',
    },
    'vs/workbench/contrib/editSessions/browser/editSessionsStorageService': {
      'choose account placeholder': '选择要在云中存储工作更改的帐户',
      'delete all cloud changes': '从云中删除所有存储的数据。',
      others: '其他',
      'reset auth.v3': '关闭云更改...',
      'sign in': '打开云更改...',
      'sign in badge': '打开云更改... (1)',
      'sign in using account': '使用 {0} 登录',
      'sign out of cloud changes clear data prompt':
        '是否要禁用在云中存储工作更改?',
      'signed in': '已登录',
    },
    'vs/workbench/contrib/editSessions/browser/editSessionsViews': {
      'cloud changes': '云更改',
      'compare changes': '比较更改',
      'confirm delete all': '是否确定要从云中永久删除所有存储的更改?',
      'confirm delete all detail': ' 无法撤消此操作。',
      'confirm delete detail.v2': ' 无法撤消此操作。',
      'confirm delete.v2': '是否确定要使用 ref {0} 永久删除工作更改?',
      'local copy': '本地副本',
      noStoredChanges: '云中没有要显示的已存储更改。\r\n{0}',
      'open file': '打开文件',
      storeWorkingChangesTitle: '存储工作更改',
      'workbench.editSessions.actions.delete.v2': '删除工作更改',
      'workbench.editSessions.actions.deleteAll': '从云中删除所有工作更改',
      'workbench.editSessions.actions.resume.v2': '继续工作更改',
      'workbench.editSessions.actions.store.v2': '存储工作更改',
    },
    'vs/workbench/contrib/editSessions/common/editSessions': {
      'cloud changes': '云更改',
      editSessionViewIcon: '云更改视图的视图图标。',
    },
    'vs/workbench/contrib/editSessions/common/editSessionsLogService': {
      cloudChangesLog: '云更改',
    },
    'vs/workbench/contrib/emmet/browser/actions/expandAbbreviation': {
      expandAbbreviationAction: 'Emmet: 展开缩写',
      miEmmetExpandAbbreviation: 'Emmet: 展开缩写(&&X)',
    },
    'vs/workbench/contrib/experiments/browser/experiments.contribution': {
      'workbench.enableExperiments':
        '从 Microsoft 联机服务中获取要进行的实验。',
    },
    'vs/workbench/contrib/extensions/browser/abstractRuntimeExtensionsEditor': {
      'copy id': '副本 ID ({0})',
      disable: '禁用',
      'disable workspace': '禁用(工作区)',
      errors: '{0} 个未捕获的错误',
      extensionActivating: '正在激活扩展...',
      languageActivation: '因你打开 {0} 文件而被 {1} 激活',
      runtimeExtensions: '运行时扩展',
      showRuntimeExtensions: '显示正在运行的扩展',
      starActivation: '已在启动时由 {0} 激活',
      startupFinishedActivation: '启动完成后已由 {0} 激活',
      'unresponsive.title': '扩展已导致扩展主机冻结。',
      workspaceContainsFileActivation:
        '已由 {1} 激活，因为你的工作区中存在文件 {0}',
      workspaceContainsGlobActivation:
        '已由 {1} 激活，因为你的工作区中存在与 {0} 匹配的文件',
      workspaceContainsTimeout: '因搜索 {0} 耗时太长而被 {1} 激活',
      workspaceGenericActivation: '已由 {1} 在 {0} 时激活',
    },
    'vs/workbench/contrib/extensions/browser/configBasedRecommendations': {
      exeBasedRecommendation: '根据当前工作区的配置，建议使用此扩展',
    },
    'vs/workbench/contrib/extensions/browser/deprecatedExtensionsChecker': {
      'deprecated extensions':
        '你已安装弃用的扩展。我们建议查看它们并迁移到替代项。',
      neverShowAgain: '不再显示',
      showDeprecated: '显示已弃用的扩展',
    },
    'vs/workbench/contrib/extensions/browser/exeBasedRecommendations': {
      exeBasedRecommendation: '由于你已安装 {0}，建议使用此扩展。',
    },
    'vs/workbench/contrib/extensions/browser/extensionEditor': {
      'Changelog title': '更改日志',
      'JSON Validation': 'JSON 验证({0})',
      Marketplace: '市场',
      'Marketplace Info': '详细信息',
      'Notebook id': 'ID',
      'Notebook mimetypes': 'Mimetypes',
      'Notebook name': '名称',
      'Notebook renderer name': '名称',
      NotebookRenderers: '笔记本呈现器({0})',
      Notebooks: 'Notebooks({0})',
      'Readme title': '自述文件',
      activatedBy: '激活者:',
      'activation events': '激活事件({0})',
      'activation reason': '激活事件:',
      'activation time': '激活时间:',
      authentication: '身份验证({0})',
      'authentication.id': 'ID',
      'authentication.label': '标签',
      builtin: '内置',
      categories: '类别',
      changelog: '更改日志',
      changelogtooltip: '扩展的更新历史，显示扩展的 "CHANGELOG.md" 文件。',
      codeActions: '代码操作({0})',
      'codeActions.description': '说明',
      'codeActions.kind': '种类',
      'codeActions.languages': '语言',
      'codeActions.title': '标题',
      colorId: 'ID',
      colorThemes: '颜色主题 ({0})',
      colors: '颜色 ({0})',
      'command name': 'ID',
      'command title': '标题',
      commands: '命令({0})',
      contributions: '功能贡献',
      contributionstooltip: '包含此扩展向 VS Code 编辑器提供的功能',
      customEditors: '自定义编辑器({0})',
      'customEditors filenamePattern': '文件名模式',
      'customEditors priority': '优先级',
      'customEditors view type': '视图类型',
      'debugger name': '名称',
      'debugger type': '类型',
      debuggers: '调试程序({0})',
      default: '默认值',
      defaultDark: '深色默认',
      defaultHC: '高对比度默认',
      defaultLight: '浅色默认',
      dependencies: '依赖项',
      dependenciestooltip: '包含此扩展依赖的扩展',
      description: '说明',
      details: '细节',
      detailstooltip: '扩展详细信息，显示扩展的 "README.md" 文件。',
      'extension pack': '扩展包({0})',
      'extension version': '扩展版本',
      extensionpack: '扩展包',
      extensionpacktooltip: '列出将与此扩展一起安装的扩展',
      'file extensions': '文件扩展名',
      fileMatch: '匹配文件',
      find: '查找',
      'find next': '查找下一个',
      'find previous': '查找前一个',
      grammar: '语法',
      iconThemes: '图标主题 ({0})',
      id: '标识符',
      'install count': '安装计数',
      'keyboard shortcuts': '键盘快捷方式',
      'language id': 'ID',
      'language name': '名称',
      languages: '语言({0})',
      'last released': '上次发布时间',
      'last updated': '上次更新时间',
      license: '许可证',
      localizations: '本地化 ({0})',
      'localizations language id': '语言 ID',
      'localizations language name': '语言名称',
      'localizations localized language name': '语言本地名称',
      menuContexts: '菜单上下文',
      messages: '消息({0})',
      name: '扩展名',
      noChangelog: '无可用的更改日志。',
      noContributions: '没有发布内容',
      noDependencies: '没有依赖项',
      noReadme: '无可用自述文件。',
      noStatus: '无可用状态。',
      'not yet activated': '尚未激活。',
      preRelease: '预发布',
      preview: '预览版',
      productThemes: '产品图标主题({0})',
      published: '已发布',
      publisher: '发布服务器',
      rating: '评分',
      repository: '仓库',
      resources: '扩展资源',
      runtimeStatus: '运行时状态',
      'runtimeStatus description': '扩展运行时状态',
      schema: '结构',
      'setting name': 'ID',
      settings: '设置({0})',
      snippets: '片段',
      startup: '启动',
      'uncaught errors': '未捕获的错误({0})',
      'view container id': 'ID',
      'view container location': '位置',
      'view container title': '标题',
      'view id': 'ID',
      'view location': '位置',
      'view name': '名称',
      viewContainers: '视图容器 ({0})',
      views: '视图 ({0})',
    },
    'vs/workbench/contrib/extensions/browser/extensionEnablementWorkspaceTrustTransitionParticipant':
      {
        'restartExtensionHost.reason': '由于工作区信任更改，正在重启扩展主机。',
      },
    'vs/workbench/contrib/extensions/browser/extensionRecommendationNotificationService':
      {
        exeRecommended: '你的系统上安装了 {0}。是否要为其安装推荐的 {1}?',
        extensionFromPublisher: '来自 {1} 的 "{0}" 扩展',
        extensionsFromMultiplePublishers: '来自 {0}、{1} 和其他的扩展',
        extensionsFromPublisher: '来自 {0} 的扩展',
        extensionsFromPublishers: '来自 {0} 和 {1} 的扩展',
        ignoreAll: '是，全部忽略',
        ignoreExtensionRecommendations: '是否要忽略所有扩展建议?',
        install: '安装',
        'install and do no sync': '安装(不同步)',
        neverShowAgain: '不再显示',
        no: '否',
        recommended: '是否要为 {1} 安装推荐的 {0}?',
        'show recommendations': '显示建议',
        'this repository': '此存储库',
      },
    'vs/workbench/contrib/extensions/browser/extensions.contribution': {
      InstallFromVSIX: '从 VSIX 安装…',
      'InstallVSIXAction.reloadNow': '立即重载',
      'InstallVSIXAction.success': '已完成从 VSIX 安装 {0} 扩展的过程。',
      'InstallVSIXAction.successReload':
        '已完成从 VSIX 安装 {0} 扩展的过程。请重新加载 Visual Studio Code 以启用它。',
      all: '所有扩展',
      builtin: '扩展“{0}”是内置扩展，无法安装',
      'builtin filter': '内置',
      checkForUpdates: '检查扩展更新',
      clearExtensionsSearchResults: '清除扩展搜索结果',
      'configure auto updating extensions': '自动更新扩展',
      'configureExtensionsAutoUpdate.all': '所有扩展',
      'configureExtensionsAutoUpdate.enabled': '仅限已启用的扩展',
      'configureExtensionsAutoUpdate.none': '无',
      disableAll: '禁用所有已安装的扩展',
      disableAllWorkspace: '禁用此工作区的所有已安装的扩展',
      disableAutoUpdate: '为所有扩展禁用自动更新',
      'disabled filter': '已禁用',
      enableAll: '启用所有扩展',
      enableAllWorkspace: '启用这个工作区的所有扩展',
      enableAutoUpdate: '为所有扩展启用自动更新',
      enabled: '仅限已启用的扩展',
      'enabled filter': '已启用',
      extension: '扩展',
      'extension updates filter': '更新',
      extensionInfoDescription: '说明: {0}',
      extensionInfoId: 'ID: {0}',
      extensionInfoName: '名称: {0}',
      extensionInfoPublisher: '发布者: {0}',
      extensionInfoVSMarketplaceLink: 'VS Marketplace 链接: {0}',
      extensionInfoVersion: '版本: {0}',
      extensionUpdates: '显示扩展更新',
      extensions: '扩展',
      'extensions.affinity': '配置要在其他扩展主机进程中执行的扩展。',
      'extensions.autoUpdate':
        '控制扩展的自动更新行为。更新是从 Microsoft 联机服务中获取的。',
      'extensions.autoUpdate.enabled':
        '仅对启用的扩展自动下载和安装更新，但忽略这些更新。禁用的扩展不会自动更新。',
      'extensions.autoUpdate.false': '扩展不会自动更新。',
      'extensions.autoUpdate.true':
        '将忽略除这些更新之外的所有扩展自动下载和安装更新。',
      'extensions.supportUntrustedWorkspaces':
        '替代扩展的不受信任的工作区支持。将始终启用使用 “true” 的扩展。将始终启用使用 “limited” 的扩展，并且扩展将隐藏需要信任的功能。仅当工作区受信任时才会启用使用 “false” 的扩展。',
      'extensions.supportUntrustedWorkspaces.false':
        '只有在工作区受信任时才会启用扩展。',
      'extensions.supportUntrustedWorkspaces.limited':
        '将始终启用扩展，并且扩展将隐藏需要信任的功能。',
      'extensions.supportUntrustedWorkspaces.supported':
        '定义扩展的不受信任的工作区支持设置。',
      'extensions.supportUntrustedWorkspaces.true': '将始终启用扩展。',
      'extensions.supportUntrustedWorkspaces.version':
        '定义应应用替代的扩展的版本。如果未指定，则将在独立于扩展版本的情况下应用替代。',
      'extensions.supportVirtualWorkspaces': '替代扩展的虚拟工作区支持。',
      extensionsCheckUpdates:
        '启用后，将自动检查扩展更新。若扩展存在更新，将在“扩展”视图中将其标记为过时扩展。更新将从 Microsoft 联机服务中获取。',
      extensionsCloseExtensionDetailsOnViewChange:
        '启用后，将在离开“扩展”视图时，自动关闭扩展详细信息页面。',
      extensionsConfigurationTitle: '扩展',
      extensionsDeferredStartupFinishedActivation:
        '启用后，将在超时后激活声明“onStartupFinished”激活事件的扩展。',
      extensionsIgnoreRecommendations: '启用后，将不会显示扩展建议的通知。',
      extensionsShowRecommendationsOnlyOnDemand_Deprecated:
        '已弃用此设置。使用 extensions.ignoreRecommendations 设置来控制建议通知。默认使用“扩展”视图的可见性操作来隐藏“建议”视图。',
      extensionsWebWorker: '启用 Web Worker 扩展主机。',
      'extensionsWebWorker.auto':
        'Web 辅助角色扩展主机将在 Web 扩展需要时启动。',
      'extensionsWebWorker.false': 'Web 辅助角色扩展主机将永远不会启动。',
      'extensionsWebWorker.true': 'Web 辅助角色扩展主机将始终启动。',
      'featured filter': '特色',
      'filter by category': '类别',
      filterExtensions: '筛选器扩展…',
      handleUriConfirmedExtensions:
        '当此处列出扩展名时，该扩展名处理URI时将不会显示确认提示。',
      'id required': '扩展 ID 是必需的。',
      importKeyboardShortcutsFroms: '从 - 中迁移键盘快捷方式...',
      'install button': '安装',
      installButton: '安装(&&I)',
      installExtensionFromLocation: '从位置安装扩展...',
      installExtensionQuickAccessHelp: '安装或搜索扩展',
      installExtensionQuickAccessPlaceholder: '键入要安装或搜索的扩展的名称。',
      installExtensions: '安装扩展',
      installFromLocation: '从位置安装扩展',
      installFromLocationPlaceHolder: 'Web 扩展的位置',
      installFromVSIX: '从 VSIX 文件安装',
      installVSIX: '安装扩展 VSIX',
      installWorkspaceRecommendedExtensions: '安装工作区建议的扩展',
      manageExtensionsHelp: '管理扩展',
      manageExtensionsQuickAccessPlaceholder: '按 Enter 以管理扩展。',
      miPreferencesExtensions: '扩展(&&E)',
      miViewExtensions: '扩展(&&X)',
      'most popular filter': '最热门',
      'most popular recommended': '推荐',
      noUpdatesAvailable: '所有扩展都是最新的。',
      none: '无',
      notFound: '找不到扩展“{0}”。',
      notInstalled:
        '未安装扩展“{0}”。请确保你使用包括发布者的完整的扩展 ID，例如 ms-vscode.csharp。',
      'recently published filter': '最近发布',
      recentlyPublishedExtensions: '显示最近发布的扩展',
      refreshExtension: '刷新',
      'show pre-release version': '显示预发布版本',
      'show released version': '显示发布版本',
      showBuiltInExtensions: '显示内置的扩展',
      showDisabledExtensions: '显示已禁用的扩展',
      showEnabledExtensions: '显示启用的扩展',
      showExtensions: '扩展',
      showFeaturedExtensions: '显示特别推荐的扩展',
      showLanguageExtensionsShort: '语言扩展',
      showPopularExtensions: '显示常用的扩展',
      showRecommendedExtensions: '显示推荐的扩展',
      showRecommendedKeymapExtensionsShort: '键映射',
      showWorkspaceUnsupportedExtensions: '显示工作区不支持的扩展',
      'sort by installs': '安装计数',
      'sort by name': '名称',
      'sort by published date': '发布日期',
      'sort by rating': '评分',
      'sort by update date': '更新日期',
      'sorty by': '排序依据',
      updateAll: '更新所有扩展',
      'workbench.extensions.action.addExtensionToWorkspaceRecommendations':
        '添加到工作区建议',
      'workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations':
        '将扩展添加到工作区文件夹“已忽略的建议”',
      'workbench.extensions.action.addToWorkspaceFolderRecommendations':
        '将扩展添加到工作区文件夹“建议”',
      'workbench.extensions.action.addToWorkspaceIgnoredRecommendations':
        '将扩展添加到工作区“已忽略的建议”',
      'workbench.extensions.action.addToWorkspaceRecommendations':
        '将扩展添加到工作区“建议”',
      'workbench.extensions.action.configure': '扩展设置',
      'workbench.extensions.action.configureKeybindings': '扩展键盘快捷方式',
      'workbench.extensions.action.copyExtension': '复制',
      'workbench.extensions.action.copyExtensionId': '复制扩展 ID',
      'workbench.extensions.action.ignoreRecommendation': '忽略建议',
      'workbench.extensions.action.removeExtensionFromWorkspaceRecommendations':
        '从工作区建议中删除',
      'workbench.extensions.action.toggleIgnoreExtension': '同步此扩展',
      'workbench.extensions.action.undoIgnoredRecommendation':
        '撤消已忽略的建议',
      'workbench.extensions.installExtension.arg.decription':
        '扩展 ID 或 VSIX 资源 URI',
      'workbench.extensions.installExtension.description': '安装给定的扩展',
      'workbench.extensions.installExtension.option.context':
        '安装的上下文。这是一个 JSON 对象，可用于将任何信息传递给安装处理程序。例如，“{skipWalkthrough: true}”将在安装时跳过打开演练。',
      'workbench.extensions.installExtension.option.donotSync':
        '启用后，VS Code 在启用“设置同步”时不同步此扩展。',
      'workbench.extensions.installExtension.option.installOnlyNewlyAddedFromExtensionPackVSIX':
        '启用后，VS Code 仅安装来自扩展包 VSIX 的新添加的扩展。仅在安装 VSIX 时才考虑此选项。',
      'workbench.extensions.installExtension.option.installPreReleaseVersion':
        '启用后，VS Code 将安装扩展的预发布版本(如果可用)。',
      'workbench.extensions.search.arg.name': '要在搜索中使用的查询',
      'workbench.extensions.search.description': '搜索特定扩展',
      'workbench.extensions.uninstallExtension.arg.name': '要卸载的扩展的 id',
      'workbench.extensions.uninstallExtension.description': '卸载给定的扩展',
      'workspace unsupported filter': '工作区不受支持',
    },
    'vs/workbench/contrib/extensions/browser/extensions.web.contribution': {
      runtimeExtension: '正在运行扩展',
    },
    'vs/workbench/contrib/extensions/browser/extensionsActions': {
      'Cannot be enabled': '已禁用此扩展，因为它在 {0} web 版中不受支持。',
      'Defined to run in desktop':
        '已禁用此扩展，因为它被定义为仅在桌面上的 {0} 中运行。',
      'Install in local server to enable':
        '此扩展在此工作区中被禁用，因为其被定义为在本地扩展主机中运行。请在本地安装扩展以进行启用。',
      'Install in remote server to enable':
        "此扩展在此工作区中被禁用，因为其被定义为在远程扩展主机中运行。请在 '{0}' 中安装扩展以进行启用。",
      'Install language pack also in remote server':
        '在“{0}”上安装语言包扩展，使其还在此处启用。',
      'Install language pack also locally':
        '在本地安装语言包扩展，使其还在此处启用。',
      'InstallVSIXAction.reloadNow': '立即重新加载',
      'ManageExtensionAction.uninstallingTooltip': '正在卸载',
      'OpenExtensionsFile.failed':
        '无法在 ".vscode" 文件夹({0})内创建 "extensions.json" 文件。',
      'ReinstallAction.success': '扩展 {0} 重新安装完毕。',
      'ReinstallAction.successReload':
        '请重新加载 Visual Studio Code 以完成扩展 {0} 的重新安装。',
      'Show alternate extension': '打开 {0}(&&O)',
      Uninstalling: '正在卸载',
      'VS Code for Web': '{0} Web 版',
      cancel: '取消',
      'cannot be installed':
        '“{0}”扩展在 {1} 中不可用。若要了解详细信息，请单击“详细信息”。',
      'check logs': '有关更多详细信息，请查看[日志]({0})。',
      close: '关闭',
      'configure in settings': '配置设置(&&C)',
      configureWorkspaceFolderRecommendedExtensions:
        '配置建议的扩展(工作区文件夹)',
      configureWorkspaceRecommendedExtensions: '配置建议的扩展(工作区)',
      current: '当前',
      'deprecated message': '此扩展已弃用，因为已不再对其进行维护。',
      'deprecated tooltip': '此扩展已弃用，因为已不再对其进行维护。',
      'deprecated with alternate extension message':
        '此扩展已弃用。请改用 {0}扩展。',
      'deprecated with alternate extension tooltip':
        '此扩展已弃用。请改用 {0}扩展。',
      'deprecated with alternate settings message':
        '此扩展已弃用，因为此功能现在内置于 VS Code。',
      'deprecated with alternate settings tooltip':
        '此扩展已弃用，因为此功能现在内置于 VS Code。配置这些 {0} 以使用此功能。',
      disableAction: '禁用',
      disableForWorkspaceAction: '禁用(工作区)',
      disableForWorkspaceActionToolTip: '仅在此工作区中禁用此扩展',
      disableGloballyAction: '禁用',
      disableGloballyActionToolTip: '禁用此扩展',
      disabled: '已禁用',
      'disabled because of virtual workspace':
        '此扩展已禁用，因为它不支持虚拟工作区。',
      'disabled by environment': '环境已禁用此扩展。',
      'do not sync': '不同步此扩展',
      download: '请尝试手动下载…',
      enableAction: '启用',
      enableForWorkspaceAction: '启用(工作区)',
      enableForWorkspaceActionToolTip: '仅在此工作区中启用此扩展',
      enableGloballyAction: '启用',
      enableGloballyActionToolTip: '启用此扩展',
      enabled: '已启用',
      'enabled by environment': '已启用此扩展，因为在当前环境中需要此扩展。',
      'enabled in web worker':
        '此扩展将在辅助角色扩展主机中弃用，因为这是其首选运行位置。',
      'enabled locally': '此扩展在本地扩展主机中被启用，因为这是其首选运行处。',
      'enabled remotely':
        '此扩展在远程扩展主机中被启用，因为这是其首选运行处。',
      'extension disabled because of dependency':
        '已禁用此扩展，因为它依赖于已禁用的扩展。',
      'extension disabled because of trust requirement':
        '当前工作区不受信任，因此已禁用此扩展。',
      'extension enabled on remote': '已在“{0}”上启用扩展',
      'extension limited because of trust requirement':
        '当前工作区不受信任，因此已限制此扩展的功能。',
      'extension limited because of virtual workspace':
        '此拓展功能受限，因为当前工作区为虚拟。',
      extensionButtonBackground: '扩展操作的按钮背景色。',
      extensionButtonForeground: '扩展操作的按钮前景色。',
      extensionButtonHoverBackground: '扩展操作的按钮背景悬停颜色。',
      extensionButtonProminentBackground:
        '扩展操作中突出按钮背景色(比如安装按钮)。',
      extensionButtonProminentForeground:
        '扩展操作中突出按钮前景色(比如安装按钮)。',
      extensionButtonProminentHoverBackground:
        '扩展操作中突出按钮被悬停时的颜色(比如安装按钮)。',
      extensionButtonSeparator: '扩展操作的按钮分隔符颜色',
      'finished installing': '已成功安装扩展。',
      'globally disabled': '用户已全局禁用此扩展。',
      'globally enabled': '此扩展已全局启用。',
      ignoreExtensionRecommendation: '不再推荐此扩展',
      ignoreExtensionUpdate: '忽略 {0} 更新',
      ignoreUpdates: '忽略更新',
      ignored: '同步时将忽略此扩展',
      'incompatible platform': "'{0}' 扩展在 {1} 中对于 {2} 不可用。",
      install: '安装',
      'install another version': '安装另一个版本…',
      'install anyway': '仍然安装',
      'install browser': '在浏览器中安装',
      'install confirmation': '是否确实要安装“{0}”?',
      'install in remote': '在 {0} 中安装',
      'install local extensions title': '在“{0}”中安装本地扩展',
      'install locally': '本地安装',
      'install operation': '安装 "{0}" 扩展时出错。',
      'install pre-release': '安装预发布版本',
      'install pre-release version': '安装预发布版本',
      'install previous version': '安装特定版本的扩展…',
      'install release version': '安装发布版本',
      'install release version message': '是否要安装发布版本?',
      'install remote extensions': '本地安装远程扩展',
      'install vsix': '下载后，请手动安装“{0}”的 VSIX。',
      installExtensionComplete: '已完成安装扩展 {0}。',
      installExtensionStart:
        '已启动安装扩展 {0}。将打开编辑器，显示此扩展的更多详细信息。',
      installRecommendedExtension: '安装推荐的扩展',
      installVSIX: '从 VSIX 安装...',
      installed: '已安装',
      installing: '正在安装',
      'installing extensions': '正在安装扩展...',
      'learn more': '了解详细信息',
      'learn why': '了解原因',
      'malicious tooltip': '此扩展被报告存在问题。',
      manage: '管理',
      migrate: '迁移',
      'migrate to': '迁移到 {0}',
      migrateExtension: '迁移',
      'more information': '更多信息(&&R)',
      'no local extensions': '没有要安装的扩展。',
      'no versions': '此扩展没有其他版本。',
      'not web tooltip': '“{0}”扩展在 {1} 中不可用。',
      'pre-release': '预发布',
      reinstall: '重新安装扩展...',
      'reload required': '需要重新加载',
      reloadAction: '重新加载',
      'search recommendations': '搜索扩展',
      'select and install local extensions': '在“{0}”中安装本地扩展…',
      'select and install remote extensions': '本地安装远程扩展…',
      'select color theme': '选择颜色主题',
      'select extensions to install': '选择要安装的扩展',
      'select file icon theme': '选择文件图标主题',
      'select product icon theme': '选择产品图标主题',
      selectExtension: '选择扩展',
      selectExtensionToReinstall: '选择要重新安装的扩展',
      selectVersion: '选择要安装的版本',
      settings: '设置',
      showRecommendedExtension: '显示推荐的扩展',
      'signature verification failed':
        '{0} 无法验证 "{1}" 扩展。确定要安装它吗?',
      'switch to pre-release version': '切换到预发布版本',
      'switch to pre-release version tooltip': '切换到此扩展的预发布版本',
      'switch to release version': '切换为发布版本',
      'switch to release version tooltip': '切换到此扩展的发布版本',
      sync: '同步此扩展',
      synced: '已同步此扩展',
      undo: '撤消',
      uninstallAction: '卸载',
      uninstallExtensionComplete:
        '请重新加载 Visual Studio Code 以完成对扩展 {0} 的卸载。',
      uninstallExtensionStart: '开始卸载扩展{0}。',
      uninstalled: '已卸载',
      update: '更新',
      'update operation': '更新 "{0}" 扩展时出错。',
      'update to': '更新到 v{0}',
      updateExtensionComplete: '已完成更新扩展 {0} 到版本 {1}。',
      updateExtensionStart: '已启动更新扩展 {0} 到版本 {1}。',
      updated: '已更新',
      'workbench.extensions.action.clearLanguage': '清除显示语言',
      'workbench.extensions.action.setColorTheme': '设置颜色主题',
      'workbench.extensions.action.setDisplayLanguage': '设置显示语言',
      'workbench.extensions.action.setFileIconTheme': '设置文件图标主题',
      'workbench.extensions.action.setProductIconTheme': '设置产品图标主题',
      'workspace disabled': '用户已为此工作区禁用此扩展。',
      'workspace enabled': '用户已为此工作区启用此扩展。',
    },
    'vs/workbench/contrib/extensions/browser/extensionsActivationProgress': {
      activation: '正在激活扩展...',
    },
    'vs/workbench/contrib/extensions/browser/extensionsCompletionItemsProvider':
      {
        exampleExtension: '示例',
      },
    'vs/workbench/contrib/extensions/browser/extensionsDependencyChecker': {
      'auto install missing deps': '安装缺少的依赖项',
      extensions: '扩展',
      'finished installing missing deps':
        '缺少的依赖项已安装完毕。请立即重新加载窗口。',
      'no missing deps': '没有任何缺少的依赖项待安装。',
      reload: '重新加载窗口',
    },
    'vs/workbench/contrib/extensions/browser/extensionsIcons': {
      activationtimeIcon: '在扩展编辑器中显示带有激活时间消息的图标。',
      clearSearchResultsIcon: '扩展视图中“清除搜索结果”操作的图标。',
      configureRecommendedIcon: '扩展视图中“配置建议的扩展”操作的图标。',
      errorIcon: '在扩展编辑器中显示带有错误消息的图标。',
      extensionsViewIcon: '查看扩展视图的图标。',
      filterIcon: '扩展视图中“筛选器”操作的图标。',
      infoIcon: '扩展编辑器中随信息消息一同显示的图标。',
      installCountIcon: '扩展视图和编辑器中随安装计数一起显示的图标。',
      installLocalInRemoteIcon: '扩展视图中“在远程安装本地扩展”操作的图标。',
      installWorkspaceRecommendedIcon:
        '扩展视图中“安装工作区建议的扩展”操作的图标。',
      manageExtensionIcon: '扩展视图中“管理”操作的图标。',
      preReleaseIcon: '为具有预发布版本的扩展在扩展视图和编辑器中显示的图标。',
      ratingIcon: '扩展视图和编辑器中随评级一起显示的图标。',
      refreshIcon: '扩展视图中“刷新”操作的图标。',
      remoteIcon: '用于在扩展视图和编辑器中指示扩展是远程内容的图标。',
      sponsorIcon: '用于在扩展视图和编辑器中赞助扩展的图标。',
      starEmptyIcon: '扩展编辑器中用于评级的中空星形图标。',
      starFullIcon: '扩展编辑器中用于评级的实心星形图标。',
      starHalfIcon: '扩展编辑器中用于评级的半星图标。',
      syncEnabledIcon: '用于指示扩展已同步的图标。',
      syncIgnoredIcon: '用于指示在同步时忽略扩展的图标。',
      trustIcon: '扩展编辑器中随工作区信任消息一同显示的图标。',
      verifiedPublisher: '用于扩展视图和编辑器中已验证扩展发布服务器的图标。',
      warningIcon: '扩展编辑器中随警告消息一同显示的图标。',
    },
    'vs/workbench/contrib/extensions/browser/extensionsQuickAccess': {
      install: '按 Enter 来安装扩展“{0}”。',
      manage: '按 Enter 来管理扩展。',
      searchFor: '按 Enter 以搜索扩展"{0}"。',
      type: '键入扩展名称进行安装或搜索。',
    },
    'vs/workbench/contrib/extensions/browser/extensionsViewer': {
      'Unknown Extension': '未知扩展:',
      error: '错误',
      extensions: '扩展',
    },
    'vs/workbench/contrib/extensions/browser/extensionsViewlet': {
      availableUpdates: '可用更新',
      builtInThemesExtensions: '主题',
      builtin: '内置',
      builtinFeatureExtensions: '功能',
      builtinProgrammingLanguageExtensions: '编程语言',
      deprecated: '已弃用',
      disabled: '已禁用',
      disabledExtensions: '已禁用',
      enabled: '已启用',
      enabledExtensions: '已启用',
      extensionFound: '找到 1 个扩展。',
      extensionFoundInSection: '在“{0}”小节中找到 1 个扩展。',
      extensionToReload: '{0} 需要重新加载',
      extensionToUpdate: '{0} 需要更新',
      extensionsFound: '找到 {0} 个扩展。',
      extensionsFoundInSection: '在“{1}”小节中找到 {0} 个扩展。',
      extensionsToReload: '{0} 需要重新加载',
      extensionsToUpdate: '{0} 需要更新',
      'install remote in local': '本地安装远程扩展…',
      installed: '已安装',
      'malicious warning': '我们卸载了“{0}”，它被报告存在问题。',
      marketPlace: '商店',
      'open user settings': '打开用户设置',
      otherRecommendedExtensions: '其他推荐',
      popularExtensions: '热门',
      'recently updated': '最近更新',
      recommendedExtensions: '推荐',
      reloadNow: '立即重新加载',
      remote: '远程',
      searchExtensions: '在应用商店中搜索扩展',
      'select and install local extensions': '在“{0}”中安装本地扩展…',
      suggestProxyError:
        '市场返回了 "ECONNREFUSED"。请检查 "http.proxy" 设置。',
      untrustedPartiallySupportedExtensions: '限制在受限模式下',
      untrustedUnsupportedExtensions: '在受限模式下禁用',
      virtualPartiallySupportedExtensions: '限制在虚拟工作区中',
      virtualUnsupportedExtensions: '在虚拟工作区中禁用',
      workspaceRecommendedExtensions: '工作区推荐',
      workspaceUnsupported: '工作区不受支持',
    },
    'vs/workbench/contrib/extensions/browser/extensionsViews': {
      error: '提取扩展时出错。{0}',
      'extension.arialabel.deprecated': '已弃用',
      'extension.arialabel.publihser': '发布服务器 {0}',
      'extension.arialabel.rating': '{1} 用户评了 {0} 星，共 5 星',
      'extension.arialabel.verifiedPublihser': '已验证的发布服务器 {0}',
      extensions: '扩展',
      'no extensions found': '找不到扩展。',
      'no local extensions': '没有要安装的扩展。',
      'offline error': '离线时无法搜索市场，请检查网络连接。',
      'open user settings': '打开用户设置',
      suggestProxyError:
        '市场返回了 "ECONNREFUSED"。请检查 "http.proxy" 设置。',
    },
    'vs/workbench/contrib/extensions/browser/extensionsWidgets': {
      'Show prerelease version': '预发布版本',
      activation: '激活时间',
      dependencies: '显示依赖关系',
      'extensionIcon.sponsorForeground': '扩展发起人的图标颜色。',
      extensionIconStarForeground: '扩展分级的图标颜色。',
      extensionIconVerifiedForeground: '已验证扩展的发布服务器图标颜色。',
      extensionPreReleaseForeground: '预发布扩展的图标颜色。',
      'has prerelease': '此扩展具有可用的 {0}',
      message: '1 条消息',
      messages: '{0} 条消息',
      'pre-release-label': '预发布',
      'publisher verified tooltip': '此发布者已验证 {0} 的所有权',
      ratedLabel: '平均评分: {0} 分(共 5 分)',
      recommendationHasBeenIgnored: '您已选择不接收此扩展的推荐。',
      'remote extension title': '{0} 中的扩展',
      sponsor: '发起人',
      startup: '启动',
      'syncingore.label': '此扩展在同步期间被忽略。',
      'uncaught error': '1 个未捕获错误',
      'uncaught errors': '{0} 个未捕获错误',
      updateRequired: '最新版本:',
    },
    'vs/workbench/contrib/extensions/browser/extensionsWorkbenchService': {
      'Manifest is not found': '未找到清单文件',
      'disable all': '全部禁用',
      'enable locally': '请重载 Visual Studio Code 以在本地启用此扩展。',
      'enable remote': '请重载 Visual Studio Code 以在 {0} 中启用此扩展。',
      incompatible: '无法安装“{0}”扩展，因为它不兼容。',
      'installing extension': '正在安装扩展...',
      'installing named extension': '正在安装 "{0}" 扩展...',
      malicious: '报告称该扩展存在问题。',
      multipleDependentsError:
        '无法单独禁用 "{0}" 扩展。"{1}"、"{2}" 和其他扩展依赖于此扩展。要禁用所有这些扩展吗?',
      'not found': '无法安装扩展“{0}”，因为找不到请求的版本“{1}”。',
      postDisableTooltip: '请重新加载 Visual Studio Code 以禁用此扩展。',
      postEnableTooltip: '请重新加载 Visual Studio Code 以启用此扩展。',
      postUninstallTooltip:
        '请重新加载 Visual Studio Code 以完成此扩展的卸载。',
      postUpdateTooltip: '请重新启动 Visual Studio Code 以完成对此扩展的更新。',
      singleDependentError:
        '无法单独禁用 "{0}" 扩展。"{1}" 扩展依赖于此扩展。要禁用所有这些扩展吗?',
      twoDependentsError:
        '无法单独禁用 "{0}" 扩展。"{1}" 和 "{2}" 扩展依赖于此扩展。要禁用所有这些扩展吗?',
      uninstallingExtension: '正在卸载扩展...',
    },
    'vs/workbench/contrib/extensions/browser/fileBasedRecommendations': {
      dontShowAgainExtension: '不再对“.{0}”文件显示',
      fileBasedRecommendation: '根据你最近打开的文件，建议使用此扩展。',
      languageName: '{0} 语言',
      searchMarketplace: '搜索商店',
      showLanguageExtensions: '商店中有可以对“.{0}”文件提供帮助的扩展。',
    },
    'vs/workbench/contrib/extensions/browser/webRecommendations': {
      reason: '建议将此扩展用于 {0} Web 版',
    },
    'vs/workbench/contrib/extensions/browser/workspaceRecommendations': {
      workspaceRecommendation: '当前工作区的用户建议使用此扩展。',
    },
    'vs/workbench/contrib/extensions/common/extensionsFileTemplate': {
      'app.extension.identifier.errorMessage':
        '预期的格式 "${publisher}.${name}"。例如: "vscode.csharp"。',
      'app.extensions.json.recommendations':
        '向此工作区的用户推荐的扩展列表。扩展的标识符始终为 "${publisher}.${name}"。例如: "vscode.csharp"。',
      'app.extensions.json.title': '扩展',
      'app.extensions.json.unwantedRecommendations':
        '不应向此工作区的用户推荐的扩展列表。扩展的标识符始终为 "${publisher}.${name}"。例如: "vscode.csharp"。',
    },
    'vs/workbench/contrib/extensions/common/extensionsInput': {
      extensionsInputName: '扩展: {0}',
    },
    'vs/workbench/contrib/extensions/common/extensionsUtils': {
      disableOtherKeymapsConfirmation:
        '是否禁用其他按键映射扩展 ({0})，从而避免按键绑定之间的冲突?',
      no: '否',
      yes: '是',
    },
    'vs/workbench/contrib/extensions/common/reportExtensionIssueAction': {
      reportExtensionIssue: '报告问题',
    },
    'vs/workbench/contrib/extensions/common/runtimeExtensionsInput': {
      extensionsInputName: '正在运行的扩展',
    },
    'vs/workbench/contrib/extensions/electron-sandbox/debugExtensionHostAction':
      {
        debugExtensionHost: '启动调试扩展宿主',
        'debugExtensionHost.launch.name': '附加扩展主机',
        restart1: '分析扩展',
        restart2: '需要重启，才能分析扩展。是否要立即重启“{0}”?',
        restart3: '重启(&&R)',
      },
    'vs/workbench/contrib/extensions/electron-sandbox/extensionProfileService':
      {
        profilingExtensionHost: '分析扩展主机',
        profilingExtensionHostTime: '分析扩展主机({0} 秒)',
        restart1: '分析扩展',
        restart2: '需要重启，才能分析扩展。是否要立即重启“{0}”?',
        restart3: '重启(&&R)',
        selectAndStartDebug: '单击可停止分析。',
        'status.profiler': '扩展探查器',
      },
    'vs/workbench/contrib/extensions/electron-sandbox/extensions.contribution':
      {
        runtimeExtension: '正在运行的扩展',
      },
    'vs/workbench/contrib/extensions/electron-sandbox/extensionsActions': {
      cleanUpExtensionsFolder: '清理扩展文件夹',
      openExtensionsFolder: '打开扩展文件夹',
    },
    'vs/workbench/contrib/extensions/electron-sandbox/extensionsAutoProfiler': {
      show: '显示扩展程序',
      'unresponsive-exthost':
        '扩展“{0}”的上一次操作花费时间较长，阻碍了其他扩展的运行。',
    },
    'vs/workbench/contrib/extensions/electron-sandbox/extensionsSlowActions': {
      'attach.msg':
        '这是一个提醒, 以确保您没有忘记将 "{0}" 附加到刚刚创建的问题。',
      'attach.msg2':
        '这是一个提醒, 以确保您没有忘记将 "{0}" 归入现有的性能问题中。',
      'attach.title': '您是否附上了 cpu 配置文件？',
      'cmd.report': '报告问题',
      'cmd.reportOrShow': '性能问题',
      'cmd.show': '显示问题',
    },
    'vs/workbench/contrib/extensions/electron-sandbox/runtimeExtensionsEditor':
      {
        extensionHostProfileStart: '开始分析扩展宿主',
        saveExtensionHostProfile: '保存扩展宿主分析文件',
        'saveprofile.dialogTitle': '保存扩展宿主分析文件',
        'saveprofile.saveButton': '保存',
        stopExtensionHostProfileStart: '停止分析扩展宿主',
      },
    'vs/workbench/contrib/externalTerminal/browser/externalTerminal.contribution':
      {
        'scopedConsoleAction.Integrated': '在集成终端中打开',
        'scopedConsoleAction.external': '在外部终端中打开',
        'scopedConsoleAction.wt': '在 Windows 终端中打开',
      },
    'vs/workbench/contrib/externalTerminal/electron-sandbox/externalTerminal.contribution':
      {
        'explorer.openInTerminalKind':
          '在终端中从资源管理器打开文件时，确定将启动哪种类型的终端',
        globalConsoleAction: '打开新的外部终端',
        'terminal.explorerKind.both': '将其他两个一起使用。',
        'terminal.explorerKind.external': '使用设定的外部终端。',
        'terminal.explorerKind.integrated': '使用 VS Code 的集成终端。',
        'terminal.external.linuxExec': '自定义要在 Linux 上运行的终端。',
        'terminal.external.osxExec': '定义在 macOS 上运行的终端应用程序。',
        'terminal.external.windowsExec': '自定义要在 Windows 上运行的终端。',
        terminalConfigurationTitle: '外部终端',
      },
    'vs/workbench/contrib/externalUriOpener/common/configuration': {
      externalUriOpeners: '配置开启程序以用于外部 URI (即 http、https)。',
      'externalUriOpeners.defaultId': '使用 VS Code 的标准打开器打开。',
      'externalUriOpeners.uri':
        '将 URI 模式映射到开启程序 ID。\r\n示例模式: \r\n{0}',
    },
    'vs/workbench/contrib/externalUriOpener/common/externalUriOpenerService': {
      selectOpenerConfigureTitle: '配置默认开启程序…',
      selectOpenerDefaultLabel: '在默认浏览器中打开',
      'selectOpenerDefaultLabel.web': '在新浏览器窗口中打开',
      selectOpenerPlaceHolder: '你希望以何种方式打开: {0}',
    },
    'vs/workbench/contrib/feedback/browser/feedback': {
      'character left': '剩余字符',
      'characters left': '剩余字符',
      close: '关闭',
      feedbackTextInput: '告诉我们您的反馈意见',
      frownCaption: '负面反馈情绪',
      'label.sendASmile': '通过 Tweet 向我们发送反馈。',
      'other ways to contact us': '联系我们的其他方式',
      patchedVersion1: '安装已损坏。',
      patchedVersion2: '如果提交了 bug，请指定此项。',
      'request a missing feature': '请求缺失功能',
      sentiment: '您的体验如何?',
      showFeedback: '在状态栏中显示反馈图标',
      smileCaption: '正面反馈情绪',
      'submit a bug': '提交 bug',
      'tell us why': '告诉我们原因?',
      tweet: '推文',
      tweetFeedback: 'Tweet 反馈',
    },
    'vs/workbench/contrib/feedback/browser/feedbackStatusbarItem': {
      'status.feedback': 'Tweet 反馈',
      'status.feedback.name': '反馈',
    },
    'vs/workbench/contrib/files/browser/editors/binaryFileEditor': {
      binaryFileEditor: '二进制文件查看器',
    },
    'vs/workbench/contrib/files/browser/editors/textFileEditor': {
      createFile: '创建文件',
      fileIsDirectory: '此文件未显示在文本编辑器中，因为它是一个目录。',
      fileTooLargeForHeapErrorWithSize:
        '此文件未显示在文本编辑器中，因为它非常大({0})。',
      fileTooLargeForHeapErrorWithoutSize:
        '此文件未显示在文本编辑器中，因为它非常大。',
      openFolder: '打开文件夹',
      reveal: '显示文件夹',
      textFileEditor: '文本文件编辑器',
      unavailableResourceErrorEditorText:
        '由于找不到该文件，因此无法打开编辑器。',
    },
    'vs/workbench/contrib/files/browser/editors/textFileSaveErrorHandler': {
      compareChanges: '比较',
      configure: '配置',
      discard: '放弃',
      dontShowAgain: '不再显示',
      genericSaveError: '未能保存“{0}”: {1}',
      learnMore: '了解详细信息',
      overwrite: '覆盖',
      overwriteElevated: '以管理员身份覆盖...',
      overwriteElevatedSudo: '以超级用户身份覆盖...',
      permissionDeniedSaveError:
        '无法保存“{0}”: 权限不足。选择“以管理员身份覆盖”可作为管理员重试。',
      permissionDeniedSaveErrorSudo:
        '保存 "{0}"失败: 权限不足。选择 "以超级用户身份重试" 以超级用户身份重试。',
      readonlySaveError:
        '未能保存 "{0}": 文件是只读的。可选择 "覆盖" 以尝试使其可写。',
      readonlySaveErrorAdmin:
        '未能保存 "{0}": 文件是只读的。以管理员身份选择 "以管理员身份覆盖" 重试。',
      readonlySaveErrorSudo:
        '保存"{0}"失败: 文件为只读。选择“覆盖为Sudo”以用超级用户身份重试。',
      retry: '重试',
      saveConflictDiffLabel: '{0} (在文件中) ↔ {1} (在 {2} 中) - 解决保存冲突',
      saveElevated: '以管理员身份重试...',
      saveElevatedSudo: '以用户…重试。',
      staleSaveError:
        '无法保存"{0}": 文件的内容较新。请将您的版本与文件内容进行比较，或用您的更改覆盖文件内容。',
      userGuide:
        '通过编辑器工具栏中的操作，可撤消所做的更改，也可使用所做的更改覆盖文件的内容。',
    },
    'vs/workbench/contrib/files/browser/explorerViewlet': {
      addAFolder: '添加文件夹',
      explore: '资源管理器',
      explorerViewIcon: '查看资源管理器视图的图标。',
      folders: '文件夹',
      miViewExplorer: '资源管理器(&&E)',
      noFolderButEditorsHelp:
        '尚未打开文件夹。\r\n{0}\r\n打开文件夹将关闭所有当前打开的编辑器。要使其保持打开状态，请改为 {1}。',
      noFolderHelp: '尚未打开文件夹。\r\n{0}',
      noFolderHelpWeb: '尚未打开文件夹。\r\n{0}\r\n{1}',
      noWorkspaceHelp: '尚未将文件夹添加到工作区。\r\n{0}',
      openEditorsIcon: '查看打开编辑器视图的图标。',
      openFolder: '打开文件夹',
      openRecent: '打开最近的文件',
      remoteNoFolderHelp: '已连接到远程。\r\n{0}',
    },
    'vs/workbench/contrib/files/browser/fileActions': {
      binFailed: '无法删除到回收站。是否永久删除？',
      clipboardComparisonLabel: '剪贴板 ↔ {0}',
      closeGroup: '关闭组',
      compareNewUntitledTextFiles: '比较新的无标题文本文件',
      compareWithClipboard: '比较活动文件与剪贴板',
      confirmDeleteMessageFile: '是否确定要永久删除“{0}”?',
      confirmDeleteMessageFilesAndDirectories:
        '是否确定要永久删除以下 {0} 个文件或文件夹 (包括其内容)?',
      confirmDeleteMessageFolder: '是否确定要永久删除“{0}”及其内容?',
      confirmDeleteMessageMultiple: '是否确定要永久删除以下 {0} 个文件?',
      confirmDeleteMessageMultipleDirectories:
        '是否确定要永久删除以下 {0} 个目录及其内容?',
      confirmMoveTrashMessageFile: '是否确实要删除“{0}”?',
      confirmMoveTrashMessageFilesAndDirectories:
        '是否确定要删除以下 {0} 个文件或文件夹 (包括其内容)?',
      confirmMoveTrashMessageFolder: '是否确实要删除“{0}”及其内容?',
      confirmMoveTrashMessageMultiple: '是否确定要删除以下 {0} 个文件?',
      confirmMoveTrashMessageMultipleDirectories:
        '是否确定要删除以下 {0} 个文件夹及其内容?',
      confirmOverwrite:
        '目标文件夹中已存在名称为 "{0}" 的文件或文件夹。是否要替换它?',
      copyBulkEdit: '粘贴 {0} 个文件',
      copyFile: '复制',
      copyFileBulkEdit: '粘贴{0}',
      copyingBulkEdit: '正在复制 {0} 个文件',
      copyingFileBulkEdit: '正在复制 {0}',
      createBulkEdit: '创建 {0}',
      creatingBulkEdit: '正在创建 {0}',
      delete: '删除',
      deleteBulkEdit: '删除 {0} 个文件',
      deleteButtonLabel: '删除(&&D)',
      deleteButtonLabelRecycleBin: '移动到回收站(&&M)',
      deleteButtonLabelTrash: '移动到废纸篓(&&M)',
      deleteFileBulkEdit: '删除{0}',
      deletePermanentlyButtonLabel: '永久删除(&&D)',
      deletingBulkEdit: '正在删除 {0} 个文件',
      deletingFileBulkEdit: '正在删除 {0}',
      dirtyMessageFileDelete: '你正在删除具有未保存更改的 {0}。是否要继续?',
      dirtyMessageFilesDelete: '你删除的文件中具有未保存的更改。是否继续?',
      dirtyMessageFolderDelete:
        '你正在删除文件夹 {0}，其中 {1} 个文件中有未保存的更改。是否要继续?',
      dirtyMessageFolderOneDelete:
        '你正在删除文件夹 {0}，但其中 1 个文件中有未保存的更改。是否要继续?',
      dirtyWarning: '如果不保存，你的更改将丢失。',
      doNotAskAgain: '不再询问',
      download: '下载...',
      emptyFileNameError: '必须提供文件或文件夹名。',
      fileDeleted: '复制后要粘贴的文件已被删除或移动。{0}',
      fileIsAncestor: '粘贴的项目是目标文件夹的上级',
      fileNameExistsError: '此位置已存在文件或文件夹 **{0}**。请选择其他名称。',
      fileNameStartsWithSlashError: '文件或文件夹名称不能以斜杠开头。',
      fileNameWhitespaceWarning: '在文件或文件夹名称中检测到的前导或尾随空格。',
      focusFilesExplorer: '聚焦到“文件资源管理器”视图',
      globalCompareFile: '比较活动文件与...',
      invalidFileNameError:
        '名称 **{0}** 作为文件或文件夹名无效。请选择其他名称。',
      irreversible: '此操作不可逆!',
      moveBulkEdit: '移动 {0} 个文件',
      moveFileBulkEdit: '移动 {0}',
      movingBulkEdit: '正在移动 {0} 个文件',
      movingFileBulkEdit: '正在移动 {0}',
      newFile: '新建文件...',
      newFolder: '新建文件夹...',
      openFileInNewWindow: '在新窗口中打开活动文件',
      'openFileToShowInNewWindow.unsupportedschema':
        '活动编辑器必须包含可打开的资源。',
      pasteFile: '粘贴',
      rename: '重命名...',
      renameBulkEdit: '将 {0} 重命名为 {1}',
      renamingBulkEdit: '将 {0} 重命名为 {1}',
      replaceButtonLabel: '替换(&&R)',
      resetActiveEditorReadonlyInSession: '在会话中重置活动编辑器只读',
      restore: '可以使用“撤消”命令还原此文件',
      restorePlural: '可以使用“撤消”命令还原这些文件',
      retry: '重试',
      retryButtonLabel: '重试(&&R)',
      saveAllInGroup: '全部保存在组中',
      setActiveEditorReadonlyInSession: '在会话中设置活动编辑器只读',
      setActiveEditorWriteableInSession: '在会话中设置活动编辑器可写',
      showInExplorer: '在资源管理器视图中显示活动文件',
      toggleActiveEditorReadonlyInSession: '在会话中切换活动编辑器只读',
      toggleAutoSave: '切换开关自动保存',
      trashFailed: '无法删除到废纸篓。是否永久删除？',
      undoBin: '您可以从回收站还原此文件。',
      undoBinFiles: '您可以从回收站还原这些文件。',
      undoTrash: '您可以从回收站还原此文件。',
      undoTrashFiles: '您可以从回收站还原这些文件。',
      upload: '上传...',
    },
    'vs/workbench/contrib/files/browser/fileActions.contribution': {
      acceptLocalChanges: '使用所做的更改并覆盖文件内容',
      close: '关闭',
      closeAll: '全部关闭',
      closeOthers: '关闭其他',
      closeSaved: '关闭已保存',
      compareActiveWithSaved: '比较活动与已保存的文件',
      compareSelected: '将已选项进行比较',
      compareSource: '选择以进行比较',
      compareWithSaved: '与已保存文件比较',
      compareWithSelected: '与已选项目进行比较',
      copyPath: '复制路径',
      copyPathOfActive: '复制活动文件的路径',
      copyRelativePath: '复制相对路径',
      copyRelativePathOfActive: '复制活动文件的相对路径',
      cut: '剪切',
      deleteFile: '永久删除',
      explorerOpenWith: '打开方式…',
      miAutoSave: '自动保存(&&U)',
      miCloseEditor: '关闭编辑器(&&C)',
      miGotoFile: '转到文件(&&F)...',
      miNewFile: '新建文本文件(&&N)',
      miRevert: '还原文件(&&V)',
      miSave: '保存(&&S)',
      miSaveAll: '全部保存(&&L)',
      miSaveAs: '另存为(&&A)...',
      newFile: '新建文本文件',
      openFile: '打开文件...',
      openToSide: '在侧边打开',
      reopenWith: '重新打开编辑器的方式...',
      revealInSideBar: '在资源管理器视图中显示',
      revert: '还原文件',
      revertLocalChanges: '放弃所做的更改并恢复到文件内容',
      saveAll: '全部保存',
      saveAllInGroup: '全部保存在组中',
      saveFiles: '保存所有文件',
    },
    'vs/workbench/contrib/files/browser/fileCommands': {
      discard: '放弃',
      genericRevertError: '未能还原“{0}”: {1}',
      genericSaveError: '未能保存“{0}”: {1}',
      modifiedLabel: '{0} (在文件中) ↔ {1}',
      'newFileCommand.saveLabel': '创建文件',
      retry: '重试',
    },
    'vs/workbench/contrib/files/browser/fileConstants': {
      newUntitledFile: '新的无标题文本文件',
      removeFolderFromWorkspace: '将文件夹从工作区删除',
      save: '保存',
      saveAll: '全部保存',
      saveAs: '另存为...',
      saveWithoutFormatting: '保存但不格式化',
    },
    'vs/workbench/contrib/files/browser/fileImportExport': {
      addFolder: '将文件夹添加到工作区(&&A)',
      addFolders: '将文件夹添加到工作区(&&A)',
      chooseWhereToDownload: '选择下载位置',
      confirmManyOverwrites:
        '目标文件夹中已存在以下 {0} 个文件和/或文件夹。是否要替换它们?',
      confirmOverwrite:
        '目标文件夹中已存在名称为"{0}"的文件或文件夹。是否要替换它？',
      copyFolder: '复制文件夹(&&C)',
      copyFolders: '复制文件夹(&&C)',
      copyfolder: '确定要复制“{0}”吗?',
      copyfolders: '确定要复制文件夹吗?',
      copyingFile: '正在复制 {0}',
      copyingFiles: '正在复制...',
      copyingnFile: '正在复制 {0} 资源',
      downloadBulkEdit: '下载 {0}',
      downloadButton: '下载',
      downloadProgressLarge: '{0} ({1}/{2}，{3}/秒)',
      downloadProgressSmallMany: '{0} 个文件，共 {1} 个({2}/秒)',
      downloadingBulkEdit: '正在下载 {0}',
      downloadingFiles: '正在下载',
      dropFolder: '是否要复制“{0}”或将“{0}”作为文件夹添加工作区?',
      dropFolders: '是否要复制文件夹或将其添加到工作区?',
      fileInaccessible: '无法访问已删除文件以进行导入。',
      filesInaccessible: '无法访问部分或所有已删除文件，以进行导入。',
      importFile: '导入{0}',
      importnFile: '导入 {0} 个资源',
      irreversible: '此操作不可逆!',
      overwrite: '覆盖 {0}',
      overwriting: '正在覆盖 {0}',
      replaceButtonLabel: '替换(&&R)',
      uploadProgressLarge: '{0} ({1}/{2}，{3}/秒)',
      uploadProgressSmallMany: '{0} 个文件，共 {1} 个({2}/秒)',
      uploadingFiles: '正在上传',
    },
    'vs/workbench/contrib/files/browser/files.contribution': {
      askUser: '将拒绝保存并请求手动解决保存冲突。',
      associations:
        '配置语言的文件关联(如 `"*.extension": "html"`)。这些关联的优先级高于已安装语言的默认关联。',
      autoGuessEncoding:
        '启用后，编辑器将尝试在打开文件时猜测字符集编码。还可以按语言配置此设置。请注意，文本搜索不遵守此设置。仅遵守 {0}。',
      autoReveal: '控制资源管理器是否应在打开文件时自动显示并选择文件。',
      'autoReveal.focusNoScroll': '文件不会滚动到视图中，但仍会获得焦点。',
      'autoReveal.off': '不会显示和选择文件。',
      'autoReveal.on': '将显示和选择文件。',
      autoRevealExclude:
        '配置路径或 [glob 模式](https://aka.ms/vscode-glob-patterns)，以便在打开文件和文件夹时避免在资源管理器中显示和选择这些文件和文件夹。glob 模式的计算结果始终是相对于工作区文件夹路径所在的位置，除非它们是绝对路径。',
      autoSave:
        '控制具有未保存更改的编辑器的 [自动保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)。',
      autoSaveDelay:
        '控制自动保存具有未保存更改的编辑器之前的延迟(以毫秒为单位)。只有当 `#files.autoSave#` 设置为 `{0}` 时才适用。',
      binaryFileEditor: '二进制文件编辑器',
      compressSingleChildFolders:
        '控制资源管理器是否应以紧凑形式呈现文件夹。在此形式中，单个子文件夹将被压缩在组合的树元素中。例如，对 Java 包结构非常有用。',
      confirmDelete: '控制资源管理器是否应在通过回收站删除文件时要求确认。',
      confirmDragAndDrop:
        '控制资源管理器是否应在通过拖放移动文件或文件夹时要求确认。',
      confirmUndo: '控制资源管理器是否应在撤消时要求确认。',
      copyRelativePathSeparator: '复制相对文件路径时使用的路径分隔字符。',
      'copyRelativePathSeparator.auto': '使用操作系统特定路径分隔字符。',
      'copyRelativePathSeparator.backslash': '使用反斜杠作为路径分隔字符。',
      'copyRelativePathSeparator.slash': '使用斜杠作为路径分隔字符。',
      defaultLanguage:
        '分配给新文件的默认语言标识符。如果配置为 "${activeEditorLanguage}"，将使用当前活动文本编辑器(如果有)的语言标识符。',
      defaultPathErrorMessage:
        '文件对话框的默认路径必须是绝对路径(例如 C:\\\\myFolder 或 /myFolder)。',
      disabled:
        '禁用增量命名。如果存在两个具有相同名称的文件，系统将提示你覆盖现有文件。',
      enableDragAndDrop:
        '控制资源管理器是否应允许通过拖放来移动文件和文件夹。此设置仅影响从浏览器内部进行拖放。',
      enableUndo: '控制资源管理器是否应支持撤消文件和文件夹操作。',
      'enableUndo.default': '资源管理器将在破坏性撤消操作之前进行提示。',
      'enableUndo.light': '聚焦时，资源管理器将不会在撤消操作之前进行提示。',
      'enableUndo.verbose': '资源管理器将在所有撤消操作之前进行提示。',
      encoding:
        '在读取和写入文件时使用的默认字符集编码。可以按语言对此项进行配置。',
      eol: '默认行尾字符。',
      'eol.CRLF': 'CRLF',
      'eol.LF': 'LF',
      'eol.auto': '使用具体操作系统规定的行末字符。',
      everything: '设置整个文件的格式。',
      exclude:
        '配置 [glob 模式](https://aka.ms/vscode-glob-patterns)以排除文件和文件夹。例如，文件资源管理器根据此设置决定要显示或隐藏的文件和文件夹。请参阅 `#search.exclude#` 设置以定义特定于搜索的排除。请参阅 `#explorer.excludeGitIgnore#` 设置以基于 `.gitignore` 忽略文件。',
      excludeGitignore:
        '控制是否应从资源管理器中分析和排除 .gitignore 中的条目。类似于 {0}。',
      expandSingleFolderWorkspaces:
        '控制资源管理器是否应在初始化期间展开仅包含一个文件夹的多根工作区',
      'explorer.autoRevealExclude.boolean':
        '匹配文件路径所依据的 glob 模式。设置为 true 或 false 可启用或禁用该模式。',
      'explorer.autoRevealExclude.when':
        '对匹配文件的同级文件的其他检查。使用 $(basename) 作为匹配文件名的变量。',
      'explorer.decorations.badges': '控制文件修饰是否应使用徽章。',
      'explorer.decorations.colors': '控制文件修饰是否应使用颜色。',
      'explorer.incrementalNaming':
        '选择在粘贴同名文件(夹)时要使用的重命名方式。',
      explorerConfigurationTitle: '文件资源管理器',
      falseDescription: '禁用该模式。',
      fileDialogDefaultPath:
        '文件对话框的默认路径，用于替代用户的主路径。仅在缺少特定于上下文的路径时使用，例如最近打开的文件或文件夹。',
      'fileNesting.description':
        '每个键模式可能包含将与任何字符串匹配的单个 `*` 字符。',
      fileNestingEnabled:
        '控制是否已在资源管理器中启用文件嵌套。文件嵌套允许目录中的相关文件在单个父文件下以可视方式组合在一起。',
      fileNestingExpand:
        '控制是否自动扩展文件嵌套。要使此操作生效，必须设置 {0}。',
      fileNestingPatterns:
        '控制资源管理器中的文件嵌套。必须设置 {0} 才能让它生效。每个 __Item__ 都表示父模式，且可能包含匹配任意字符串的单个 `*` 字符。每个 __Value__ 都表示子模式的逗号分隔列表，这些子模式应显示嵌套在给定父级下。子模式可能包含多个特殊标记:\r\n- `${capture}`: 匹配父模式的 `*` 的解析值\r\n- `${basename}`: 匹配父文件的基名，即 `file.ts` 中的 `file`\r\n- `${extname}`: 匹配父文件的扩展名，即 `file.ts` 中的 `ts`\r\n- `${dirname}`: 匹配父文件的目录名，即 `src/file.ts` 中的 `src`\r\n- `*`: 匹配任意字符串，每个子模式只能使用一次',
      'files.autoSave.afterDelay':
        '在配置的 `#files.autoSaveDelay#` 之后，会自动保存具有更改的编辑器。',
      'files.autoSave.off': '具有更改的编辑器永远不会自动保存。',
      'files.autoSave.onFocusChange':
        '当编辑器失去焦点时，会自动保存具有更改的编辑器。',
      'files.autoSave.onWindowChange':
        '当窗口失去焦点时，会自动保存具有更改的编辑器。',
      'files.exclude.boolean':
        '匹配文件路径所依据的 glob 模式。设置为 true 或 false 可启用或禁用该模式。',
      'files.exclude.when':
        '对匹配文件同辈进行额外检查。将 $(basename) 用作匹配文件名的变量。',
      'files.participants.timeout':
        '超时(以毫秒为单位)后，将取消创建、重命名和删除的文件参与者。使用 `0` 禁用参与者。',
      'files.restoreUndoStack': '重新打开文件后，还原撤消堆栈。',
      'files.saveConflictResolution':
        '当文件保存到磁盘上并被另一个程序更改时，可能会发生保存冲突。 为了防止数据丢失，要求用户将编辑器中的更改与磁盘上的版本进行比较。 仅当经常遇到保存冲突错误时，才应更改此设置；如果不谨慎使用，可能会导致数据丢失。',
      'files.simpleDialog.enable':
        '启用简单文件对话框以打开和保存文件和文件夹。简单文件对话框在启用后会替代系统文件对话框。',
      filesConfigurationTitle: '文件',
      filesReadonlyExclude:
        '配置路径或 [glob 模式](https://aka.ms/vscode-glob-patterns)，以避免在该路径或模式因 `#files.readonlyInclude#` 设置而发生匹配时被标记为只读。glob 模式的计算结果始终是相对于工作区文件夹路径所在的位置，除非它们是绝对路径。来自只读文件系统提供程序的文件始终是只读文件，不受此设置影响。',
      filesReadonlyFromPermissions:
        '当文件权限指示为只读时，将文件标记为只读。可以通过 `#files.readonlyInclude#` 和 `#files.readonlyExclude#` 设置替代此操作。',
      filesReadonlyInclude:
        '配置路径或 [glob 模式](https://aka.ms/vscode-glob-patterns)以标记为只读。glob 模式的计算结果始终是相对于工作区文件夹路径所在的位置，除非它们是绝对路径。可以通过 `#files.readonlyExclude#` 设置排除匹配路径。来自只读文件系统提供程序的文件始终是只读文件，不受此设置影响。',
      formatOnSave:
        '在保存时格式化文件。格式化程序必须可用，延迟后文件不能保存，并且编辑器不能关闭。',
      formatOnSaveMode:
        '控制在保存时设置格式是设置整个文件格式还是仅设置修改内容的格式。仅当 "#editor.formatOnSave#" 处于启用状态时适用。',
      hotExit:
        '控制是否在会话间记住未保存的文件，以允许在退出编辑器时跳过保存提示。',
      'hotExit.off':
        '禁用热退出。当尝试关闭具有未保存更改的编辑器的窗口时，将显示提示。',
      'hotExit.onExit':
        '触发 "workbench.action.quit" 命令(命令面板、键绑定、菜单)或在 Windows/Linux 上关闭最后一个窗口时，将触发热退出。所有未打开文件夹的窗口都将在下次启动时恢复。可通过“文件”>“打开最近使用的文件”>“更多…”，访问之前打开的窗口(包含未保存的文件)列表',
      'hotExit.onExitAndWindowClose':
        '触发 "workbench.action.quit" 命令(命令面板、键绑定、菜单)或在 Windows/Linux 上关闭最后一个窗口时将触发热退出，还将对已打开文件夹的所有窗口触发热退出(无论是否是最后一个窗口)。所有未打开文件夹的窗口将在下次启动时恢复。可通过“文件”>“打开最近使用的文件”>“更多…”，访问之前打开的窗口(包含未保存的文件)列表',
      'hotExit.onExitAndWindowCloseBrowser':
        '当浏览器退出或窗口或选项卡关闭时，将触发热退出。',
      insertFinalNewline: '启用后，保存文件时在文件末尾插入一个最终新行。',
      modification: '格式修改(需要源代码管理)。',
      modificationIfAvailable:
        '将尝试只对修改进行格式化(需要源代码管理)。如果无法使用源代码管理，则将格式化整个文件。',
      openEditorsSortOrder: '控制编辑器在“打开编辑器”窗格中的排序顺序。',
      openEditorsVisible:
        '“打开编辑器”窗格中显示的初始编辑器数上限。超过此限制将显示滚动条，并允许调整窗格大小以显示更多项目。',
      openEditorsVisibleMin:
        '“打开编辑器”窗格中预分配的编辑器槽数下限。如果设置为 0，则“打开编辑器”窗格将根据编辑器数量动态重设大小。',
      overwriteFileOnDisk:
        '将通过在编辑器中用更改覆盖磁盘上的文件来解决保存冲突。',
      simple: '在重复名称的末尾附加单词“copy”，后面可能跟一个数字。',
      smart:
        '在重复名称的末尾添加一个数字。如果某个号码已经是名称的一部分，请尝试增加该号码。',
      sortOrder:
        '控制资源管理器中文件和文件夹基于属性的排序。启用 `#explorer.fileNesting.enabled#` 后，还控制嵌套文件的排序。',
      'sortOrder.alphabetical':
        '编辑器在每个编辑器组内按选项卡名称以字母顺序排序。',
      'sortOrder.default': '按名称排列文件和文件夹。文件夹显示在文件前。',
      'sortOrder.editorOrder': '编辑器按编辑器标签显示的顺序排列。',
      'sortOrder.filesFirst': '按名称排列文件和文件夹。文件显示在文件夹前。',
      'sortOrder.foldersNestsFiles':
        '文件和文件夹按其名称排序。文件夹显示在文件之前。具有嵌套子级的文件将显示在其他文件之前。',
      'sortOrder.fullPath': '编辑器在每个编辑器组内按完整路径以字母顺序排序。',
      'sortOrder.mixed': '按名称排列文件和文件夹。两者穿插显示。',
      'sortOrder.modified':
        '按最后修改日期降序排列文件和文件夹。文件夹显示在文件前。',
      'sortOrder.type':
        '按拓展类型为文件和文件夹分组，然后按名称排列它们。文件夹显示在文件前。',
      sortOrderLexicographicOptions:
        '在资源管理器中控制文件和文件夹名称的词典排序。',
      'sortOrderLexicographicOptions.default': '将大写和小写名称混合在一起。',
      'sortOrderLexicographicOptions.lower':
        '小写名称组合在一起，位于大写名称之前。',
      'sortOrderLexicographicOptions.unicode': '名称按 unicode 顺序排序。',
      'sortOrderLexicographicOptions.upper':
        '大写名称组合在一起，位于小写名称之前。',
      textFileEditor: '文本文件编辑器',
      trimFinalNewlines: '启用后，保存文件时将删除在最终新行后的所有新行。',
      trimTrailingWhitespace: '启用后，将在保存文件时删除行尾的空格。',
      trueDescription: '启用该模式。',
      useTrash:
        '在删除文件或文件夹时，将它们移动到操作系统的“废纸篓”中 (Windows 为“回收站”)。禁用此设置将永久删除文件或文件夹。',
      watcherExclude:
        '配置要从文件监视中排除的路径或 [glob 模式](https://aka.ms/vscode-glob-patterns)。路径可以相对于被监视的文件夹，也可以是绝对路径。glob 模式相对于被监视的文件夹进行匹配。当遇到文件观察程序进程消耗大量 CPU 的情况时，请确保排除不太重要的大型文件夹(例如生成输出文件夹)。',
      watcherInclude:
        '配置额外路径以监视工作区内的更改。默认情况下，将以递归方式监视所有工作区文件夹，但符号链接的文件夹除外。可以显式添加绝对路径或相对路径，以支持作为符号链接的监视文件夹。将使用当前打开的工作区将相对路径解析为绝对路径。',
    },
    'vs/workbench/contrib/files/browser/views/emptyView': {
      noWorkspace: '无打开的文件夹',
    },
    'vs/workbench/contrib/files/browser/views/explorerDecorationsProvider': {
      canNotResolve: '无法解析工作区文件夹 ({0})',
      label: '资源管理器',
      symbolicLlink: '符号链接',
      unknown: '未知文件类型',
    },
    'vs/workbench/contrib/files/browser/views/explorerView': {
      collapseExplorerFolders: '在资源管理器中折叠文件夹',
      createNewFile: '新建文件...',
      createNewFolder: '新建文件夹...',
      explorerSection: '资源管理器部分: {0}',
      refreshExplorer: '刷新资源管理器',
    },
    'vs/workbench/contrib/files/browser/views/explorerViewer': {
      confirmMove: '是否确定要将"{0}"移到"{1}"？',
      confirmMultiMove: '确定要将以下文件{0}移动至{1}？',
      confirmRootMove: '是否确定要更改工作区中根文件夹“{0}”的顺序?',
      confirmRootsMove: '是否确定要更改工作区中多个根文件夹的顺序?',
      copy: '复制 {0}',
      copying: '正在复制 {0}',
      doNotAskAgain: '不再询问',
      fileInputAriaLabel: '输入文件名。按 "Enter" 键确认或按 "Esc" 键取消。',
      move: '移动 {0}',
      moveButtonLabel: '移动(&&M)',
      moving: '正在移动 {0}',
      numberOfFiles: '{0} 文件',
      numberOfFolders: '{0} 文件夹',
      treeAriaLabel: '文件资源管理器',
    },
    'vs/workbench/contrib/files/browser/views/openEditorsView': {
      dirtyCounter: '{0} 个未保存',
      flipLayout: '切换垂直/水平编辑器布局',
      miToggleEditorLayout: '翻转布局(&&L)',
      miToggleEditorLayoutWithoutMnemonic: '翻转布局',
      newUntitledFile: '新的无标题文本文件',
      openEditors: '打开的编辑器',
    },
    'vs/workbench/contrib/files/browser/workspaceWatcher': {
      enospcError:
        '无法在这个大型工作区文件夹中监视文件更改。请按照说明链接来解决此问题。',
      eshutdownError:
        '文件更改观察程序意外停止。重新加载窗口可能再次启用观察程序，除非无法监视工作区的文件更改。',
      learnMore: '说明',
      reload: '重新加载',
    },
    'vs/workbench/contrib/files/common/dirtyFilesIndicator': {
      dirtyFile: '1 个未保存的文件',
      dirtyFiles: '{0} 个未保存的文件',
    },
    'vs/workbench/contrib/files/common/files': {
      explorerResourceCut:
        '如果 EXPLORER 中的一个项已被剪切用于剪切和粘贴，则为 True。',
      explorerResourceIsFolder: '如果 EXPLORER 中的焦点项是文件夹，则为 True。',
      explorerResourceIsRoot: '如果 EXPLORER 中的焦点项是根文件夹，则为 True。',
      explorerResourceMoveableToTrash:
        '如果 EXPLORER 中的焦点项可移到垃圾桶,则为 True。',
      explorerResourceReadonly: '当 EXPLORER 中的焦点项为只读时为 True。',
      explorerViewletCompressedFirstFocus:
        '当焦点位于 EXPLORER 视图中精简项的第一个部分的内部时为 True。',
      explorerViewletCompressedFocus:
        '如果 EXPLORER 视图中的焦点项是精简项，则为 True。',
      explorerViewletCompressedLastFocus:
        '当焦点位于 EXPLORER 视图中精简项的最后一个部分的内部时为 True。',
      explorerViewletFocus: '当焦点位于 EXPLORER Viewlet 内时为 True。',
      explorerViewletVisible: '当 EXPLORER Viewlet 可见时为 True。',
      filesExplorerFocus: '当焦点位于 EXPLORER 视图内时为 True。',
      foldersViewVisible:
        '当“文件夹”视图(资源管理器视图容器内的文件树)可见时为 True。',
      openEditorsFocus: '当焦点位于 OPEN EDITORS 视图内时为 True。',
      viewHasSomeCollapsibleItem:
        '如果资源管理器视图中的工作区具有一些可折叠的根子级，则为 true。',
    },
    'vs/workbench/contrib/files/electron-sandbox/fileActions.contribution': {
      filesCategory: '文件',
      miShare: '共享',
      openContainer: '打开所在的文件夹',
      revealInMac: '在 Finder 中显示',
      revealInWindows: '在文件资源管理器中显示',
    },
    'vs/workbench/contrib/folding/browser/folding.contribution': {
      'formatter.default':
        '定义优先于所有其他折叠范围提供程序的默认折叠范围提供程序。必须是提供折叠范围提供程序的扩展的标识符。',
      null: '全部',
      nullFormatterDescription: '所有活动折叠范围提供程序',
    },
    'vs/workbench/contrib/format/browser/formatActionsMultiple': {
      config: '配置默认格式化程序...',
      'config.bad':
        '扩展 "{0}" 配置为格式化程序, 但不可用。选择其他默认格式化程序以继续。',
      'config.needed':
        '“{0}”文件有多个格式化程序。其中一个应配置为默认格式化程序。',
      def: '(默认值)',
      'do.config': '配置(&&C)...',
      'do.config.command': '配置...',
      'do.config.notification': '配置...',
      'format.placeHolder': '选择格式化程序',
      'formatDocument.label.multiple': '使用...格式化文档',
      'formatSelection.label.multiple': '格式化选定内容的方式...',
      formatter: '格式设置',
      'formatter.default':
        '定义一个默认格式化程序, 该格式化程序优先于所有其他格式化程序设置。必须是提供格式化程序的扩展的标识符。',
      miss: "扩展 '{0}' 配置为格式化程序，但不能格式化 '{1}'-文件",
      'miss.1': '配置默认格式化程序',
      null: '无',
      nullFormatterDescription: '没有',
      select: '为“{0}”文件选择默认的格式化程序',
      summary: '格式化程序冲突',
    },
    'vs/workbench/contrib/format/browser/formatActionsNone': {
      'formatDocument.label.multiple': '格式化文档',
      'install.formatter': '安装格式化程序(&&I)...',
      'no.provider': '没有安装用于“{0}”文件的格式化程序。',
      'too.large': '此文件过大，无法进行格式设置',
    },
    'vs/workbench/contrib/format/browser/formatModified': {
      formatChanges: '设置修改过的行的格式',
    },
    'vs/workbench/contrib/inlayHints/browser/inlayHintsAccessibilty': {
      description: '具有内嵌提示信息的代码',
      isReadingLineWithInlayHints: '当前行及其内嵌提示是否是当前焦点',
      'read.title': '使用内联提示读取行',
      'stop.title': '停止内嵌提示读取',
    },
    'vs/workbench/contrib/inlineChat/browser/inlineChatActions': {
      accept: '发出请求',
      apply1: '接受更改',
      apply2: '接受',
      arrowDown: '光标向下',
      arrowUp: '光标向上',
      cancel: '取消',
      cat: '内联聊天',
      contractMessage: '显示更少',
      copyRecordings: '(开发人员)将 Exchange 写入剪贴板',
      discard: '放弃',
      discardMenu: '放弃...',
      expandMessage: '显示更多内容',
      'feedback.helpful': '有用',
      'feedback.unhelpful': '无用',
      focus: '聚焦输入',
      label: "'{0}' 和 {1} 跟进({2})",
      nextFromHistory: '历史记录中的下一个',
      previousFromHistory: '历史记录中的上一个',
      rerun: '重新生成响应',
      rerunShort: '再生成',
      run: '开始代码聊天',
      stop: '停止请求',
      toggleDiff: '切换差异',
      toggleDiff2: '显示内联差异',
      'undo.clipboard': '放弃到剪贴板',
      'undo.newfile': '放弃到新文件',
      unstash: '继续上次关闭的代码聊天',
      viewInChat: '在聊天中查看',
    },
    'vs/workbench/contrib/inlineChat/browser/inlineChatController': {
      'create.fail': '无法启动编辑器聊天',
      'create.fail.detail': '请查阅错误日志，稍后重试。',
      'default.placeholder': '提问',
      'default.placeholder.history': '{0} ({1}，{2} (针对历史记录))',
      editResponseMessage: '使用选项卡导航到差异编辑器并查看建议的更改。',
      empty: '无结果，请优化输入并重试',
      'err.apply': '无法应用更改。',
      'err.discard': '无法放弃更改。',
      markdownResponseMessage: '{0}',
      thinking: '思考中...',
      'welcome.1': 'AI 生成的代码可能不正确',
      'welcome.2': '正在准备...',
    },
    'vs/workbench/contrib/inlineChat/browser/inlineChatStrategies': {
      'lines.0': '未更改任何内容',
      'lines.1': '已更改 1 行',
      'lines.N': '已更改 {0} 行',
    },
    'vs/workbench/contrib/inlineChat/browser/inlineChatWidget': {
      'aria-label': '内联聊天输入',
      'inlineChat.accessibilityHelp':
        '内联聊天输入，将{0}用于内联聊天辅助功能帮助。',
      'inlineChat.accessibilityHelpNoKb':
        '内联聊天输入，运行内联聊天辅助功能帮助命令以了解详细信息。',
      inlineChatClosed: '已关闭内联聊天小组件',
      modified: '已修改',
      original: '原始版本',
    },
    'vs/workbench/contrib/inlineChat/common/inlineChat': {
      'inlineChat.background': '交互式编辑器小组件的背景色',
      'inlineChat.border': '交互式编辑器小组件的边框颜色',
      'inlineChat.regionHighlight':
        '当前交互区域的背景突出显示。必须是透明的。',
      'inlineChat.shadow': '交互式编辑器小组件的阴影颜色',
      inlineChatDidEdit: '交互式编辑器是否更改了任何代码',
      inlineChatDiff: '交互式编辑器是否显示更改差异',
      'inlineChatDiff.inserted': '交互式编辑器输入中已插入文本的背景色',
      'inlineChatDiff.removed': '交互式编辑器输入中已删除文本的背景色',
      inlineChatDocumentChanged: '文档是否已同时更改',
      inlineChatEmpty: '交互式编辑器输入是否为空',
      inlineChatFocused: '是否聚焦交互式编辑器输入',
      inlineChatHasActiveRequest: '交互式编辑器是否有活动请求',
      inlineChatHasProvider: '交互式编辑器的提供程序是否存在',
      inlineChatHasStashedSession: '交互式编辑器是否已保留会话以进行快速还原',
      inlineChatInnerCursorFirst: '迭代活动编辑器输入的光标是否在第一行',
      inlineChatInnerCursorLast: '迭代活动编辑器输入的光标是否在最后一行',
      'inlineChatInput.background': '交互式编辑器输入的背景色',
      'inlineChatInput.border': '交互式编辑器输入的边框颜色',
      'inlineChatInput.focusBorder': '聚焦时交互式编辑器输入的边框颜色',
      'inlineChatInput.placeholderForeground': '交互式编辑器输入占位符的前景色',
      inlineChatLastFeedbackKind: '提供的最后一种反馈',
      inlineChatMarkdownMessageCropState: '交互式编辑器消息是否裁剪还是展开',
      inlineChatOuterCursorPosition:
        '外部编辑器的光标位于交互式编辑器输入的上方还是下方',
      inlineChatResponseType: '当前交互式编辑器会话的最后一个响应类型是什么',
      inlineChatResponseTypes: '已收到响应的类型',
      inlineChatUserDidEdit: '用户是否在内联聊天顶部进行了更改',
      inlineChatVisible: '交互式编辑器输入是否可见',
      mode: '配置是将在交互式编辑器中创建的更改直接应用到文档还是先预览它们。',
      'mode.live':
        '更改直接应用到文档，但可通过内联差异突出显示。结束会话将保留更改。',
      'mode.livePreview':
        '更改直接应用到文档，但可通过内联差异或并排差异在视觉上突出显示。结束会话将保留更改。',
      'mode.preview':
        '仅预览更改，但需要通过“应用”按钮接受这些更改。结束会话将放弃更改。',
    },
    'vs/workbench/contrib/interactive/browser/interactive.contribution': {
      'interactive.activeCodeBorder':
        '当编辑器具有焦点时，当前交互式代码单元格的边框颜色。',
      'interactive.execute': '执行代码',
      'interactive.history.focus': '焦点历史记录',
      'interactive.history.next': '历史记录中的下一个值',
      'interactive.history.previous': '历史记录中的上一个值',
      'interactive.inactiveCodeBorder':
        '当编辑器没有焦点时，当前交互式代码单元格的边框颜色。',
      'interactive.input.clear': '清除交互窗口输入编辑器内容',
      'interactive.input.focus': '焦点输入编辑器',
      'interactive.open': '打开交互窗口',
      interactiveScrollToBottom: '滚动到底部',
      interactiveScrollToTop: '滚动到顶部',
      interactiveWindow: '交互窗口',
      'interactiveWindow.alwaysScrollOnNewCell':
        '自动滚动交互窗口以显示执行的最后一条语句的输出。如果此值为 false，仅当最后一个单元格已滚动到此单元格时，窗口才会滚动。',
    },
    'vs/workbench/contrib/interactive/browser/interactiveEditor': {
      interactiveInputPlaceHolder: "在此处键入 '{0}' 代码并按 {1} 运行",
    },
    'vs/workbench/contrib/interactiveEditor/browser/interactiveEditorActions': {
      accept: '发出请求',
      'actions.interactiveSession.accessibiltyHelpEditor':
        '交互式会话编辑器辅助功能帮助',
      apply1: '接受更改',
      apply2: '接受',
      arrowDown: '光标向下',
      arrowUp: '光标向上',
      cancel: '取消',
      cat: '交互式编辑器',
      contractMessage: '协定消息',
      copyRecordings: '(开发人员)将 Exchange 写入剪贴板',
      discard: '放弃',
      discardMenu: '放弃...',
      expandMessage: '展开消息',
      'feedback.helpful': '有用',
      'feedback.unhelpful': '无用',
      focus: '聚焦输入',
      label: "'{0}' 和 {1} 跟进({2})",
      nextFromHistory: '历史记录中的下一个',
      previousFromHistory: '历史记录中的上一个',
      run: '开始代码聊天',
      stop: '停止请求',
      toggleDiff: '切换差异',
      toggleDiff2: '显示内联差异',
      'undo.clipboard': '放弃到剪贴板',
      'undo.newfile': '放弃到新文件',
      unstash: '继续上次关闭的代码聊天',
      viewInChat: '在聊天中查看',
    },
    'vs/workbench/contrib/interactiveEditor/browser/interactiveEditorController':
      {
        'create.fail': '无法启动编辑器聊天',
        'create.fail.detail': '请查阅错误日志，稍后重试。',
        'default.placeholder': '提问',
        'default.placeholder.history': '{0} ({1}，{2} (针对历史记录))',
        empty: '无结果，请优化输入并重试',
        'err.apply': '无法应用更改。',
        'err.discard': '无法放弃更改。',
        thinking: '思考中...',
        'welcome.1': 'AI 生成的代码可能不正确',
      },
    'vs/workbench/contrib/interactiveEditor/browser/interactiveEditorStrategies':
      {
        'lines.0': '未更改任何内容',
        'lines.1': '已更改 1 行',
        'lines.N': '已更改 {0} 行',
      },
    'vs/workbench/contrib/interactiveEditor/browser/interactiveEditorWidget': {
      'aria-label': '交互式编辑器输入',
      'interactiveEditor.accessibilityHelp':
        '交互式编辑器输入，使用 {0} 来获取交互式编辑器辅助功能帮助。',
      'interactiveSessionInput.accessibilityHelpNoKb':
        '交互式编辑器输入，运行交互式编辑器辅助功能帮助命令了解详细信息。',
      modified: '已修改',
      original: '原始版本',
    },
    'vs/workbench/contrib/interactiveEditor/common/interactiveEditor': {
      editMode:
        '配置是将在交互式编辑器中创建的更改直接应用到文档还是先预览它们。',
      'editMode.live':
        '更改直接应用到文档，但可通过内联差异突出显示。结束会话将保留更改。',
      'editMode.livePreview':
        '更改直接应用到文档，但可通过内联差异或并排差异在视觉上突出显示。结束会话将保留更改。',
      'editMode.preview':
        '仅预览更改，但需要通过“应用”按钮接受这些更改。结束会话将放弃更改。',
      'interactiveEditor.border': '交互式编辑器小组件的边框颜色',
      'interactiveEditor.regionHighlight':
        '当前交互区域的背景突出显示。必须是透明的。',
      'interactiveEditor.shadow': '交互式编辑器小组件的阴影颜色',
      interactiveEditorDidEdit: '交互式编辑器是否更改了任何代码',
      interactiveEditorDiff: '交互式编辑器是否显示更改差异',
      'interactiveEditorDiff.inserted': '交互式编辑器输入中已插入文本的背景色',
      'interactiveEditorDiff.removed': '交互式编辑器输入中已删除文本的背景色',
      interactiveEditorDocumentChanged: '文档是否已同时更改',
      interactiveEditorEmpty: '交互式编辑器输入是否为空',
      interactiveEditorFocused: '是否聚焦交互式编辑器输入',
      interactiveEditorHasActiveRequest: '交互式编辑器是否有活动请求',
      interactiveEditorHasProvider: '交互式编辑器的提供程序是否存在',
      interactiveEditorHasStashedSession:
        '交互式编辑器是否已保留会话以进行快速还原',
      interactiveEditorInnerCursorFirst: '迭代活动编辑器输入的光标是否在第一行',
      interactiveEditorInnerCursorLast:
        '迭代活动编辑器输入的光标是否在最后一行',
      'interactiveEditorInput.background': '交互式编辑器输入的背景色',
      'interactiveEditorInput.border': '交互式编辑器输入的边框颜色',
      'interactiveEditorInput.focusBorder': '聚焦时交互式编辑器输入的边框颜色',
      'interactiveEditorInput.placeholderForeground':
        '交互式编辑器输入占位符的前景色',
      interactiveEditorLastFeedbackKind: '提供的最后一种反馈',
      interactiveEditorMarkdownMessageCropState:
        '交互式编辑器消息是否裁剪还是展开',
      interactiveEditorOuterCursorPosition:
        '外部编辑器的光标位于交互式编辑器输入的上方还是下方',
      interactiveEditorResponseType:
        '当前交互式编辑器会话的最后一个响应类型是什么',
      interactiveEditorVisible: '交互式编辑器输入是否可见',
    },
    'vs/workbench/contrib/interactiveSession/browser/actions/interactiveSessionActions':
      {
        'actions.ineractiveSession.acceptInput': '交互式会话接受输入',
        'actions.interactiveSession.focus': '聚焦交互式会话',
        'interactiveSession.category': '交互式会话',
        'interactiveSession.clear.label': '清除',
        'interactiveSession.clearHistory.label': '清除输入历史记录',
        'interactiveSession.focusInput.label': '聚焦输入',
        'interactiveSession.history.label': '显示历史记录',
        'interactiveSession.history.pick': '选择要还原的聊天会话',
        'interactiveSession.open': '打开编辑器({0})',
      },
    'vs/workbench/contrib/interactiveSession/browser/actions/interactiveSessionCodeblockActions':
      {
        'interactive.copyCodeBlock.label': '复制',
        'interactive.insertCodeBlock.label': '在光标处插入',
        'interactive.insertIntoNewFile.label': '插入到新文件中',
        'interactive.runInTerminal.label': '在终端中运行',
      },
    'vs/workbench/contrib/interactiveSession/browser/actions/interactiveSessionCopyActions':
      {
        'interactive.copyAll.label': '全部复制',
        'interactive.copyItem.label': '复制',
      },
    'vs/workbench/contrib/interactiveSession/browser/actions/interactiveSessionExecuteActions':
      {
        'interactive.cancel.label': '取消',
        'interactive.submit.label': '提交',
      },
    'vs/workbench/contrib/interactiveSession/browser/actions/interactiveSessionTitleActions':
      {
        'interactive.voteDown.label': '投反对票',
        'interactive.voteUp.label': '投赞成票',
      },
    'vs/workbench/contrib/interactiveSession/browser/contrib/interactiveSessionInputEditorContrib':
      {
        'interactive.input.placeholderNoCommands': '提问',
        'interactive.input.placeholderWithCommands': '提问或键入主题的 "/"',
      },
    'vs/workbench/contrib/interactiveSession/browser/interactiveSession.contribution':
      {
        interactiveSession: '交互式会话',
        'interactiveSession.editor.fontFamily': '控制交互式会话中的字体系列。',
        'interactiveSession.editor.fontSize':
          '控制交互式会话中的字号(以像素为单位)。',
        'interactiveSession.editor.fontWeight': '控制交互式会话中的字体粗细。',
        'interactiveSession.editor.lineHeight':
          '控制交互式会话中的行高(以像素为单位)。使用 0 根据字号计算行高。',
        'interactiveSession.editor.wordWrap': '控制是否应在交互式会话中换行。',
        interactiveSessionConfigurationTitle: '交互式会话',
      },
    'vs/workbench/contrib/interactiveSession/browser/interactiveSessionContributionServiceImpl':
      {
        'vscode.extension.contributes.interactiveSession':
          '为交互式会话提供程序做出贡献',
        'vscode.extension.contributes.interactiveSession.icon':
          '此交互式会话提供程序的图标。',
        'vscode.extension.contributes.interactiveSession.id':
          '此交互式会话提供程序的唯一标识符。',
        'vscode.extension.contributes.interactiveSession.label':
          '此交互式会话提供程序的显示名称。',
        'vscode.extension.contributes.interactiveSession.when':
          '条件必须为 true 才能启用此交互式会话提供程序。',
      },
    'vs/workbench/contrib/interactiveSession/browser/interactiveSessionEditorInput':
      {
        interactiveSessionEditorName: '交互式会话',
      },
    'vs/workbench/contrib/interactiveSession/browser/interactiveSessionInputPart':
      {
        interactiveSessionInput: '交互式会话输入',
      },
    'vs/workbench/contrib/interactiveSession/browser/interactiveSessionListRenderer':
      {
        interactiveSession: '交互式会话',
      },
    'vs/workbench/contrib/interactiveSession/browser/interactiveSessionWidget':
      {
        clear: '清除会话',
      },
    'vs/workbench/contrib/interactiveSession/common/interactiveSessionColors': {
      'interactive.requestBackground': '交互式请求的背景色。',
      'interactive.requestBorder': '交互式请求的边框颜色。',
    },
    'vs/workbench/contrib/interactiveSession/common/interactiveSessionContextKeys':
      {
        hasInteractiveSessionProvider: '注册某些交互式会话提供程序时为 True。',
        inInteractiveInput: '当焦点位于交互式输入中时为 true，否则为 false。',
        inInteractiveSession:
          '当焦点位于交互式会话小组件中时为 true，否则为 false。',
        interactiveInputHasText: '当交互式输入包含文本时为 True。',
        interactiveSessionRequestInProgress: '当前请求仍在进行时为 True。',
        interactiveSessionResponseHasProviderId:
          '当提供程序已向此响应分配 ID 时为 True。',
        interactiveSessionResponseVote:
          '对响应投赞成票后，其设置为 "up"。投反对票时，设置为 "down"。否则为空字符串。',
      },
    'vs/workbench/contrib/interactiveSession/common/interactiveSessionServiceImpl':
      {
        emptyResponse: '提供程序返回了 null 响应',
      },
    'vs/workbench/contrib/interactiveSession/common/interactiveSessionViewModel':
      {
        thinking: '思考中',
      },
    'vs/workbench/contrib/issue/browser/issue.contribution': {
      statusUnsupported: '浏览器中尚不支持 --status 参数。',
    },
    'vs/workbench/contrib/issue/common/issue.contribution': {
      miReportIssue: '使用英文报告问题(&&I)',
      reportIssueInEnglish: '报告问题…',
    },
    'vs/workbench/contrib/issue/electron-sandbox/issue.contribution': {
      miOpenProcessExplorerer: '打开进程管理器(&&P)',
      openProcessExplorer: '打开进程资源管理器',
      reportPerformanceIssue: '报告性能问题...',
      stopTracing: '停止跟踪',
      'stopTracing.button': '重新启动并启用跟踪(&&R)',
      'stopTracing.detail': '这可能需要一分钟才能完成。',
      'stopTracing.message': '需要使用 "--trace" 参数启动跟踪',
      'stopTracing.title': '正在创建跟踪文件...',
    },
    'vs/workbench/contrib/keybindings/browser/keybindings.contribution': {
      toggleKeybindingsLog: '切换键盘快捷方式疑难解答',
    },
    'vs/workbench/contrib/languageDetection/browser/languageDetection.contribution':
      {
        detectlang: '检测内容中的语言',
        'langDetection.aria': '更改为检测到的语言: {0}',
        'langDetection.name': '语言检测',
        noDetection: '无法检测编辑器语言',
        'status.autoDetectLanguage': '接受检测到的语言: {0}',
      },
    'vs/workbench/contrib/languageStatus/browser/languageStatus.contribution': {
      'aria.1': '{0}，{1}',
      'aria.2': '{0}',
      'langStatus.aria': '编辑器语言状态: {0}',
      'langStatus.name': '编辑器语言状态',
      'name.pattern': '{0} (语言状态)',
      pin: '添加到状态栏',
      reset: '重置语言状态交互计数器',
      unpin: '从状态栏中删除',
    },
    'vs/workbench/contrib/limitIndicator/browser/limitIndicator.contribution': {
      'colorDecoratorsStatusItem.name': '颜色装饰器状态',
      'colorDecoratorsStatusItem.source': '颜色修饰器',
      'foldingRangesStatusItem.name': '正在折叠状态',
      'foldingRangesStatusItem.source': '正在折叠',
      'status.button.configure': '配置',
      'status.limited.details': '出于性能原因，仅显示了 {0}',
      'status.limitedColorDecorators.short': '颜色修饰器',
      'status.limitedFoldingRanges.short': '折叠范围',
    },
    'vs/workbench/contrib/localHistory/browser/localHistory': {
      localHistoryIcon: '日程表视图中本地历史记录条目的图标。',
      localHistoryRestore: '用于还原本地历史记录条目的内容的图标。',
    },
    'vs/workbench/contrib/localHistory/browser/localHistoryCommands': {
      confirmDeleteAllDetail: '此操作不可逆!',
      confirmDeleteAllMessage: '是否要删除本地历史记录中所有文件的所有条目?',
      confirmDeleteDetail: '此操作不可逆!',
      confirmDeleteMessage: '是否要从 {1} 中删除 {0} 的本地历史记录条目?',
      confirmRestoreDetail: '还原将放弃任何未保存的更改。',
      confirmRestoreMessage: '是否要还原“{0}”的内容?',
      createLocalHistoryEntryTitle: '创建本地历史记录条目',
      createLocalHistoryPlaceholder: "输入 '{0}' 的本地历史记录条目的新名称",
      deleteAllButtonLabel: '全部删除(&&D)',
      deleteButtonLabel: '删除(&&D)',
      'localHistory.category': '本地历史记录',
      'localHistory.compareWithFile': '与文件进行比较',
      'localHistory.compareWithPrevious': '与上一个版本比较',
      'localHistory.compareWithSelected': '与已选项目进行比较',
      'localHistory.create': '创建条目',
      'localHistory.delete': '删除',
      'localHistory.deleteAll': '全部删除',
      'localHistory.open': '显示内容',
      'localHistory.rename': '重命名',
      'localHistory.restore': '还原内容',
      'localHistory.restoreViaPicker': '查找要还原的条目',
      'localHistory.restoreViaPickerMenu': '本地历史记录: 查找要还原的条目...',
      'localHistory.selectForCompare': '选择以进行比较',
      localHistoryCompareToFileEditorLabel: '{0} ({1} • {2}) ↔ {3}',
      localHistoryCompareToPreviousEditorLabel:
        '{0} ({1} • {2}) ↔ {3} ({4} • {5})',
      localHistoryEditorLabel: '{0} ({1} • {2})',
      'localHistoryRestore.source': '已还原文件',
      renameLocalHistoryEntryTitle: '重命名本地历史记录条目',
      renameLocalHistoryPlaceholder: '输入本地历史记录条目的新名称',
      restoreButtonLabel: '还原(&&R)',
      'restoreViaPicker.entryPlaceholder': '选择要打开的本地历史记录条目',
      'restoreViaPicker.filePlaceholder': '选择要显示其本地历史记录的文件',
      unableToRestore: '无法还原“{0}”。',
    },
    'vs/workbench/contrib/localHistory/browser/localHistoryTimeline': {
      localHistory: '本地历史记录',
    },
    'vs/workbench/contrib/localHistory/electron-sandbox/localHistoryCommands': {
      openContainer: '打开包含文件夹',
      revealInMac: '在查找器中显示',
      revealInWindows: '在文件资源管理器中显示',
    },
    'vs/workbench/contrib/localization/common/localization.contribution': {
      'vscode.extension.contributes.localizations': '向编辑器提供本地化内容',
      'vscode.extension.contributes.localizations.languageId':
        '显示字符串翻译的目标语言 ID。',
      'vscode.extension.contributes.localizations.languageName':
        '语言的英文名称。',
      'vscode.extension.contributes.localizations.languageNameLocalized':
        '提供语言的名称。',
      'vscode.extension.contributes.localizations.translations':
        '与语言关联的翻译的列表。',
      'vscode.extension.contributes.localizations.translations.id':
        '使用此翻译的 VS Code 或扩展的 ID。VS Code 的 ID 总为 "vscode"，扩展的 ID 的格式应为 "publisherId.extensionName"。',
      'vscode.extension.contributes.localizations.translations.id.pattern':
        '翻译 VS Code 或者扩展，ID 分别应为 "vscode" 或格式为 "publisherId.extensionName"。',
      'vscode.extension.contributes.localizations.translations.path':
        '包含语言翻译的文件的相对路径。',
    },
    'vs/workbench/contrib/localization/common/localizationsActions': {
      available: '可用',
      chooseLocale: '选择显示语言',
      clearDisplayLanguage: '清除显示语言首选项',
      configureLocale: '配置显示语言',
      installed: '已安装',
      moreInfo: '详细信息',
    },
    'vs/workbench/contrib/localization/electron-sandbox/localization.contribution':
      {
        changeAndRestart: '更改语言并重启',
        neverAgain: '不再显示',
        updateLocale: '要将 {0} 的显示语言更改为 {1} 并重启吗?',
      },
    'vs/workbench/contrib/localization/electron-sandbox/minimalTranslations': {
      installAndRestart: '安装并重启',
      installAndRestartMessage: '安装语言包并将显示语言更改为 {0}。',
      searchMarketplace: '搜索商店',
      showLanguagePackExtensions: '在商店中搜索语言包并将显示语言更改为 {0}。',
    },
    'vs/workbench/contrib/logs/common/logs.contribution': {
      'remote name': '{0} (远程)',
      setDefaultLogLevel: '设置默认日志级别',
      'show window log': '显示窗口日志',
    },
    'vs/workbench/contrib/logs/common/logsActions': {
      all: '全部',
      current: '当前',
      debug: '调试',
      default: '默认值',
      err: '错误',
      extensionLogs: '扩展日志',
      info: '信息',
      'log placeholder': '选择日志文件',
      loggers: '日志',
      off: '关',
      openSessionLogFile: '打开窗口日志文(会话)...',
      resetLogLevel: '设置为默认日志级别',
      selectLogLevel: '选择日志级别',
      selectLogLevelFor: ' {0}: 选择日志级别',
      selectlog: '设置日志级别',
      'sessions placeholder': '选择会话',
      setLogLevel: '设置日志级别...',
      trace: '跟踪',
      warn: '警告',
    },
    'vs/workbench/contrib/logs/electron-sandbox/logsActions': {
      openExtensionLogsFolder: '打开扩展日志文件夹',
      openLogsFolder: '打开日志文件夹',
    },
    'vs/workbench/contrib/markers/browser/markers.contribution': {
      'Active File': '只看当前活动的文件',
      'Excluded Files': '隐藏排除的文件',
      Infos: '显示信息',
      clearFiltersText: '清除过滤器文本',
      collapseAll: '全部折叠',
      copyMarker: '复制',
      copyMessage: '复制消息',
      errors: '显示错误',
      focusProblemsFilter: '焦点问题筛选器',
      focusProblemsList: '聚焦到问题视图',
      manyProblems: '1万+',
      markersViewIcon: '查看标记视图的图标。',
      miMarker: '问题(&&P)',
      noProblems: '没有问题',
      problems: '问题',
      'show multiline': '在多行中显示消息',
      'show singleline': '在单行中显示消息',
      'status.problems': '问题',
      'toggle Excluded Files': '切换排除的文件',
      'toggle active file': '切换活动文件',
      'toggle errors': '切换错误',
      'toggle infos': '切换信息',
      'toggle warnings': '切换警告',
      totalErrors: '错误: {0} 个',
      totalInfos: '信息: {0} 条',
      totalProblems: '总计 {0} 个问题',
      totalWarnings: '警告: {0} 个',
      viewAsTable: '以表形式查看',
      viewAsTree: '以树形式查看',
      warnings: '显示警告',
    },
    'vs/workbench/contrib/markers/browser/markersFileDecorations': {
      label: '问题',
      'markers.showOnFile': '在文件和文件夹上显示错误和警告。',
      'tooltip.1': '此文件存在 1 个问题',
      'tooltip.N': '此文件存在 {0} 个问题',
    },
    'vs/workbench/contrib/markers/browser/markersTable': {
      codeColumnLabel: '代码',
      fileColumnLabel: '文件',
      messageColumnLabel: '消息',
      sourceColumnLabel: '源',
    },
    'vs/workbench/contrib/markers/browser/markersTreeViewer': {
      collapsedIcon: '在标记视图中指示多个线条已折叠的图标。',
      expandedIcon: '在标记视图中指示多个线条已显示的图标。',
      'multi line': '在多行中显示消息',
      problemsView: '问题视图',
      'single line': '在单行中显示消息',
    },
    'vs/workbench/contrib/markers/browser/markersView': {
      'No problems filtered': '显示 {0} 个问题',
      clearFilter: '清除筛选',
      'problems filtered': '显示第 {0} 个 (共 {1} 个) 问题',
      'showing filtered problems': '正在显示第 {0} 页(共 {1} 页)',
    },
    'vs/workbench/contrib/markers/browser/messages': {
      'errors.warnings.show.label': '显示错误和警告',
      'markers.panel.action.filter': '筛选器问题',
      'markers.panel.action.moreFilters': '更多过滤器...',
      'markers.panel.action.quickfix': '显示修复方案',
      'markers.panel.at.ln.col.number': '[行 {0}，列 {1}]',
      'markers.panel.filter.activeFile': '只看当前活动的文件',
      'markers.panel.filter.ariaLabel': '筛选器问题',
      'markers.panel.filter.errors': '错误',
      'markers.panel.filter.infos': '信息',
      'markers.panel.filter.placeholder':
        '筛选器(例如 text、**/*.ts、!**/node_modules/**)',
      'markers.panel.filter.showErrors': '显示错误',
      'markers.panel.filter.showInfos': '显示信息',
      'markers.panel.filter.showWarnings': '显示警告',
      'markers.panel.filter.useFilesExclude': '隐藏排除的文件',
      'markers.panel.filter.warnings': '警告',
      'markers.panel.multiple.errors.label': '{0} 个错误',
      'markers.panel.multiple.infos.label': '{0} 条信息',
      'markers.panel.multiple.unknowns.label': '{0} 个未知',
      'markers.panel.multiple.warnings.label': '{0} 条警告',
      'markers.panel.no.problems.activeFile.build':
        '未在当前文件中检测到问题。',
      'markers.panel.no.problems.build': '未在工作区检测到问题。',
      'markers.panel.no.problems.filters': '在给定的筛选条件下，没有找到结果。',
      'markers.panel.single.error.label': '1 个错误',
      'markers.panel.single.info.label': '1 条信息',
      'markers.panel.single.unknown.label': '1 个未知',
      'markers.panel.single.warning.label': '1 条警告',
      'markers.panel.title.problems': '问题',
      'problems.panel.configuration.autoreveal':
        '在打开文件时，控制是否在“问题”视图中对其进行定位。',
      'problems.panel.configuration.compareOrder': '控制问题导航的顺序。',
      'problems.panel.configuration.compareOrder.position':
        '导航按位置排序的问题',
      'problems.panel.configuration.compareOrder.severity':
        '导航按严重性排序的问题',
      'problems.panel.configuration.showCurrentInStatus':
        '启用后，状态栏中将显示当前问题。',
      'problems.panel.configuration.title': '问题预览',
      'problems.panel.configuration.viewMode': '控制“问题”视图的默认视图模式。',
      'problems.tree.aria.label.error.marker':
        '错误: 行 {1} 和字符 {2} 处的 {0}。{4} 生成的 {3}',
      'problems.tree.aria.label.error.marker.nosource':
        '错误: {1} 行 {2} 列，{0}。{3}',
      'problems.tree.aria.label.info.marker':
        '信息: 行 {1} 和字符 {2} 处的 {0}。{4} 生成的 {3}',
      'problems.tree.aria.label.info.marker.nosource':
        '信息: {1} 行 {2} 列，{0}。{3}',
      'problems.tree.aria.label.marker':
        '问题: 行 {1} 和字符 {2} 处的 {0}。{4} 生成的 {3}',
      'problems.tree.aria.label.marker.nosource':
        '问题: {1} 行 {2} 列，{0}。{3}',
      'problems.tree.aria.label.marker.relatedInformation':
        '此问题包含对 {0} 个位置的引用。',
      'problems.tree.aria.label.relatedinfo.message':
        '{3} 的 {1} 行 {2} 列，{0}',
      'problems.tree.aria.label.resource':
        '在文件夹 {2} 的文件 {1} 中有 {0} 个问题',
      'problems.tree.aria.label.warning.marker':
        '警告: 行 {1} 和字符 {2} 处的 {0}。{4} 生成的 {3}',
      'problems.tree.aria.label.warning.marker.nosource':
        '警告: {1} 行 {2} 列，{0}。{3}',
      'problems.view.focus.label': '聚焦到问题 (错误、警告、信息)',
      'problems.view.toggle.label': '切换问题 (错误、警告、信息) 视图',
    },
    'vs/workbench/contrib/mergeEditor/browser/commands/commands': {
      'layout.column': '列布局',
      'layout.mixed': '混合布局',
      'layout.showBase': '显示基础',
      'layout.showBaseCenter': '显示基中心',
      'layout.showBaseTop': '显示基顶部',
      'merge.acceptAllInput1': '接受来自左侧的所有更改',
      'merge.acceptAllInput2': '接受来自右侧的所有更改',
      'merge.goToNextUnhandledConflict': '转到下一个未处理的冲突',
      'merge.goToPreviousUnhandledConflict': '转到上一个未处理的冲突',
      'merge.openBaseEditor': '打开基本文件',
      'merge.toggleCurrentConflictFromLeft': '从左侧切换当前冲突',
      'merge.toggleCurrentConflictFromRight': '从右侧切换当前冲突',
      mergeEditor: '合并编辑器',
      'mergeEditor.acceptMerge': '完成合并',
      'mergeEditor.acceptMerge.unhandledConflicts.accept':
        '完成但出现冲突(&&C)',
      'mergeEditor.acceptMerge.unhandledConflicts.detail':
        '文件包含未经处理的冲突。',
      'mergeEditor.acceptMerge.unhandledConflicts.message':
        '要完成 {0} 的合并吗?',
      'mergeEditor.compareInput1WithBase': '将输入 1 与基本值进行比较',
      'mergeEditor.compareInput2WithBase': '将输入 2 与基本值进行比较',
      'mergeEditor.compareWithBase': '与基线进行比较',
      'mergeEditor.resetChoice': '重置“关闭并存在冲突”选项',
      'mergeEditor.resetResultToBaseAndAutoMerge': '重置结果',
      'mergeEditor.resetResultToBaseAndAutoMerge.short': '重置',
      openfile: '打开文件',
      showNonConflictingChanges: '显示不冲突的更改',
      title: '打开合并编辑器',
    },
    'vs/workbench/contrib/mergeEditor/browser/commands/devCommands': {
      'merge.dev.copyState': '将合并编辑器状态复制为 JSON',
      'merge.dev.loadContentsFromFolder': '从文件夹加载合并编辑器状态',
      'merge.dev.saveContentsToFolder': '将合并编辑器状态保存到文件夹',
      mergeEditor: '合并编辑器(开发)',
      'mergeEditor.name': '合并编辑器',
      'mergeEditor.noActiveMergeEditor': '无活动合并编辑器',
      'mergeEditor.selectFolderToSaveTo': '选择要保存到的文件夹',
      'mergeEditor.successfullyCopiedMergeEditorContents':
        '已成功复制合并编辑器状态',
      'mergeEditor.successfullySavedMergeEditorContentsToFolder':
        '已成功将合并编辑器状态保存到文件夹',
    },
    'vs/workbench/contrib/mergeEditor/browser/mergeEditor.contribution': {
      'diffAlgorithm.advanced': '使用高级差异算法。',
      'diffAlgorithm.legacy': '使用旧差异算法。',
      name: '合并编辑器',
    },
    'vs/workbench/contrib/mergeEditor/browser/mergeEditorInput': {
      name: '正在合并: {0}',
    },
    'vs/workbench/contrib/mergeEditor/browser/mergeEditorInputModel': {
      acceptMerge: '接受合并(&&A)',
      detail1: '如果不保存合并结果，合并结果将丢失。',
      detail1Conflicts:
        '该文件包含未处理的冲突。如果不保存合并结果，合并结果将丢失。',
      detailN: '如果不保存合并结果，合并结果将丢失。',
      detailNConflicts:
        '文件包含未处理的冲突。如果不保存合并结果，合并结果将丢失。',
      discard: '不保存(&&N)',
      'merge-editor.source': '在合并编辑器中解决冲突之前',
      message1: '是否要保留 {0} 的合并结果?',
      messageN: '是否要保留 {0} 个文件的合并结果?',
      noMoreWarn: '不再询问',
      save: '保存(&&S)',
      'saveTempFile.detail': '这会将合并结果写入原始文件并关闭合并编辑器。',
      'saveTempFile.message': '是否接受合并结果?',
      saveWithConflict: '保存(存在冲突)(&&S)',
      'workspace.close': '关闭(&&C)',
      'workspace.closeWithConflicts': '关闭(存在冲突)(&&C)',
      'workspace.detail1.handled': '如果不保存，你的更改将丢失。',
      'workspace.detail1.unhandled':
        '文件包含未处理的冲突。如果不保存更改，则更改将丢失。',
      'workspace.detail1.unhandled.nonDirty': '文件包含未经处理的冲突。',
      'workspace.detailN.handled': '如果不保存，你的更改将丢失。',
      'workspace.detailN.unhandled':
        '文件包含未经处理的冲突。如果不保存更改，则更改将丢失。',
      'workspace.detailN.unhandled.nonDirty': '文件包含未经处理的冲突。',
      'workspace.doNotSave': '不保存(&&N)',
      'workspace.message1': '是否要保存对 {0} 的更改?',
      'workspace.message1.nonDirty': '是否要关闭 {0} 的合并编辑器?',
      'workspace.messageN': '是否要保存对 {0} 文件所做的更改?',
      'workspace.messageN.nonDirty': '是否要关闭 {0} 个合并编辑器?',
      'workspace.save': '保存(&&S)',
      'workspace.saveWithConflict': '保存(存在冲突)(&&S)',
    },
    'vs/workbench/contrib/mergeEditor/browser/mergeMarkers/mergeMarkersController':
      {
        conflictingLine: '1 冲突行',
        conflictingLines: '{0} 冲突行',
      },
    'vs/workbench/contrib/mergeEditor/browser/model/mergeEditorModel': {
      setInputHandled: '已处理设置输入',
      undoMarkAsHandled: '撤销标记为已处理',
    },
    'vs/workbench/contrib/mergeEditor/browser/view/colors': {
      'mergeEditor.change.background': '更改的背景色。',
      'mergeEditor.change.word.background': '字词更改的背景色。',
      'mergeEditor.changeBase.background': '基中更改的背景色。',
      'mergeEditor.changeBase.word.background': '基中字更改的背景色。',
      'mergeEditor.conflict.handled.minimapOverViewRuler':
        '输入 1 中更改的前景色。',
      'mergeEditor.conflict.handledFocused.border':
        '处理的重点冲突的边框颜色。',
      'mergeEditor.conflict.handledUnfocused.border':
        '已处理的非重点冲突的边框颜色。',
      'mergeEditor.conflict.input1.background': '输入 1 中修饰的背景色。',
      'mergeEditor.conflict.input2.background': '输入 2 中修饰的背景色。',
      'mergeEditor.conflict.unhandled.minimapOverViewRuler':
        '输入 1 中更改的前景色。',
      'mergeEditor.conflict.unhandledFocused.border':
        '未处理的重点冲突的边框颜色。',
      'mergeEditor.conflict.unhandledUnfocused.border':
        '未处理的非重点冲突的边框颜色。',
      'mergeEditor.conflictingLines.background': '“冲突行”文本的背景。',
    },
    'vs/workbench/contrib/mergeEditor/browser/view/conflictActions': {
      accept: '接受 {0}',
      acceptBoth: '接受组合',
      acceptBoth0First: '接受组合({0} 优先)',
      acceptBothTooltip: '接受结果文档中两边的自动组合。',
      acceptTooltip: '接受结果文档中的 {0}。',
      append: '追加 {0}',
      appendTooltip: '将 {0} 追加到结果文档。',
      combine: '接受组合',
      ignore: '忽略',
      manualResolution: '手动解决',
      manualResolutionTooltip: '此冲突已通过手动方式解决。',
      markAsHandledTooltip: '不要选择冲突一方。',
      noChangesAccepted: '未接受任何更改',
      noChangesAcceptedTooltip:
        '此冲突的当前解决方法等于右侧和左侧更改的共同上级。',
      remove: '删除 {0}',
      removeTooltip: '从结果文档中删除 {0}。',
      resetToBase: '重置为基',
      resetToBaseTooltip: '将此冲突重置为左右更改的共同上级。',
    },
    'vs/workbench/contrib/mergeEditor/browser/view/editors/baseCodeEditorView':
      {
        base: '基础',
        compareWith: '正在与 {0} 比较',
        compareWithTooltip: '差异以背景色突出显示。',
      },
    'vs/workbench/contrib/mergeEditor/browser/view/editors/inputCodeEditorView':
      {
        'accept.conflicting': '接受(结果为脏)',
        'accept.excluded': '接受',
        'accept.first': '撤消接受',
        'accept.second': '撤消接受(当前为第二个)',
        input1: '输入 1',
        input2: '输入 2',
        'mergeEditor.accept': '接受 {0}',
        'mergeEditor.acceptBoth': '接受两者',
        'mergeEditor.markAsHandled': '标记为已处理',
        'mergeEditor.swap': '交换',
      },
    'vs/workbench/contrib/mergeEditor/browser/view/editors/resultCodeEditorView':
      {
        allConflictHandled: '已处理所有冲突，现在可以完成合并。',
        goToNextConflict: '转到下一个冲突',
        'mergeEditor.remainingConflict': '剩余 {0} 个冲突',
        'mergeEditor.remainingConflicts': '剩余 {0} 个冲突',
        result: '结果',
      },
    'vs/workbench/contrib/mergeEditor/browser/view/mergeEditor': {
      mergeEditor: '文本合并编辑器',
    },
    'vs/workbench/contrib/mergeEditor/browser/view/viewModel': {
      noConflictMessage: '当前没有可以切换的焦点冲突。',
    },
    'vs/workbench/contrib/mergeEditor/common/mergeEditor': {
      baseUri: '合并编辑器的基数的 URI',
      editorLayout: '合并编辑器的布局模式',
      is: '编辑器是合并编辑器',
      isr: '编辑器是合并编辑器的结果编辑器。',
      resultUri: '合并编辑器结果的 URI',
      showBase: '如果合并编辑器显示基础版本',
      showBaseAtTop: '如果应在顶部显示基',
      showNonConflictingChanges: '如果合并编辑器显示不冲突的更改',
    },
    'vs/workbench/contrib/mergeEditor/electron-sandbox/devCommands': {
      'merge.dev.openSelectionInTemporaryMergeEditor':
        '在临时合并编辑器中打开所选内容',
      'merge.dev.openState': '从 JSON 打开合并编辑器状态',
      mergeEditor: '合并编辑器(开发)',
      'mergeEditor.enterJSON': '输入 JSON',
    },
    'vs/workbench/contrib/notebook/browser/contrib/cellCommands/cellCommands': {
      'notebookActions.changeCellToCode': '将单元格更改为代码',
      'notebookActions.changeCellToMarkdown': '将单元格更改为 Markdown',
      'notebookActions.collapseAllCellInput': '折叠所有单元格输入',
      'notebookActions.collapseAllCellOutput': '折叠所有单元格输出',
      'notebookActions.collapseCellInput': '折叠单元格输入',
      'notebookActions.collapseCellOutput': '折叠单元格输出',
      'notebookActions.copyCellDown': '向下复制单元格',
      'notebookActions.copyCellUp': '向上复制单元格',
      'notebookActions.expandAllCellInput': '展开所有单元格输入',
      'notebookActions.expandAllCellOutput': '展开所有单元格输出',
      'notebookActions.expandCellInput': '展开单元格输入',
      'notebookActions.expandCellOutput': '展开单元格输出',
      'notebookActions.joinCellAbove': '加入上一个单元格',
      'notebookActions.joinCellBelow': '加入下一个单元格',
      'notebookActions.joinSelectedCells': '联接所选单元格',
      'notebookActions.moveCellDown': '下移单元格',
      'notebookActions.moveCellUp': '上移单元格',
      'notebookActions.splitCell': '拆分单元格',
      'notebookActions.toggleOutputs': '切换输出',
      'notebookActions.toggleScrolling': '切换滚动单元格输出',
    },
    'vs/workbench/contrib/notebook/browser/contrib/cellStatusBar/executionStatusBarItemController':
      {
        'notebook.cell.status.executing': '正在执行',
        'notebook.cell.status.failed': '已失败',
        'notebook.cell.status.pending': '挂起',
        'notebook.cell.status.success': '成功',
        'notebook.cell.statusBar.timerTooltip':
          '**上次执行** {0}\r\n\r\n**执行时间** {1}\r\n\r\n**开销时间** {2}\r\n\r\n**呈现时间**\r\n\r\n{3}',
        'notebook.cell.statusBar.timerTooltip.reportIssueFootnote':
          '通过上面的链接使用问题报告器提交问题。',
      },
    'vs/workbench/contrib/notebook/browser/contrib/cellStatusBar/statusBarProviders':
      {
        'notebook.cell.status.autoDetectLanguage': '接受检测到的语言: {0}',
        'notebook.cell.status.language': '选择单元格语言模式',
      },
    'vs/workbench/contrib/notebook/browser/contrib/clipboard/notebookClipboard':
      {
        'notebookActions.copy': '复制单元格',
        'notebookActions.cut': '剪切单元格',
        'notebookActions.paste': '粘贴单元格',
        'notebookActions.pasteAbove': '在上方粘贴单元格',
        toggleNotebookClipboardLog: '切换笔记本剪贴板疑难解答',
      },
    'vs/workbench/contrib/notebook/browser/contrib/editorStatusBar/editorStatusBar':
      {
        'kernel.select.label': '选择内核',
        'notebook.activeCellStatusName': '笔记本编辑器选择',
        'notebook.info': '笔记本内核信息',
        'notebook.multiActiveCellIndicator': '单元格 {0} (已选择 {1} 个)',
        'notebook.select': '笔记本内核选择',
        'notebook.singleActiveCellIndicator': '单元格 {0}/{1}',
        tooltop: '{0} (建议)',
      },
    'vs/workbench/contrib/notebook/browser/contrib/find/notebookFind': {
      'notebookActions.findInNotebook': '在笔记本中查找',
      'notebookActions.hideFind': '隐藏“在笔记本中查找”',
    },
    'vs/workbench/contrib/notebook/browser/contrib/find/notebookFindReplaceWidget':
      {
        findFilterIcon: '查找小组件中的“查找筛选器”图标。',
        'label.closeButton': '关闭',
        'label.find': '查找',
        'label.nextMatchButton': '下一个匹配项',
        'label.previousMatchButton': '上一个匹配项',
        'label.replace': '替换',
        'label.replaceAllButton': '全部替换',
        'label.replaceButton': '替换',
        'label.toggleReplaceButton': '切换替换',
        'notebook.find.filter.filterAction': '查找筛选器',
        'notebook.find.filter.findInCodeInput': '代码单元格源',
        'notebook.find.filter.findInCodeOutput': '代码单元输出',
        'notebook.find.filter.findInMarkupInput': 'Markdown 源',
        'notebook.find.filter.findInMarkupPreview': '呈现的 Markdown',
        'placeholder.find': '查找',
        'placeholder.replace': '替换',
      },
    'vs/workbench/contrib/notebook/browser/contrib/find/notebookFindWidget': {
      ariaSearchNoResult: '为“{1}”找到 {0}',
      ariaSearchNoResultEmpty: '已找到 {0}',
      ariaSearchNoResultWithLineNumNoCurrentMatch: '为“{1}”找到 {0}',
    },
    'vs/workbench/contrib/notebook/browser/contrib/format/formatting': {
      'format.title': '设置笔记本的格式',
      'formatCell.label': '设置单元格格式',
      'formatCells.label': '设置单元格格式',
      label: '设置笔记本的格式',
    },
    'vs/workbench/contrib/notebook/browser/contrib/gettingStarted/notebookGettingStarted':
      {
        'workbench.notebook.layout.gettingStarted.label': '重置笔记本入门',
      },
    'vs/workbench/contrib/notebook/browser/contrib/layout/layoutActions': {
      'notebook.toggleCellToolbarPosition': '切换单元格工具栏位置',
    },
    'vs/workbench/contrib/notebook/browser/contrib/navigation/arrow': {
      cursorMoveDown: '聚焦下一个单元格编辑器',
      cursorMoveUp: '聚焦上一个单元格编辑器',
      cursorPageDown: '单元格光标 Page Down',
      cursorPageDownSelect: '单元格光标 Page Down 选择',
      cursorPageUp: '单元格光标 Page Up',
      cursorPageUpSelect: '单元格光标 Page Up 选择',
      focusFirstCell: '聚焦第一个单元格',
      focusLastCell: '聚焦最后一个单元格',
      focusOutput: '聚焦活动单元格输出',
      focusOutputOut: '解除活动单元格输出聚焦',
      'notebook.navigation.allowNavigateToSurroundingCells':
        '启用后，当单元格编辑器中的当前光标位于第/最后一行时，光标可以导航到下/上一个单元格。',
      'notebookActions.centerActiveCell': '中心活动单元格',
    },
    'vs/workbench/contrib/notebook/browser/contrib/outline/notebookOutline': {
      'breadcrumbs.showCodeCells': '启用的笔记本痕迹包含代码单元格时。',
      empty: '空单元格',
      'outline.showCodeCells': '启用笔记本大纲时，显示代码单元格。',
    },
    'vs/workbench/contrib/notebook/browser/contrib/profile/notebookProfile': {
      setProfileTitle: '设置配置文件',
    },
    'vs/workbench/contrib/notebook/browser/contrib/saveParticipants/saveParticipants':
      {
        'codeAction.apply': '正在应用代码操作“{0}”。',
        'codeaction.get2': '从 "{0}" ([configure]({1}))中获取代码操作。',
        label: '设置笔记本的格式',
        'notebookFormatSave.formatting': '格式设置',
        'notebookSaveParticipants.cellCodeActions': '正在运行代码操作',
        'notebookSaveParticipants.notebookCodeActions':
          '正在运行 "Notebook" 代码操作',
      },
    'vs/workbench/contrib/notebook/browser/contrib/troubleshoot/layout': {
      'workbench.notebook.clearNotebookEdtitorTypeCache':
        '清除笔记本编辑器类型缓存',
      'workbench.notebook.inspectLayout': '检查笔记本布局',
      'workbench.notebook.toggleLayoutTroubleshoot': '切换布局疑难解答',
    },
    'vs/workbench/contrib/notebook/browser/controller/cellOperations': {
      'notebookActions.joinSelectedCells': '无法联接不同种类的单元格',
      'notebookActions.joinSelectedCells.label': '联接 Notebook 单元格',
    },
    'vs/workbench/contrib/notebook/browser/controller/coreActions': {
      miShare: '共享',
      'notebookActions.category': '笔记本',
      'notebookMenu.cellTitle': '笔记本单元格',
      'notebookMenu.insertCell': '插入单元格',
    },
    'vs/workbench/contrib/notebook/browser/controller/editActions': {
      autoDetect: '自动检测',
      changeLanguage: '更改单元格语言',
      clearAllCellsOutputs: '清除所有输出',
      clearCellOutputs: '清除单元格输出',
      confirmDeleteButton: '删除',
      confirmDeleteButtonMessage: '此单元格正在运行，是否确实要删除它?',
      detectLanguage: '接受单元格检测到的语言',
      doNotAskAgain: '不再询问',
      languageDescription: '({0}) - 当前语言',
      languageDescriptionConfigured: '({0})',
      languagesPicks: '语言(标识符)',
      noDetection: '无法检测单元格语言',
      'notebookActions.deleteCell': '删除单元格',
      'notebookActions.editCell': '编辑单元格',
      'notebookActions.quitEdit': '停止编辑单元格',
      pickLanguageToConfigure: '选择语言模式',
    },
    'vs/workbench/contrib/notebook/browser/controller/executeActions': {
      'notebookActions.cancel': '停止单元格执行',
      'notebookActions.cancelNotebook': '停止执行',
      'notebookActions.execute': '执行单元格',
      'notebookActions.executeAbove': '执行上方所有的单元格',
      'notebookActions.executeAndFocusContainer': '执行单元格和焦点容器',
      'notebookActions.executeAndInsertBelow': '执行笔记本单元格并在下方插入',
      'notebookActions.executeAndSelectBelow': '执行笔记本单元格并在下方选择',
      'notebookActions.executeBelow': '执行单元格及以下',
      'notebookActions.executeNotebook': '全部运行',
      'notebookActions.interruptNotebook': '中断',
      'notebookActions.renderMarkdown': '呈现所有 Markdown 单元格',
      revealLastFailedCell: '转到最近失败的单元格',
      revealLastFailedCellShort: '转到',
      revealRunningCell: '转到正在运行的单元格',
      revealRunningCellShort: '转到',
    },
    'vs/workbench/contrib/notebook/browser/controller/foldingController': {
      'fold.cell': '折叠单元格',
      'unfold.cell': '展开单元格',
    },
    'vs/workbench/contrib/notebook/browser/controller/insertCellActions': {
      'notebookActions.insertCodeCellAbove': '在上方插入代码单元格',
      'notebookActions.insertCodeCellAboveAndFocusContainer':
        '在上方插入代码单元格和焦点容器',
      'notebookActions.insertCodeCellAtTop': '在顶部添加代码单元格',
      'notebookActions.insertCodeCellBelow': '在下方插入代码单元格',
      'notebookActions.insertCodeCellBelowAndFocusContainer':
        '在下方插入代码单元格和焦点容器',
      'notebookActions.insertMarkdownCellAbove': '在上方插入 Markdown 单元格',
      'notebookActions.insertMarkdownCellAtTop': '在顶部添加 Markdown 单元格',
      'notebookActions.insertMarkdownCellBelow': '在下方插入 Markdown 单元格',
      'notebookActions.menu.insertCode': '代码',
      'notebookActions.menu.insertCode.minimalToolbar': '添加代码',
      'notebookActions.menu.insertCode.minimaltoolbar': '添加代码',
      'notebookActions.menu.insertCode.ontoolbar': '代码',
      'notebookActions.menu.insertCode.tooltip': '添加代码单元格',
      'notebookActions.menu.insertMarkdown': 'Markdown',
      'notebookActions.menu.insertMarkdown.ontoolbar': 'Markdown',
      'notebookActions.menu.insertMarkdown.tooltip': '添加 Markdown 单元格',
    },
    'vs/workbench/contrib/notebook/browser/controller/layoutActions': {
      customizeNotebook: '自定义笔记本...',
      'notebook.placeholder': '要保存到的设置文件',
      'notebook.saveMimeTypeOrder': '保存 Mimetype 显示顺序',
      'notebook.showLineNumbers': '笔记本行号',
      'notebook.toggleBreadcrumb': '切换痕迹导航',
      'notebook.toggleCellToolbarPosition': '切换单元格工具栏位置',
      'notebook.toggleLineNumbers': '切换笔记本行号',
      'saveTarget.machine': '用户设置',
      'saveTarget.workspace': '工作区设置',
      'workbench.notebook.layout.configure.label': '自定义笔记本布局',
      'workbench.notebook.layout.select.label': '在笔记本布局之间选择',
      'workbench.notebook.layout.webview.reset.label': '重置笔记本 Web 视图',
    },
    'vs/workbench/contrib/notebook/browser/diff/diffElementOutputs': {
      builtinRenderInfo: '内置',
      curruentActiveMimeType: '当前处于活动状态',
      empty: '单元格没有输出',
      mimeTypePicker: '选择其他输出 MIME 类型，可用的 MIME 类型: {0}',
      'noRenderer.2': '找不到输出的呈现器。其具有以下 mimetype: {0}',
      'promptChooseMimeType.placeHolder': '为当前项选择要渲染的 mime 类型',
      'promptChooseMimeTypeInSecure.placeHolder':
        '选择要为当前输出呈现的 mimetype。仅当笔记本受信任时，丰富 mimetype 才可用',
    },
    'vs/workbench/contrib/notebook/browser/diff/notebookDiffActions': {
      'notebook.diff.action.next.title': '显示下一个更改',
      'notebook.diff.action.previous.title': '显示上一个更改',
      'notebook.diff.cell.revertInput': '还原输入',
      'notebook.diff.cell.revertMetadata': '还原元数据',
      'notebook.diff.cell.revertOutputs': '还原输出',
      'notebook.diff.cell.switchOutputRenderingStyleToText': '切换输出呈现',
      'notebook.diff.ignoreMetadata': '隐藏元数据差异',
      'notebook.diff.ignoreOutputs': '隐藏输出差异',
      'notebook.diff.showMetadata': '显示元数据差异',
      'notebook.diff.showOutputs': '显示输出差异',
      'notebook.diff.switchToText': '打开文本差异编辑器',
    },
    'vs/workbench/contrib/notebook/browser/diff/notebookDiffEditor': {
      notebookTreeAriaLabel: '笔记本文本差异',
    },
    'vs/workbench/contrib/notebook/browser/notebook.contribution': {
      'insertToolbarLocation.betweenCells': '在单元格之间悬停时显示的工具栏。',
      'insertToolbarLocation.both': '两个工具栏。',
      'insertToolbarLocation.hidden': '插入操作不会出现在任何位置。',
      'insertToolbarLocation.notebookToolbar': '位于笔记本编辑器顶部的工具栏。',
      'notebook.cellToolbarLocation.description':
        '应在何处显示单元格工具栏，或是否隐藏它。',
      'notebook.cellToolbarLocation.viewType':
        '为特定文件类型配置单元格工具栏位置',
      'notebook.cellToolbarVisibility.description':
        '是否应在悬停或单击时显示单元格工具栏。',
      'notebook.codeActionsOnSave':
        '实验性的。保存时为笔记本运行一系列 CodeActions。必须指定 CodeActions，在延迟后不得保存该文件，并且编辑器不得关闭。示例: `source.fixAll: true`',
      'notebook.compactView.description':
        '控制是否应以紧凑形式呈现笔记本编辑器。例如在打开时，它将减小左边距宽度。',
      'notebook.confirmDeleteRunningCell':
        '控制是否需要确认提示才能删除正在运行的单元格。',
      'notebook.consolidatedOutputButton.description':
        '控制是否应在输出工具栏中呈现输出操作。',
      'notebook.consolidatedRunButton.description':
        '控制是否在“运行”按钮旁边的下拉列表中显示额外操作。',
      'notebook.diff.enableOverviewRuler.description':
        '是否在笔记本的差异编辑器中呈现概述标尺。',
      'notebook.diff.enablePreview.description':
        '是否对笔记本使用增强的文本差异编辑器。',
      'notebook.displayOrder.description': '输出项 mime 类型的优先级列表',
      'notebook.dragAndDrop.description':
        '控制笔记本编辑器是否应允许通过拖放移动单元格。',
      'notebook.editorOptions.experimentalCustomization':
        '用于笔记本中使用的代码编辑器的设置。这可用于自定义大多数编辑器*设置。',
      'notebook.findScope':
        '自定义用于在笔记本单元格中搜索的“查找小组件”行为。启用标记源和标记预览后，“查找小组件”将根据单元格的当前状态搜索源代码或预览。',
      'notebook.focusIndicator.description':
        '控制焦点指示器呈现位置(是沿单元格边框，还是在左侧装订线上)。',
      'notebook.formatOnCellExecution':
        '执行时设置笔记本单元格的格式。格式化程序必须可用。',
      'notebook.formatOnSave':
        '保存时设置笔记本的格式。格式化程序必须可用，文件不得在延迟后保存，且编辑器不得关闭。',
      'notebook.globalToolbar.description':
        '控制是否在笔记本编辑器中呈现全局工具栏。',
      'notebook.globalToolbarShowLabel':
        '控制笔记本工具栏上的操作是否应呈现标签。',
      'notebook.insertToolbarPosition.description':
        '控制插入单元格操作应出现的位置。',
      'notebook.interactiveWindow.collapseCodeCells':
        '控制默认情况下是否折叠交互窗口中的代码单元格。',
      'notebook.markup.fontSize':
        '控制笔记本中呈现的标记的字号(以像素为单位)。设置为 {0} 时，将使用 120% 的 {1}。',
      'notebook.outputFontFamily':
        '笔记本单元格内输出文本的字体系列。设置为空时，使用 {0}。',
      'notebook.outputFontSize':
        '笔记本单元格内输出文本的字号。设置为 0 时，使用 {0}。',
      'notebook.outputLineHeight':
        '笔记本单元格内输出文本的行高。\r\n - 设置为 0 时，使用编辑器行高。\r\n - 介于 0 和 8 之间的值将用作字号的乘数。\r\n - 大于或等于 8 的值将用作有效值。',
      'notebook.outputScrolling':
        '超出限制时，最初在可滚动区域中呈现笔记本输出',
      'notebook.outputWordWrap': '控制输出中的行是否应换行。',
      'notebook.showCellStatusbar.description': '是否应显示单元格状态栏。',
      'notebook.showCellStatusbar.hidden.description': '单元格状态栏始终隐藏。',
      'notebook.showCellStatusbar.visible.description':
        '单元格状态栏始终可见。',
      'notebook.showCellStatusbar.visibleAfterExecute.description':
        '在执行单元格之前，单元格状态栏处于隐藏状态。之后，其会变为可见以显示执行状态。',
      'notebook.showFoldingControls.description':
        '控制显示 Markdown 标头文件箭头的时间。',
      'notebook.textOutputLineLimit':
        '控制文本输出中显示的文本行数。如果启用 {0}，使用此设置确定输出的滚动高度。',
      'notebook.undoRedoPerCell.description':
        '是否为每个单元格使用单独的撤消/重做堆叠。',
      notebookConfigurationTitle: '笔记本',
      'showFoldingControls.always': '折叠控件始终可见。',
      'showFoldingControls.mouseover': '折叠控件仅在鼠标悬停时可见。',
      'showFoldingControls.never': '切勿显示折叠控件并减小装订线大小。',
    },
    'vs/workbench/contrib/notebook/browser/notebookAccessibilityHelp': {
      'notebook.cell.edit': '“编辑单元格”命令 ({0}) 将焦点放在单元格输入上。',
      'notebook.cell.editNoKb':
        '“编辑单元格”命令将焦点放在单元格输入上，当前无法通过键绑定触发该命令。',
      'notebook.cell.executeAndFocusContainer':
        '“执行单元格”命令 ({0}) 执行当前具有焦点的单元格。',
      'notebook.cell.executeAndFocusContainerNoKb':
        '“执行单元格”命令执行当前具有焦点的单元格，当前无法通过键绑定触发该命令。',
      'notebook.cell.focusInOutput':
        '“焦点输出”命令 ({0}) 将在单元格的输出中设置焦点。',
      'notebook.cell.focusInOutputNoKb':
        '“退出编辑”命令将在单元格的输出中设置焦点，当前无法通过键绑定触发该命令。',
      'notebook.cell.insertCodeCellBelowAndFocusContainer':
        '“在上方/下方插入单元格”命令将创建新的空代码单元格',
      'notebook.cell.quitEdit':
        '“退出编辑”命令 ({0}) 将焦点设置在单元格容器上。如果虚拟光标处于活动状态，则可能需要先按两次默认(Escape)键才会退出虚拟光标。',
      'notebook.cell.quitEditNoKb':
        '“退出编辑”命令将在单元格容器上设置焦点，当前无法通过键绑定触发该命令。',
      'notebook.cellNavigation':
        '焦点位于外部单元格容器上时，向上和向下箭头将在单元格之间移动焦点',
      'notebook.changeCellType':
        '“将单元格更改为代码/Markdown”命令用于在单元格类型之间切换。',
      'notebook.overview':
        '笔记本视图是代码单元格和 Markdown 单元格的集合。可以执行代码单元格，该单元格下方将直接生成输出。',
    },
    'vs/workbench/contrib/notebook/browser/notebookEditor': {
      'fail.noEditor':
        '无法打开笔记本编辑器类型为“{0}”的资源，请检查是否已安装并启用正确的扩展。',
      'fail.noEditor.extensionMissing':
        '无法打开笔记本编辑器类型为“{0}”的资源，请检查是否已安装并启用正确的扩展。',
      notebookOpenAsText: '以文本形式打开',
      notebookOpenEnableMissingViewType: '为 "{0}" 启用扩展',
      notebookOpenInTextEditor: '在文本编辑器中打开',
      notebookOpenInstallMissingViewType: '安装 "{0}" 的扩展',
    },
    'vs/workbench/contrib/notebook/browser/notebookEditorWidget': {
      focusedCellBackground: '将焦点放在单元格上时单元格的背景色。',
      'notebook.cellBorderColor': '笔记本单元格的边框颜色。',
      'notebook.cellEditorBackground': '单元格编辑器背景色。',
      'notebook.cellHoverBackground': '将鼠标悬停在单元格上时单元格的背景色。',
      'notebook.cellInsertionIndicator': '笔记本单元格插入指示符的颜色。',
      'notebook.cellStatusBarItemHoverBackground':
        '笔记本单元格状态栏项的背景色。',
      'notebook.cellToolbarSeparator': '单元格底部工具栏中分隔符的颜色',
      'notebook.editorBackground': '笔记本背景色。',
      'notebook.focusedCellBorder':
        '将焦点放在单元格上时单元格焦点指示器边框的颜色。',
      'notebook.focusedEditorBorder': '笔记本单元格编辑器边框的颜色。',
      'notebook.inactiveFocusedCellBorder':
        '当主要焦点在编辑器外时，聚焦单元格时单元格的上下边框的颜色。',
      'notebook.inactiveSelectedCellBorder':
        '选定多个单元格时单元格边框的颜色。',
      'notebook.outputContainerBackgroundColor': '笔记本输出容器背景的颜色。',
      'notebook.outputContainerBorderColor': '笔记本输出容器的边框颜色。',
      'notebook.selectedCellBorder':
        '选中单元格但未将焦点放在其上时单元格上边框和下边框的颜色。',
      'notebook.symbolHighlightBackground': '突出显示的单元格的背景色',
      'notebookEditorOverviewRuler.runningCellForeground':
        '笔记本编辑器概述标尺中正在运行的单元格修饰的颜色。',
      notebookScrollbarSliderActiveBackground:
        '单击时笔记本滚动条滑块的背景色。',
      notebookScrollbarSliderBackground: '笔记本滚动条滑块的背景色。',
      notebookScrollbarSliderHoverBackground:
        '悬停时笔记本滚动条滑块的背景色。',
      'notebookStatusErrorIcon.foreground':
        '单元格状态栏中笔记本单元格的错误图标颜色。',
      'notebookStatusRunningIcon.foreground':
        '单元格状态栏中笔记本单元格的“正在运行”图标颜色。',
      'notebookStatusSuccessIcon.foreground':
        '单元格状态栏中笔记本单元格的错误图标颜色。',
      notebookTreeAriaLabel: '笔记本',
      selectedCellBackground: '选中某个单元格时该单元格的背景色。',
    },
    'vs/workbench/contrib/notebook/browser/notebookExtensionPoint': {
      'contributes.notebook.provider': '提供笔记本文档处理程序。',
      'contributes.notebook.provider.displayName': '笔记本的可读名称。',
      'contributes.notebook.provider.selector':
        '适用于笔记本的一组 glob 模式。',
      'contributes.notebook.provider.selector.filenamePattern':
        '启用笔记本的 glob 模式。',
      'contributes.notebook.provider.viewType': '笔记本类型。',
      'contributes.notebook.renderer': '提供笔记本输出渲染器。',
      'contributes.notebook.renderer.displayName':
        '笔记本输出渲染器的可读名称。',
      'contributes.notebook.renderer.entrypoint':
        '要在 Web 视图中加载用于呈现扩展的文件。',
      'contributes.notebook.renderer.entrypoint.extends':
        '此呈现器扩展的现有呈现器。',
      'contributes.notebook.renderer.hardDependencies':
        '呈现器所需的内核依赖项的列表。如果 "NotebookKernel" 中存在任何依赖关系，则可以使用呈现器。',
      'contributes.notebook.renderer.optionalDependencies':
        '呈现器可利用的软内核依赖项的列表。如果 "NotebookKernel" 中存在任何依赖关系，则呈现器将优先于不与内核交互的呈现器。',
      'contributes.notebook.renderer.requiresMessaging':
        '定义呈现器是否需要通过 "createRendererMessaging" 与扩展主机通信。具有较强消息传递要求的呈现器可能在所有环境中都不起作用。',
      'contributes.notebook.renderer.requiresMessaging.always':
        '消息传递是必需的。仅当它是可在扩展主机中运行的扩展的一部分时，才会使用该呈现器。',
      'contributes.notebook.renderer.requiresMessaging.never':
        '呈现器不需要消息传递。',
      'contributes.notebook.renderer.requiresMessaging.optional':
        '有可用的消息传递时，呈现器效果更好，但不强制要求。',
      'contributes.notebook.renderer.viewType':
        '笔记本输出渲染器的唯一标识符。',
      'contributes.notebook.selector': '适用于笔记本的一组 glob 模式。',
      'contributes.notebook.selector.provider.excludeFileNamePattern':
        '禁用笔记本的 glob 模式。',
      'contributes.preload.entrypoint': 'Web 视图中加载的文件的路径。',
      'contributes.preload.localResourceRoots':
        'Web 视图中应允许的其他资源的路径。',
      'contributes.preload.provider': '提供笔记本预加载。',
      'contributes.preload.provider.viewType': '笔记本类型。',
      'contributes.priority':
        '控制在用户打开文件时是否自动启用自定义编辑器。用户可能会使用 "workbench.editorAssociations" 设置覆盖此项。',
      'contributes.priority.default':
        '在用户打开资源时自动使用此编辑器，前提是没有为该资源注册其他默认的自定义编辑器。',
      'contributes.priority.option':
        '在用户打开资源时不会自动使用此编辑器，但用户可使用 `Reopen With` 命令切换到此编辑器。',
    },
    'vs/workbench/contrib/notebook/browser/notebookIcons': {
      clearIcon: '用于在笔记本编辑器中清除单元格输出的图标。',
      collapsedIcon: '用于在笔记本编辑器中批注已折叠部分的图标。',
      deleteCellIcon: '用于在笔记本编辑器中删除单元格的图标。',
      editIcon: '用于在笔记本编辑器中编辑单元格的图标。',
      errorStateIcon: '用于在笔记本编辑器中指示错误状态的图标。',
      executeAboveIcon: '用于在笔记本编辑器中在单元格上方进行执行的图标。',
      executeAllIcon: '用于在笔记本编辑器中执行所有单元格的图标。',
      executeBelowIcon: '用于在笔记本编辑器中在单元格下方进行执行的图标。',
      executeIcon: '笔记本编辑器中的执行图标。',
      executingStateIcon: '用于在笔记本编辑器中指示执行状态的图标。',
      expandedIcon: '用于在笔记本编辑器中批注已展开部分的图标。',
      mimetypeIcon: 'MIME 类型笔记本编辑器的图标。',
      moveDownIcon: '用于在笔记本编辑器中下移单元格的图标。',
      moveUpIcon: '用于在笔记本编辑器中上移单元格的图标。',
      nextChangeIcon: '差异编辑器中下一个更改操作的图标',
      openAsTextIcon: '用于在文本编辑器中打开笔记本的图标。',
      pendingStateIcon: '用于在笔记本编辑器中指示挂起状态的图标。',
      previousChangeIcon: '差异编辑器中上一个更改操作的图标',
      renderOutputIcon: '用于在差异编辑器中呈现输出的图标。',
      revertIcon: '笔记本编辑器中的还原图标。',
      selectKernelIcon: '配置用于在笔记本编辑器中选择内核的图标。',
      splitCellIcon: '用于在笔记本编辑器中拆分单元格的图标。',
      stopEditIcon: '用于在笔记本编辑器中停止编辑单元格的图标。',
      stopIcon: '用于在笔记本编辑器中停止执行的图标。',
      successStateIcon: '用于在笔记本编辑器中指示成功状态的图标。',
    },
    'vs/workbench/contrib/notebook/browser/services/notebookExecutionServiceImpl':
      {
        notebookRunTrust: '执行笔记本单元将从此工作区运行代码。',
      },
    'vs/workbench/contrib/notebook/browser/services/notebookKernelHistoryServiceImpl':
      {
        'workbench.notebook.clearNotebookKernelsMRUCache':
          '清除笔记本内核 MRU 缓存',
      },
    'vs/workbench/contrib/notebook/browser/services/notebookKeymapServiceImpl':
      {
        disableOtherKeymapsConfirmation:
          '是否禁用其他按键映射扩展 ({0})，从而避免按键绑定之间的冲突?',
        no: '否',
        yes: '是',
      },
    'vs/workbench/contrib/notebook/browser/services/notebookLoggingServiceImpl':
      {
        renderChannelName: '笔记本呈现',
      },
    'vs/workbench/contrib/notebook/browser/services/notebookServiceImpl': {
      notebookOpenInstallMissingViewType: '安装 "{0}" 的扩展',
    },
    'vs/workbench/contrib/notebook/browser/view/cellParts/cellEditorOptions': {
      'notebook.cell.toggleLineNumbers.title': '显示单元格行号',
      'notebook.lineNumbers': '控制单元格编辑器中行号的显示。',
      'notebook.showLineNumbers': '笔记本行号',
      'notebook.toggleLineNumbers': '切换笔记本行号',
    },
    'vs/workbench/contrib/notebook/browser/view/cellParts/cellOutput': {
      curruentActiveMimeType: '当前处于活动状态',
      empty: '单元格没有输出',
      installJupyterPrompt: '从市场安装其他呈现器',
      'noRenderer.2': '找不到输出的呈现器。其具有以下 mimetype: {0}',
      pickMimeType: '更改演示文稿',
      'promptChooseMimeType.placeHolder': '为当前项选择要渲染的 mime 类型',
      'promptChooseMimeTypeInSecure.placeHolder':
        '为当前项选择要渲染的 mime 类型',
      unavailableRenderInfo: '呈现器不可用',
    },
    'vs/workbench/contrib/notebook/browser/view/cellParts/codeCell': {
      cellExpandInputButtonLabel: '展开单元格输入({0})',
      cellExpandInputButtonLabelWithDoubleClick: '双击以展开单元格输入({0})',
    },
    'vs/workbench/contrib/notebook/browser/view/cellParts/codeCellExecutionIcon':
      {
        'notebook.cell.status.executing': '正在执行',
        'notebook.cell.status.failed': '失败',
        'notebook.cell.status.pending': '挂起',
        'notebook.cell.status.success': '成功',
      },
    'vs/workbench/contrib/notebook/browser/view/cellParts/codeCellRunToolbar': {
      'notebook.moreRunActionsLabel': '更多...',
    },
    'vs/workbench/contrib/notebook/browser/view/cellParts/collapsedCellOutput':
      {
        cellExpandOutputButtonLabel: '展开单元格输出(${0})',
        cellExpandOutputButtonLabelWithDoubleClick: '双击以展开单元格输出({0})',
        cellOutputsCollapsedMsg: '输出已折叠',
      },
    'vs/workbench/contrib/notebook/browser/view/cellParts/foldedCellHint': {
      hiddenCellsLabel: '已隐藏 1 个单元格',
      hiddenCellsLabelPlural: '已隐藏 {0} 个单元格',
    },
    'vs/workbench/contrib/notebook/browser/view/cellParts/markupCell': {
      cellExpandInputButtonLabel: '展开单元格输入({0})',
      cellExpandInputButtonLabelWithDoubleClick: '双击以展开单元格输入({0})',
    },
    'vs/workbench/contrib/notebook/browser/view/renderers/backLayerWebView': {
      'notebook.emptyMarkdownPlaceholder':
        '空白 Markdown 单元格，请双击或按 Enter 以进行编辑。',
      'notebook.error.rendererFallbacksExhausted': '无法呈现“$0”的内容',
      'notebook.error.rendererNotFound': '找不到“$0”的呈现器',
      'webview title': '笔记本 Web 视图内容',
    },
    'vs/workbench/contrib/notebook/browser/view/renderers/cellRenderer': {
      cellExecutionOrderCountLabel: '执行顺序',
    },
    'vs/workbench/contrib/notebook/browser/viewParts/notebookKernelQuickPickStrategy':
      {
        current1: '当前所选内容',
        current2: '{0}–当前所选内容',
        installSuggestedKernel: '安装建议的扩展',
        'kernels.detecting': '检测内核',
        'kernels.selectedKernelAndKernelDetectionRunning':
          '所选内核: {0} (正在运行内核检测任务)',
        learnMoreTooltip: '了解详细信息',
        'prompt.placeholder.change': '更改 "{0}" 的内核',
        'prompt.placeholder.select': '选择“{0}”的内核',
        searchForKernels: '浏览市场以获取内核扩展',
        select: '选择内核',
        selectAnotherKernel: '选择另一个内核',
        'selectAnotherKernel.more': '选择其他内核...',
        'selectKernel.placeholder': '键入以选择内核源',
        selectKernelFromExtension: '从 {0} 中选择内核',
      },
    'vs/workbench/contrib/notebook/browser/viewParts/notebookKernelView': {
      'notebookActions.selectKernel': '选择笔记本内核',
      'notebookActions.selectKernel.args': '笔记本内核参数',
    },
    'vs/workbench/contrib/notebook/common/notebookEditorInput': {
      vetoExtHostRestart: '无法保存笔记本“{0}”。',
    },
    'vs/workbench/contrib/offline/browser/offline.contribution': {
      offline: '网络似乎处于脱机状态，某些功能可能不可用。',
      statusBarOfflineBackground:
        '工作台脱机时的状态栏背景色。状态栏显示在窗口底部',
      statusBarOfflineBorder:
        '工作台脱机时用来与侧边栏和编辑器区分的状态栏边框颜色。状态栏显示在窗口底部。',
      statusBarOfflineForeground:
        '工作台脱机时的状态栏前景色。状态栏显示在窗口底部',
    },
    'vs/workbench/contrib/outline/browser/outline.contribution': {
      'filteredTypes.array': '启用后，大纲将显示 `array` 符号。',
      'filteredTypes.boolean': '启用后，大纲将显示 `boolean` 符号。',
      'filteredTypes.class': '启用后，大纲将显示 `class` 符号。',
      'filteredTypes.constant': '启用后，大纲将显示`constant`符号。',
      'filteredTypes.constructor':
        '启用大纲时，大纲将显示 `constructor` 符号。',
      'filteredTypes.enum': '启用后，大纲将显示 `enum` 符号。',
      'filteredTypes.enumMember': '启用后，大纲将显示 `enumMember` 符号。',
      'filteredTypes.event': '启用后，大纲将显示 `event` 符号。',
      'filteredTypes.field': '启用时，大纲将显示 `field`符号。',
      'filteredTypes.file': '启用后，大纲将显示 `file` 符号。',
      'filteredTypes.function': '启用时，大纲将显示 `function` 符号。',
      'filteredTypes.interface': '启用后，大纲将显示 `interface` 符号。',
      'filteredTypes.key': '启用后，大纲将显示 `key`符号。',
      'filteredTypes.method': '启用后，大纲将显示 `method` 符号。',
      'filteredTypes.module': '启用后，大纲将显示 `module` 符号。',
      'filteredTypes.namespace': '启用后，大纲将显示 `namespace` 符号。',
      'filteredTypes.null': '启用后，大纲将显示 `null` 符号。',
      'filteredTypes.number': '启用后，大纲将显示 `number` 符号。',
      'filteredTypes.object': '启用后，大纲将显示 `object` 符号。',
      'filteredTypes.operator': '启用时，大纲显示 `operator` 符号。',
      'filteredTypes.package': '启用后，大纲将显示 `package` 符号。',
      'filteredTypes.property': '启用后，大纲将显示 `property` 符号。',
      'filteredTypes.string': '启用后，大纲将显示 `string` 符号。',
      'filteredTypes.struct': '启用后，大纲将显示`struct` 符号。',
      'filteredTypes.typeParameter':
        '启用后，大纲将显示 `typeParameter` 符号。',
      'filteredTypes.variable': '启用后，大纲将显示 `variable` 符号。',
      name: '大纲',
      'outline.initialState': '控制大纲项是折叠还是展开。',
      'outline.initialState.collapsed': '折叠所有项。',
      'outline.initialState.expanded': '展开所有项。',
      'outline.problem.colors': '对大纲元素的错误和警告使用颜色。',
      'outline.problems.badges': '对大纲元素的错误和警告使用锁屏提醒。',
      'outline.showIcons': '使用图标呈现大纲元素。',
      'outline.showProblem': '显示大纲元素上的错误和警告。',
      outlineConfigurationTitle: '大纲',
      outlineViewIcon: '查看大纲视图的图标。',
    },
    'vs/workbench/contrib/outline/browser/outlineActions': {
      collapse: '全部折叠',
      expand: '全部展开',
      filterOnType: '在输入时筛选',
      followCur: '跟随光标',
      sortByKind: '排序方式 : 类别',
      sortByName: '排序依据 : 名称',
      sortByPosition: '排序依据 : 位置',
    },
    'vs/workbench/contrib/outline/browser/outlinePane': {
      loading: '正在加载“{0}”的文档符号...',
      'no-editor': '活动编辑器无法提供大纲信息。',
      'no-symbols': '在文档“{0}”中找不到符号',
    },
    'vs/workbench/contrib/output/browser/logViewer': {
      logViewerAriaLabel: '日志查看器',
    },
    'vs/workbench/contrib/output/browser/output.contribution': {
      'clearOutput.label': '清除输出',
      extensionLogs: '扩展日志',
      logFile:
        '要打开的日志文件的 ID，例如 `"window"`。当前获取此信息的最佳方法是通过检查 `workbench.action.output.show.<id>` 命令来获取 ID',
      logViewer: '日志查看器',
      miToggleOutput: '输出(&&O)',
      openActiveLogOutputFile: '打开日志输出文件',
      openLogFile: '打开日志文件...',
      output: '输出',
      'output.smartScroll.enabled':
        '在输出视图中启用或禁用「智能滚动」。「智能滚动」会自动在你点击输出视图时锁定滚动，并在你点击最后一行时解锁滚动。',
      outputCleared: '输出被清除',
      outputScrollOff: '关闭自动滚动',
      outputScrollOn: '打开自动滚动',
      outputViewIcon: '查看输出视图的图标。',
      selectOutput: '选择输出通道',
      selectlog: '选择日志',
      selectlogFile: '选择日志文件',
      showLogs: '显示日志...',
      showOutputChannels: '显示输出通道...',
      'switchBetweenOutputs.label': '切换输出',
      'switchToOutput.label': '切换输出',
      toggleAutoScroll: '切换自动滚动',
    },
    'vs/workbench/contrib/output/browser/outputView': {
      channel: '“{0}”的输出通道',
      output: '输出',
      'output model title': '{0} - 输出',
      outputViewAriaLabel: '输出面板',
    },
    'vs/workbench/contrib/performance/browser/performance.contribution': {
      cycles: '打印服务周期',
      emitter: '打印发射器配置文件',
      'insta.trace': '打印服务跟踪',
      'show.label': '启动性能',
    },
    'vs/workbench/contrib/performance/browser/perfviewEditor': {
      name: '启动性能',
    },
    'vs/workbench/contrib/performance/electron-sandbox/performance.contribution':
      {
        'experimental.rendererProfiling': '启用时，将自动分析慢速呈现器',
      },
    'vs/workbench/contrib/performance/electron-sandbox/startupProfiler': {
      'prof.detail': '请创建问题并手动附加以下文件:\r\n{0}',
      'prof.detail.restart':
        '需要重新启动才能继续使用“{0}”。再次感谢您的贡献。',
      'prof.message': '成功创建的配置文件。',
      'prof.restart': '重启',
      'prof.restart.button': '重启(&&R)',
      'prof.restartAndFileIssue': '创建问题并重启(&&C)',
      'prof.thanks': '感谢您的帮助。',
    },
    'vs/workbench/contrib/preferences/browser/keybindingsEditor': {
      'SearchKeybindings.FullTextSearchPlaceholder': '在此键入搜索按键绑定',
      'SearchKeybindings.KeybindingsSearchPlaceholder':
        '正在录制按键。按 Esc 键退出',
      addKeybindingLabel: '添加键绑定',
      addKeybindingLabelWithKey: '添加按键绑定 {0}',
      addLabel: '添加键绑定…',
      changeLabel: '更改键绑定…',
      clearInput: '清除键绑定搜索输入',
      command: '命令',
      copyCommandLabel: '复制命令 ID',
      copyCommandTitleLabel: '复制命令标题',
      copyLabel: '复制',
      editKeybindingLabel: '更改键绑定',
      editKeybindingLabelWithKey: '更改键绑定 {0}',
      editWhen: '更改 When 表达式',
      error:
        '编辑按键绑定时发生错误“{0}”。请打开 "keybindings.json" 文件并检查错误。',
      'extension label': '扩展({0})',
      keybinding: '键绑定',
      keybindingsLabel: '键绑定',
      'keyboard shortcuts aria label': '使用空格或 Enter 来更改键绑定。',
      noKeybinding: '未分配键绑定',
      noWhen: '没有时间上下文',
      recordKeysLabel: '录制按键',
      recording: '正在录制按键',
      removeLabel: '删除键绑定',
      resetLabel: '重置按键绑定',
      'show keybindings': '按字母顺序显示 {0} 个按键绑定',
      'show sorted keybindings': '按优先级顺序显示 {0} 个按键绑定',
      showSameKeybindings: '显示相同的按键绑定',
      sortByPrecedeneLabel: '按优先级排序(最高优先)',
      source: '源',
      title: '{0} ({1})',
      when: '当',
    },
    'vs/workbench/contrib/preferences/browser/keybindingsEditorContribution': {
      'defineKeybinding.kbLayoutErrorMessage':
        '在当前键盘布局下无法生成此组合键。',
      'defineKeybinding.kbLayoutLocalAndUSMessage':
        '在你的键盘布局上为 **{0}**(美国标准布局上为 **{1}**)。',
      'defineKeybinding.kbLayoutLocalMessage': '在你的键盘布局上为 **{0}**。',
    },
    'vs/workbench/contrib/preferences/browser/keybindingWidgets': {
      'defineKeybinding.chordsTo': '加上',
      'defineKeybinding.existing': '已有 {0} 条命令的按键绑定与此相同',
      'defineKeybinding.initial': '先按所需的组合键，再按 Enter 键。',
      'defineKeybinding.oneExists': '已有 1 条命令的按键绑定与此相同',
    },
    'vs/workbench/contrib/preferences/browser/keyboardLayoutPicker': {
      autoDetect: '自动检测',
      configureKeyboardLayout: '配置键盘布局',
      displayLanguage: '定义在浏览器环境的 VS Code 中使用的键盘布局。',
      doc: '打开 VS Code 并从命令面板运行“开发人员: 检查密钥映射(JSON)”。',
      'fail.createSettings': '无法创建“{0}”({1})。',
      'keyboard.chooseLayout': '更改键盘布局',
      keyboardLayout: '布局: {0}',
      layoutPicks: '键盘布局({0})',
      pickKeyboardLayout: '选择键盘布局',
      'status.workbench.keyboardLayout': '键盘布局',
    },
    'vs/workbench/contrib/preferences/browser/preferences.contribution': {
      'Keyboard Shortcuts': '键盘快捷方式',
      clear: '清除搜索结果',
      clearHistory: '清除键盘快捷方式搜索历史记录',
      'defineKeybinding.start': '定义键绑定',
      filterUntrusted: '显示不受信任的工作区设置',
      keybindingsEditor: '键绑定编辑器',
      miOpenOnlineSettings: '联机服务设置(&&O)',
      miOpenSettings: '设置(&&S)',
      miOpenTelemetrySettings: '遥测设置(&&T)',
      miPreferences: '首选项(&&P)',
      openAccessibilitySettings: '打开辅助功能设置',
      openCurrentProfileSettingsJson: '打开 当前配置文件设置(JSON)',
      openDefaultKeybindingsFile: '打开默认键盘快捷键(JSON)',
      openFolderSettings: '打开文件夹设置',
      openFolderSettingsFile: '打开文件夹设置(JSON)',
      openGlobalKeybindings: '打开键盘快捷方式',
      openGlobalKeybindingsFile: '打开键盘快捷方式(JSON)',
      openGlobalSettings: '打开用户设置',
      openRawDefaultSettings: '打开默认设置(JSON)',
      openRemoteSettings: '打开远程设置({0})',
      openRemoteSettingsJSON: '打开远程设置(JSON) ({0})',
      openSettings2: '打开设置 (ui)',
      openSettingsJson: '打开设置 (json)',
      openUserSettingsJson: '打开用户设置(JSON)',
      openWorkspaceSettings: '打开工作区设置',
      openWorkspaceSettingsFile: '打开工作区设置(JSON)',
      preferences: '首选项',
      settings: '设置',
      'settings.clearResults': '清除设置搜索结果',
      'settings.focusFile': '聚焦到设置文件',
      'settings.focusLevelUp': '将焦点上移一级',
      'settings.focusSearch': '聚焦到设置搜索',
      'settings.focusSettingControl': '焦点设置控制',
      'settings.focusSettingsList': '聚焦设置列表',
      'settings.focusSettingsTOC': '聚焦到设置目录',
      'settings.showContextMenu': '显示设置上下文菜单',
      settingsEditor2: '设置编辑器 2',
      showDefaultKeybindings: '显示系统键绑定',
      showExtensionKeybindings: '显示扩展键绑定',
      showUserKeybindings: '显示用户按键绑定',
    },
    'vs/workbench/contrib/preferences/browser/preferencesActions': {
      configureLanguageBasedSettings: '配置语言特定的设置...',
      languageDescriptionConfigured: '({0})',
      pickLanguage: '选择语言',
    },
    'vs/workbench/contrib/preferences/browser/preferencesIcons': {
      keybindingsAddIcon: '键绑定 UI 中“添加”操作的图标。',
      keybindingsEditIcon: '键绑定 UI 中“编辑”操作的图标。',
      keybindingsRecordKeysIcon: '键绑定 UI 中“记录密钥”操作的图标。',
      keybindingsSortIcon: '键绑定 UI 中“按优先级排序”切换开关的图标。',
      preferencesClearInput: '设置和键绑定 UI 中的“清除输入”图标。',
      preferencesDiscardIcon: '设置 UI 中“放弃”操作的图标。',
      preferencesOpenSettings: '“打开设置”命令的图标。',
      settingsEditIcon: '设置 UI 中“编辑”操作的图标。',
      settingsFilter: '为设置 UI 建议筛选器的按钮的图标。',
      settingsMoreActionIcon: '设置 UI 中“更多操作”操作的图标。',
      settingsRemoveIcon: '设置 UI 中“删除”操作的图标。',
      settingsScopeDropDownIcon:
        '“拆分 JSON 设置”编辑器中“文件夹”下拉按钮的图标。',
    },
    'vs/workbench/contrib/preferences/browser/preferencesRenderers': {
      copyDefaultValue: '复制到设置',
      defaultProfileSettingWhileNonDefaultActive:
        '非默认配置文件处于活动状态时无法应用此设置。将在默认配置文件处于活动状态时应用。',
      editTtile: '编辑',
      'manage workspace trust': '管理工作区信任',
      replaceDefaultValue: '在设置中替换',
      'unknown configuration setting': '未知的配置设置',
      unsupportLanguageOverrideSetting:
        '无法应用此设置，因为它未注册为语言替代设置。',
      unsupportedApplicationSetting:
        '此设置具有应用程序范围，只能在用户设置文件中设置。',
      unsupportedMachineSetting:
        '只能在本地窗口的用户设置中或者远程窗口的远程设置中应用此设置。',
      unsupportedPolicySetting: '无法应用此设置，因为它是在系统策略中配置的。',
      unsupportedProperty: '不支持的属性',
      unsupportedRemoteMachineSetting:
        '此设置无法在此窗口中应用。在你打开本地窗口时将应用它。',
      unsupportedWindowSetting:
        '此设置无法应用于此工作区。它将在您直接打开包含的工作区文件夹时应用。',
      untrustedSetting: '此设置仅可应用于受信任的工作区。',
    },
    'vs/workbench/contrib/preferences/browser/preferencesWidgets': {
      folderSettings: '文件夹',
      settingsSwitcherBarAriaLabel: '设置转换器',
      userSettings: '用户',
      userSettingsRemote: '远程',
      workspaceSettings: '工作区',
    },
    'vs/workbench/contrib/preferences/browser/settingsEditor2': {
      'SearchSettings.AriaLabel': '搜索设置',
      clearInput: '清除设置搜索输入',
      clearSearchFilters: '清除筛选',
      filterInput: '筛选器设置',
      lastSyncedLabel: '上次同步时间: {0}',
      moreThanOneResult: '找到 {0} 个设置',
      noResults: '未找到设置',
      oneResult: '找到 1 个设置',
      settings: '设置',
      'settings require trust': '工作区信任',
      turnOnSyncButton: '打开设置同步',
    },
    'vs/workbench/contrib/preferences/browser/settingsEditorSettingIndicators':
      {
        alsoConfiguredElsewhere: '也已在其他位置修改',
        alsoConfiguredIn: '同时修改于',
        alsoModifiedInScopes: '在以下范围中也修改了该设置:',
        applicationSetting: '适用所有配置文件',
        applicationSettingDescription:
          '该设置不特定于当前配置文件，并将在切换配置文件时保留其值。',
        applicationSettingDescriptionAccessible: '切换配置文件时保留设置值',
        configuredElsewhere: '已在其他位置修改',
        configuredIn: '修改于',
        defaultOverriddenDetails: '默认设置值由 {0} 重写',
        defaultOverriddenDetailsAriaLabel: '{0} 替代了默认值',
        defaultOverriddenLabel: '默认值已更改',
        defaultOverriddenLanguagesList: '存在适用于 {0} 的特定于语言的默认值',
        extensionSyncIgnoredLabel: '未同步',
        hasDefaultOverridesForLanguages: '以下语言具有默认替代:',
        manageWorkspaceTrust: '管理工作区信任',
        modifiedInScopeForLanguage: '{1} 的 {0} 范围',
        modifiedInScopeForLanguageMidSentence: '{1} 的 {0} 范围',
        modifiedInScopes: '已在以下作用域中修改该设置:',
        policyDescription: '此设置由组织管理，并且无法更改其应用的值。',
        policyDescriptionAccessible: '由组织策略管理；未应用设置值',
        policyFilterLink: '查看策略设置',
        policyLabelText: '未应用设置值',
        remote: '远程',
        syncIgnoredAriaLabel: '同步期间忽略的设置',
        syncIgnoredTitle: '同步期间忽略此设置',
        trustLabel: '此设置值仅可应用于受信任的工作区。',
        user: '用户',
        workspace: '工作区',
        workspaceUntrustedAriaLabel: '工作区不受信任；未应用设置值',
        workspaceUntrustedLabel: '未应用设置值',
      },
    'vs/workbench/contrib/preferences/browser/settingsLayout': {
      accessibility: '辅助功能',
      appearance: '外观',
      application: '应用程序',
      audioCues: '音频提示',
      breadcrumbs: '导航路径',
      chat: '聊天',
      comments: '评论',
      commonlyUsed: '常用设置',
      cursor: '光标',
      debug: '调试',
      diffEditor: '差异编辑器',
      editorManagement: '编辑管理',
      experimental: '实验性',
      extensions: '扩展',
      features: '功能',
      fileExplorer: '资源管理器',
      files: '文件',
      find: '查找',
      font: '字体',
      formatting: '格式化',
      keyboard: '键盘',
      mergeEditor: '合并编辑器',
      minimap: '缩略图',
      newWindow: '新建窗口',
      notebook: '笔记本',
      other: '其他',
      output: '输出',
      problems: '问题',
      proxy: '代理服务器',
      remote: '远程',
      scm: '源代码管理',
      screencastMode: '截屏模式',
      search: '搜索',
      security: '安全性',
      settings: '设置编辑器',
      settingsSync: '设置同步',
      suggestions: '建议',
      task: '任务',
      telemetry: '遥测',
      terminal: '终端',
      testing: '测试',
      textEditor: '文本编辑器',
      timeline: '时间线',
      update: '更新',
      window: '窗口',
      workbench: '工作台',
      workspace: '工作区',
      zenMode: '禅模式',
    },
    'vs/workbench/contrib/preferences/browser/settingsSearchMenu': {
      extSettingsSearch: '扩展 ID...',
      extSettingsSearchTooltip: '添加扩展 ID 筛选器',
      featureSettingsSearch: '功能...',
      featureSettingsSearchTooltip: '添加功能筛选器',
      langSettingsSearch: '语言...',
      langSettingsSearchTooltip: '添加语言 ID 筛选器',
      modifiedSettingsSearch: '已更改',
      modifiedSettingsSearchTooltip: '添加或删除已修改的设置筛选器',
      onlineSettingsSearch: '联机服务',
      onlineSettingsSearchTooltip: '显示联机服务设置',
      policySettingsSearch: '策略服务',
      policySettingsSearchTooltip: '显示策略服务的设置',
      tagSettingsSearch: '标记...',
      tagSettingsSearchTooltip: '添加标记筛选器',
    },
    'vs/workbench/contrib/preferences/browser/settingsTree': {
      copySettingAsJSONLabel: '将设置复制为 JSON 文本',
      copySettingIdLabel: '复制设置 id',
      editInSettingsJson: '在 settings.json 中编辑',
      editLanguageSettingLabel: '编辑 {0} 的设置',
      extensions: '扩展',
      modified: '该设置已在当前作用域中配置。',
      newExtensionsButtonLabel: '显示匹配的扩展',
      resetSettingLabel: '重置此设置',
      settings: '设置',
      'settings.Default': '默认',
      'settings.Modified': '已修改。',
      settingsContextMenuTitle: '更多操作...',
      showExtension: '显示扩展',
      stopSyncingSetting: '同步此设置',
      validationError: '验证错误。',
    },
    'vs/workbench/contrib/preferences/browser/settingsWidgets': {
      addItem: '添加项',
      addPattern: '添加模式',
      cancelButton: '取消',
      editExcludeItem: '编辑排除项目',
      editIncludeItem: '编辑包含项',
      editItem: '编辑项',
      excludePatternHintLabel: '排除与“{0}”匹配的文件',
      excludePatternInputPlaceholder: '排除项的模式...',
      excludeSiblingHintLabel:
        '仅当存在匹配“{1}”的文件时，才排除匹配“{0}”的文件',
      excludeSiblingInputPlaceholder: '当符合此模式的项目存在时...',
      includePatternHintLabel: '包括与 `{0}` 匹配的文件',
      includePatternInputPlaceholder: '包括模式...',
      includeSiblingHintLabel:
        '仅当存在匹配 `{0}` 的文件时，才包含匹配 `{1}` 的文件',
      includeSiblingInputPlaceholder: '当符合此模式的项目存在时...',
      itemInputPlaceholder: '项...',
      listSiblingHintLabel: '列出与"${1}"同级的项目"{0}"',
      listSiblingInputPlaceholder: '同级...',
      listValueHintLabel: '列出项目"{0}"',
      objectKeyHeader: '项',
      objectKeyInputPlaceholder: '键',
      objectPairHintLabel: '属性“{0}”设置为“{1}”。',
      objectValueHeader: '值',
      objectValueInputPlaceholder: '值',
      okButton: '确定',
      removeExcludeItem: '删除排除项',
      removeIncludeItem: '删除包含项',
      removeItem: '删除项',
      resetItem: '重置项',
    },
    'vs/workbench/contrib/preferences/browser/tocTree': {
      groupRowAriaLabel: '{0}，组',
      settingsTOC: '设置目录',
    },
    'vs/workbench/contrib/preferences/common/preferencesContribution': {
      enableNaturalLanguageSettingsSearch:
        '控制是否在设置中启用自然语言搜索。自然语言搜索由 Microsoft 联机服务提供。',
      settingsSearchTocBehavior: '控制设置编辑器的目录在搜索时的行为。',
      'settingsSearchTocBehavior.filter':
        '筛选目录为仅显示含有匹配设置的类别。单击一个类别将仅显示该类别的结果。',
      'settingsSearchTocBehavior.hide': '在搜索时隐藏目录。',
      splitSettingsEditorLabel: '拆分设置编辑器',
    },
    'vs/workbench/contrib/preferences/common/settingsEditorColorRegistry': {
      focusedRowBackground: '聚焦时设置行的背景色。',
      headerForeground: '节标题或活动标题的前景颜色。',
      modifiedItemForeground: '修改后的设置指示器的颜色。',
      numberInputBoxBackground: '设置编辑器编号输入框背景。',
      numberInputBoxBorder: '设置编辑器编号输入框边框。',
      numberInputBoxForeground: '设置编辑器编号输入框前景。',
      'settings.focusedRowBorder': '将焦点放在行上时行的上边框和下边框的颜色。',
      'settings.rowHoverBackground': '悬停时设置行的背景色。',
      settingsCheckboxBackground: '设置编辑器复选框背景。',
      settingsCheckboxBorder: '设置编辑器复选框边框。',
      settingsCheckboxForeground: '设置编辑器复选框前景。',
      settingsDropdownBackground: '设置编辑器下拉列表背景色。',
      settingsDropdownBorder: '设置编辑器下拉列表边框。',
      settingsDropdownForeground: '设置编辑器下拉列表前景色。',
      settingsDropdownListBorder:
        '设置编辑器下拉列表边框。这会将选项包围起来，并将选项与描述分开。',
      settingsHeaderBorder: '标头容器边框的颜色。',
      settingsHeaderHoverForeground: '节标题或悬停标题的前景色。',
      settingsSashBorder: '设置编辑器分割檢視窗扇边框的颜色。',
      textInputBoxBackground: '设置编辑器文本输入框背景。',
      textInputBoxBorder: '设置编辑器文本输入框边框。',
      textInputBoxForeground: '设置编辑器文本输入框前景。',
    },
    'vs/workbench/contrib/quickaccess/browser/commandsQuickAccess': {
      askXInChat: '询问 {0}: {1}',
      clearButtonLabel: '清除(&&C)',
      clearCommandHistory: '清除命令历史记录',
      commandWithCategory: '{0}: {1}',
      'configure keybinding': '配置键绑定',
      confirmClearDetail: '此操作不可逆!',
      confirmClearMessage: '是否要清除最近使用的命令的历史记录?',
      noCommandResults: '没有匹配的命令',
      semanticSimilarity: '类似命令',
      showTriggerActions: '显示所有命令',
    },
    'vs/workbench/contrib/quickaccess/browser/quickAccess.contribution': {
      commandPalette: '命令面板...',
      commandsQuickAccess: '显示并运行命令',
      commandsQuickAccessPlaceholder: '键入要运行的命令的名称。',
      helpQuickAccess: '显示所有快速访问提供程序',
      helpQuickAccessPlaceholder:
        '键入"{0}"以获取有关可在此处执行的操作的帮助。',
      miCommandPalette: '命令面板(&&C)…',
      miGotoLine: '转到行/列(&&L)…',
      miOpenView: '打开视图(&&O)…',
      miShowAllCommands: '显示所有命令',
      viewQuickAccess: '打开视图',
      viewQuickAccessPlaceholder: '键入要打开的视图、输出通道或终端的名称。',
    },
    'vs/workbench/contrib/quickaccess/browser/viewQuickAccess': {
      channels: '输出',
      debugConsoles: '调试控制台',
      noViewResults: '没有匹配的视图',
      openView: '打开视图',
      panels: '面板',
      quickOpenView: 'Quick Open 视图',
      'secondary side bar': '辅助侧边栏',
      terminalTitle: '{0}: {1}',
      terminals: '终端',
      views: '侧边栏',
    },
    'vs/workbench/contrib/relauncher/browser/relauncher.contribution': {
      relaunchSettingDetail: '按下“重启”按钮以重新启动 {0} 并启用该设置。',
      relaunchSettingDetailWeb: '按重新加载按钮重新加载{0}并启用该设置。',
      relaunchSettingMessage: '设置已更改，需要重启才能生效。',
      relaunchSettingMessageWeb: '设置已更改，需要重新加载才能生效。',
      restart: '重启(&&R)',
      'restartExtensionHost.reason': '由于工作区文件夹更改，正在重启扩展主机。',
      restartWeb: '重载(&&R)',
    },
    'vs/workbench/contrib/remote/browser/explorerViewItems': {
      'remote.explorer.switch': '切换远程',
      remotes: '切换远程',
    },
    'vs/workbench/contrib/remote/browser/remote': {
      RemoteHelpInformationExtPoint: '为远程提供帮助信息',
      'RemoteHelpInformationExtPoint.documentation':
        '项目文档页面的 URL 或返回此 URL 的命令',
      'RemoteHelpInformationExtPoint.feedback':
        '项目反馈报告器的 URL 或返回 URL 的命令',
      'RemoteHelpInformationExtPoint.feedback.deprecated': '请改用 {0}',
      'RemoteHelpInformationExtPoint.getStarted':
        '项目入门页的 URL 或返回 URL 的命令，或项目扩展提供的演练 ID',
      'RemoteHelpInformationExtPoint.issues':
        '项目问题列表的 URL 或返回 URL 的命令',
      'RemoteHelpInformationExtPoint.reportIssue':
        '向项目的问题报告器返回 URL 的 URL 或命令',
      connectionLost: '连接中断',
      'getStartedWalkthrough.id': '要打开的“入门”演练的 ID。',
      pickRemoteExtension: '选择要打开的 URL',
      reconnectNow: '立即重新连接',
      reconnectionPermanentFailure: '无法重新连接。请重新加载窗口。',
      reconnectionRunning: '已断开连接。正在尝试重新连接…',
      reconnectionWaitMany: '正在尝试在 {0} 秒内重新连接...',
      reconnectionWaitOne: '正在尝试在 {0} 秒内重新连接...',
      reloadWindow: '重新加载窗口',
      'reloadWindow.dialog': '重新加载窗口(&&R)',
      'remote.explorer': '远程资源管理器',
      'remote.help': '帮助和反馈',
      'remote.help.documentation': '阅读文档',
      'remote.help.getStarted': '入门',
      'remote.help.issues': '审查问题',
      'remote.help.report': '报告问题',
      remotehelp: '远程帮助',
    },
    'vs/workbench/contrib/remote/browser/remoteExplorer': {
      '1forwardedPort': '1 个转发的端口',
      nForwardedPorts: '{0} 个转发的端口',
      ports: '端口',
      'remote.forwardedPorts.statusbarTextNone': '未转发端口',
      'remote.forwardedPorts.statusbarTooltip': '转发的端口: {0}',
      'remote.tunnelsView.automaticForward':
        '在端口 {0} 上运行的应用程序可用。',
      'remote.tunnelsView.elevationButton': '使用端口 {0} 作为 Sudo…',
      'remote.tunnelsView.elevationMessage':
        '你需要以超级用户身份运行，才能在本地使用端口 {0}。',
      'remote.tunnelsView.makePublic': '设为公开',
      'remote.tunnelsView.notificationLink2': '[查看所有转发端口]({0})',
      'status.forwardedPorts': '转发的端口',
    },
    'vs/workbench/contrib/remote/browser/remoteIcons': {
      copyAddressIcon: '“复制本地地址”操作的图标。',
      documentationIcon: '远程资源管理器视图中的文档图标。',
      feedbackIcon: '远程资源管理器视图中的反馈图标。',
      forwardPortIcon: '“前进”操作的图标。',
      forwardedPortWithProcessIcon: '具有正在运行的进程的转发端口图标。',
      forwardedPortWithoutProcessIcon: '没有正在运行的进程的转发端口图标。',
      getStartedIcon: '远程资源管理器视图中的入门图标。',
      labelPortIcon: '“标记端口”操作的图标。',
      openBrowserIcon: '“打开浏览器”操作的图标。',
      openPreviewIcon: '“打开预览”操作的图标。',
      portIcon: '表示一个远程端口的图标。',
      portsViewIcon: '查看远程端口视图的图标。',
      privatePortIcon: '表示一个私有远程端口的图标。',
      remoteExplorerViewIcon: '查看远程资源管理器视图的图标。',
      reportIssuesIcon: '远程资源管理器视图中的“报告问题”图标。',
      reviewIssuesIcon: '远程资源管理器视图中的“审阅问题”图标。',
      stopForwardIcon: '“停止转发”操作的图标。',
    },
    'vs/workbench/contrib/remote/browser/remoteIndicator': {
      'closeRemoteConnection.title': '关闭远程连接',
      'closeVirtualWorkspace.title': '关闭远程工作区',
      disconnectedFrom: '已与 {0} 断开连接',
      'host.open': '正在打开远程...',
      'host.reconnecting': '正在重新连接到 {0}…',
      'host.tooltip': '正在 {0} 上编辑',
      miCloseRemote: '关闭远程连接(&&M)',
      networkStatusHighLatencyTooltip:
        '网络似乎具有高延迟(上一次{0}毫秒，{1}毫秒平均值)，某些功能可能响应缓慢。',
      networkStatusOfflineTooltip: '网络似乎处于脱机状态，某些功能可能不可用。',
      'noHost.tooltip': '打开远程窗口',
      reloadWindow: '重新加载窗口',
      'remote.category': '远程',
      'remote.close': '关闭远程连接',
      'remote.install': '安装远程开发拓展',
      'remote.showMenu': '显示远程菜单',
      'remote.startActions.help': '了解详细信息',
      'remote.startActions.install': '安装',
      'remote.startActions.installingExtension': '正在安装扩展... ',
      remoteActions: '选择选项以打开远程窗口',
      remoteHost: '远程主机',
      statusBarOfflineBackground:
        '工作台脱机时的状态栏背景色。状态栏显示在窗口底部',
      statusBarOfflineForeground:
        '工作台脱机时的状态栏前景色。状态栏显示在窗口底部',
      'workspace.tooltip': '正在 {0} 上编辑',
      'workspace.tooltip2':
        '对于位于虚拟文件系统上的资源，某些[功能不可用] ({0})。',
    },
    'vs/workbench/contrib/remote/browser/remoteStartEntry': {
      'remote.category': '远程',
      'remote.showWebStartEntryActions': '显示 Web 的远程启动条目',
    },
    'vs/workbench/contrib/remote/browser/tunnelFactory': {
      'tunnelPrivacy.private': '专用',
      'tunnelPrivacy.public': '公用',
    },
    'vs/workbench/contrib/remote/browser/tunnelView': {
      'portWithRunningProcess.foreground':
        '具有关联的正在运行的进程的端口图标颜色。',
      'portsLink.followLinkAlt': 'Alt + 单击',
      'portsLink.followLinkAlt.mac': 'Option + 单击',
      'portsLink.followLinkCmd': 'Cmd + 单击',
      'portsLink.followLinkCtrl': 'Ctrl + 单击',
      'remote.tunnel': '端口',
      'remote.tunnel.changeLocalPort': '更改本地地址端口',
      'remote.tunnel.changeLocalPortNumber':
        '本地端口 {0} 不可用。已改用端口号 {1}',
      'remote.tunnel.close': '停止转发端口',
      'remote.tunnel.closeNoPorts': '当前未转发端口。尝试运行{0}命令',
      'remote.tunnel.closePlaceholder': '选择停止转发的端口',
      'remote.tunnel.copyAddressCommandPalette': '复制转发的端口地址',
      'remote.tunnel.copyAddressInline': '复制本地地址',
      'remote.tunnel.copyAddressPlaceholdter': '选择转发的端口',
      'remote.tunnel.forward': '转发端口',
      'remote.tunnel.forwardError':
        '无法转发{0}: {1}。主机可能不可用，或者远程端口可能已被转发',
      'remote.tunnel.forwardItem': '转发端口',
      'remote.tunnel.forwardPrompt':
        '端口号或地址(例如 3000 或 10.10.10.10:2000)。',
      'remote.tunnel.label': '设置端口标签',
      'remote.tunnel.open': '在浏览器中打开',
      'remote.tunnel.openCommandPalette': '在浏览器中打开端口',
      'remote.tunnel.openCommandPaletteNone':
        '当前没有转发端口。若要开始，请打开端口视图。',
      'remote.tunnel.openCommandPalettePick': '选择要打开的端口',
      'remote.tunnel.openCommandPaletteView': '打开端口视图…',
      'remote.tunnel.openPreview': '在编辑器中预览',
      'remote.tunnel.protocolHttp': 'HTTP',
      'remote.tunnel.protocolHttps': 'HTTPS',
      'remote.tunnel.tooltipCandidate': '远程端口 {0}:{1} 未转发。',
      'remote.tunnel.tooltipForwarded':
        '远程端口 {0}:{1} 已转发到本地地址 {2}。',
      'remote.tunnel.tooltipName': '标记为 {0} 的端口。',
      'remote.tunnelView.alreadyForwarded': '端口已被转发',
      'remote.tunnelView.inlineElevationMessage': '可能需要 sudo',
      'remote.tunnelsView.addPort': '添加端口',
      'remote.tunnelsView.changePort': '新的本地端口',
      'remote.tunnelsView.input': '按 Enter 键确认，或按 Esc 键取消。',
      'remote.tunnelsView.labelPlaceholder': '端口标签',
      'remote.tunnelsView.portNumberToHigh':
        '端口号必须大于等于 0 且小于 {0}。',
      'remote.tunnelsView.portNumberValid': '转发的端口应为数字或主机:端口。',
      'tunnel.addressColumn.label': '本地地址',
      'tunnel.addressColumn.tooltip': '转发端口在本地可用的地址。',
      'tunnel.focusContext': '“端口”视图是否具有焦点。',
      'tunnel.forwardedPortsViewEnabled': '“端口”视图是否已启用。',
      'tunnel.iconColumn.notRunning': '没有正在运行的进程。',
      'tunnel.iconColumn.running': '端口有正在运行的进程。',
      'tunnel.originColumn.label': '源',
      'tunnel.originColumn.tooltip':
        '转发端口的来源。可以是扩展、用户转发、静态转发或自动转发。',
      'tunnel.portColumn.label': '端口',
      'tunnel.portColumn.tooltip': '转发端口的标签和远程端口号。',
      'tunnel.privacyColumn.label': '可见性',
      'tunnel.privacyColumn.tooltip': '转发端口的可用性。',
      'tunnel.processColumn.label': '正在运行的进程',
      'tunnel.processColumn.tooltip': '正在使用该端口的进程的命令行。',
      'tunnelContext.privacyMenu': '端口可见性',
      'tunnelContext.protocolMenu': '更改端口协议',
      'tunnelPrivacy.private': '专用',
      'tunnelPrivacy.unknown': '未知',
      tunnelView: '隧道视图',
      'tunnelView.runningProcess.inacessable': '流程信息不可用',
    },
    'vs/workbench/contrib/remote/common/remote.contribution': {
      invalidWorkspaceDetail: '请选择另一个工作区以打开。',
      invalidWorkspaceMessage: '工作区不存在',
      invalidWorkspacePrimary: '打开工作区(&&O)...',
      pauseSocketWriting: '连接: 暂停套接字写入',
      remote: '远程',
      'remote.autoForwardPorts':
        '启用后，将检测到新的正在运行的进程，并自动转发其侦听的端口。禁用此设置将不会阻止转发所有端口。即使禁用，扩展将仍然能够导致端口被转发，并且打开某些 URL 仍将导致端口被转发。',
      'remote.autoForwardPortsSource':
        '设置当 {0} 为 true 时自动从其转发端口的源。在 Windows 和 Mac 远程设备上，`process` 和 `hybrid` 选项不起作用，系统将使用“output”。需要重新加载才能生效。',
      'remote.autoForwardPortsSource.hybrid':
        '通过读取终端和调试输出发现端口时，端口将自动转发。并非所有使用端口的进程都将打印到集成终端或调试控制台，因此某些端口将丢失。通过监视侦听该端口的进程以终止，端口将为“未转发”。',
      'remote.autoForwardPortsSource.output':
        '通过读取终端和调试输出发现端口时，将自动转发该端口。并非所有使用端口的进程都将打印到集成终端或调试控制台，因此某些端口将丢失。根据输出转发的端口将不会被“取消转发”，除非重载或用户在“端口”视图中关闭该端口。',
      'remote.autoForwardPortsSource.process':
        '通过监视包含端口的已启动进程发现端口时，将自动转发该端口。',
      'remote.extensionKind':
        '覆盖扩展的类型。"ui" 扩展在本地计算机上安装和运行，而 "workspace" 扩展则在远程计算机上运行。通过使用此设置重写扩展的默认类型，可指定是否应在本地或远程安装和启用该扩展。',
      'remote.forwardOnClick':
        '控制从终端和调试控制台打开具有端口的本地 URL 时是否转发它。',
      'remote.localPortHost': '指定将用于端口转发的本地主机名。',
      'remote.portsAttributes':
        '设置在转发特定端口号时应用的属性。例如:\r\n\r\n```\r\n"3000": {\r\n  "label": "Application"\r\n},\r\n"40000-55000": {\r\n  "onAutoForward": "ignore"\r\n},\r\n".+\\\\/server.js": {\r\n "onAutoForward": "openPreview"\r\n}\r\n```',
      'remote.portsAttributes.defaults':
        '对于未从设置 {0} 中获得属性的所有端口，设置其上应用的默认属性。例如: \r\n\r\n```\r\n{\r\n  "onAutoForward": "ignore"\r\n}\r\n```',
      'remote.portsAttributes.elevateIfNeeded':
        '在转发此端口时，自动提示提升(如果需要)。如果本地端口是特权端口，则需要提升。',
      'remote.portsAttributes.ignore': '此端口不会自动转发。',
      'remote.portsAttributes.label': '将在此端口的 UI 中显示的标签。',
      'remote.portsAttributes.labelDefault': '应用程序',
      'remote.portsAttributes.notify': '在自动转发端口时显示通知。',
      'remote.portsAttributes.onForward':
        '定义在为自动转发发现端口时发生的操作',
      'remote.portsAttributes.openBrowser':
        '在自动转发端口时打开浏览器。根据你的设置，可能会打开嵌入式浏览器。',
      'remote.portsAttributes.openBrowserOnce':
        '自动转发端口时打开浏览器，但仅在会话期间第一次转发端口时打开。这可能会打开嵌入式浏览器，具体取决于你的设置。',
      'remote.portsAttributes.openPreview':
        '自动转发端口时，在同一窗口中打开预览。',
      'remote.portsAttributes.patternError':
        '必须是一个端口号、端口号范围或正则表达式。',
      'remote.portsAttributes.port':
        '端口、端口范围(例如 "40000-55000")、主机和端口(例如 "db:1234")或正则表达式(例如 ".+\\\\/server.js")。对于端口号或端口范围，属性将应用于该端口号或端口号范围。使用正则表达式的属性将应用于其关联流程命令行与表达式匹配的端口。',
      'remote.portsAttributes.protocol': '转发此端口时要使用的协议。',
      'remote.portsAttributes.requireLocalPort':
        '如果为 true，则将显示一个模式对话框，指示所选的本地端口是否不用于转发。',
      'remote.portsAttributes.silent':
        '在自动转发此端口时，不显示任何通知，也不执行任何操作。',
      'remote.restoreForwardedPorts': '还原您在工作区中转发的端口。',
      triggerReconnect: '连接: 触发器重新连接',
      ui: 'UI 扩展类型。在远程窗口中，只有在本地计算机上可用时，才会启用此类扩展。',
      workspace: '工作区扩展类型。在远程窗口中，仅在远程上可用时启用此类扩展。',
    },
    'vs/workbench/contrib/remote/electron-sandbox/remote.contribution': {
      remote: '远程',
      'remote.downloadExtensionsLocally':
        '启用后，扩展将本地下载并安装在远程上。',
      wslFeatureInstalled: '平台是否安装了 WSL 功能',
    },
    'vs/workbench/contrib/remoteTunnel/electron-sandbox/remoteTunnel.contribution':
      {
        'accountPreference.placeholder': '登录帐户以启用远程访问',
        'action.copyToClipboard': '将浏览器链接复制到剪贴板',
        'action.doNotShowAgain': '不再显示',
        'action.showExtension': '显示扩展',
        enable: '启用(&&E)',
        'initialize.progress.title': '[正在查找远程隧道](command:{0})',
        'manage.placeholder': '选择要调用的命令',
        'manage.showLog': '显示日志',
        'manage.title.attached': '已为 {0} 启用远程隧道访问(已在外部启动)',
        'manage.title.off': '未启用远程隧道访问',
        'manage.title.orunning': '已为 {0} 启用远程隧道访问',
        'manage.tunnelName': '更改隧道名称',
        others: '其他',
        'progress.turnOn.failed':
          '无法启用远程隧道访问。有关详细信息，请查看远程隧道服务日志。',
        'progress.turnOn.final':
          '现在，可以通过安全隧道 [{0}](command:{4}) 随时随地访问此计算机。要通过其他计算机进行连接，请使用生成的 [{1}]({2})链接，或者在桌面或 Web 中使用 [{6}]({7})扩展。可以通过“VS Code 帐户”菜单 [配置](command:{3}) 或 [关闭](command:{5})此访问权限。',
        'recommend.remoteExtension':
          '隧道 "{0}" 可用于远程访问。{1} 扩展可用于连接到该隧道。',
        'remoteTunnel.actions.configure': '配置隧道名称...',
        'remoteTunnel.actions.copyToClipboard': '将浏览器 URI 复制到剪贴板',
        'remoteTunnel.actions.learnMore': 'Tunnel 入门',
        'remoteTunnel.actions.manage.connecting': '远程隧道访问正在连接',
        'remoteTunnel.actions.manage.on.v2': '远程隧道访问已启用',
        'remoteTunnel.actions.showLog': '显示远程隧道服务日志',
        'remoteTunnel.actions.turnOff': '关闭远程隧道访问...',
        'remoteTunnel.actions.turnOn': '打开远程隧道访问...',
        'remoteTunnel.category': '远程隧道',
        'remoteTunnel.turnOff.confirm': '是否要关闭远程隧道访问?',
        'remoteTunnel.turnOffAttached.confirm':
          '是否要关闭远程隧道访问? 这也将停止在外部启动的服务。',
        'remoteTunnelAccess.machineName':
          '远程隧道访问注册名。如果未设置，则使用主机名。',
        'remoteTunnelAccess.machineNameRegex':
          '名称只能由字母、数字、下划线和短划线组成。不得以短划线开头。',
        'remoteTunnelAccess.preventSleep':
          '启用远程隧道访问时，防止计算机睡眠。',
        'sign in using account': '使用 {0} 登录',
        'signed in': '已登录',
        'startTunnel.progress.title': '[正在启动远程隧道](command:{0})',
        'tunnel.preview':
          '远程隧道目前为预览版。请使用“帮助: 报告问题”命令报告任何问题。',
      },
    'vs/workbench/contrib/sash/browser/sash.contribution': {
      sashHoverDelay:
        '控制视图/编辑器之间拖动区域的悬停反馈延迟(以毫秒为单位)。',
      sashSize:
        '控制视图/编辑器之间拖动区域的反馈区域大小(以像素为单位)。如果你认为很难使用鼠标调整视图的大小，请将该值调大。',
    },
    'vs/workbench/contrib/scm/browser/activity': {
      scmPendingChangesBadge: '{0} 个挂起的更改',
      'status.scm': '源代码管理',
    },
    'vs/workbench/contrib/scm/browser/dirtydiffDecorator': {
      change: '{0} - 第 {1} 个更改(共 {2} 个)',
      changes: '{0} - 第 {1} 个更改(共 {2} 个)',
      editorGutterAddedBackground: '编辑器导航线中已插入行的背景颜色。',
      editorGutterDeletedBackground: '编辑器导航线中被删除行的背景颜色。',
      editorGutterModifiedBackground: '编辑器导航线中被修改行的背景颜色。',
      'label.close': '关闭',
      miGotoNextChange: '下一个更改(&&C)',
      miGotoPreviousChange: '上一个更改(&&C)',
      minimapGutterAddedBackground: '添加的线的迷你地图装订线背景颜色。',
      minimapGutterDeletedBackground: '删除的线的迷你地图装订线背景颜色。',
      minimapGutterModifiedBackground: '修改的线的迷你地图装订线背景颜色。',
      'move to next change': '转到下一个更改',
      'move to previous change': '转到上一个更改',
      multiChange: '第 {0} 个更改 (共 {1} 个)',
      multiChanges: '第 {0} 个更改 (共 {1} 个)',
      overviewRulerAddedForeground: '概览标尺中已增加内容的颜色。',
      overviewRulerDeletedForeground: '概览标尺中已删除内容的颜色。',
      overviewRulerModifiedForeground: '概览标尺中已修改内容的颜色。',
      'show next change': '显示下一个更改',
      'show previous change': '显示上一个更改',
    },
    'vs/workbench/contrib/scm/browser/dirtyDiffSwitcher': {
      'quickDiff.base.switch': '切换快速差异基',
      remotes: '切换快速差异基',
    },
    'vs/workbench/contrib/scm/browser/menus': {
      miShare: '共享',
    },
    'vs/workbench/contrib/scm/browser/scm.contribution': {
      alwaysShowActions: '控制是否在“源代码管理”视图中始终显示内联操作。',
      alwaysShowRepository: '控制存储库是否应在源代码管理视图中始终可见。',
      autoReveal: '控制源代码管理视图在打开文件时是否应自动显示和选择文件。',
      diffDecorations: '控制编辑器中差异的显示效果。',
      diffDecorationsIgnoreTrimWhitespace:
        '控制在源代码管理差异装订线修饰中是否忽略前导空格和尾随空格。',
      diffGutterPattern: '控制是否将模式用于装订线中的差异修饰。',
      diffGutterPatternAdded: '对添加的线条使用装订线中的差异装饰模式。',
      diffGutterPatternModifed: '对修改后的线条使用装订线中的差异修饰模式。',
      diffGutterWidth: '控制装订线中差异修饰的宽度(px)(已添加或已修改)。',
      inputFontFamily:
        '控制输入消息的字体。将 `default` 用于工作台用户界面字体系列，将 `editor` 用于 `#editor.fontFamily#` 的值，或者使用自定义字体系列。',
      inputFontSize: '控制输入消息的字号(以像素为单位)。',
      manageWorkspaceTrustAction: '管理工作区信任',
      miViewSCM: '源代码管理(&&C)',
      'no open repo': '当前没有源代码管理提供程序进行注册。',
      'no open repo in an untrusted workspace':
        '所有已注册的源代码管理提供程序都无法在“受限模式”下工作。',
      'open in terminal': '在终端打开',
      providersVisible:
        '控制在“源代码管理存储库”部分中显示的存储库数。设置为 0，以便能够手动调整视图大小。',
      repositoriesSortOrder: '控制源代码管理存储库视图中存储库的排序顺序。',
      'scm accept': '源代码管理: 接受输入',
      'scm view next commit': '源代码管理: 查看下一个提交',
      'scm view previous commit': '源代码管理: 查看上一个提交',
      'scm.countBadge': '控制活动栏上源代码管理图标上的计数锁屏提醒。',
      'scm.countBadge.all': '显示所有源代码管理提供程序计数锁屏提醒的总和。',
      'scm.countBadge.focused': '显示焦点源控制提供程序的计数标记。',
      'scm.countBadge.off': '禁用源代码管理计数徽章。',
      'scm.defaultViewMode': '控制默认的源代码管理仓库视图模式。',
      'scm.defaultViewMode.list': '将仓库更改显示为列表。',
      'scm.defaultViewMode.tree': '将仓库更改显示为树。',
      'scm.defaultViewSortKey':
        '控制默认的源代码管理仓库在被视为列表时的更改排序顺序。',
      'scm.defaultViewSortKey.name': '按文件名对仓库更改进行排序。',
      'scm.defaultViewSortKey.path': '按路径对仓库更改进行排序。',
      'scm.defaultViewSortKey.status': '按源代码管理状态对仓库更改进行排序。',
      'scm.diffDecorations.all': '显示所有可用位置中的差异装饰。',
      'scm.diffDecorations.gutter': '仅在编辑器行号槽中显示差异装饰。',
      'scm.diffDecorations.minimap': '仅在缩略图中显示差异装饰。',
      'scm.diffDecorations.none': '不要显示差异装饰。',
      'scm.diffDecorations.overviewRuler': '仅在概览标尺中显示差异装饰。',
      'scm.diffDecorationsGutterAction': '控制源代码管理差异装订线修饰的行为。',
      'scm.diffDecorationsGutterAction.diff': '单击时显示内联差异速览视图。',
      'scm.diffDecorationsGutterAction.none': '不执行任何操作。',
      'scm.diffDecorationsGutterVisibility':
        '控制行号槽中源代码管理差异装饰器的可见性。',
      'scm.diffDecorationsGutterVisibility.always':
        '始终显示行号槽中的差异装饰器。',
      'scm.diffDecorationsGutterVisibility.hover':
        '仅在悬停时显示行号槽中的差异装饰器。',
      'scm.diffDecorationsIgnoreTrimWhitespace.false':
        '不要忽略前导空格和尾随空格。',
      'scm.diffDecorationsIgnoreTrimWhitespace.inherit':
        '继承自 `diffEditor.ignoreTrimWhitespace`。',
      'scm.diffDecorationsIgnoreTrimWhitespace.true':
        '忽略前导空格和尾随空格。',
      'scm.providerCountBadge':
        '控制源代码管理提供程序标头的计数锁屏提醒。仅在有多个提供程序时才显示这些标头。',
      'scm.providerCountBadge.auto':
        '仅显示非零时源代码管理提供程序的计数锁屏提醒。',
      'scm.providerCountBadge.hidden': '隐藏源代码管理提供程序计数锁屏提醒。',
      'scm.providerCountBadge.visible': '显示源代码管理提供程序计数锁屏提醒。',
      'scm.repositoriesSortOrder.discoveryTime':
        '按发现时间对源代码管理存储库视图中的存储库排序。按所选顺序对源代码管理视图中的存储库排序。',
      'scm.repositoriesSortOrder.name':
        '按仓库名称对源代码管理仓库和源代码管理视图中的仓库排序。',
      'scm.repositoriesSortOrder.path':
        '按仓库路径对源代码管理仓库和源代码管理视图中的仓库排序。',
      scmConfigurationTitle: '源代码管理',
      showActionButton: '控制是否可以在源代码管理视图中显示操作按钮。',
      'source control': '源代码管理',
      'source control repositories': '源代码管理存储库',
      sourceControlViewIcon: '查看“源代码管理”视图的图标。',
    },
    'vs/workbench/contrib/scm/browser/scmRepositoriesViewPane': {
      scm: '源代码管理存储库',
    },
    'vs/workbench/contrib/scm/browser/scmViewPane': {
      'collapse all': '折叠所有存储库',
      'expand all': '展开所有存储库',
      input: '源代码管理输入',
      'label.close': '关闭',
      repositories: '存储库',
      repositorySortByDiscoveryTime: '按发现时间排序',
      repositorySortByName: '按名称排序',
      repositorySortByPath: '按路径排序',
      scm: '源代码管理',
      'scm.providerBorder': 'SCM 提供程序分隔符边框。',
      setListViewMode: '以列表形式查看',
      setTreeViewMode: '以树形式查看',
      sortAction: '查看和排序',
      sortChangesByName: '按名称对更改进行排序',
      sortChangesByPath: '按路径对更改进行排序',
      sortChangesByStatus: '按状态对更改进行排序',
    },
    'vs/workbench/contrib/scm/browser/scmViewPaneContainer': {
      'source control': '源代码管理',
    },
    'vs/workbench/contrib/search/browser/anythingQuickAccess': {
      closeEditor: '从最近打开中删除',
      fileAndSymbolResultsSeparator: '文件和符号结果',
      filePickAriaLabelDirty: '{0} 个未保存的更改',
      fileResultsSeparator: '文件结果',
      more: '更多',
      noAnythingResults: '没有匹配的结果',
      openToBottom: '打开转到底部',
      openToSide: '打开转到侧边',
      recentlyOpenedSeparator: '最近打开',
    },
    'vs/workbench/contrib/search/browser/patternInputWidget': {
      defaultLabel: '输入',
      onlySearchInOpenEditors: '仅在打开的编辑器中搜索',
      useExcludesAndIgnoreFilesDescription: '使用“排除设置”与“忽略文件”',
    },
    'vs/workbench/contrib/search/browser/replaceService': {
      fileReplaceChanges: '{0} ↔ {1} (Replace Preview)',
      'searchReplace.source': '搜索和替换',
    },
    'vs/workbench/contrib/search/browser/search.contribution': {
      anythingQuickAccess: '转到文件',
      anythingQuickAccessPlaceholder:
        '按名称搜索文件(追加 {0} 转到行，追加 {1} 转到符号)',
      exclude:
        '配置 [glob 模式](https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options)以在全文搜索和快速打开中排除文件和文件夹。从 "#files.exclude#" 设置继承所有 glob 模式。',
      'exclude.boolean':
        '匹配文件路径所依据的 glob 模式。设置为 true 或 false 可启用或禁用该模式。',
      'exclude.when':
        '对匹配文件同辈进行额外检查。将 $(basename) 用作匹配文件名的变量。',
      filterSortOrder: '控制在快速打开中筛选时编辑器历史记录的排序顺序。',
      'filterSortOrder.default':
        '历史记录条目按与筛选值的相关性排序。首先显示更相关的条目。',
      'filterSortOrder.recency':
        '历史记录条目按最近时间排序。首先显示最近打开的条目。',
      maintainFileSearchCacheDeprecated:
        '搜索缓存保留在从不关闭的扩展主机中，因此不再需要此设置。',
      miViewSearch: '搜索(&&S)',
      name: '搜索',
      'scm.defaultViewMode.list': '将搜索结果显示为列表。',
      'scm.defaultViewMode.tree': '将搜索结果显示为树。',
      search: '搜索',
      'search.actionsPosition': '在搜索视图中控制操作栏的位置。',
      'search.actionsPositionAuto':
        '当搜索视图较窄时将操作栏置于右侧，当搜索视图较宽时，将它紧接在内容之后。',
      'search.actionsPositionRight': '始终将操作栏放置在右侧。',
      'search.collapseAllResults': '控制是折叠还是展开搜索结果。',
      'search.collapseResults.auto':
        '结果少于10个的文件将被展开。其他的则被折叠。',
      'search.decorations.badges': '控制搜索文件修饰是否应使用徽章。',
      'search.decorations.colors': '控制搜索文件修饰是否应使用颜色。',
      'search.defaultViewMode': '控制默认搜索结果视图模式。',
      'search.followSymlinks': '控制是否在搜索中跟踪符号链接。',
      'search.globalFindClipboard':
        '控制“搜索”视图是否读取或修改 macOS 的共享查找剪贴板。',
      'search.location':
        '控制搜索功能是显示在侧边栏，还是显示在水平空间更大的面板区域。',
      'search.location.deprecationMessage':
        '此设置已弃用。可以改为将搜索图标拖到新位置。',
      'search.maintainFileSearchCache':
        '启用后，搜索服务进程将保持活动状态，而不是在一个小时不活动后关闭。这将使文件搜索缓存保留在内存中。',
      'search.maxResults':
        '控制搜索结果的最大数目，可将其设置为 “null”(空)，以返回无限结果。',
      'search.mode':
        '控制新的 `搜索: 在文件中查找` 和 `在文件夹中查找` 操作发生的位置: 是在搜索视图中，还是在搜索编辑器中。',
      'search.mode.newEditor': '在新的搜索编辑器中搜索。',
      'search.mode.reuseEditor':
        '在现有搜索编辑器(若有)中搜索，否则在新的搜索编辑器中进行搜索。',
      'search.mode.view': '在面板或边栏的搜索视图中进行搜索。',
      'search.quickOpen.includeHistory':
        '是否在 Quick Open 的文件结果中包含最近打开的文件。',
      'search.quickOpen.includeSymbols':
        '控制 Quick Open 文件结果中是否包括全局符号搜索的结果。',
      'search.searchEditor.defaultNumberOfContextLines':
        '创建新的搜索编辑器时要使用的周围上下文行的默认数目。如果使用 "#search.searchEditor.reusePriorSearchConfiguration#"，则可将它设置为 "null" (空)，以使用搜索编辑器之前的配置。',
      'search.searchEditor.doubleClickBehaviour':
        '配置在搜索编辑器中双击结果的效果。',
      'search.searchEditor.doubleClickBehaviour.goToLocation':
        '双击将在活动编辑器组中打开结果。',
      'search.searchEditor.doubleClickBehaviour.openLocationToSide':
        '双击会将编辑器组中的结果打开到一侧，如果尚不存在，则创建一个结果。',
      'search.searchEditor.doubleClickBehaviour.selectWord':
        '双击选择光标下的单词。',
      'search.searchEditor.reusePriorSearchConfiguration':
        '启用后，新的搜索编辑器将重用之前打开的搜索编辑器的包含、排除和标志。',
      'search.searchOnType': '在键入时搜索所有文件。',
      'search.searchOnTypeDebouncePeriod':
        '启用 {0} 时，控制键入的字符与开始搜索之间的超时(以毫秒为单位)。禁用 {0} 时不起作用。',
      'search.seedOnFocus':
        '聚焦搜索视图时，将搜索查询更新为编辑器的所选文本。单击时或触发 "workbench.views.search.focus" 命令时会发生此情况。',
      'search.seedWithNearestWord':
        '当活动编辑器没有选定内容时，从离光标最近的字词开始进行种子设定搜索。',
      'search.showLineNumbers': '控制是否显示搜索结果所在的行号。',
      'search.smartCase':
        '若搜索词全为小写，则不区分大小写进行搜索，否则区分大小写进行搜索。',
      'search.sortOrder': '控制搜索结果的排序顺序。',
      'search.usePCRE2':
        '是否在文本搜索中使用 pcre2 正则表达式引擎。这允许使用一些高级正则表达式功能, 如前瞻和反向引用。但是, 并非所有 pcre2 功能都受支持-仅支持 javascript 也支持的功能。',
      'search.useReplacePreview':
        '控制在选择或替换匹配项时是否打开“替换预览”视图。',
      searchConfigurationTitle: '搜索',
      'searchSortOrder.countAscending': '结果按每个文件的计数以升序排序。',
      'searchSortOrder.countDescending': '结果按每个文件的计数降序排序。',
      'searchSortOrder.default': '结果按文件夹和文件名按字母顺序排序。',
      'searchSortOrder.filesOnly':
        '结果按文件名排序，忽略文件夹顺序，按字母顺序排列。',
      'searchSortOrder.modified': '结果按文件的最后修改日期按降序排序。',
      'searchSortOrder.type': '结果按文件扩展名的字母顺序排序。',
      symbolsQuickAccess: '转到工作区中的符号',
      symbolsQuickAccessPlaceholder: '键入要打开的符号的名称。',
      useGlobalIgnoreFiles:
        '控制在搜索文件时是否使用全局 gitignore 文件(例如，从 `$HOME/.config/git/ignore`)。需要启用 `#search.useIgnoreFiles#`。',
      useIgnoreFiles:
        '控制在搜索文件时是否使用 `.gitignore` 和 `.ignore` 文件。',
      usePCRE2Deprecated:
        '弃用。当使用仅 PCRE2 支持的正则表达式功能时，将自动使用 PCRE2。',
      useParentIgnoreFiles:
        '控制在搜索文件时是否在父目录中使用 ".gitignore" 和 ".ignore" 文件。需要启用 "#search.useIgnoreFiles#"。',
      useRipgrep: '此设置已被弃用，将回退到 "search.usePCRE2"。',
      useRipgrepDeprecated:
        '已弃用。请考虑使用 "search.usePCRE2" 获取对高级正则表达式功能的支持。',
    },
    'vs/workbench/contrib/search/browser/searchActionsBase': {
      search: '搜索',
    },
    'vs/workbench/contrib/search/browser/searchActionsCopy': {
      copyAllLabel: '全部复制',
      copyMatchLabel: '复制',
      copyPathLabel: '复制路径',
    },
    'vs/workbench/contrib/search/browser/searchActionsFind': {
      excludeFolderFromSearch: '从搜索中排除文件夹',
      findInFiles: '在文件中查找',
      'findInFiles.args': '搜索的一组选项',
      'findInFiles.description': '打开工作区搜索',
      findInFolder: '在文件夹中查找...',
      findInWorkspace: '在工作区中查找...',
      miFindInFiles: '在文件中查找(&&I)',
      restrictResultsToFolder: '将搜索限制为文件夹',
      revealInSideBar: '在资源管理器视图中显示',
    },
    'vs/workbench/contrib/search/browser/searchActionsNav': {
      'AddCursorsAtSearchResults.label': '在搜索结果中添加游标',
      'CloseReplaceWidget.label': '关闭替换小组件',
      'FocusNextInputAction.label': '聚焦下一个输入',
      'FocusNextSearchResult.label': '聚焦下一搜索结果',
      'FocusPreviousInputAction.label': '聚焦上一个输入',
      'FocusPreviousSearchResult.label': '聚焦到上一搜索结果',
      'FocusSearchFromResults.label': '聚焦搜索结果',
      'OpenMatch.label': '打开匹配项',
      'OpenMatchToSide.label': '打开“匹配到一侧”',
      'ToggleCaseSensitiveCommandId.label': '切换区分大小写',
      'TogglePreserveCaseId.label': '切换保留大小写',
      'ToggleQueryDetailsAction.label': '切换查询详细信息',
      'ToggleRegexCommandId.label': '切换正则表达式',
      'ToggleWholeWordCommandId.label': '切换整个字词',
      focusSearchListCommandLabel: '聚焦到列表',
      replaceInFiles: '在文件中替换',
      toggleTabs: '切换类型搜索',
    },
    'vs/workbench/contrib/search/browser/searchActionsRemoveReplace': {
      'RemoveAction.label': '消除',
      'file.replaceAll.label': '全部替换',
      'match.replace.label': '替换',
    },
    'vs/workbench/contrib/search/browser/searchActionsSymbol': {
      miGotoSymbolInWorkspace: '转到工作区中的符号(&&W)…',
      showTriggerActions: '转到工作区中的符号...',
    },
    'vs/workbench/contrib/search/browser/searchActionsTopBar': {
      'CancelSearchAction.label': '取消搜索',
      'ClearSearchResultsAction.label': '清除搜索结果',
      'CollapseDeepestExpandedLevelAction.label': '全部折叠',
      'ExpandAllAction.label': '全部展开',
      'RefreshAction.label': '刷新',
      'ViewAsListAction.label': '以列表形式查看',
      'ViewAsTreeAction.label': '以树形式查看',
      clearSearchHistoryLabel: '清除搜索历史记录',
    },
    'vs/workbench/contrib/search/browser/searchFindInput': {
      'searchFindInputNotebookFilter.label': '笔记本查找筛选器',
    },
    'vs/workbench/contrib/search/browser/searchIcons': {
      searchClearIcon: '搜索视图中的“清除结果”图标。',
      searchCollapseAllIcon: '搜索视图中的“折叠结果”图标。',
      searchDetailsIcon: '用于使搜索详细信息可见的图标。',
      searchExpandAllIcon: '搜索视图中的“展开结果”图标。',
      searchHideReplaceIcon: '用于折叠搜索视图中的替换部分的图标。',
      searchNewEditorIcon: '用于打开新搜索编辑器的操作的图标。',
      searchRefreshIcon: '搜索视图中的“刷新”图标。',
      searchRemoveIcon: '用于删除搜索结果的图标。',
      searchReplaceAllIcon: '搜索视图中的“全部替换”图标。',
      searchReplaceIcon: '搜索视图中的“替换”图标。',
      searchShowAsList: '用于在搜索视图中将结果作为列表查看的图标。',
      searchShowAsTree: '用于在搜索视图中以树形式查看结果的图标。',
      searchShowContextIcon: '搜索编辑器中的“切换上下文”图标。',
      searchShowReplaceIcon: '用于在搜索视图中展开“替换”部分的图标。',
      searchStopIcon: '搜索视图中的“停止”图标。',
      searchViewIcon: '查看搜索视图的图标。',
    },
    'vs/workbench/contrib/search/browser/searchMessage': {
      'unable to open': '无法打开未知链接: {0}',
      'unable to open trust': '无法从不受信任的源打开命令链接: {0}',
    },
    'vs/workbench/contrib/search/browser/searchResultsView': {
      fileMatchAriaLabel: '文件夹 {2} 的文件 {1} 中有 {0} 个匹配项，搜索结果',
      folderMatchAriaLabel: '根目录 {1} 中找到 {0} 个匹配，搜索结果',
      lineNumStr: '位于第 {0} 行',
      numLinesStr: '其他 {0} 行',
      otherFilesAriaLabel: '在工作区外存在 {0} 个匹配，搜索结果',
      replacePreviewResultAria: '将 {1} 列中的“{0}”由 {2} 替换为 {3}',
      search: '搜索',
      searchFileMatch: '已找到 {0} 个文件',
      searchFileMatches: '已找到 {0} 个文件',
      'searchFolderMatch.other.label': '其他文件',
      searchMatch: '已找到 {0} 个匹配项',
      searchMatches: '已找到 {0} 个匹配项',
      searchResultAria: '{1} 列的 {0} 找到了 {2}',
    },
    'vs/workbench/contrib/search/browser/searchView': {
      ariaSearchResultsClearStatus: '搜索结果已清除',
      ariaSearchResultsStatus: '搜索 {1} 文件中返回的 {0} 个结果',
      disableOpenEditors: '在整个工作区中搜索',
      emptySearch: '空搜索',
      'excludes.enable': '启用',
      forTerm: ' - 搜索: {0}',
      moreSearch: '切换搜索详细信息',
      noOpenEditorResultsExcludes: '未在打开的编辑器中找到结果(“{0}”除外) - ',
      noOpenEditorResultsFound:
        '未在打开的编辑器中找到结果。请查看设置中已配置的例外, 并检查 gitignore 文件 - ',
      noOpenEditorResultsIncludes: '未在打开的编辑器中找到与“{0}”匹配的结果 - ',
      noOpenEditorResultsIncludesExcludes:
        '未在打开的编辑器中找到与“{0}”匹配的结果(“{1}”除外) - ',
      noResultsExcludes: '除“{0}”外，未找到任何结果 - ',
      noResultsFound:
        '未找到结果。查看您的设置配置排除, 并检查您的 gitignore 文件-',
      noResultsIncludes: '“{0}”中未找到任何结果 - ',
      noResultsIncludesExcludes: '在“{0}”中找不到结果(“{1}”除外) - ',
      onlyOpenEditors: '仅在打开的文件中搜索',
      'openEditors.disable': '禁用',
      openFolder: '打开文件夹',
      'openInEditor.message': '在编辑器中打开',
      'openInEditor.tooltip': '将当前搜索结果复制到编辑器',
      'openSettings.learnMore': '了解详细信息',
      'openSettings.message': '打开设置',
      'placeholder.excludes': '例如 *.ts、src/**/exclude',
      'placeholder.includes': '例如 *.ts、src/**/include',
      'removeAll.occurrence.file.confirmation.message':
        '是否将 {1} 文件中出现的 {0} 替换为“{2}”?',
      'removeAll.occurrence.file.message': '已替换 {1} 文件中的 {0} 个匹配项。',
      'removeAll.occurrence.files.confirmation.message':
        '是否将 {1} 文件中出现的 {0} 替换为“{2}”?',
      'removeAll.occurrence.files.message': '已替换 {1} 文件中出现的 {0}。',
      'removeAll.occurrences.file.confirmation.message':
        '是否将 {1} 文件中出现的 {0} 替换为“{2}”?',
      'removeAll.occurrences.file.message':
        '已替换 {1} 文件中的 {0} 个匹配项。',
      'removeAll.occurrences.files.confirmation.message':
        '是否将 {1} 个文件中的 {0} 次匹配替换为“{2}”?',
      'removeAll.occurrences.files.message': '已替换 {1} 文件中出现的 {0}。',
      'replaceAll.confirm.button': '替换(&&R)',
      'replaceAll.confirmation.title': '全部替换',
      'replaceAll.occurrence.file.confirmation.message':
        '是否替换 {1} 文件中的 {0} 个匹配项？',
      'replaceAll.occurrence.file.message':
        '已将 {1} 文件中出现的 {0} 替换为“{2}”。',
      'replaceAll.occurrence.files.confirmation.message':
        '是否替换 {1} 文件中出现的 {0}?',
      'replaceAll.occurrence.files.message':
        '已将 {1} 文件中出现的 {0} 替换为“{2}”。',
      'replaceAll.occurrences.file.confirmation.message':
        '是否替换 {1} 文件中的 {0} 个匹配项？',
      'replaceAll.occurrences.file.message':
        '已将 {1} 文件中出现的 {0} 替换为“{2}”。',
      'replaceAll.occurrences.files.confirmation.message':
        '是否替换 {1} 文件中出现的 {0}?',
      'replaceAll.occurrences.files.message':
        '已将 {1} 个文件中出现的 {0} 处替换为“{2}”。 ',
      'rerunSearch.message': '再次搜索',
      'rerunSearchInAll.message': '在所有文件中再次搜索',
      'search.file.result': '{0} 个结果，包含于 {1} 个文件中',
      'search.file.results': '{1} 文件中有 {0} 个结果',
      'search.files.result': '{1} 文件中有 {0} 个结果',
      'search.files.results': '{1} 文件中有 {0} 个结果',
      searchCanceled: '在找到结果前取消了搜索 - ',
      searchMaxResultsWarning:
        '结果集仅包含所有匹配项的子集。请使你的搜索更加具体以减少结果。',
      searchPathNotFoundError: '找不到搜索路径: {0}',
      'searchScope.excludes': '排除的文件',
      'searchScope.includes': '包含的文件',
      searchWithoutFolder: '尚未打开或指定文件夹。当前仅搜索打开的文件 - ',
      useExcludesAndIgnoreFilesDescription: '使用“排除设置”与“忽略文件”',
      useIgnoresAndExcludesDisabled: '已禁止排除设置和忽略文件',
    },
    'vs/workbench/contrib/search/browser/searchWidget': {
      'label.Replace': '替换: 键入待替换词，然后按 Enter 进行预览',
      'label.Search': '搜索: 键入搜索词，然后按 Enter 进行搜索',
      'search.action.replaceAll.disabled.label': '全部替换(提交搜索以启用)',
      'search.action.replaceAll.enabled.label': '全部替换',
      'search.placeHolder': '搜索',
      'search.replace.placeHolder': '替换',
      'search.replace.toggle.button.title': '切换替换',
      showContext: '切换上下文行',
    },
    'vs/workbench/contrib/search/browser/symbolsQuickAccess': {
      noSymbolResults: '没有匹配的工作区符号',
      openToBottom: '打开转到底部',
      openToSide: '打开转到侧边',
    },
    'vs/workbench/contrib/searchEditor/browser/searchEditor': {
      'label.excludes': '搜索排除模式',
      'label.includes': '搜索包含模式',
      moreSearch: '切换搜索详细信息',
      runSearch: '运行搜索',
      searchEditor: '搜索',
      searchResultItem: '在文件 {2} 的 {1} 中匹配到 {0}',
      'searchScope.excludes': '排除的文件',
      'searchScope.includes': '包含的文件',
      textInputBoxBorder: '搜索编辑器文本输入框的边框。',
    },
    'vs/workbench/contrib/searchEditor/browser/searchEditor.contribution': {
      'promptOpenWith.searchEditor.displayName': '搜索编辑器',
      search: '搜索编辑器',
      'search.action.focusFilesToExclude': '要排除的焦点搜索编辑器文件',
      'search.action.focusFilesToInclude': '要包括的焦点搜索编辑器文件',
      'search.action.focusQueryEditorWidget': '聚焦搜索编辑器输入',
      'search.openNewEditor': '打开新的搜索编辑器',
      'search.openNewEditorToSide': '打开侧边的新搜索编辑器',
      'search.openNewSearchEditor': '新的搜索编辑器',
      'search.openResultsInEditor': '在编辑器中打开结果',
      'search.openSearchEditor': '打开搜索编辑器',
      'search.rerunSearchInEditor': '再次搜索',
      searchEditor: '搜索编辑器',
      'searchEditor.action.decreaseSearchEditorContextLines': '减少上下文行',
      'searchEditor.action.increaseSearchEditorContextLines': '增加上下文行',
      'searchEditor.action.selectAllSearchEditorMatches': '选择所有匹配项',
      'searchEditor.action.toggleSearchEditorCaseSensitive': '切换匹配大小写',
      'searchEditor.action.toggleSearchEditorContextLines': '切换上下文行',
      'searchEditor.action.toggleSearchEditorRegex': '切换使用正则表达式',
      'searchEditor.action.toggleSearchEditorWholeWord': '切换全字匹配',
      'searchEditor.deleteResultBlock': '删除文件结果',
    },
    'vs/workbench/contrib/searchEditor/browser/searchEditorInput': {
      searchTitle: '搜索',
      'searchTitle.withQuery': '搜索: {0}',
    },
    'vs/workbench/contrib/searchEditor/browser/searchEditorSerialization': {
      invalidQueryStringError: '查询字符串中的所有反斜杠都必须转义(\\\\)',
      noResults: '无结果',
      numFiles: '{0} 文件',
      numResults: '{0} 个结果',
      oneFile: '1 个文件',
      oneResult: '1 个结果',
      searchMaxResultsWarning:
        '结果集仅包含所有匹配项的子集。请使你的搜索更加具体以减少结果。',
    },
    'vs/workbench/contrib/share/browser/share.contribution': {
      close: '关闭',
      'experimental.share.enabled':
        '控制当 {0} 为 {1} 时，是否在命令中心旁呈现“共享”操作。',
      'generating link': '正在生成链接...',
      'open link': '打开链接',
      share: '共享...',
      shareSuccess: '已将链接复制到剪贴板!',
      shareTextSuccess: '已将文本复制到剪贴板',
    },
    'vs/workbench/contrib/share/browser/shareService': {
      shareProviderCount: '可用共享提供程序数',
      'type to filter': '选择如何共享 {0}',
    },
    'vs/workbench/contrib/snippets/browser/commands/abstractSnippetsActions': {
      snippets: '代码片段',
    },
    'vs/workbench/contrib/snippets/browser/commands/configureSnippets': {
      bad_name1: '无效的文件名',
      bad_name2: '“{0}”不是有效的文件名',
      bad_name3: '“{0}”已存在',
      'detail.label': '({0}) {1}',
      'global.1': '({0})',
      'global.scope': '(全局)',
      'group.global': '现有代码片段',
      miOpenSnippets: '用户片段(&&S)',
      name: '键入代码段文件名',
      'new.folder': '新建“{0}”文件夹的代码片段文件...',
      'new.global': '新建全局代码片段文件...',
      'new.global.sep': '新代码片段',
      'new.global_scope': '全局',
      'new.workspace_scope': '{0} 工作区',
      'openSnippet.label': '配置用户代码片段',
      'openSnippet.pickLanguage': '选择代码片段文件或创建代码片段',
      userSnippets: '用户代码片段',
    },
    'vs/workbench/contrib/snippets/browser/commands/fileTemplateSnippets': {
      label: '使用代码片段填充文件',
      placeholder: '选择代码片段',
    },
    'vs/workbench/contrib/snippets/browser/commands/insertSnippet': {
      'snippet.suggestions.label': '插入片段',
    },
    'vs/workbench/contrib/snippets/browser/commands/surroundWithSnippet': {
      label: '由代码片段包围...',
    },
    'vs/workbench/contrib/snippets/browser/snippetCodeActionProvider': {
      codeAction: '环绕方式: {0}',
      'overflow.start.title': '从代码片段开始',
      title: '开头为: {0}',
    },
    'vs/workbench/contrib/snippets/browser/snippetCompletionProvider': {
      'detail.snippet': '{0} ({1})',
      'snippetSuggest.longLabel': '{0}, {1}',
    },
    'vs/workbench/contrib/snippets/browser/snippetPicker': {
      disableSnippet: '从 IntelliSense 中隐藏',
      'enable.snippet': '在 IntelliSense 中显示',
      isDisabled: '(从 IntelliSense 中隐藏)',
      'pick.noSnippetAvailable': '没有可用的代码片段',
      'pick.placeholder': '选择代码段',
      'sep.userSnippet': '用户代码片段',
      'sep.workspaceSnippet': '工作区代码片段',
    },
    'vs/workbench/contrib/snippets/browser/snippets.contribution': {
      'editor.snippets.codeActions.enabled':
        '控制外围代码段或文件模板片段是否显示为代码操作。',
      'snippetSchema.json': '用户代码片段配置',
      'snippetSchema.json.body':
        "片段内容。请使用 '$1', '${1:defaultText}' 来定义光标位置，使用“$0”表示最终光标位置。请插入带有“${varName}”和“${varName:defaultText}”的变量值，例如 \"这是文件: $TM_FILENAME\"。",
      'snippetSchema.json.default': '空代码片段',
      'snippetSchema.json.description': '代码片段描述。',
      'snippetSchema.json.isFileTemplate': '代码片段用于填充或替换整个文件',
      'snippetSchema.json.prefix':
        '在 Intellisense 中选择代码片段时要使用的前缀',
      'snippetSchema.json.scope':
        '此代码段使用的语言名称列表，例如 "typescript,javascript"。',
    },
    'vs/workbench/contrib/snippets/browser/snippetsFile': {
      'source.userSnippet': '用户代码片段',
      'source.userSnippetGlobal': '全局用户代码片段',
      'source.workspaceSnippetGlobal': '工作区代码片段',
    },
    'vs/workbench/contrib/snippets/browser/snippetsService': {
      badFile: '无法读取代码片段文件“{0}”。',
      badVariableUse:
        '扩展“{0}”中的一个或多个代码片段很可能混淆了片段变量和片段占位符 (有关详细信息，请访问 https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax )',
      'invalid.language':
        '"contributes.{0}.language" 中包含未知语言。提供的值: {1}',
      'invalid.language.0':
        '省略语言时，"contributes.{0}.path" 的值必须为一个 ".code-snippets" 文件。提供的值: {1}',
      'invalid.path.0': '“contributes.{0}.path”中应为字符串。提供的值: {1}',
      'invalid.path.1':
        '“contributes.{0}.path”({1})应包含在扩展的文件夹({2})内。这可能会使扩展不可移植。',
      'vscode.extension.contributes.snippets': '贡献代码段。',
      'vscode.extension.contributes.snippets-language':
        '此代码片段参与的语言标识符。',
      'vscode.extension.contributes.snippets-path':
        '代码片段文件的路径。该路径相对于扩展文件夹，通常以 "./snippets/" 开头。',
    },
    'vs/workbench/contrib/surveys/browser/ces.contribution': {
      cesSurveyQuestion:
        '你有时间帮助 VS Code 团队吗? 请告诉我们你截至目前的 VS Code 体验情况。',
      giveFeedback: '提供反馈',
      remindLater: '以后提醒我',
    },
    'vs/workbench/contrib/surveys/browser/languageSurveys.contribution': {
      helpUs: '帮助我们改善对 {0} 的支持',
      neverAgain: '不再显示',
      remindLater: '以后提醒我',
      takeShortSurvey: '参与小调查',
    },
    'vs/workbench/contrib/surveys/browser/nps.contribution': {
      neverAgain: '不再显示',
      remindLater: '以后提醒我',
      surveyQuestion: '是否介意参加快速反馈调查?',
      takeSurvey: '参加调查',
    },
    'vs/workbench/contrib/tasks/browser/abstractTaskService': {
      'ConfigureTaskRunnerAction.label': '配置任务',
      'TaskServer.folderIgnored': '由于使用任务版本 0.1.0，文件夹 {0} 将被忽略',
      'TaskServer.noTask': '未定义要执行的任务',
      'TaskService.associate': '关联',
      'TaskService.attachProblemMatcher.continueWithout':
        '继续而不扫描任务输出',
      'TaskService.attachProblemMatcher.learnMoreAbout':
        '了解有关扫描任务输出的详细信息',
      'TaskService.attachProblemMatcher.never': '从不扫描此任务的任务输出',
      'TaskService.attachProblemMatcher.neverType':
        '从不扫描 {0} 个任务的任务输出',
      'TaskService.createJsonFile': '使用模板创建 tasks.json 文件',
      'TaskService.defaultBuildTaskExists': '{0} 已被标记为默认生成任务',
      'TaskService.defaultTestTaskExists': '{0} 已被标记为默认测试任务。',
      'TaskService.fetchingBuildTasks': '正在获取生成任务...',
      'TaskService.fetchingTestTasks': '正在获取测试任务...',
      'TaskService.ignoredFolder':
        '由于使用任务版本 0.1.0，以下工作区文件夹将被忽略: {0}',
      'TaskService.noBuildTask': '没有找到要运行的生成任务。配置生成任务...',
      'TaskService.noBuildTask1':
        '未定义任何生成任务。使用 "isBuildCommand" 在 tasks.json 文件中标记任务。',
      'TaskService.noBuildTask2':
        '未定义任何生成任务。在 tasks.json 文件中将任务标记为 "build" 组。',
      'TaskService.noConfiguration':
        '错误: {0} 任务检测未针对以下配置提供任务:\r\n{1}\r\n将忽略此任务。\r\n',
      'TaskService.noEntryToRun': '配置任务',
      'TaskService.noTaskIsRunning': '没有运行中的任务',
      'TaskService.noTaskRunning': '当前没有运行中的任务',
      'TaskService.noTaskToRestart': '没有要重启的任务',
      'TaskService.noTestTask1':
        '未定义任何测试任务。使用 "isTestCommand" 在 tasks.json 文件中标记任务。',
      'TaskService.noTestTask2':
        '未定义任何测试任务。在 tasks.json 文件中将任务标记为 "test" 组。',
      'TaskService.noTestTaskTerminal': '没有找到要运行的测试任务。配置任务...',
      'TaskService.notAgain': '不再显示',
      'TaskService.openJsonFile': '打开 tasks.json 文件',
      'TaskService.pickBuildTask': '选择要运行的生成任务',
      'TaskService.pickBuildTaskForLabel': '选择生成任务(未定义默认生成任务)',
      'TaskService.pickDefaultBuildTask': '选择要用作默认生成任务的任务',
      'TaskService.pickDefaultTestTask': '选择要用作默认测试任务的任务',
      'TaskService.pickRunTask': '选择要运行的任务',
      'TaskService.pickShowTask': '选择要显示输出的任务',
      'TaskService.pickTask': '选择要配置的任务',
      'TaskService.pickTestTask': '选择要运行的测试任务',
      'TaskService.providerUnavailable':
        '警告: {0} 个任务在当前环境中不可用。\r\n',
      'TaskService.requestTrust':
        '列出和运行任务要求此工作区中的某些文件作为代码执行。',
      'TaskService.taskToRestart': '选择要重启的任务',
      'TaskService.taskToTerminate': '选择要终止的任务',
      'TaskService.template': '选择任务模板',
      'TaskService.terminateAllRunningTasks': '所有正在运行的任务',
      'TaskSystem.active':
        '当前已有任务正在运行。请先终止它，然后再执行另一项任务。',
      'TaskSystem.activeSame.noBackground': '任务“{0}”已处于活动状态。',
      'TaskSystem.configurationErrors':
        '错误: 提供的任务配置具有验证错误，无法使用。请首先改正错误。',
      'TaskSystem.invalidTaskJson':
        '错误: tasks.json 文件的内容存在语法错误。请先纠正它们，然后再执行任务。\r\n',
      'TaskSystem.invalidTaskJsonOther':
        '错误: {0} 中 tasks json 的内容存在语法错误。请先纠正它们，然后再执行任务。\r\n',
      'TaskSystem.restartFailed': '未能终止并重启任务 {0}',
      'TaskSystem.saveBeforeRun.prompt.title': '是否保存所有编辑器?',
      'TaskSystem.unknownError':
        '运行任务时发生了错误。请参见任务日志了解详细信息。',
      'TaskSystem.versionSettings': '用户设置中只允许版本为 2.0.0 的任务。',
      'TaskSystem.versionWorkspaceFile':
        '工作区配置文件中只允许 2.0.0 版本的任务。',
      'TaskSystem.workspaceFolderError': '未定义工作区文件夹',
      'TasksSystem.locationUserConfig': '用户设置',
      'TasksSystem.locationWorkspaceConfig': '工作区文件',
      'TerminateAction.failed': '未能终止运行中的任务',
      'TerminateAction.label': '终止任务',
      'TerminateAction.noProcess':
        '启动的进程不再存在。如果任务生成的后台任务退出 VS Code，则可能会导致出现孤立的进程。',
      configureTask: '配置任务',
      configured: '配置的任务',
      customizeParseErrors:
        '当前任务配置存在错误。请先更正错误，再自定义任务。',
      detail: '是否要在运行任务前保存所有编辑器?',
      detected: '检测到的任务',
      moreThanOneBuildTask:
        'tasks.json 中定义了很多生成任务。正在执行第一个任务。\r\n',
      recentlyUsed: '最近使用的任务',
      restartTask: '重启任务',
      'runTask.arg': '筛选快速入门中显示的任务',
      'runTask.label': '任务的标签或要作为筛选依据的术语',
      'runTask.task': '任务的标签或要作为筛选依据的术语',
      'runTask.type': '参与的任务类型',
      'saveBeforeRun.dontSave': '不保存',
      'saveBeforeRun.save': '保存(&&S)',
      selectProblemMatcher: '选择针对何种错误和警告扫描任务输出',
      showOutput: '显示输出',
      'taskQuickPick.userSettings': '用户',
      'taskService.ignoreingFolder':
        '忽略工作区文件夹 {0} 的任务配置。多文件夹工作区任务支持要求所有文件夹都使用任务版本 2.0.0\r\n',
      'taskService.openDiff': '打开差异',
      'taskService.openDiffs': '打开差异',
      'taskService.upgradeVersion':
        '已删除弃用的任务版本 0.1.0。你的任务已升级到 2.0.0 版本。打开差异以查看升级内容。',
      'taskService.upgradeVersionPlural':
        '已删除弃用的任务版本 0.1.0。你的任务已升级到 2.0.0 版本。打开差异以查看升级内容。',
      taskServiceOutputPrompt: '任务出现错误。请查看输出结果，了解更多详细信息',
      tasks: '任务',
      tasksJsonComment:
        '\t// 请参阅 https://go.microsoft.com/fwlink/?LinkId=733558 \r\n\t//查看有关 tasks.json 格式的文档',
      terminateTask: '终止任务',
      unexpectedTaskType:
        '“{0}”任务的任务提供程序意外提供了“{1}”类型的任务。\r\n',
    },
    'vs/workbench/contrib/tasks/browser/runAutomaticTasks': {
      'workbench.action.tasks.allowAutomaticTasks': '允许自动任务',
      'workbench.action.tasks.disallowAutomaticTasks': '禁止自动任务',
      'workbench.action.tasks.manageAutomaticRunning': '管理自动任务',
    },
    'vs/workbench/contrib/tasks/browser/task.contribution': {
      'BuildAction.label': '运行生成任务',
      'ConfigureDefaultBuildTask.label': '配置默认生成任务',
      'ConfigureDefaultTestTask.label': '配置默认测试任务',
      'ReRunTaskAction.label': '重新运行上一个任务',
      'RestartTaskAction.label': '重启正在运行的任务',
      'RunTaskAction.label': '运行任务',
      'ShowLogAction.label': '显示任务日志',
      'ShowTasksAction.label': '显示运行中的任务',
      'TerminateAction.label': '终止任务',
      'TestAction.label': '运行测试任务',
      building: '正在生成...',
      miBuildTask: '运行生成任务(&&B)…',
      miConfigureBuildTask: '配置默认生成任务(&&F)…',
      miConfigureTask: '配置任务(&&C)…',
      miRestartTask: '重启正在运行的任务(&&E)…',
      miRunTask: '运行任务(&&R)…',
      miRunningTask: '显示正在运行的任务(&&G)…',
      miTerminateTask: '终止任务(&&T)…',
      numberOfRunningTasks: '{0} 个正在运行的任务',
      runningTasks: '显示运行中的任务',
      'status.runningTasks': '运行任务',
      'task.SaveBeforeRun.prompt': '提示在运行前是否保存编辑器。',
      'task.allowAutomaticTasks':
        '启用自动任务 - 请注意，任务将不会在不受信任的工作区中运行。',
      'task.allowAutomaticTasks.off': '从不',
      'task.allowAutomaticTasks.on': '始终',
      'task.autoDetect':
        '控制为所有任务提供程序扩展启用"提供任务"。如果"任务: 运行任务"命令速度较慢，则禁用任务提供程序的自动检测可能会提供帮助。单个扩展还可以提供禁用自动检测的设置。',
      'task.problemMatchers.neverPrompt':
        '配置在运行任务时是否显示问题匹配器提示。设置为"true"从不提示，或使用任务类型的字典仅关闭特定任务类型的提示。',
      'task.problemMatchers.neverPrompt.array':
        '包含任务类型布尔对的对象，从不提示有问题的匹配者。',
      'task.problemMatchers.neverPrompt.boolean':
        '为所有任务设置问题匹配器提示行为。',
      'task.quickOpen.detail':
        '控制是否显示在“运行任务”等任务快速选取中具有详细信息的任务的详细信息。',
      'task.quickOpen.history': '控制任务快速打开对话框中跟踪的最近项目数。',
      'task.quickOpen.showAll':
        '使 Tasks: Run Task 命令使用速度较慢的“全部显示”行为，而不是使用任务按提供程序进行分组的速度更快的双层选取器。',
      'task.quickOpen.skip': '控制当只有一个任务要选取时是否跳过任务快速选取。',
      'task.reconnection': '在窗口重新加载时，重新连接到具有问题匹配器的任务。',
      'task.saveBeforeRun': '在运行任务前保存所有未保存的编辑器。',
      'task.saveBeforeRun.always': '运行前始终保存所有编辑器。',
      'task.saveBeforeRun.never': '运行前绝不保存编辑器。',
      'task.slowProviderWarning': '配置当提供程序速度较慢时是否显示警告',
      'task.slowProviderWarning.array':
        '从不显示慢速提供程序警告的任务类型的数组。',
      'task.slowProviderWarning.boolean': '为所有任务设置慢速提供程序警告。',
      tasksConfigurationTitle: '任务',
      tasksQuickAccessHelp: '运行任务',
      tasksQuickAccessPlaceholder: '键入要运行的任务的名称。',
      'workbench.action.tasks.openUserTasks': '打开用户任务',
      'workbench.action.tasks.openWorkspaceFileTasks': '打开工作区任务',
    },
    'vs/workbench/contrib/tasks/browser/taskQuickPick': {
      'TaskQuickPick.changeSettingDetails':
        '{0} 任务的任务检测会导致打开的任何工作区中的文件作为代码运行。启用 {0} 任务检测是用户设置，并将应用于打开的任何工作区。\r\n\r\n是否要为所有工作区启用 {0} 任务检测?',
      'TaskQuickPick.changeSettingNo': '否',
      'TaskQuickPick.changeSettingsOptions':
        '$(gear) {0} 任务检测处于关闭状态。启用 {1} 任务检测...',
      'TaskQuickPick.goBack': '返回',
      'TaskQuickPick.noTasksForType': '未找到任务 {0}。返回↩',
      'TaskService.pickRunTask': '选择要运行的任务',
      configureTask: '配置任务',
      configureTaskIcon: '任务选择列表中的“配置”图标。',
      configured: '已配置',
      contributedTasks: '已提供',
      noProviderForTask: '没有为“{0}”类型的任务注册任务提供程序。',
      recentlyUsed: '最近使用过',
      removeRecent: '删除最近使用的任务',
      removeTaskIcon: '任务选择列表中的“删除”图标。',
      'taskQuickPick.showAll': '显示所有任务...',
      taskType: '全部 {0} 个任务',
    },
    'vs/workbench/contrib/tasks/browser/taskService': {
      'taskService.processTaskSystem': '流程任务系统在 Web 中不受支持。',
    },
    'vs/workbench/contrib/tasks/browser/tasksQuickAccess': {
      'TaskService.pickRunTask': '选择要运行的任务',
      noTaskResults: '没有匹配的任务',
    },
    'vs/workbench/contrib/tasks/browser/taskTerminalStatus': {
      'task.watchFirstError': '此运行检测到错误的开始',
      'taskTerminalStatus.active': '任务正在运行',
      'taskTerminalStatus.errors': '页面中有错误',
      'taskTerminalStatus.errorsInactive': '任务有错误，正在等待...',
      'taskTerminalStatus.infos': '任务有信息',
      'taskTerminalStatus.infosInactive': '任务有信息，正在等待...',
      'taskTerminalStatus.succeeded': '成功的任务',
      'taskTerminalStatus.succeededInactive': '已成功完成任务并在等待...',
      'taskTerminalStatus.warnings': '任务有警告',
      'taskTerminalStatus.warningsInactive': '任务有警告，正在等待...',
    },
    'vs/workbench/contrib/tasks/browser/terminalTaskSystem': {
      TerminalTaskSystem: '无法使用 cmd.exe 在 UNC 驱动器上执行 Shell 命令。',
      'TerminalTaskSystem.nonWatchingMatcher':
        '任务 {0} 是后台任务，但使用的问题匹配器没有后台模式',
      'TerminalTaskSystem.taskLoadReporting':
        '任务“{0}”存在问题。有关更多详细信息，请参见输出。',
      'TerminalTaskSystem.unknownError':
        '在执行任务时发生未知错误。请参见任务输出日志了解详细信息。',
      closeTerminal: '按任意键关闭终端。',
      dependencyCycle: '存在依赖项循环。请参阅任务“{0}”。',
      dependencyFailed: '无法解析在工作区文件夹“{1}”中的依赖任务“{0}”',
      reuseTerminal: '终端将被任务重用，按任意键关闭。',
      'task.executing': '正在执行任务: {0}',
      'task.executing.shell-integration': '正在执行任务: {0}',
      'task.executing.shellIntegration': '正在执行任务: {0}',
      'task.executingInFolder': '正在文件夹 {0} 中执行任务: {1}',
      unknownProblemMatcher: '无法解析问题匹配器 {0}。将忽略此匹配程序',
    },
    'vs/workbench/contrib/tasks/common/jsonSchema_v1': {
      'JsonSchema._runner': '此 runner 已完成使命。请使用官方 runner 属性',
      'JsonSchema.linux': 'Linux 特定的命令配置',
      'JsonSchema.mac': 'Mac 特定的命令配置',
      'JsonSchema.runner':
        '定义任务是否作为进程执行，输出显示在输出窗口还是在终端内。',
      'JsonSchema.shell':
        '指定命令是 shell 命令还是外部程序。如果省略，则默认为 false。',
      'JsonSchema.version': '配置的版本号',
      'JsonSchema.version.deprecated': '任务版本 0.1.0 已被弃用。请使用 2.0.0',
      'JsonSchema.windows': 'Windows 特定的命令配置',
    },
    'vs/workbench/contrib/tasks/common/jsonSchema_v2': {
      'JsonSchema.args.quotedString.value': '实际参数值',
      'JsonSchema.args.quotesString.quote': '参数值应该如何引用。',
      'JsonSchema.command': '要执行的命令。可以是外部程序或 shell 命令。',
      'JsonSchema.command.quotedString.value': '实际命令值',
      'JsonSchema.command.quotesString.quote': '如何引用命令值。',
      'JsonSchema.commandArray': '执行的 Shell 命令。数组项将使用空格连接',
      'JsonSchema.customizations.customizes.type': '要自定义的任务类型',
      'JsonSchema.hide': '从运行任务快速选择菜单中隐藏此任务',
      'JsonSchema.linux': 'Linux 特定的命令配置',
      'JsonSchema.mac': 'Mac 特定的命令配置',
      'JsonSchema.shell':
        '指定命令是 shell 命令还是外部程序。如果省略，则默认为 false。',
      'JsonSchema.tasks.args': '调用此任务时要传递给命令的参数。',
      'JsonSchema.tasks.background': '执行的任务是否保持活动状态并在后台运行。',
      'JsonSchema.tasks.customize.deprecated':
        'customize 属性已被弃用。请参阅 1.14 发行说明了解如何迁移到新的任务自定义方法',
      'JsonSchema.tasks.dependsOn':
        '表示另一个任务的字符串或此任务所依赖的其他任务的数组。',
      'JsonSchema.tasks.dependsOn.array': '此任务依赖的其他任务。',
      'JsonSchema.tasks.dependsOn.identifier': '任务标识符。',
      'JsonSchema.tasks.dependsOn.string': '此任务依赖的另一任务。',
      'JsonSchema.tasks.dependsOrder':
        '确定此任务的依赖任务的顺序。请注意，此属性不是递归的。',
      'JsonSchema.tasks.dependsOrder.parallel': '并行运行所有 dependsOn 任务。',
      'JsonSchema.tasks.dependsOrder.sequence':
        '按顺序运行所有 dependsOn 任务。',
      'JsonSchema.tasks.detail':
        '任务的可选说明，在“运行任务”快速选取中作为详细信息显示。',
      'JsonSchema.tasks.echoCommand.deprecated':
        'isBuildCommand 属性已被弃用。请改为使用 presentation 属性内的 echo 属性。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.group':
        '定义此任务属于的执行组。它支持 "build" 以将其添加到生成组，也支持 "test" 以将其添加到测试组。',
      'JsonSchema.tasks.group.build':
        '将任务标记为可通过 "运行生成任务" 命令访问的生成任务。',
      'JsonSchema.tasks.group.defaultBuild': '将此任务标记为默认生成任务。',
      'JsonSchema.tasks.group.defaultTest': '将此任务标记为默认测试任务。',
      'JsonSchema.tasks.group.isDefault':
        '定义此任务是组中的默认任务，还是与应触发此任务的文件匹配的 glob。',
      'JsonSchema.tasks.group.kind': '任务的执行组。',
      'JsonSchema.tasks.group.none': '将任务分配为没有组',
      'JsonSchema.tasks.group.test':
        '将任务标记为可通过 "Run Test Task" 命令访问的测试任务。',
      'JsonSchema.tasks.icon': '任务的可选图标',
      'JsonSchema.tasks.icon.color': '图标的可选颜色',
      'JsonSchema.tasks.icon.id': '要使用的可选 codicon ID',
      'JsonSchema.tasks.identifier':
        '用于在 launch.json 或 dependsOn 子句中引用任务的用户定义标识符。',
      'JsonSchema.tasks.identifier.deprecated':
        '已弃用用户定义的标识符。对于自定义任务，请使用名称进行引用；对于由扩展提供的任务，请使用其中定义的任务标识符。',
      'JsonSchema.tasks.instanceLimit': '允许同时运行的任务的实例数。',
      'JsonSchema.tasks.isBuildCommand.deprecated':
        'isBuildCommand 属性已被弃用。请改为使用 group 属性。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.isShellCommand.deprecated':
        'isShellCommand 属性已被弃用。请改为使用任务的 type 属性和选项中的 shell 属性。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.isTestCommand.deprecated':
        'isTestCommand 属性已被弃用。请改为使用 group 属性。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.label': '任务的用户界面标签',
      'JsonSchema.tasks.matchers':
        '要使用的问题匹配程序。可以是一个字符串或一个问题匹配程序定义，也可以是一个字符串数组和多个问题匹配程序。',
      'JsonSchema.tasks.presentation':
        '配置用于显示任务输出并读取其输入的面板。',
      'JsonSchema.tasks.presentation.clear': '控制是否在执行任务之前清除终端。',
      'JsonSchema.tasks.presentation.close':
        '控制任务退出时是否关闭运行任务的终端。',
      'JsonSchema.tasks.presentation.echo':
        '控制是否将执行的命令显示到面板中。默认值为“true”。',
      'JsonSchema.tasks.presentation.focus':
        '控制面板是否获取焦点。默认值为“false”。如果设置为“true”，面板也会显示。',
      'JsonSchema.tasks.presentation.group':
        '控制是否使用拆分窗格在特定终端组中执行任务。',
      'JsonSchema.tasks.presentation.instance':
        '控制是否在任务间共享面板。同一个任务使用相同面板还是每次运行时新创建一个面板。',
      'JsonSchema.tasks.presentation.reveal':
        '控制运行任务的终端是否显示。可按选项 "revealProblems" 进行替代。默认设置为“始终”。',
      'JsonSchema.tasks.presentation.reveal.always':
        '总是在此任务执行时显示终端。',
      'JsonSchema.tasks.presentation.reveal.never':
        '不要在此任务执行时显示终端。',
      'JsonSchema.tasks.presentation.reveal.silent':
        '只有当任务因错误而退出或者问题匹配器发现错误时，才会显示终端。',
      'JsonSchema.tasks.presentation.revealProblems':
        '控制在运行此任务时是否显示问题面板。优先于 "显示" 选项。默认值为 "从不"。',
      'JsonSchema.tasks.presentation.revealProblems.always':
        '执行此任务时, 始终显示问题面板。',
      'JsonSchema.tasks.presentation.revealProblems.never':
        '执行此任务时, 永远不会显示问题面板。',
      'JsonSchema.tasks.presentation.revealProblems.onProblem':
        '只有在发现问题时, 才会显示问题面板。',
      'JsonSchema.tasks.presentation.showReuseMessage':
        '控制是否显示“终端将被任务重用，按任意键关闭”提示。',
      'JsonSchema.tasks.promptOnClose':
        '若 VS Code 关闭时有一个任务正在运行，是否提示用户。',
      'JsonSchema.tasks.quoting.escape':
        '使用 Shell 的转义字符来转义文本 (如，PowerShell 下的 ` 和 bash 下的 \\ )',
      'JsonSchema.tasks.quoting.strong':
        "使用 Shell 的强引用字符来引用参数 (例如在 PowerShell 和 bash 下的 ')。",
      'JsonSchema.tasks.quoting.weak':
        '使用 Shell 的弱引用字符来引用参数 (例如在 PowerShell 和 bash 下的 ")。',
      'JsonSchema.tasks.reevaluateOnRerun':
        '是否在重新运行时重新评估任务变量。',
      'JsonSchema.tasks.runOn':
        '对该任务何时运行进行配置。如果设置为 folderOpen，那么该任务将在文件夹打开时自动运行。',
      'JsonSchema.tasks.runOptions': '任务的运行相关选项',
      'JsonSchema.tasks.showOutput.deprecated':
        'showOutput 属性已被弃用。请改为使用 presentation 属性内的 reveal 属性。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.suppressTaskName.deprecated':
        'suppressTaskName 属性已被弃用。请改为在任务中内嵌命令及其参数。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.taskLabel': '任务标签',
      'JsonSchema.tasks.taskName': '任务名称',
      'JsonSchema.tasks.taskName.deprecated':
        '任务的 name 属性已被弃用。请改为使用 label 属性。',
      'JsonSchema.tasks.taskSelector.deprecated':
        'taskSelector 属性已被弃用。请改为在任务中内嵌命令及其参数。另请参阅 1.14 发行说明。',
      'JsonSchema.tasks.terminal':
        'terminal 属性已被弃用。请改为使用 presentation',
      'JsonSchema.tasks.type':
        '定义任务是被作为进程运行还是在 shell 中作为命令运行。',
      'JsonSchema.version': '配置的版本号。',
      'JsonSchema.windows': 'Windows 特定的命令配置',
    },
    'vs/workbench/contrib/tasks/common/jsonSchemaCommon': {
      'JsonSchema.args': '传递到命令的其他参数。',
      'JsonSchema.background': '已执行的任务是否保持活动状态并在后台运行。',
      'JsonSchema.command': '要执行的命令。可以是外部程序或 shell 命令。',
      'JsonSchema.echoCommand':
        '控制是否将已执行的命令回显到输出。默认值为 false。',
      'JsonSchema.matchers':
        '要使用的问题匹配程序。可以是字符串或问题匹配程序定义，或字符串和问题匹配程序数组。',
      'JsonSchema.options': '其他命令选项',
      'JsonSchema.options.cwd':
        '已执行程序或脚本的当前工作目录。如果省略，则使用代码的当前工作区根。',
      'JsonSchema.options.env':
        '已执行程序或 shell 的环境。如果省略，则使用父进程的环境。',
      'JsonSchema.promptOnClose':
        '在具有正在运行的后台任务的情况下关闭 VS 代码时是否提示用户。',
      'JsonSchema.shell.args': 'shell 参数。',
      'JsonSchema.shell.executable': '待使用的 shell。',
      'JsonSchema.shellConfiguration': '配置使用的 shell。',
      'JsonSchema.showOutput':
        '控制是否显示运行任务的输出。如果省略，则使用“始终”。',
      'JsonSchema.suppressTaskName':
        '控制是否将任务名作为参数添加到命令。默认值是 false。',
      'JsonSchema.taskSelector': '指示参数是任务的前缀。',
      'JsonSchema.tasks':
        '任务配置。通常是外部任务运行程序中已定义任务的扩充。',
      'JsonSchema.tasks.args': '调用此任务时要传递给命令的参数。',
      'JsonSchema.tasks.background': '执行的任务是否保持活动状态并在后台运行。',
      'JsonSchema.tasks.build': '将此任务映射到代码的默认生成命令。',
      'JsonSchema.tasks.linux': 'Linux 特定的命令配置',
      'JsonSchema.tasks.mac': 'Mac 特定的命令配置',
      'JsonSchema.tasks.matcherError':
        '无法识别的问题匹配程序。是否已安装支持此问题匹配程序的扩展?',
      'JsonSchema.tasks.matchers':
        '要使用的问题匹配程序。可以是一个字符串或一个问题匹配程序定义，也可以是一个字符串数组和多个问题匹配程序。',
      'JsonSchema.tasks.promptOnClose':
        '若 VS Code 关闭时有一个任务正在运行，是否提示用户。',
      'JsonSchema.tasks.showOutput':
        '控制是否显示正在运行的任务的输出。如果省略，则使用全局定义的值。',
      'JsonSchema.tasks.suppressTaskName':
        '控制是否将任务名作为参数添加到命令。如果省略，则使用全局定义的值。',
      'JsonSchema.tasks.taskName': '任务名称',
      'JsonSchema.tasks.test': '将此任务映射到代码的默认测试命令。',
      'JsonSchema.tasks.watching':
        '已执行的任务是否保持活动状态，并且是否在监视文件系统。',
      'JsonSchema.tasks.watching.deprecation': '已弃用。改用 isBackground。',
      'JsonSchema.tasks.windows': 'Windows 特定的命令配置',
      'JsonSchema.watching':
        '已执行的任务是否保持活动状态，并且是否在监视文件系统。',
      'JsonSchema.watching.deprecation': '已弃用。改用 isBackground。',
    },
    'vs/workbench/contrib/tasks/common/problemMatcher': {
      'LegacyProblemMatcherSchema.watchedBegin':
        '一个正则表达式，发出受监视任务开始执行(通过文件监视触发)的信号。',
      'LegacyProblemMatcherSchema.watchedBegin.deprecated':
        '此属性已弃用。请改用观看属性。',
      'LegacyProblemMatcherSchema.watchedEnd':
        '一个正则表达式，发出受监视任务结束执行的信号。',
      'LegacyProblemMatcherSchema.watchedEnd.deprecated':
        '此属性已弃用。请改用观看属性。',
      'NamedMultiLineProblemPatternSchema.name': '问题多行问题模式的名称。',
      'NamedMultiLineProblemPatternSchema.patterns': '实际模式。',
      'NamedProblemMatcherSchema.label': '问题匹配程序的人类可读标签。',
      'NamedProblemMatcherSchema.name': '要引用的问题匹配程序的名称。',
      'NamedProblemPatternSchema.name': '问题模式的名称。',
      'PatternTypeSchema.description':
        '问题模式或者所提供或预定义问题模式的名称。如果已指定基准，则可以省略。',
      'PatternTypeSchema.name': '所提供或预定义模式的名称',
      ProblemMatcherExtPoint: '提供问题匹配程序',
      'ProblemMatcherParser.invalidRegexp':
        '错误: 字符串 {0} 不是有效的正则表达式。\r\n',
      'ProblemMatcherParser.noDefinedPatter':
        '错误: 标识符为 {0} 的模式不存在。',
      'ProblemMatcherParser.noFileLocation':
        '错误: 说明未定义文件位置:\r\n{0}\r\n',
      'ProblemMatcherParser.noIdentifier': '错误: 模式属性引用空标识符。',
      'ProblemMatcherParser.noOwner': '错误: 说明未定义所有者:\r\n{0}\r\n',
      'ProblemMatcherParser.noProblemMatcher':
        '错误: 说明无法转换为问题匹配器:\r\n{0}\r\n',
      'ProblemMatcherParser.noProblemPattern':
        '错误: 说明未定义有效的问题模式:\r\n{0}\r\n',
      'ProblemMatcherParser.noValidIdentifier':
        '错误: 模式属性 {0} 是无效的模式变量名。',
      'ProblemMatcherParser.problemPattern.watchingMatcher':
        '问题匹配程序必须定义监视的开始模式和结束模式。',
      'ProblemMatcherParser.unknownSeverity':
        '信息: 未知的严重性 {0}。有效值为“错误”、“警告”和“信息”。\r\n',
      'ProblemMatcherSchema.applyTo':
        '控制文本文档上报告的问题是否仅应用于打开、关闭或所有文档。',
      'ProblemMatcherSchema.background':
        '用于跟踪在后台任务上激活的匹配程序的开始和结束的模式。',
      'ProblemMatcherSchema.background.activeOnStart':
        '如果设置为 true，则任务启动时后台监视器处于活动模式。这相当于发出与 beginsPattern 匹配的行',
      'ProblemMatcherSchema.background.beginsPattern':
        '如果在输出内匹配，则会发出后台任务开始的信号。',
      'ProblemMatcherSchema.background.endsPattern':
        '如果在输出内匹配，则会发出后台任务结束的信号。',
      'ProblemMatcherSchema.base': '要使用的基问题匹配程序的名称。',
      'ProblemMatcherSchema.fileLocation':
        '定义应如何解释问题模式中报告的文件名。相对 fileLocation 可以是数组，其中数组的第二个元素是相对文件位置的路径。搜索 fileLocation 模式会在由第二个元素的 include/exclude 属性指定的目录(如果未指定，则为当前工作区目录)中执行深层(而且可能是大量的)文件系统搜索。',
      'ProblemMatcherSchema.owner':
        '代码内问题的所有者。如果指定了基准，则可省略。如果省略，并且未指定基准，则默认值为“外部”。',
      'ProblemMatcherSchema.severity':
        '捕获问题的默认严重性。如果模式未定义严重性的匹配组，则使用。',
      'ProblemMatcherSchema.source':
        '描述此诊断信息来源的人类可读字符串。如，"typescript" 或 "super lint"。',
      'ProblemMatcherSchema.watching': '用于跟踪监视匹配程序开始和结束的模式。',
      'ProblemMatcherSchema.watching.activeOnStart':
        '如果设置为 true，则当任务开始时观察程序处于活动模式。这相当于发出与 beginPattern 匹配的行。',
      'ProblemMatcherSchema.watching.beginsPattern':
        '如果在输出内匹配，则在监视任务开始时会发出信号。',
      'ProblemMatcherSchema.watching.deprecated':
        '"watching" 属性已被弃用，请改用 "background"。',
      'ProblemMatcherSchema.watching.endsPattern':
        '如果在输出内匹配，则在监视任务结束时会发出信号。',
      ProblemPatternExtPoint: '提供问题模式',
      'ProblemPatternParser.invalidRegexp':
        '错误: 字符串 {0} 不是有效的正则表达式。\r\n',
      'ProblemPatternParser.loopProperty.notLast':
        '循环属性仅在最一个行匹配程序上受支持。',
      'ProblemPatternParser.problemPattern.kindProperty.notFirst':
        '问题模式无效。"kind" 属性必须提供，且仅能为第一个元素',
      'ProblemPatternParser.problemPattern.missingLocation':
        '问题模式无效。它必须为“file”，代码行或消息匹配组其中的一项。',
      'ProblemPatternParser.problemPattern.missingProperty':
        '问题模式无效。必须至少包含一个文件和一条消息。',
      'ProblemPatternParser.problemPattern.missingRegExp':
        '问题模式缺少正则表达式。',
      'ProblemPatternRegistry.error': '无效问题模式。此模式将被忽略。',
      'ProblemPatternSchema.code': '问题代码的匹配组索引。默认为 undefined',
      'ProblemPatternSchema.column': '问题行字符的匹配组索引。默认值为 3',
      'ProblemPatternSchema.endColumn':
        '问题结束行字符的匹配组索引。默认为 undefined',
      'ProblemPatternSchema.endLine':
        '问题结束行的匹配组索引。默认为 undefined',
      'ProblemPatternSchema.file': '文件名的匹配组索引。如果省略，则使用 1。',
      'ProblemPatternSchema.kind':
        '模式匹配的是一个位置 (文件、一行) 还是仅为一个文件。',
      'ProblemPatternSchema.line': '问题行的匹配组索引。默认值为 2',
      'ProblemPatternSchema.location':
        '问题位置的匹配组索引。有效的位置模式为(line)、(line,column)和(startLine,startColumn,endLine,endColumn)。如果省略了，将假定(line,column)。',
      'ProblemPatternSchema.loop':
        '在多行中，匹配程序循环指示是否只要匹配就在循环中执行此模式。只能在多行模式的最后一个模式上指定。',
      'ProblemPatternSchema.message':
        '消息的匹配组索引。如果省略，则在指定了位置时默认值为 4，在其他情况下默认值为 5。',
      'ProblemPatternSchema.regexp':
        '用于在输出中查找错误、警告或信息的正则表达式。',
      'ProblemPatternSchema.severity':
        '问题严重性的匹配组索引。默认为 undefined',
      'WatchingPatternSchema.file': '文件名的匹配组索引。可以省略。',
      'WatchingPatternSchema.regexp':
        '用于检测后台任务开始或结束的正则表达式。',
      'eslint-compact': 'ESLint compact 问题',
      'eslint-stylish': 'ESLint stylish 问题',
      go: 'Go 问题',
      'gulp-tsc': 'Gulp TSC 问题',
      jshint: 'JSHint 问题',
      'jshint-stylish': 'JSHint stylish 问题',
      lessCompile: 'Less 问题',
      msCompile: '微软编译器问题',
    },
    'vs/workbench/contrib/tasks/common/taskConfiguration': {
      'ConfigurationParser.inValidArg':
        '错误: 命令参数必须是字符串或带引号的字符串。提供的值为:\r\n{0}',
      'ConfigurationParser.incorrectType':
        '错误: 任务配置“{0}”使用了未知类型。将忽略该配置。',
      'ConfigurationParser.invalidCWD':
        '警告: options.cwd 的类型必须是字符串。正在忽略值 {0}\r\n',
      'ConfigurationParser.invalidVariableReference':
        '错误: problemMatcher 引用无效: {0}\r\n',
      'ConfigurationParser.missingType':
        '错误: 任务配置“{0}”缺失必要属性 "type"。将忽略该配置。',
      'ConfigurationParser.noName':
        '错误: 声明范围中的问题匹配器必须具有名称:\r\n{0}\r\n',
      'ConfigurationParser.noShell':
        '警告: 仅当在终端中执行任务时支持 shell 配置。',
      'ConfigurationParser.noTaskName':
        '错误: 任务必须提供 label 属性。将忽略该任务。\r\n{0}\r\n',
      'ConfigurationParser.noTaskType':
        '错误: 任务配置必须具有 type 属性。将忽略此配置。\r\n{0}\r\n',
      'ConfigurationParser.noTypeDefinition':
        '错误: 不存在已注册的任务类型“{0}”。是否已错过安装提供相应任务提供程序的扩展?',
      'ConfigurationParser.notCustom':
        '错误: 任务未声明为自定义任务。将忽略此配置。\r\n{0}\r\n',
      'ConfigurationParser.unknownMatcherKind':
        '警告: 定义的问题匹配器未知。支持的类型为 string | ProblemMatcher | Array<string | ProblemMatcher>。\r\n{0}\r\n',
      'TaskParse.noOsSpecificGlobalTasks':
        '任务版本 2.0.0 不支持全局操作系统专属任务。请将其转换为具有操作系统特定命令的任务。受影响的任务有:\r\n{0}',
      'taskConfiguration.noCommand':
        '错误: 任务“{0}”未定义命令。将忽略该任务。其定义是:\r\n{1}',
      'taskConfiguration.noCommandOrDependsOn':
        '错误: 任务“{0}”既不指定命令，也不指定 dependsOn 属性。将忽略该任务。其定义是:\r\n{1}',
      'taskConfiguration.providerUnavailable':
        '警告: {0} 个任务在当前环境中不可用。\r\n',
    },
    'vs/workbench/contrib/tasks/common/taskDefinitionRegistry': {
      'TaskDefinition.description':
        '实际任务类型。请注意，以 "$" 开头的类型仅保留内部使用。',
      'TaskDefinition.properties': '任务类型的其他属性',
      'TaskDefinition.when':
        '启用此类型任务是必需为 true 的条件。请考虑根据此任务定义使用 `shellExecutionSupported`、`processExecutionSupported` 和 `customExecutionSupported`。有关详细信息，请参阅 [API 文档](https://code.visualstudio.com/api/extension-guides/task-provider#when-clause)。',
      TaskDefinitionExtPoint: '配置任务种类',
      'TaskTypeConfiguration.noType': '任务类型配置缺少必需的 "taskType" 属性',
    },
    'vs/workbench/contrib/tasks/common/tasks': {
      'TaskDefinition.missingRequiredProperty':
        '错误: 任务标识符“{0}”缺失必要属性“{1}”。将忽略该标识符。',
      'tasks.taskRunningContext': '任务当前是否正在运行。',
      tasksCategory: '任务',
    },
    'vs/workbench/contrib/tasks/common/taskService': {
      'tasks.customExecutionSupported':
        '是否支持 CustomExecution 任务。请考虑在 "taskDefinition" 贡献的 when 子句中使用。',
      'tasks.processExecutionSupported':
        '是否支持 ProcessExecution 任务。请考虑在 "taskDefinition" 贡献的 when 子句中使用。',
      'tasks.serverlessWebContext': '在没有远程机构的 Web 中时为 True。',
      'tasks.shellExecutionSupported':
        '是否支持 ShellExecution 任务。请考虑在 "taskDefinition" 贡献的 when 子句中使用。',
      'tasks.taskCommandsRegistered': '是否已注册任务命令',
    },
    'vs/workbench/contrib/tasks/common/taskTemplates': {
      Maven: '执行常见的 maven 命令',
      dotnetCore: '执行 .NET Core 生成命令',
      externalCommand: '运行任意外部命令的示例',
      msbuild: '执行生成目标',
    },
    'vs/workbench/contrib/tasks/electron-sandbox/taskService': {
      'TaskSystem.exitAnyways': '仍要退出(&&E)',
      'TaskSystem.noProcess':
        '启动的任务不再存在。如果任务已生成出后台进程，则退出 VS Code 可能会导致出现孤立的进程。若要避免此情况，请使用等待标记启动最后一个后台进程。',
      'TaskSystem.runningTask': '存在运行中的任务。要终止它吗?',
      'TaskSystem.terminateTask': '终止任务(&&T)',
    },
    'vs/workbench/contrib/terminal/browser/baseTerminalBackend': {
      nonResponsivePtyHost:
        '与终端的 pty 主机进程的连接无响应，终端可能会停止工作。单击以手动重新启动 pty 主机。',
      ptyHostStatus: 'Pty 主机状态',
      'ptyHostStatus.ariaLabel': 'Pty 主机无响应',
      'ptyHostStatus.short': 'Pty 主机',
    },
    'vs/workbench/contrib/terminal/browser/environmentVariableInfo': {
      ScopedEnvironmentContributionInfo: '工作区',
      extensionEnvironmentContributionInfoActive:
        '以下扩展为此终端的环境做出了贡献:',
      extensionEnvironmentContributionInfoStale:
        '以下扩展希望重启终端以为其环境做出贡献:',
      relaunchTerminalLabel: '重新启动终端',
      showEnvironmentContributions: '显示环境贡献',
    },
    'vs/workbench/contrib/terminal/browser/terminal.contribution': {
      miToggleIntegratedTerminal: '终端(&&T)',
      tasksQuickAccessHelp: '显示所有已打开的终端',
      tasksQuickAccessPlaceholder: '键入要打开的终端的名称。',
      terminal: '终端',
    },
    'vs/workbench/contrib/terminal/browser/terminalActions': {
      emptyTerminalNameInfo: '不提供名称会将其重置为默认值',
      noUnattachedTerminals: '没有未附加但要附加到的终端',
      quickAccessTerminal: '切换活动终端',
      sendSequence: '要发送到终端的文本序列',
      showTerminalTabs: '显示选项卡',
      terminalLaunchHelp: '打开帮助',
      'workbench.action.terminal.acceptSelectedSuggestion': '接受所选建议',
      'workbench.action.terminal.attachToSession': '附加到会话',
      'workbench.action.terminal.clear': '清除',
      'workbench.action.terminal.clearPreviousSessionHistory':
        '清除上一会话历史记录',
      'workbench.action.terminal.clearSelection': '取消选择',
      'workbench.action.terminal.copyAndClearSelection': '复制和清除选择',
      'workbench.action.terminal.copyLastCommand': '复制最后一个命令输出',
      'workbench.action.terminal.copySelection': '复制所选内容',
      'workbench.action.terminal.copySelectionAsHtml': '将所选内容复制为 HTML',
      'workbench.action.terminal.createTerminalEditor':
        '在编辑器区域内创建新终端',
      'workbench.action.terminal.createTerminalEditorSide':
        '在一侧的编辑器区域内创建新终端',
      'workbench.action.terminal.detachSession': '拆离会话',
      'workbench.action.terminal.focus.tabsView': '焦点终端选项卡视图',
      'workbench.action.terminal.focusNext': '聚焦下一终端组',
      'workbench.action.terminal.focusNextPane': '在终端组中聚焦下一终端',
      'workbench.action.terminal.focusPrevious': '聚焦上一终端组',
      'workbench.action.terminal.focusPreviousPane': '在终端组中聚焦上一终端',
      'workbench.action.terminal.goToRecentDirectory':
        '转到“最近使用的目录”...',
      'workbench.action.terminal.hideSuggestWidget': '隐藏建议小组件',
      'workbench.action.terminal.join': '联接终端',
      'workbench.action.terminal.join.insufficientTerminals':
        '终端不足，无法执行联接操作',
      'workbench.action.terminal.join.onlySplits': '所有终端已联接',
      'workbench.action.terminal.joinInstance': '联接终端',
      'workbench.action.terminal.kill': '终止活动终端实例',
      'workbench.action.terminal.killAll': '终止所有终端',
      'workbench.action.terminal.killEditor': '终止编辑器区域中的活动终端',
      'workbench.action.terminal.new': '创建新的终端',
      'workbench.action.terminal.newInActiveWorkspace':
        '创建新终端(在活动工作区中)',
      'workbench.action.terminal.newWithCwd.cwd': '启动终端的目录',
      'workbench.action.terminal.newWithProfile': '创建新终端(具有个人资料)',
      'workbench.action.terminal.newWithProfile.profileName':
        '要创建的配置文件的名称',
      'workbench.action.terminal.newWorkspacePlaceholder':
        '选择当前工作目录新建终端',
      'workbench.action.terminal.openSettings': '配置终端设置',
      'workbench.action.terminal.overriddenCwdDescription': '(已替代) {0}',
      'workbench.action.terminal.paste': '粘贴到活动终端中',
      'workbench.action.terminal.pasteSelection': '将所选内容粘贴到活动终端',
      'workbench.action.terminal.relaunch': '重新启动活动终端',
      'workbench.action.terminal.rename.prompt': '输入终端名称',
      'workbench.action.terminal.renameWithArg.name': '终端的新名称',
      'workbench.action.terminal.renameWithArg.noName': '未提供名称参数',
      'workbench.action.terminal.resizePaneDown': '向下重设终端大小',
      'workbench.action.terminal.resizePaneLeft': '向左重设终端大小',
      'workbench.action.terminal.resizePaneRight': '向右重设终端大小',
      'workbench.action.terminal.resizePaneUp': '向上重设终端大小',
      'workbench.action.terminal.runActiveFile': '在活动终端中运行活动文件',
      'workbench.action.terminal.runActiveFile.noFile':
        '只有磁盘上的文件可在终端上运行',
      'workbench.action.terminal.runRecentCommand': '运行最近使用的命令...',
      'workbench.action.terminal.runSelectedText': '在活动终端运行所选文本',
      'workbench.action.terminal.scrollDown': '向下滚动(行)',
      'workbench.action.terminal.scrollDownPage': '向下滚动(页)',
      'workbench.action.terminal.scrollToBottom': '滚动到底部',
      'workbench.action.terminal.scrollToNextCommand': '滚动到下一条命令',
      'workbench.action.terminal.scrollToPreviousCommand': '滚动到上一条命令',
      'workbench.action.terminal.scrollToTop': '滚动到顶部',
      'workbench.action.terminal.scrollUp': '向上滚动(行)',
      'workbench.action.terminal.scrollUpPage': '向上滚动(页)',
      'workbench.action.terminal.selectAll': '选择全部',
      'workbench.action.terminal.selectDefaultShell': '选择默认配置文件',
      'workbench.action.terminal.selectNextPageSuggestion': '选择下一页建议',
      'workbench.action.terminal.selectNextSuggestion': '选择下一条建议',
      'workbench.action.terminal.selectPrevPageSuggestion': '选择上一页建议',
      'workbench.action.terminal.selectPrevSuggestion': '选择上一条建议',
      'workbench.action.terminal.selectToNextCommand': '选择下一条命令所有内容',
      'workbench.action.terminal.selectToNextLine': '选择下一行的所有内容',
      'workbench.action.terminal.selectToPreviousCommand':
        '选择上一条命令所有内容',
      'workbench.action.terminal.selectToPreviousLine': '选择上一行的所有内容',
      'workbench.action.terminal.setFixedDimensions': '设置固定维度',
      'workbench.action.terminal.showTabs': '显示选项卡',
      'workbench.action.terminal.sizeToContentWidth': '将大小切换为内容宽度',
      'workbench.action.terminal.splitInActiveWorkspace':
        '拆分终端 (活动工作区)',
      'workbench.action.terminal.switchTerminal': '切换终端',
    },
    'vs/workbench/contrib/terminal/browser/terminalConfigHelper': {
      install: '安装',
      'useWslExtension.title': '建议使用“{0}”扩展在 WSL 中打开终端。',
    },
    'vs/workbench/contrib/terminal/browser/terminalEditorInput': {
      'confirmDirtyTerminal.button': '&&终止',
      'confirmDirtyTerminal.detail': '关闭将终止此终端中正在运行的进程。',
      'confirmDirtyTerminal.message': '是否要终止正在运行的进程?',
      'confirmDirtyTerminals.detail': '关闭将终止此终端中正在运行的进程。',
    },
    'vs/workbench/contrib/terminal/browser/terminalIcons': {
      configureTerminalProfileIcon: '用于创建新的终端配置文件的图标。',
      killTerminalIcon: '用于终止终端实例的图标。',
      newTerminalIcon: '用于创建新的终端实例的图标。',
      renameTerminalIcon: '用于在终端快速菜单中进行重命名的图标。',
      terminalCommandHistoryFuzzySearch: '用于切换命令历史记录模糊搜索的图标。',
      terminalCommandHistoryOutput: '用于查看终端命令输出的图标。',
      terminalCommandHistoryRemove: '用于从命令历史记录中删除终端命令的图标。',
      terminalDecorationError: '错误命令的终端修饰图标。',
      terminalDecorationIncomplete: '命令未完成的终端修饰图标。',
      terminalDecorationMark: '终端装饰标记的图标。',
      terminalDecorationSuccess: '成功命令的终端修饰图标。',
      terminalViewIcon: '查看终端视图的图标。',
    },
    'vs/workbench/contrib/terminal/browser/terminalInstance': {
      bellStatus: '铃',
      configureTerminalSettings: '配置终端设置',
      confirmMoveTrashMessageFilesAndDirectories:
        '是否确实要将 {0} 行文本粘贴到终端?',
      disconnectStatus: '与进程的连接中断',
      doNotAskAgain: '不再询问',
      keybindingHandling:
        '某些键绑定在默认情况下不会转到终端，而是由 {0} 进行处理。',
      'launchFailed.errorMessage': '终端进程启动失败: {0}。',
      'launchFailed.exitCodeAndCommandLine':
        '终端进程“{0}”启动失败(退出代码: {1})。',
      'launchFailed.exitCodeOnly': '终端进程启动失败(退出代码: {0})。',
      'launchFailed.exitCodeOnlyShellIntegration':
        '在用户设置中禁用 shell 集成可能会有所帮助。',
      multiLinePasteButton: '粘贴(&&P)',
      preview: '预览:',
      setTerminalDimensionsColumn: '设置固定维度: 列',
      setTerminalDimensionsRow: '设置固定维度: 行',
      'shellIntegration.learnMore': '了解有关 shell 集成的详细信息',
      'shellIntegration.openSettings': '打开用户设置',
      'terminal.integrated.a11yPromptLabel': '终端输入',
      'terminal.integrated.useAccessibleBuffer':
        '使用可访问缓冲区 {0} 手动查看输出',
      'terminal.integrated.useAccessibleBufferNoKb':
        '使用终端: 聚焦可访问缓冲区命令以手动查看输出',
      'terminal.requestTrust': '创建终端流程需要执行代码',
      terminalHelpAriaLabel: '使用 {0} 获取终端辅助功能帮助',
      terminalScreenReaderMode:
        '运行命令: 切换屏幕阅读器辅助功能模式以获得优化的屏幕阅读器体验',
      terminalStaleTextBoxAriaLabel:
        '终端 {0} 环境已过时，请运行“显示环境信息”命令以获取详细信息',
      terminalTextBoxAriaLabel: '终端 {0}',
      terminalTextBoxAriaLabelNumberAndTitle: '终端 {0}，{1}',
      terminalTypeLocal: '本地',
      terminalTypeTask: '任务',
      'terminated.exitCodeAndCommandLine':
        '终端进程“{0}”已终止，退出代码: {1}。',
      'terminated.exitCodeOnly': '终端进程已终止，退出代码: {0}。',
      workspaceNotTrustedCreateTerminal: '无法在不受信任的工作区中启动终端流程',
      workspaceNotTrustedCreateTerminalCwd:
        '无法使用 cwd {0} 和 userHome {1} 在不受信任的工作区中启动终端进程',
    },
    'vs/workbench/contrib/terminal/browser/terminalMenus': {
      defaultTerminalProfile: '{0} (默认)',
      miNewTerminal: '新建终端(&&N)',
      miRunActiveFile: '运行活动文件(&&A)',
      miRunSelectedText: '运行所选文本(&&S)',
      miSplitTerminal: '拆分终端(&&S)',
      splitTerminal: '拆分终端',
      'workbench.action.tasks.configureTaskRunner': '配置任务',
      'workbench.action.tasks.runTask': '运行任务...',
      'workbench.action.terminal.changeColor': '更改颜色...',
      'workbench.action.terminal.changeIcon': '更改图标...',
      'workbench.action.terminal.clear': '清除',
      'workbench.action.terminal.clearLong': '清除终端',
      'workbench.action.terminal.copySelection.short': '复制',
      'workbench.action.terminal.copySelectionAsHtml': '以 HTML 格式复制',
      'workbench.action.terminal.joinInstance': '联接终端',
      'workbench.action.terminal.newWithProfile.short': '具有配置文件的新终端',
      'workbench.action.terminal.openSettings': '配置终端设置',
      'workbench.action.terminal.paste.short': '粘贴',
      'workbench.action.terminal.renameInstance': '重命名...',
      'workbench.action.terminal.runActiveFile': '运行活动文件',
      'workbench.action.terminal.runSelectedText': '运行所选文本',
      'workbench.action.terminal.selectAll': '选择全部',
      'workbench.action.terminal.selectDefaultProfile': '选择默认配置文件',
      'workbench.action.terminal.showsTabs': '显示选项卡',
      'workbench.action.terminal.sizeToContentWidthInstance':
        '将大小切换为内容宽度',
      'workbench.action.terminal.switchTerminal': '切换终端',
    },
    'vs/workbench/contrib/terminal/browser/terminalProcessManager': {
      killportfailure: '无法终止侦听端口 {0} 的进程，命令退出时出现错误 {1}',
      ptyHostRelaunch: '到 shell 进程的连接丢失，正在重启终端…',
    },
    'vs/workbench/contrib/terminal/browser/terminalProfileQuickpick': {
      ICreateContributedTerminalProfileOptions: '已贡献',
      cancel: '取消',
      createQuickLaunchProfile: '配置终端配置文件',
      enterTerminalProfileName: '输入终端配置文件名称',
      'terminal.integrated.chooseDefaultProfile': '选择默认的终端配置文件',
      'terminal.integrated.selectProfileToCreate': '选择要创建的终端配置文件',
      terminalProfileAlreadyExists: '有终端配置文件已具有此名称',
      terminalProfiles: '配置文件',
      'terminalProfiles.detected': '已检测',
      unsafePathWarning:
        '此终端配置使用了可由其他用户({0})修改的潜在不安全路径。是否确定要使用它?',
      yes: '是',
    },
    'vs/workbench/contrib/terminal/browser/terminalQuickAccess': {
      renameTerminal: '重命名终端',
      'workbench.action.terminal.newWithProfilePlus': '新建具有配置文件的终端',
      'workbench.action.terminal.newplus': '创建新的终端',
    },
    'vs/workbench/contrib/terminal/browser/terminalRunRecentQuickPick': {
      removeCommand: '从命令历史记录中删除',
      selectRecentCommand: '选择要运行的命令(按 Alt-key 编辑命令)',
      selectRecentCommandMac: '选择要运行的命令(按 Option-key 编辑命令)',
      selectRecentDirectory: '选择要转到的目录(按 Alt-key 编辑命令)',
      selectRecentDirectoryMac: '选择要转到的目录(按 Option-key 编辑命令)',
      shellFileHistoryCategory: '{0} 历史记录',
      viewCommandOutput: '查看命令输出',
    },
    'vs/workbench/contrib/terminal/browser/terminalService': {
      localTerminalRemote:
        '此 shell 正在{0}本地{1}计算机上运行，而不是在连接的远程计算机上运行',
      localTerminalVirtualWorkspace:
        '此 shell 对{0}本地{1}文件夹开放，而不是虚拟文件夹',
      'terminalService.terminalCloseConfirmationPlural':
        '是否要终止{0}活动终端会话?',
      'terminalService.terminalCloseConfirmationSingular':
        '是否要终止活动终端会话?',
      terminate: '终止(&&T)',
    },
    'vs/workbench/contrib/terminal/browser/terminalTabbedView': {
      hideTabs: '隐藏选项卡',
      moveTabsLeft: '向左移动选项卡',
      moveTabsRight: '向右移动选项卡',
    },
    'vs/workbench/contrib/terminal/browser/terminalTabsList': {
      label: '终端',
      splitTerminalAriaLabel: '终端 {0} {1}，拆分 {2}/{3}',
      'terminal.tabs': '终端选项卡',
      terminalAriaLabel: '终端{0} {1}',
      terminalInputAriaLabel:
        '输入终端名。按 "Enter" 键确认或按 "Esc" 键取消。',
    },
    'vs/workbench/contrib/terminal/browser/terminalTooltip': {
      'launchFailed.exitCodeOnlyShellIntegration':
        '终端进程无法启动。禁用与 “terminal.integrated.shellIntegration.enabled” 的 shell 集成可能会有所帮助。',
      'shellIntegration.activationFailed': 'Shell 集成无法激活',
      'shellIntegration.enabled': '已激活 Shell 集成',
      'shellProcessTooltip.commandLine': '命令行: {0}',
      'shellProcessTooltip.processId': '进程 ID ({0}): {1}',
    },
    'vs/workbench/contrib/terminal/browser/terminalView': {
      'terminal.monospaceOnly':
        '终端仅支持等宽字体。如果这是新安装的字体，请确保重新启动 VS Code。',
      'terminal.useMonospace': '使用 "monospace"',
      terminalConnectingLabel: '正在启动...',
      terminals: '打开终端。',
    },
    'vs/workbench/contrib/terminal/browser/xterm/decorationAddon': {
      gutter: '装订线命令修饰',
      no: '否',
      overviewRuler: '概述标尺命令修饰',
      rerun: '是否要运行命令: {0}',
      'terminal.configureCommandDecorations': '配置命令修饰',
      'terminal.copyCommand': '复制命令',
      'terminal.copyOutput': '复制输出',
      'terminal.copyOutputAsHtml': '将输出复制为 HTML',
      'terminal.learnShellIntegration': '了解 Shell 集成',
      'terminal.rerunCommand': '重新运行命令',
      toggleVisibility: '切换可见性',
      'workbench.action.terminal.goToRecentDirectory': '转到“最近使用的目录”',
      'workbench.action.terminal.runRecentCommand': '运行最近使用的命令',
      yes: '是',
    },
    'vs/workbench/contrib/terminal/browser/xterm/decorationStyles': {
      terminalPromptCommandFailed: '命令已执行 {0} 并失败',
      terminalPromptCommandFailedWithExitCode:
        '命令已执行 {0} 并失败(退出代码 {1})',
      terminalPromptCommandSuccess: '命令已执行 {0}',
      terminalPromptContextMenu: '显示命令操作',
    },
    'vs/workbench/contrib/terminal/browser/xterm/xtermTerminal': {
      dontShowAgain: '不再显示',
      no: '否',
      'terminal.integrated.copySelection.noSelection':
        '没有在终端中选择要复制的内容',
      'terminal.slowRendering':
        '终端 GPU 加速在你的计算机上似乎速度很慢。禁用它可提高性能，是否要切换到禁用? [阅读有关终端设置的更多信息](https://code.visualstudio.com/docs/editor/integrated-terminal#_changing-how-the-terminal-is-rendered)。',
      yes: '是',
    },
    'vs/workbench/contrib/terminal/common/terminal': {
      'vscode.extension.contributes.terminal': '参与终端功能。',
      'vscode.extension.contributes.terminal.profiles':
        '定义用户可创建的其他终端配置文件。',
      'vscode.extension.contributes.terminal.profiles.id':
        '终端配置文件提供程序的 ID。',
      'vscode.extension.contributes.terminal.profiles.title':
        '此终端配置文件的标题。',
      'vscode.extension.contributes.terminal.types.icon':
        '要与此终端类型关联的 codicon、URI 或浅色和深色 URI。',
      'vscode.extension.contributes.terminal.types.icon.dark':
        '使用深色主题时的图标路径',
      'vscode.extension.contributes.terminal.types.icon.light':
        '使用浅色主题时的图标路径',
    },
    'vs/workbench/contrib/terminal/common/terminalColorRegistry': {
      'terminal.ansiColor': '终端中的 ANSI 颜色“{0}”。',
      'terminal.background': '终端的背景颜色，允许终端的颜色与面板不同。',
      'terminal.border':
        '分隔终端中拆分窗格的边框的颜色。默认值为 panel.border 的颜色',
      'terminal.dragAndDropBackground':
        '在终端上拖动时的背景颜色。此颜色应有透明度，以便让终端内容透过背景。',
      'terminal.findMatchBackground':
        '终端中当前搜索匹配项的颜色。颜色必须透明，以免隐藏基础终端内容。',
      'terminal.findMatchBorder': '终端中当前搜索匹配项的边框颜色。',
      'terminal.findMatchHighlightBackground':
        '终端中其他搜索匹配项的颜色。颜色必须透明，以免隐藏基础终端内容。',
      'terminal.findMatchHighlightBorder': '终端中其他搜索匹配项的边框颜色。',
      'terminal.foreground': '终端的前景颜色。',
      'terminal.inactiveSelectionBackground': '终端没有焦点时的选择背景色。',
      'terminal.selectionBackground': '终端选中内容的背景颜色。',
      'terminal.selectionForeground':
        '终端的选择前景色。如果此值为 null，则将保留所选前景并应用最小对比度功能。',
      'terminal.tab.activeBorder':
        '面板中终端选项卡侧边的边框。此默认为 tab.activeBorder。',
      'terminalCommandDecoration.defaultBackground': '默认终端命令修饰背景色。',
      'terminalCommandDecoration.errorBackground':
        '错误命令的终端命令修饰背景色。',
      'terminalCommandDecoration.successBackground':
        '成功命令的终端命令修饰背景色。',
      'terminalCursor.background':
        '终端光标的背景色。允许自定义被 block 光标遮住的字符的颜色。',
      'terminalCursor.foreground': '终端光标的前景色。',
      'terminalOverviewRuler.cursorForeground': '概述标尺光标颜色。',
      'terminalOverviewRuler.findMatchHighlightForeground':
        '用于在终端中查找匹配项的概述标尺标记颜色。',
    },
    'vs/workbench/contrib/terminal/common/terminalConfiguration': {
      cwd: '终端的当前工作目录',
      cwdFolder:
        '终端的当前工作目录，当值与初始工作目录不同时，显示在多根工作区或单个根工作区中。在 Windows 上，仅当启用 shell 集成时才会显示此内容。',
      'enableFileLinks.notRemote': '仅当不在远程工作区中时启用。',
      'enableFileLinks.off': '始终关闭。',
      'enableFileLinks.on': '始终可用。',
      local: '指示远程工作区中的本地终端',
      openDefaultSettingsJson: '打开默认设置 JSON',
      'openDefaultSettingsJson.capitalized': '打开默认设置(JSON)',
      process: '终端流程的名称',
      separator:
        '仅在由带有值或静态文本的变量括住时才显示的一个条件分隔符 {0}。',
      sequence: '进程提供给终端的名称',
      tabFocusMode:
        '控制终端是接收选项卡还是将其延迟到工作台进行导航。设置后，聚焦终端时，这会替代 {0}。',
      task: '指示此终端与任务关联',
      'terminal.integrated.allowChords':
        '是否允许终端中的组合键绑定。请注意，如果此值为 true，并且击键导致一个组合，则它将绕过 {0}，当你希望 ctrl+k 转到 shell (而不是 VS Code)时，将此设置为 false 特别有用。',
      'terminal.integrated.allowMnemonics':
        '是否允许使用菜单栏助记键(如 Alt+F)来触发打开菜单栏。请注意，这将导致在设为 true 时，所有 Alt 击键跳过 shell。此设置在 macOS 不起作用。',
      'terminal.integrated.altClickMovesCursor':
        '如果启用，则当 {0} 设置为 {1} (默认值)时，alt/option+单击会将提示光标重置于鼠标下方。此功能的有效性取决于 shell。',
      'terminal.integrated.autoReplies':
        '在终端中遇到一组消息时，将自动响应这组消息。如果消息足够具体，这可能有助于自动执行常见响应。\r\n\r\n备注:\r\n\r\n- 使用 {0} 自动响应 Windows 上的终止批处理作业提示。\r\n- 消息包括转义序列，因此可能无法使用带样式的文本进行回复。\r\n- 每秒只能进行一次回复。\r\n- 在回复中使用 {1} 来表示 Enter 键。\r\n- 要取消设置默认键，请将该值设置为 null。\r\n- 如果新的不适用，请重启 VS Code。',
      'terminal.integrated.autoReplies.reply': '要发送到流程的回复。',
      'terminal.integrated.bellDuration':
        '触发时在终端选项卡中显示响铃的毫秒数。',
      'terminal.integrated.commandsToSkipShell':
        '一组命令 ID，其键绑定将不发送至 shell，而是始终由 VS Code 进行处理。这样的话，通常由 shell 使用的键绑定的行为可如同焦点未在终端上时的行为一样，例如按 “Ctrl+P” 来启动“快速打开”。\r\n\r\n&nbsp;\r\n\r\n默认跳过多项命令。要替代默认值并转而将相关命令的键绑定传递给 shell，请添加以 “-” 字符为前缀的命令。例如，添加“-workbench.action.quickOpen” 可使 “Ctrl+P”到达 shell。\r\n\r\n&nbsp;\r\n\r\n在设置编辑器中查看时，下面的默认跳过命令列表会被截断。要查看完整列表，请执行 {1}，然后从下面的列表中搜索第一个命令。\r\n\r\n&nbsp;\r\n\r\n默认跳过的命令:\r\n\r\n{0}',
      'terminal.integrated.confirmOnExit':
        '如果存在活动终端会话，控制是否确认窗口关闭的时间。',
      'terminal.integrated.confirmOnExit.always': '始终确认是否存在终端。',
      'terminal.integrated.confirmOnExit.hasChildProcesses':
        '确认是否存在具有子进程的终端。',
      'terminal.integrated.confirmOnExit.never': '从不确认。',
      'terminal.integrated.confirmOnKill':
        '控制是否在终端具有子进程时确认终止终端。当设置为编辑器时，如果编辑器区域中的终端具有子进程，则将标记为已更改。请注意，子进程检测可能不适用于 Git Bash 等 shell，后者不会将其进程作为 shell 的子进程运行。',
      'terminal.integrated.confirmOnKill.always':
        '确认终端是在编辑器中还是在面板中。',
      'terminal.integrated.confirmOnKill.editor': '确认终端是否在编辑器中。',
      'terminal.integrated.confirmOnKill.never': '从不确认。',
      'terminal.integrated.confirmOnKill.panel': '确认终端是否在面板中。',
      'terminal.integrated.copyOnSelection':
        '控制是否将在终端中选定的文本复制到剪贴板。',
      'terminal.integrated.cursorBlinking': '控制终端光标是否闪烁。',
      'terminal.integrated.cursorStyle': '控制终端光标的样式。',
      'terminal.integrated.cursorWidth': '控制当 {0} 设置为 {1} 时光标的宽度。',
      'terminal.integrated.customGlyphs':
        '是否为块元素和制表符字符绘制自定义字形(而不是使用字体)，这通常会产生更好的连续线条呈现效果。请注意，禁用 {0} 时，这不起作用。',
      'terminal.integrated.cwd':
        '将在其中启动终端的显式起始路径，它用作 shell 进程的当前工作目录(cwd)。如果根目录不是方便的 cwd，此路径在工作区设置中可能十分有用。',
      'terminal.integrated.defaultLocation': '控制新建终端的显示位置。',
      'terminal.integrated.defaultLocation.editor': '在编辑器中创建终端',
      'terminal.integrated.defaultLocation.view': '在终端视图中创建终端',
      'terminal.integrated.detectLocale':
        '控制是否检测 "$LANG" 环境变量并将其设置为符合 UTF-8 的选项，因为 VS Code 的终端仅支持来自 shell 的 UTF-8 编码数据。',
      'terminal.integrated.detectLocale.auto':
        '如果现有变量不存在或不以 "\'.UTF-8\'" 结尾，则设置 "$LANG" 环境变量。',
      'terminal.integrated.detectLocale.off': '请勿设置 "$LANG" 环境变量。',
      'terminal.integrated.detectLocale.on': '始终设置 "$LANG" 环境变量。',
      'terminal.integrated.drawBoldTextInBrightColors':
        '控制终端中的加粗文本是否始终使用 "bright" ANSI 颜色变量。',
      'terminal.integrated.enableBell':
        '控制是否启用终端铃声，这在终端名称旁边显示为视觉对象铃铛。',
      'terminal.integrated.enableFileLinks':
        '是否在终端中启用文件链接。连接可能会很慢，特别是在网络驱动器上工作时，因为将根据文件系统验证每个文件链接。更改此项将仅在新的终端中生效。',
      'terminal.integrated.enableImages':
        '在终端启用图像映像支持。Linux 和 macOS 均支持 sixel 和 iTerm 的内联图像协议。当 ConPTY 通过序列时，Windows 支持将自动亮起。目前在窗口重新加载/重新连接当中不会保留图像。',
      'terminal.integrated.enableMultiLinePasteWarning':
        '将多行粘贴到终端时显示警告对话框。在以下情况中，该对话框不显示:\r\n\r\n- 已启用带括号的粘贴模式(shell 支持本机多行粘贴)\r\n- 粘贴由 shell 的读取一行数据处理(在 pwsh 的情况下)',
      'terminal.integrated.enablePersistentSessions':
        '跨窗口重新加载保持工作区的终端会话/历史记录。',
      'terminal.integrated.env.linux':
        '具有环境变量的对象，这些变量将添加到 Linux 上的终端要使用的 VS Code 进程。如果设置为 "null"，则删除环境变量。',
      'terminal.integrated.env.osx':
        '具有环境变量的对象，这些变量将添加到 macOS 中的终端要使用的 VS Code 进程。如果设置为 "null"，则删除环境变量。',
      'terminal.integrated.env.windows':
        '具有环境变量的对象，这些变量将添加到将由 Windows 上的终端使用的 VS Code 进程。设置为 "null" 以删除环境变量。',
      'terminal.integrated.environmentChangesIndicator':
        '是否在每个终端上显示环境更改指示器，该指示器解释了使是否已进行扩展或想要对终端环境进行更改。',
      'terminal.integrated.environmentChangesIndicator.off': '禁用指示器。',
      'terminal.integrated.environmentChangesIndicator.on': '启用指示器。',
      'terminal.integrated.environmentChangesIndicator.warnonly':
        '仅当终端环境为“已过时”时，仅显示警告指示器，而不是显示指出终端环境已由扩展修改的信息指示器。',
      'terminal.integrated.environmentChangesRelaunch':
        '在扩展想要向终端的环境贡献内容但尚未与之交互时是否自动重启终端。',
      'terminal.integrated.fastScrollSensitivity':
        '按 "Alt" 时的滚动速度加倍。',
      'terminal.integrated.fontFamily': '控制终端的字体系列，默认为 {0} 的值。',
      'terminal.integrated.fontSize': '控制终端的字号(以像素为单位)。',
      'terminal.integrated.fontWeight':
        '要在终端中用于非粗体文本的字体粗细。接受“正常”和“加粗”这两个关键字，或接受 1-1000 之间的数字。',
      'terminal.integrated.fontWeightBold':
        '要在终端中用于粗体文本的字体粗细。接受“正常”和“加粗”这两个关键字，或接受 1-1000 之间的数字。',
      'terminal.integrated.fontWeightError':
        '仅允许使用关键字“正常”和“加粗”，或使用介于 1 至 1000 之间的数字。',
      'terminal.integrated.gpuAcceleration':
        '控制终端是否将使用 GPU 来进行呈现。',
      'terminal.integrated.gpuAcceleration.auto':
        '让 VS Code 检测哪些呈现器将提供最佳体验。',
      'terminal.integrated.gpuAcceleration.canvas':
        '使用终端的回退画布呈现器，它使用 2d 上下文而不是在某些系统上性能更好地 Webgl。请注意，画布呈现器中的某些功能受到限制，如不透明选择。',
      'terminal.integrated.gpuAcceleration.off':
        '禁用终端中的 GPU 加速。当 GPU 加速关闭时，终端的呈现速度会慢得多，但它应该能够在所有系统上可靠地工作。',
      'terminal.integrated.gpuAcceleration.on': '在终端内启用 GPU 加速。',
      'terminal.integrated.letterSpacing':
        '控制终端的字母间距，这是一个整数值，表示要在字符之间添加的额外像素数目。',
      'terminal.integrated.lineHeight':
        '控制终端的行高，此数字乘以终端字号等于实际行高(以像素为单位)。',
      'terminal.integrated.localEchoEnabled':
        '何时应启用本地回显。这将替代 {0}',
      'terminal.integrated.localEchoEnabled.auto': '仅对远程工作区启用',
      'terminal.integrated.localEchoEnabled.off': '始终禁用',
      'terminal.integrated.localEchoEnabled.on': '始终启用',
      'terminal.integrated.localEchoExcludePrograms':
        '当在终端标题中找到其中一个程序名称时，将禁用本地回显。',
      'terminal.integrated.localEchoLatencyThreshold':
        "网络延迟的长度(以毫秒为单位)，其中本地编辑将在终端上回显，无需等待服务器承认。如果为 '0'，则本地回显将始终开启，如果为 '-1'，则将禁用。",
      'terminal.integrated.localEchoStyle':
        '本地回显文本的终端样式；字体样式或 RGB 颜色。',
      'terminal.integrated.macOptionClickForcesSelection':
        '控制在 macOS 上使用 Option+单击时是否强制选择内容。这将强制进行常规(行)选择并禁止使用列选择模式。这样，可使用常规终端选择进行复制粘贴，例如在 tmux 中启用鼠标模式时。',
      'terminal.integrated.macOptionIsMeta':
        '控制是否将选项键视为 macOS 中的终端上的元键。',
      'terminal.integrated.minimumContrastRatio':
        '设置每个单元格的前景色时，将改为尝试符合指定的对比度比率。示例值:\r\n\r\n- 1: 不执行任何操作，使用标准主题颜色。\r\n- 4.5: [符合 WCAG AA 标准(最低)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)(默认)。\r\n- 7: [符合 WCAG AAA 标准(增强)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html)。\r\n- 21: 黑底白字或白底黑字。',
      'terminal.integrated.mouseWheelScrollSensitivity':
        '要在鼠标滚轮滚动事件的 "deltaY" 上使用的乘数。',
      'terminal.integrated.persistentSessionReviveProcess':
        '当必须关闭终端进程(例如当窗口或应用程序关闭时)时，这将决定下次打开工作区时，应在何时还原以前的终端会话内容/历史记录和重新创建进程。\r\n\r\n注意事项:\r\n\r\n- 进程当前工作目录的还原取决于是否受 shell 支持。\r\n- 在关闭期间保留会话的时间有限，因此在使用高延迟远程连接时可能会中止相应会话。',
      'terminal.integrated.persistentSessionReviveProcess.never':
        '永远不要还原终端缓冲区或重新创建流程。',
      'terminal.integrated.persistentSessionReviveProcess.onExit':
        '在 Windows/Linux 上关闭最后窗口后或当触发 `workbench.action.quit` 命令(命令面板、键绑定、菜单)时，恢复流程。',
      'terminal.integrated.persistentSessionReviveProcess.onExitAndWindowClose':
        '在 Windows/Linux 上关闭最后窗口后或当触发 `workbench.action.quit` 命令(命令面板、键绑定、菜单)或关闭窗口时，恢复流程。',
      'terminal.integrated.rightClickBehavior':
        '控制终端如何回应右键单击操作。',
      'terminal.integrated.rightClickBehavior.copyPaste':
        '当有选定内容时复制，否则粘贴。',
      'terminal.integrated.rightClickBehavior.default': '显示上下文菜单。',
      'terminal.integrated.rightClickBehavior.nothing':
        '不执行任何操作并将事件传递到终端。',
      'terminal.integrated.rightClickBehavior.paste': '右键单击时粘贴。',
      'terminal.integrated.rightClickBehavior.selectWord':
        '选择光标下方的字词并显示上下文菜单。',
      'terminal.integrated.scrollback':
        '控制终端在其缓冲区中保留的最大行数。我们根据此值预分配内存，以确保顺畅体验。因此，随着值的增加，内存量也会增加。',
      'terminal.integrated.sendKeybindingsToShell':
        '将大多数键绑定调度到终端而不是工作台，重写 {0}，也可以用于微调。',
      'terminal.integrated.shellIntegration.decorationsEnabled':
        '启用 shell 集成后，为每个命令添加修饰。',
      'terminal.integrated.shellIntegration.decorationsEnabled.both':
        '在装订线(左侧)和概述标尺(右侧)中显示修饰',
      'terminal.integrated.shellIntegration.decorationsEnabled.gutter':
        '在终端左侧显示装订线修饰',
      'terminal.integrated.shellIntegration.decorationsEnabled.never':
        '不显示修饰',
      'terminal.integrated.shellIntegration.decorationsEnabled.overviewRuler':
        '在终端右侧显示概述标尺修饰',
      'terminal.integrated.shellIntegration.enabled':
        '确定是否自动注入 shell 集成以支持增强型命令跟踪和当前工作目录检测等功能。\r\n\r\nShell 集成的工作原理是使用启动脚本注入 shell。通过该脚本，VS Code 可深入了解终端内正在发生的情况。\r\n\r\n受支持的 shell:\r\n\r\n- Linux/macOS: bash、fish、pwsh、zsh\r\n - Windows: pwsh\r\n\r\n此设置仅在创建终端时适用，因此需要重启终端才能生效。\r\n\r\n 请注意，如果在终端配置文件中定义了自定义参数、弃用了 {1}、具有 [复杂 bash `PROMPT_COMMAND`](https://code.visualstudio.com/docs/editor/integrated-terminal#_complex -bash-promptcommand)或其他不受支持的设置，则脚本注入可能不起作用。{0}',
      'terminal.integrated.shellIntegration.history':
        '控制要保留在终端命令历史记录中的最近使用的命令数。设置为 0 可禁用终端命令历史记录。',
      'terminal.integrated.shellIntegration.suggestEnabled':
        '当 {0} 设置为 {1} 时，为受支持的 shell 启用实验性终端 Intellisense 建议。如果手动安装 shell 集成，则在调用脚本之前，需要将 {2} 设置为 {3}。',
      'terminal.integrated.showExitAlert':
        '控制在退出代码为非零时是否显示“终端进程已终止且显示退出代码”警报。',
      'terminal.integrated.smoothScrolling': '控制终端是否将使用动画滚动。',
      'terminal.integrated.splitCwd': '控制拆分终端开始时使用的工作目录。',
      'terminal.integrated.splitCwd.inherited':
        '在 macOS 和 Linux 上，新的拆分终端将使用父终端的工作目录。在 Windows 上，这与初始行为相同。',
      'terminal.integrated.splitCwd.initial':
        '新的拆分终端将使用父终端开始时使用的工作目录。',
      'terminal.integrated.splitCwd.workspaceRoot':
        '新的拆分终端将使用工作区根作为工作目录。在多根工作区中，提供了要使用根文件夹的选项。',
      'terminal.integrated.tabStopWidth': '制表位中的单元格数。',
      'terminal.integrated.tabs.defaultColor':
        '默认情况下要与终端图标关联的主题颜色 ID。',
      'terminal.integrated.tabs.defaultIcon':
        '默认情况下要与终端图标关联的 codicon ID。',
      'terminal.integrated.tabs.enableAnimation':
        '控制终端选项卡状态是否支持动画(例如正在进行的任务)。',
      'terminal.integrated.tabs.enabled':
        '控制终端选项卡是否以列表的形式显示在终端的一侧。如果禁用此功能，将改为显示下拉列表。',
      'terminal.integrated.tabs.focusMode':
        '控制是在双击时将焦点放在某个选项卡上还是单击。',
      'terminal.integrated.tabs.focusMode.doubleClick':
        '双击终端选项卡时聚焦终端',
      'terminal.integrated.tabs.focusMode.singleClick':
        '双击终端选项卡时聚焦终端',
      'terminal.integrated.tabs.hideCondition':
        '控制在特定条件下是否将隐藏终端选项卡视图。',
      'terminal.integrated.tabs.hideCondition.never': '从不隐藏终端选项卡视图',
      'terminal.integrated.tabs.hideCondition.singleGroup':
        '仅打开一个终端组时隐藏终端选项卡视图',
      'terminal.integrated.tabs.hideCondition.singleTerminal':
        '仅打开一个终端时隐藏终端选项卡视图',
      'terminal.integrated.tabs.location':
        '控制终端选项卡的位置，该位置位于实际终端的左侧或右侧。',
      'terminal.integrated.tabs.location.left':
        '在终端的左侧显示终端选项卡视图',
      'terminal.integrated.tabs.location.right':
        '在终端的右侧显示终端选项卡视图',
      'terminal.integrated.tabs.separator': '{0} 和 {0} 使用的分隔符。',
      'terminal.integrated.tabs.showActions':
        '控制是否在“新建终端”按钮旁边显示“终端拆分”和“终止”按钮。',
      'terminal.integrated.tabs.showActions.always': '始终显示操作',
      'terminal.integrated.tabs.showActions.never': '从不显示操作',
      'terminal.integrated.tabs.showActions.singleTerminal':
        '当终端是唯一打开的终端时显示操作',
      'terminal.integrated.tabs.showActions.singleTerminalOrNarrow':
        '在终端是唯一打开的终端或选项卡视图处于窄而无文本状态时显示活动终端',
      'terminal.integrated.tabs.showActiveTerminal':
        '在视图中显示活动的终端信息，当选项卡中的标题不可见时，此功能尤其有用。',
      'terminal.integrated.tabs.showActiveTerminal.always': '始终显示活动终端',
      'terminal.integrated.tabs.showActiveTerminal.never': '从不显示活动终端',
      'terminal.integrated.tabs.showActiveTerminal.singleTerminal':
        '当仅有一个终端打开时显示活动终端',
      'terminal.integrated.tabs.showActiveTerminal.singleTerminalOrNarrow':
        '仅当终端已打开或选项卡视图处于窄而无文本状态时显示活动终端',
      'terminal.integrated.unicodeVersion':
        '控制在终端中计算字符宽度时要使用的 unicode 版本。如果遇到未占用正确空格或退格量的表情符号或其他宽字符，或删除量太大或太小，则可能希望尝试调整此设置。',
      'terminal.integrated.unicodeVersion.eleven':
        'unicode 的版本 11。此版本可在使用新式版本 unicode 的新式系统上提供更好的支持。',
      'terminal.integrated.unicodeVersion.six':
        'unicode 的版本 6。此版本较旧，因此在较旧的系统中效果更好。',
      'terminal.integrated.windowsEnableConpty':
        '是否使用 ConPTY 进行 Windows 终端进程通信(需要 Windows 10 内部版本号 18309+)。如果此设置为 false，将使用 Winpty。',
      'terminal.integrated.wordSeparators':
        '一个字符串，其中包含双击选择单词功能时被视为单词分隔符的所有字符。',
      terminalDescription: '控制显示在标题右侧的终端说明。根据上下文替换变量:',
      terminalIntegratedConfigurationTitle: '集成终端',
      terminalTitle: '控制终端标题。根据上下文替换变量:',
      workspaceFolder: '在其中启动终端的工作区',
    },
    'vs/workbench/contrib/terminal/common/terminalContextKey': {
      inTerminalRunCommandPickerContextKey:
        '终端运行命令选取器当前是否处于打开状态。',
      isSplitTerminalContextKey: '重点选项卡的终端是否为拆分终端。',
      terminalAccessibleBufferFocusContextKey: '是否聚焦终端可访问缓冲区。',
      terminalAltBufferActive: '终端的可选缓冲区是否处于活动状态。',
      terminalCountContextKey: '当前终端数。',
      terminalEditorFocusContextKey: '是否聚焦编辑器区域中的终端。',
      terminalFocusContextKey: '是否聚焦终端。',
      terminalFocusInAnyContextKey:
        '是否将任何终端作为焦点，包括在其他 UI 中使用的分离终端。',
      terminalProcessSupportedContextKey:
        '是否可以在当前工作区中启动终端流程。',
      terminalShellIntegrationEnabled: '是否在活动终端中启用 shell 集成',
      terminalShellTypeContextKey:
        '活动终端的 shell 类型，当不存在终端时，此值设置为最后已知值。',
      terminalSuggestWidgetVisible: '终端的建议小组件是否可见。',
      terminalTabsFocusContextKey: '是否聚焦终端选项卡小组件。',
      terminalTabsSingularSelectedContextKey:
        '是否在终端选项卡列表中选择终端。',
      terminalTextSelectedContextKey: '是否在活动终端中选择文本。',
      terminalTextSelectedInFocusedContextKey: '是否在重点终端中选择文本。',
      terminalViewShowing: '终端视图是否显示',
    },
    'vs/workbench/contrib/terminal/common/terminalStrings': {
      currentSessionCategory: '当前会话',
      doNotShowAgain: '不再显示',
      killTerminal: '终止终端',
      'killTerminal.short': '终止',
      moveToEditor: '将终端移动到编辑器区域中',
      previousSessionCategory: '上一个会话',
      splitTerminal: '拆分终端',
      'splitTerminal.short': '拆分',
      terminal: '终端',
      'terminal.new': '新建终端',
      terminalCategory: '终端',
      unsplitTerminal: '取消拆分终端',
      'workbench.action.terminal.changeColor': '更改颜色...',
      'workbench.action.terminal.changeIcon': '更改图标...',
      'workbench.action.terminal.focus': '聚焦到终端',
      'workbench.action.terminal.focusHover': '聚焦悬停',
      'workbench.action.terminal.moveToTerminalPanel': '将终端移到面板中',
      'workbench.action.terminal.newWithCwd': '从自定义工作目录开始创建新终端',
      'workbench.action.terminal.rename': '重命名...',
      'workbench.action.terminal.renameWithArg': '重命名当前活动终端',
      'workbench.action.terminal.sendSequence': '发送自定义序列到终端',
      'workbench.action.terminal.sizeToContentWidthInstance':
        '将大小切换为内容宽度',
    },
    'vs/workbench/contrib/terminal/electron-sandbox/terminalRemote': {
      'workbench.action.terminal.newLocal': '新建集成终端(本地)',
    },
    'vs/workbench/contrib/terminalContrib/accessibility/browser/terminal.accessibility.contribution':
      {
        'workbench.action.terminal.accessibleBufferGoToNextCommand':
          '可访问的缓冲区转到下一命令',
        'workbench.action.terminal.accessibleBufferGoToPreviousCommand':
          '可访问的缓冲区转到上一命令',
        'workbench.action.terminal.focusAccessibleBuffer': '焦点可访问缓冲',
        'workbench.action.terminal.navigateAccessibleBuffer':
          '导航可访问缓冲区',
      },
    'vs/workbench/contrib/terminalContrib/accessibility/browser/terminalAccessibilityHelp':
      {
        accessibilitySettings:
          '通过“首选项: 打开辅助功能设置”命令访问辅助功能设置，例如 `terminal.integrated.tabFocusMode`。',
        commandPromptMigration:
          '考虑使用 powershell (而非命令提示符)以改进体验',
        focusAccessibleBuffer:
          '焦点可访问缓冲({0})命令使屏幕阅读器能够读取终端内容。',
        focusAccessibleBufferNoKb:
          '“焦点可访问缓冲”命令使屏幕阅读器能够读取终端内容，当前无法通过键绑定触发。',
        goToNextCommand: '转到下一命令({0})',
        goToNextCommandNoKb: '当前无法通过键绑定触发转到下一命令。',
        goToPreviousCommand: '转到上一命令({0})',
        goToPreviousCommandNoKb: '当前无法通过键绑定触发转到上一命令。',
        goToRecentDirectory: '转到最近使用的目录({0})',
        goToRecentDirectoryNoKb:
          '当前无法通过键绑定触发转到 Recent Directory。',
        goToRecentDirectoryNoKbNoShellIntegration:
          '通过“转到最近的目录”命令，屏幕阅读器可以轻松导航到已在终端中使用的目录，当前无法通过键绑定触发该目录。',
        goToRecentDirectoryNoShellIntegration:
          '通过“转到最近的目录”({0})命令，屏幕阅读器可以轻松导航到已在终端中使用的目录。',
        navigateAccessibleBuffer: '导航辅助缓冲区({0})',
        navigateAccessibleBufferNoKb:
          '当前无法通过键绑定触发导航可访问缓冲区。',
        newWithProfile:
          '借助创建新终端(带配置文件)({0})命令，可以使用特定配置文件轻松创建终端。',
        newWithProfileNoKb:
          '借助创建新终端(带配置文件)命令，可以使用特定配置文件轻松创建终端，当前无法通过键绑定触发。',
        openDetectedLink:
          '打开检测到的链接({0})命令使屏幕阅读器能够轻松打开在终端中找到的链接。',
        openDetectedLinkNoKb:
          '“打开检测到的链接”命令使屏幕阅读器能够轻松打开终端中找到的链接，当前无法通过键绑定触发链接。',
        runRecentCommand: '运行最近使用的命令({0})',
        runRecentCommandNoKb: '当前无法通过键绑定触发运行 Recent 命令。',
        shellIntegration:
          '终端具有一种称为 shell 集成的功能，可提供增强的体验并为屏幕阅读器提供有用的命令，例如:',
        'terminal-help-label': '终端辅助功能帮助',
      },
    'vs/workbench/contrib/terminalContrib/accessibility/browser/terminalAccessibleBuffer':
      {
        'terminal.integrated.accessibleBuffer': '终端缓冲区',
        'terminal.integrated.symbolQuickPick.labelNoExitCode': '{0}',
      },
    'vs/workbench/contrib/terminalContrib/developer/browser/terminal.developer.contribution':
      {
        'workbench.action.terminal.restartPtyHost': '重启 pty 主机',
        'workbench.action.terminal.showTextureAtlas': '显示终端纹理图集',
        'workbench.action.terminal.writeDataToTerminal': '将数据写入终端',
        'workbench.action.terminal.writeDataToTerminal.prompt':
          '输入数据以直接写入终端，从而绕过 pty',
      },
    'vs/workbench/contrib/terminalContrib/environmentChanges/browser/terminal.environmentChanges.contribution':
      {
        envChanges: '终端环境更改',
        extension: '扩展: {0}',
        'workbench.action.terminal.showEnvironmentContributions':
          '显示环境贡献',
      },
    'vs/workbench/contrib/terminalContrib/find/browser/terminal.find.contribution':
      {
        'workbench.action.terminal.findNext': '查找下一个',
        'workbench.action.terminal.findPrevious': '查找上一个',
        'workbench.action.terminal.focusFind': '聚焦查找',
        'workbench.action.terminal.hideFind': '隐藏查找',
        'workbench.action.terminal.searchWorkspace': '搜索工作区',
        'workbench.action.terminal.toggleFindCaseSensitive':
          '切换使用区分大小写进行查找',
        'workbench.action.terminal.toggleFindRegex':
          '切换使用正则表达式进行查找',
        'workbench.action.terminal.toggleFindWholeWord':
          '切换使用全字匹配进行查找',
      },
    'vs/workbench/contrib/terminalContrib/links/browser/terminal.links.contribution':
      {
        'workbench.action.terminal.openDetectedLink': '打开检测到的链接...',
        'workbench.action.terminal.openLastLocalFileLink':
          '打开最后一个本地文件链接',
        'workbench.action.terminal.openLastUrlLink': '打开最后一个 URL 链接',
      },
    'vs/workbench/contrib/terminalContrib/links/browser/terminalLinkDetectorAdapter':
      {
        focusFolder: '聚焦资源管理器中的文件夹',
        followLink: '打开链接',
        openFile: '在编辑器中打开文件',
        openFolder: '在新窗口中打开文件夹',
        searchWorkspace: '搜索工作区',
      },
    'vs/workbench/contrib/terminalContrib/links/browser/terminalLinkManager': {
      followForwardedLink: '执行使用转发端口的链接',
      followLink: '跟踪链接',
      followLinkUrl: '链接',
      'terminalLinkHandler.followLinkAlt': 'Alt + 单击',
      'terminalLinkHandler.followLinkAlt.mac': 'Option + 单击',
      'terminalLinkHandler.followLinkCmd': 'Cmd + 单击',
      'terminalLinkHandler.followLinkCtrl': 'Ctrl + 单击',
    },
    'vs/workbench/contrib/terminalContrib/links/browser/terminalLinkQuickpick':
      {
        'terminal.integrated.localFileLinks': '本地文件',
        'terminal.integrated.openDetectedLink': '选择要打开的链接',
        'terminal.integrated.searchLinks': '工作区搜索',
        'terminal.integrated.showMoreLinks': '显示更多链接',
        'terminal.integrated.urlLinks': 'URL',
      },
    'vs/workbench/contrib/terminalContrib/quickFix/browser/quickFixAddon': {
      'codeAction.widget.id.quickfix': '快速修复',
      'quickFix.command': '运行: {0}',
      'quickFix.opener': '打开: {0}',
    },
    'vs/workbench/contrib/terminalContrib/quickFix/browser/terminal.quickFix.contribution':
      {
        'workbench.action.terminal.showQuickFixes': '显示终端快速修复',
      },
    'vs/workbench/contrib/terminalContrib/quickFix/browser/terminalQuickFixBuiltinActions':
      {
        'terminal.createPR': '创建 PR {0}',
        'terminal.freePort': '空闲端口 {0}',
      },
    'vs/workbench/contrib/terminalContrib/quickFix/browser/terminalQuickFixService':
      {
        'vscode.extension.contributes.terminalQuickFixes': '提供终端快速修复。',
        'vscode.extension.contributes.terminalQuickFixes.commandExitResult':
          '要匹配的命令退出结果',
        'vscode.extension.contributes.terminalQuickFixes.commandLineMatcher':
          '用于测试命令行的正则表达式或字符串',
        'vscode.extension.contributes.terminalQuickFixes.id':
          '快速修复提供程序的 ID',
        'vscode.extension.contributes.terminalQuickFixes.outputMatcher':
          "与输出的单行匹配的正则表达式或字符串，它提供要在 terminalCommand 和 URI 中引用的组。\r\n\r\n例如:\r\n\r\n `lineMatcher: /git push --set-upstream origin (?<branchName>[^s]+)/;`\r\n\r\n`terminalCommand: 'git push --set-upstream origin ${group:branchName}';`\r\n",
      },
    'vs/workbench/contrib/testing/browser/icons': {
      filterIcon: '“测试”视图中“筛选器”操作的图标。',
      hiddenIcon: '在隐藏的测试显示时其旁边出现的图标。',
      testViewIcon: '查看测试视图的图标。',
      testingCancelIcon: '用于取消正在进行的测试运行的图标。',
      testingCancelRefreshTests: '用于取消刷新测试的按钮上的图标。',
      testingDebugAllIcon: '“调试所有测试”操作的图标。',
      testingDebugIcon: '“调试测试”操作的图标。',
      testingErrorIcon: '针对有错误的测试显示的图标。',
      testingFailedIcon: '针对失败的测试显示的图标。',
      testingPassedIcon: '针对通过的测试显示的图标。',
      testingQueuedIcon: '针对排队的测试显示的图标。',
      testingRefreshTests: '用于刷新测试的按钮上的图标。',
      testingResultsIcon: '测试结果的图标。',
      testingRunAllIcon: '“运行所有测试”操作的图标。',
      testingRunIcon: '“运行测试”操作的图标。',
      testingShowAsList: '当测试资源管理器(树形式)被禁用时显示的图标。',
      testingShowAsTree: '当测试资源管理器(列表形式)被禁用时显示的图标。',
      testingSkippedIcon: '针对跳过的测试显示的图标。',
      testingTurnContinuousRunIsOn:
        '用于测试迭起的连续运行处于打开状态时的图标。',
      testingTurnContinuousRunOff: '用于关闭连续测试运行的图标。',
      testingTurnContinuousRunOn: '用于打开连续测试运行的图标。',
      testingUnsetIcon: '针对处于未设置状态的测试显示的图标。',
      testingUpdateProfiles: '显示的用于更新测试配置文件的图标。',
    },
    'vs/workbench/contrib/testing/browser/testExplorerActions': {
      configureProfile: '选择要更新的配置文件',
      'debug test': '调试测试',
      debugAllTests: '调试所有测试',
      debugSelectedTests: '调试测试',
      discoveringTests: '正在发现测试',
      getExplorerSelection: '获取资源管理器选择',
      getSelectedProfiles: '获取所选配置文件',
      hideTest: '隐藏测试',
      noDebugTestProvider:
        '未在此工作区中找到可调试测试。可能需要安装测试提供程序扩展',
      noTestProvider: '未在此工作区中找到测试。可能需要安装测试提供程序扩展',
      noTestsAtCursor: '在此处未找到测试',
      noTestsInFile: '在此文件中找不到任何测试',
      'run test': '运行测试',
      runAllTests: '运行所有测试',
      runSelectedTests: '运行测试',
      'testing.cancelRun': '取消测试运行',
      'testing.cancelTestRefresh': '取消测试刷新',
      'testing.clearResults': '清除所有结果',
      'testing.collapseAll': '折叠所有测试',
      'testing.configureProfile': '配置测试配置文件',
      'testing.debugAtCursor': '在光标处调试测试',
      'testing.debugCurrentFile': '在当前文件中调试测试',
      'testing.debugFailTests': '调试失败的测试',
      'testing.debugLastRun': '调试上次运行',
      'testing.editFocusedTest': '转到测试',
      'testing.noProfiles': '未找到已启用测试连续运行的配置文件',
      'testing.openOutputPeek': '快速查看输出',
      'testing.reRunFailTests': '重新运行失败的测试',
      'testing.reRunLastRun': '重新运行上次运行',
      'testing.refreshTests': '刷新测试',
      'testing.runAtCursor': '在光标处运行测试',
      'testing.runCurrentFile': '在当前文件中运行测试',
      'testing.runUsing': '使用配置文件执行...',
      'testing.searchForTestExtension': '搜索测试扩展',
      'testing.selectContinuousProfiles': '选择文件更改时要运行的配置文件:',
      'testing.selectDefaultTestProfiles': '选择默认配置文件',
      'testing.showMostRecentOutput': '显示输出',
      'testing.sortByDuration': '按持续时间排序',
      'testing.sortByLocation': '按位置排序',
      'testing.sortByStatus': '按状态排序',
      'testing.startContinuous': '启动连续运行',
      'testing.startContinuousRunUsing': '使用以下方式启动连续运行...',
      'testing.stopContinuous': '停止连续运行',
      'testing.toggleContinuousRunOff': '关闭连续运行',
      'testing.toggleContinuousRunOn': '启用连续运行',
      'testing.toggleInlineTestOutput': '切换内联测试输出',
      'testing.viewAsList': '以列表形式查看',
      'testing.viewAsTree': '以树形式查看',
      unhideAllTests: '取消隐藏所有测试',
      unhideTest: '取消隐藏测试',
    },
    'vs/workbench/contrib/testing/browser/testing.contribution': {
      miViewTesting: '测试(&E)',
      noTestProvidersRegistered: '尚未在此工作区中找到任何测试。',
      searchForAdditionalTestExtensions: '安装其他测试扩展...',
      test: '测试',
      testExplorer: '测试资源管理器',
      testResultsPanelName: '测试结果',
    },
    'vs/workbench/contrib/testing/browser/testingConfigurationUi': {
      'testConfigurationUi.pick': '选择要使用的测试配置文件',
      updateTestConfiguration: '更新测试配置',
    },
    'vs/workbench/contrib/testing/browser/testingDecorations': {
      'actual.title': '实际',
      'debug all test': '调试所有测试',
      'debug test': '调试测试',
      'expected.title': '预期',
      'peek failure': '速览错误',
      peekTestOutout: '速览测试输出',
      'reveal test': '在测试资源管理器中显示',
      'run all test': '运行所有测试',
      'run test': '运行测试',
      'testing.gutterMsg.contextMenu': '单击以获取测试选项',
      'testing.gutterMsg.debug': '单击以调试测试，右键单击以查看更多选项',
      'testing.gutterMsg.run': '单击以运行测试，右键单击以查看更多选项',
      'testing.runUsing': '使用配置文件执行...',
    },
    'vs/workbench/contrib/testing/browser/testingExplorerFilter': {
      testExplorerFilter: '筛选器(例如 text、!exclude、@tag)',
      testExplorerFilterLabel: '在资源管理器中筛选测试的文本',
      'testing.filters.currentFile': '仅在活动文件中显示',
      'testing.filters.fuzzyMatch': '模糊匹配',
      'testing.filters.menu': '更多筛选器...',
      'testing.filters.removeTestExclusions': '取消隐藏所有测试',
      'testing.filters.showExcludedTests': '显示隐藏的测试',
      'testing.filters.showOnlyExecuted': '仅显示已执行的测试',
      'testing.filters.showOnlyFailed': '仅显示失败的测试',
    },
    'vs/workbench/contrib/testing/browser/testingExplorerView': {
      configureTestProfiles: '配置测试配置文件',
      defaultTestProfile: '{0} (默认)',
      selectDefaultConfigs: '选择默认配置文件',
      testExplorer: '测试资源管理器',
      'testing.treeElementLabelDuration': '{1} 中的 {0}',
      'testing.treeElementLabelOutdated': '{0}，过期结果',
      testingCountBadgeFailed: '{0} 个测试失败',
      testingCountBadgePassed: '{0} 个测试已通过',
      testingCountBadgeSkipped: '已跳过 {0} 个测试',
      testingFindExtension: '显示工作区测试',
      testingNoTest: '此文件中未发现任何测试。',
    },
    'vs/workbench/contrib/testing/browser/testingOutputPeek': {
      close: '关闭',
      'debug test': '调试测试',
      messageMoreLines1: '再 + 1 行',
      messageMoreLinesN: '再 + {0} 行',
      'run test': '运行测试',
      runNoOutout: '测试运行未记录任何输出。',
      runNoOutputForPast: '测试输出仅适用于新的测试运行。',
      testOutputTitle: '测试输出',
      testUnnamedTask: '未命名任务',
      'testing.debugLastRun': '调试测试运行',
      'testing.goToError': '转到源',
      'testing.goToFile': '转到“文件”',
      'testing.goToNextMessage': '转到“下一个测试失败”',
      'testing.goToPreviousMessage': '转到“上一个测试失败”',
      'testing.markdownPeekError':
        '无法打开 Markdown 预览: {0}。\r\n\r\n请确保已启用 Markdown 扩展。',
      'testing.openMessageInEditor': '在编辑器中打开',
      'testing.reRunLastRun': '重新运行测试',
      'testing.revealInExplorer': '在测试资源管理器中显示',
      'testing.showResultOutput': '显示结果输出',
      'testing.toggleTestingPeekHistory': '在速览中切换测试历史记录',
      testingOutputActual: '实际结果',
      testingOutputExpected: '预期结果',
      testingPeekLabel: '测试结果消息',
    },
    'vs/workbench/contrib/testing/browser/testingProgressUiService': {
      'testProgress.completed': '{0}/{1} 个测试已通过({2}%)',
      'testProgress.running': '正在运行测试，通过 {0}/{1} ({2}%)',
      'testProgress.runningInitial': '正在运行测试…',
      'testProgressWithSkip.completed':
        '{0}/{1} 个测试已通过({2}%，{3} 个已跳过)',
      'testProgressWithSkip.running':
        '正在运行测试，通过 {0}/{1} ({2}%, {3} 个已跳过)',
    },
    'vs/workbench/contrib/testing/browser/testingViewPaneContainer': {
      testing: '测试',
    },
    'vs/workbench/contrib/testing/browser/theme': {
      'testing.iconErrored': '测试资源管理器中“出错”图标的颜色。',
      'testing.iconFailed': '测试资源管理器中“失败”图标的颜色。',
      'testing.iconPassed': '测试资源管理器中“已通过”图标的颜色。',
      'testing.iconQueued': '测试资源管理器中“已排队”图标的颜色。',
      'testing.iconSkipped': '测试资源管理器中“已跳过”图标的颜色。',
      'testing.iconUnset': '测试资源管理器中“未设置”图标的颜色。',
      'testing.message.error.decorationForeground':
        '在编辑器中内联显示的测试错误消息的文本颜色。',
      'testing.message.error.marginBackground':
        '在编辑器中内联显示的错误消息旁边的边距颜色。',
      'testing.message.info.decorationForeground':
        '在编辑器中内联显示的测试信息消息的文本颜色。',
      'testing.message.info.marginBackground':
        '在编辑器中内联显示的信息消息旁边的边距颜色。',
      'testing.peekBorder': '速览视图边框和箭头颜色。',
      'testing.runAction': '编辑器中“运行”图标的颜色。',
    },
    'vs/workbench/contrib/testing/common/configuration': {
      testConfigurationTitle: '测试',
      'testing.alwaysRevealTestOnStateChange':
        '打开“#testing.followRunningTest#”时，始终显示已执行的测试。如果关闭此设置，则只会显示失败的测试。',
      'testing.autoRun.delay':
        '将测试标记为过时并启动新运行后等待的时间(以毫秒为单位)。',
      'testing.automaticallyOpenPeekView': '配置何时自动打开错误“速览”视图。',
      'testing.automaticallyOpenPeekView.failureAnywhere':
        '无论故障在何处，都自动打开。',
      'testing.automaticallyOpenPeekView.failureInVisibleDocument':
        '在可见文档中测试失败时自动打开。',
      'testing.automaticallyOpenPeekView.never': '从不自动打开。',
      'testing.automaticallyOpenPeekViewDuringContinuousRun':
        '控制是否在连续运行模式期间自动打开“速览”视图。',
      'testing.countBadge': '控制活动栏上“测试”图标上的计数锁屏提醒。',
      'testing.countBadge.failed': '显示失败的测试数',
      'testing.countBadge.off': '禁用测试计数锁屏提醒',
      'testing.countBadge.passed': '显示通过的测试数',
      'testing.countBadge.skipped': '显示跳过的测试数',
      'testing.defaultGutterClickAction':
        '控制在装订线中左键单击测试修饰时要执行的操作。',
      'testing.defaultGutterClickAction.contextMenu':
        '打开上下文菜单以获取更多选项。',
      'testing.defaultGutterClickAction.debug': '调试测试。',
      'testing.defaultGutterClickAction.run': '运行测试。',
      'testing.followRunningTest':
        '控制是否应在“测试资源管理器”视图中遵循正在运行的测试。',
      'testing.gutterEnabled': '控制是否在编辑器装订线中显示测试修饰。',
      'testing.openTesting': '控制何时打开测试视图。',
      'testing.openTesting.neverOpen': '从不自动打开测试视图',
      'testing.openTesting.openOnTestFailure': '任何测试失败时打开测试视图',
      'testing.openTesting.openOnTestStart': '在测试启动时打开测试视图',
      'testing.saveBeforeTest': '控制是否在运行测试之前保存所有脏编辑器。',
      'testing.showAllMessages': '控制是否显示来自所有测试运行的消息。',
    },
    'vs/workbench/contrib/testing/common/constants': {
      'testGroup.coverage': '覆盖率',
      'testGroup.debug': '调试',
      'testGroup.run': '运行',
      'testState.errored': '出错',
      'testState.failed': '失败',
      'testState.passed': '通过',
      'testState.queued': '已排队',
      'testState.running': '正在运行',
      'testState.skipped': '已跳过',
      'testState.unset': '尚未运行',
      'testing.treeElementLabel': '{0} ({1})',
    },
    'vs/workbench/contrib/testing/common/testingContentProvider': {
      runNoOutout: '测试运行未记录任何输出。',
    },
    'vs/workbench/contrib/testing/common/testingContextKeys': {
      'testing.activeEditorHasTests': '指示当前编辑器中是否存在任何测试',
      'testing.canRefresh': '指示任何测试控制器是否具有附加的刷新处理程序。',
      'testing.controllerId': '当前测试项的控制器 ID',
      'testing.hasConfigurableConfig': '指示是否可以配置测试配置',
      'testing.hasCoverableTests': '指示是否有测试控制器注册了覆盖率配置',
      'testing.hasDebuggableTests': '指示是否有测试控制器注册了调试配置',
      'testing.hasNonDefaultConfig': '指示是否有测试控制器注册了非默认配置',
      'testing.hasRunnableTests': '指示是否有测试控制器注册了运行配置',
      'testing.isContinuousModeOn': '指示连续测试模式是否处于打开状态。',
      'testing.isParentRunningContinuously':
        '指示测试的父级是否持续运行，在测试项的菜单上下文中设置',
      'testing.isRefreshing': '指示当前是否有任何测试控制器正在刷新测试。',
      'testing.peekItemType':
        '输出速览视图中项的类型。类型为“测试”、“消息”、“任务”或“结果”。',
      'testing.supportsContinuousRun': '指示是否支持连续测试运行',
      'testing.testId': '当前测试项的 ID，在创建或打开测试项的菜单时设置',
      'testing.testItemHasUri': '指示测试项是否已定义 URI 的布尔值',
      'testing.testItemIsHidden': '指示测试项是否处于隐藏状态的布尔值',
    },
    'vs/workbench/contrib/testing/common/testResult': {
      runFinished: '测试运行时间: {0}',
    },
    'vs/workbench/contrib/testing/common/testServiceImpl': {
      testError: '尝试运行测试时出错: {0}',
      testTrust: '运行测试可能会执行工作区中的代码。',
    },
    'vs/workbench/contrib/themes/browser/themes.contribution': {
      browseColorThemes: '浏览其他颜色主题...',
      browseProductIconThemes: '浏览其他产品图标主题...',
      'button.browse': '浏览主题',
      'button.cancel': '取消',
      'button.keep': '保留新主题',
      'button.revert': '还原',
      'button.tryTheme': '试用新主题',
      defaultProductIconThemeLabel: '默认值',
      fileIconThemeCategory: '图标主题',
      'generateColorTheme.label': '使用当前设置生成颜色主题',
      installColorThemes: '安装其他颜色主题...',
      'installExtension.button.ok': '确定',
      'installExtension.confirm': '这将安装“{1}”发布的扩展“{0}”。是否要继续?',
      installIconThemes: '安装其他文件图标主题...',
      installProductIconThemes: '安装其他产品图标主题...',
      'installing extensions': '正在安装扩展 {0}...',
      'manage extension': '管理扩展',
      manageExtensionIcon: '主题选择快速选取中“管理”操作的图标。',
      miSelectTheme: '&&主题',
      newThemeNotification:
        'Visual Studio Code 现在附带新的默认主题“{0}”。是否要试一试?',
      noIconThemeDesc: '禁用文件图标',
      noIconThemeLabel: '无',
      productIconThemeCategory: '产品图标主题',
      'search.error': '搜索主题时出错: {0}',
      'selectIconTheme.label': '文件图标主题',
      'selectProductIconTheme.label': '产品图标主题',
      'selectTheme.label': '颜色主题',
      themeUpdatedNotification:
        'Visual Studio Code 现在附带新的默认主题“{0}”。如果愿意，可以切换回旧主题或尝试其他许多可用颜色主题之一。',
      themes: '主题',
      'themes.category.dark': '深色主题',
      'themes.category.hc': '高对比度主题',
      'themes.category.light': '浅色主题',
      'themes.selectIconTheme': '选择文件图标主题(向上/向下键以预览)',
      'themes.selectIconTheme.label': '文件图标主题',
      'themes.selectMarketplaceTheme':
        '键入以搜索更多内容。选择以安装。按向上/向下键进行预览',
      'themes.selectProductIconTheme': '选择产品图标主题(向上/向下键以预览)',
      'themes.selectProductIconTheme.label': '产品图标主题',
      'themes.selectTheme': '选择颜色主题 (按上下箭头键预览)',
      'toggleLightDarkThemes.label': '在浅色/深色主题之间切换',
    },
    'vs/workbench/contrib/timeline/browser/timeline.contribution': {
      'files.openTimeline': '打开时间线',
      filterTimeline: '筛选器时间线',
      'timeline.pageOnScroll':
        '实验性。控制在滚动到列表结尾时，时间线视图是否将加载下一页的项目。',
      'timeline.pageSize':
        '默认情况下以及在加载更多项目时在时间线视图中显示的项目数。如果设置为 "null" (默认值)，则将根据时间线视图的可见区域自动选择一个页面大小。',
      timelineConfigurationTitle: '时间线',
      timelineFilter: '筛选器时间线操作的图标。',
      timelineOpenIcon: '“打开时间线”操作的图标。',
      timelineViewIcon: '查看时间线视图的图标。',
    },
    'vs/workbench/contrib/timeline/browser/timelinePane': {
      refresh: '刷新',
      timeline: '时间线',
      'timeline.aria.item': '{0}: {1}',
      'timeline.editorCannotProvideTimeline': '活动编辑器无法提供时间线信息。',
      'timeline.loadMore': '加载更多',
      'timeline.loading': '正在加载 {0} 的时间线 ...',
      'timeline.loadingMore': '正在加载…',
      'timeline.noTimelineInfo': '未提供时间表信息。',
      'timeline.toggleFollowActiveEditorCommand.follow': '固定当前时间线',
      'timeline.toggleFollowActiveEditorCommand.unfollow': '取消固定当前时间线',
      timelinePin: '“固定时间线”操作的图标。',
      timelineRefresh: '“刷新时间线”操作的图标。',
      timelineUnpin: '“取消固定时间线”操作的图标。',
    },
    'vs/workbench/contrib/typeHierarchy/browser/typeHierarchy.contribution': {
      close: '关闭',
      editorHasTypeHierarchyProvider: '类型层次结构提供程序是否可用',
      error: '未能显示类型层次结构',
      'no.item': '无结果',
      title: '速览类型层次结构',
      'title.refocusTypeHierarchy': '重新专注类型层次结构',
      'title.subtypes': '显示子类型',
      'title.supertypes': '显示父类型',
      typeHierarchyDirection: '类型层次结构是否显示父类型或子类型',
      typeHierarchyVisible: '当前是否正在显示类型层次结构预览',
    },
    'vs/workbench/contrib/typeHierarchy/browser/typeHierarchyPeek': {
      'empt.subtypes': '没有“{0}”的子类型',
      'empt.supertypes': '没有“{0}”的父类型',
      subtypes: '“{0}”的子类型',
      supertypes: '“{0}”的父类型',
      'title.loading': '正在加载...',
    },
    'vs/workbench/contrib/typeHierarchy/browser/typeHierarchyTree': {
      subtypes: '{0} 的子类型',
      supertypes: '“{0}”的父类型',
      'tree.aria': '类型层次结构',
    },
    'vs/workbench/contrib/update/browser/releaseNotesEditor': {
      releaseNotesInputName: '发行说明: {0}',
      showOnUpdate: '更新后显示发行说明',
      unassigned: '未分配',
    },
    'vs/workbench/contrib/update/browser/update': {
      DownloadingUpdate: '正在下载更新...',
      checkForUpdates: '检查更新...',
      checkingForUpdates: '正在检查更新...',
      'download update': '下载更新',
      'download update_1': '下载更新(1) ',
      downloading: '正在下载...',
      installUpdate: '安装更新',
      'installUpdate...': '安装更新... (1)',
      installingUpdate: '正在安装更新...',
      later: '稍后',
      noUpdatesAvailable: '当前没有可用的更新。',
      'read the release notes': '欢迎使用 {0} v{1}! 是否要阅读发布说明?',
      relaunchDetailInsiders:
        '按“重新加载”按钮切换到预览体验成员版本的 VS Code。',
      relaunchDetailStable: '按“重新加载”按钮切换到稳定版的 VS Code。',
      relaunchMessage: '需要重载，然后对版本的更改才会生效',
      releaseNotes: '发行说明',
      reload: '重载(&&R)',
      restartToUpdate: '重新启动以更新 (1)',
      'selectSyncService.detail':
        '默认情况下，预览体验成员版 VS Code 将使用单独的预览体验成员设置同步服务来同步你的设置、键绑定、扩展、片段、UI 状态。',
      'selectSyncService.message': '选择在更改版本后要使用的设置同步服务',
      switchToInsiders: '切换到内部预览计划版本…',
      switchToStable: '切换到稳定版本…',
      thereIsUpdateAvailable: '存在可用更新。',
      'update service': '更新服务',
      'update.noReleaseNotesOnline': '此版本的 {0} 没有联机发行说明',
      updateAvailable: '现有更新可用: {0} {1}',
      updateAvailableAfterRestart: '重新启动 {0} 即可应用最新更新。',
      updateIsReady: '有新的 {0} 的更新可用。',
      updateNow: '立即更新',
      updating: '正在更新...',
      'use insiders': '预览体验成员(&&I)',
      'use stable': '稳定(当前)(&&S)',
    },
    'vs/workbench/contrib/update/browser/update.contribution': {
      applyUpdate: '应用更新...',
      checkForUpdates: '检查更新...',
      downloadUpdate: '下载更新',
      installUpdate: '安装更新',
      mshowReleaseNotes: '显示发行说明(&&R)',
      openDownloadPage: '下载 {0}',
      pickUpdate: '应用更新',
      restartToUpdate: '重启以更新',
      showReleaseNotes: '显示发行说明',
      'update.noReleaseNotesOnline': '此版本的 {0} 没有联机发行说明',
      updateButton: '更新(&&U)',
    },
    'vs/workbench/contrib/url/browser/trustedDomains': {
      'trustedDomain.manageTrustedDomain': '管理受信任的域',
      'trustedDomain.manageTrustedDomains': '管理受信任的域',
      'trustedDomain.trustAllDomains': '信任所有域(禁用链接保护)',
      'trustedDomain.trustAllPorts': '信任所有端口上的 {0}',
      'trustedDomain.trustDomain': '信任 {0}',
      'trustedDomain.trustSubDomain': '信任 {0} 及其所有子域',
    },
    'vs/workbench/contrib/url/browser/trustedDomainsValidator': {
      configureTrustedDomains: '配置受信任的域(&&T)',
      copy: '复制(&&C)',
      open: '打开(&&O)',
      openExternalLinkAt: '是否要 {0} 打开外部网站?',
    },
    'vs/workbench/contrib/url/browser/url.contribution': {
      openUrl: '打开 URL',
      urlToOpen: '要打开的 URL',
      'workbench.trustedDomains.promptInTrustedWorkspace':
        '启用后，在受信任的工作区中打开链接时，将显示受信任的域提示。',
    },
    'vs/workbench/contrib/userDataProfile/browser/userDataProfile': {
      'create empty profile': '创建空配置文件...',
      'create from current profle': '从当前配置文件创建...',
      'create profile': '创建配置文件...',
      'create profile from template title': '{0}: 创建...',
      'create profile from templates': '根据模板创建配置文件...',
      'create profile title': '创建配置文件...',
      current: '当前',
      'delete profile': '删除配置文件...',
      'delete specific profile': '删除配置文件...',
      empty: '配置文件为空',
      'export profile': '导出配置文件...',
      'export profile in share': '导出配置文件({0})...',
      'import from file': '从配置文件模板文件创建',
      'import from url': '从配置文件模板 URL 创建',
      'import profile': '导入配置文件...',
      'import profile dialog': '选择配置文件模版文件',
      'import profile placeholder':
        '提供配置文件模板 URL 或选择配置文件模板文件',
      'import profile quick pick title': '从配置文件模板创建配置文件...',
      'import profile share': '导入配置文件...',
      name: '配置文件名称',
      'no templates': '没有创建所依据的模板',
      'pick profile to delete': '选择要删除的配置文件',
      'profile import error': '创建配置文件时出错: {0}',
      profileExists: '具有名称 {0} 的配置文件已经存在。',
      profiles: '配置文件({0})',
      'rename profile': '重命名...',
      'save profile as': '从当前配置文件创建...',
      selectProfile: '选择配置文件',
      'show profile contents': '显示内容...',
      switchProfile: 'Switch 配置文件...',
      templates: '配置文件模板',
      'using current': '正在使用当前配置文件',
    },
    'vs/workbench/contrib/userDataProfile/browser/userDataProfileActions': {
      'cleanup profile': '清理配置文件',
      'create temporary profile': '创建临时配置文件',
      current: '当前',
      mange: '管理...',
      'pick profile to rename': '选择要重命名的配置文件',
      profileExists: '具有名称 {0} 的配置文件已经存在。',
      'rename profile': '重命名...',
      'rename specific profile': '重命名配置文件...',
      'reset workspaces': '重置工作区配置文件关联',
      'select profile to rename': '重命名 {0}',
    },
    'vs/workbench/contrib/userDataSync/browser/userDataSync': {
      'accept failed': '接受更改时出错。有关更多详细信息，请查看[日志]({0})。',
      'auth failed': '启用设置同步时出错: 身份验证失败。',
      'cancel turning on sync': '取消',
      'complete merges title': '完成合并',
      configure: '配置...',
      'configure and turn on sync detail': '请进行登录，跨设备同步你的数据。',
      'configure sync': '配置...',
      'configure sync placeholder': '选择要同步的内容',
      'configure sync title': '{0}: 配置…',
      'conflicts detected': '由于 {0} 中的冲突，无法同步。请解决它们以继续。',
      default: '默认值',
      'error reset required':
        '云中的数据早于客户端的数据，因此已禁用设置同步。请先清除云中的数据，然后再启用同步。',
      'error reset required while starting sync':
        '云中的数据早于客户端的数据，因此无法启用设置同步。请先清除云中的数据，然后再启用同步。',
      'error upgrade required':
        '当前版本({0}, {1})与同步服务不兼容，因此已禁用设置同步。请先进行更新，然后再打开同步。',
      'error upgrade required while starting sync':
        '当前版本({0}, {1})与同步服务不兼容，因此无法启用设置同步。请先进行更新，然后再打开同步。',
      errorInvalidConfiguration:
        '无法同步 {0}，因为文件中的内容无效。请打开文件并进行更正。',
      'global activity turn on sync': '打开设置同步…',
      'has conflicts': '{0}: 检测到冲突',
      insiders: '预览体验人员',
      'method not found':
        '已禁用设置同步，因为客户端发出的请求无效。请报告日志问题。',
      'no authentication providers': '没有可用的身份验证提供程序。',
      'open file': '打开 {0} 文件',
      operationId: '操作 ID: {0}',
      'per platform': '为每个平台',
      'replace local': '替换本地',
      'replace remote': '替换远程',
      'report issue': '报告问题',
      reset: '清除云中的数据…',
      resolveConflicts_global: '显示冲突({0})',
      'service changed and turned off':
        '设置同步已禁用，因为 {0} 现使用一个单独的服务。请再次启用同步。',
      'service switched to insiders': '设置同步已切换为预览体验成员服务',
      'service switched to stable': '设置同步已切换为稳定的服务',
      'session expired':
        '当前会话已过期，因此已关闭设置同步。若要启用同步，请重新登录。',
      'show conflicts': '显示冲突',
      'show sync log title': '{0}: 显示日志',
      'show sync log toolrip': '显示日志',
      'show sync logs': '显示日志',
      'show synced data': '显示已同步的数据',
      'show synced data action': '显示已同步的数据',
      'sign in accounts': '登录以同步设置(1)',
      'sign in and turn on': '登录并打开',
      'sign in global': '登录以同步设置',
      'sign in to sync': '登录以同步设置',
      stable: '稳定',
      'stop sync': '关闭',
      'switchSyncService.description':
        '在与多个环境同步时，请确保你使用的设置同步服务相同',
      'switchSyncService.title': '{0}: 选择服务',
      'sync is on': '设置同步已打开',
      'sync now': '立即同步',
      'sync settings': '显示设置',
      'synced with time': '同步时间: {0}',
      syncing: '正在同步',
      'too large':
        '已禁止同步 {0}，因为要同步的 {1} 文件的大小大于 {2}。请打开文件减小大小，然后再启用同步',
      'too large while starting sync':
        '要同步的 {0} 文件的大小大于 {1}，因此无法启用设置同步。请打开文件并减小大小，然后打开同步',
      'too many profiles':
        '已禁用同步配置文件，因为配置文件太多，无法同步。设置同步支持同步最多 20 个配置文件。请减少配置文件数并启用同步',
      'turn off': '关闭(&&T)',
      'turn off failed':
        '禁用设置同步时出错。有关更多详细信息，请查看[日志]({0})。',
      'turn off sync confirmation': '是否要关闭同步?',
      'turn off sync detail':
        '将不再同步你的设置、键绑定、扩展、代码片段和 UI 状态。',
      'turn off sync everywhere':
        '关闭所有设备上的同步设置，并从云中清除数据。',
      'turn on failed': '打开设置同步时出错。{0}',
      'turn on failed with user data sync error':
        '启用设置同步时出错。请查看[日志]({0})以了解详细信息。',
      'turn on sync': '打开设置同步…',
      'turned off': '已从另一设备禁用设置同步，请再次启用同步。',
      'turnin on sync': '正在打开设置同步…',
      'turning on syncing': '正在打开设置同步…',
      'using separate service':
        '设置同步现使用一个单独的服务；有关详细信息，请参阅[设置同步文档](https://aka.ms/vscode-settings-sync-help#_syncing-stable-versus-insiders)。',
      'workbench.actions.syncData.reset': '清除云中的数据…',
    },
    'vs/workbench/contrib/userDataSync/browser/userDataSync.contribution': {
      'local too many requests - reload':
        '由于当前设备发出的请求过多，设置同步将暂时暂停。请重新加载 {0} 以恢复。',
      'local too many requests - restart':
        '由于当前设备发出的请求过多，设置同步将暂时暂停。请重启 {0} 以恢复。',
      operationId: '操作 ID: {0}',
      reload: '重新加载',
      restart: '重启',
      'server too many requests':
        '由于当前设备发出的请求过多，已禁用设置同步。请等待 10 分钟，然后打开同步。',
      'settings sync': '设置同步。操作 ID: {0}',
      'show sync logs': '显示日志',
    },
    'vs/workbench/contrib/userDataSync/browser/userDataSyncConflictsView': {
      Theirs: '他们的',
      Yours: '你的',
      explanation: '请浏览每个条目并合并以解决冲突。',
      localResourceName: '{0} (本地)',
      remoteResourceName: '{0} (远程)',
      'workbench.actions.sync.acceptLocal': '接受本地',
      'workbench.actions.sync.acceptRemote': '接受远程',
      'workbench.actions.sync.openConflicts': '显示冲突',
    },
    'vs/workbench/contrib/userDataSync/browser/userDataSyncViews': {
      'confirm replace': '是否要用选定的内容替换当前的 {0}?',
      conflicts: '冲突',
      current: '当前',
      'last sync states': '上次同步的远程',
      leftResourceName: '{0} (远程)',
      'local sync activity title': '同步活动(本地)',
      'no machines': '无计算机',
      'not found': '找不到 ID 为 {0} 的计算机',
      placeholder: '输入计算机名称',
      'remote sync activity title': '同步活动(远程)',
      remoteToLocalDiff: '{0} ↔ {1}',
      reset: '重置同步的数据',
      rightResourceName: '{0} (本地)',
      sideBySideLabels: '{0} ↔ {1}',
      'sync logs': '日志',
      'synced machines': '已同步的计算机',
      troubleshoot: '疑难解答',
      'turn off': '关闭(&&T)',
      'turn off sync on machine': '确定要对 {0} 关闭同步吗?',
      'turn off sync on multiple machines': '是否确实要在所选计算机上禁用同步?',
      'valid message': '计算机名称必须是唯一的且不为空',
      'workbench.actions.sync.compareWithLocal': '与本地比较',
      'workbench.actions.sync.editMachineName': '编辑名称',
      'workbench.actions.sync.replaceCurrent': '还原',
      'workbench.actions.sync.resolveResourceRef': '显示原始 JSON 同步数据',
      'workbench.actions.sync.turnOffSyncOnMachine': '关闭设置同步',
    },
    'vs/workbench/contrib/userDataSync/electron-sandbox/userDataSync.contribution':
      {
        'Open Backup folder': '打开本地备份文件夹',
        'no backups': '本地备份文件夹不存在',
      },
    'vs/workbench/contrib/watermark/browser/watermark': {
      'tips.enabled': '启用后，当没有打开编辑器时将显示水印提示。',
      'watermark.findInFiles': '在文件中查找',
      'watermark.newUntitledFile': '新的无标题文本文件',
      'watermark.openFile': '打开文件',
      'watermark.openFileFolder': '打开文件或文件夹',
      'watermark.openFolder': '打开文件夹',
      'watermark.openRecent': '打开最近的文件',
      'watermark.quickAccess': '转到文件',
      'watermark.showCommands': '显示所有命令',
      'watermark.showSettings': '显示设置',
      'watermark.startDebugging': '开始调试',
      'watermark.toggleFullscreen': '切换全屏',
      'watermark.toggleTerminal': '切换终端',
    },
    'vs/workbench/contrib/webview/browser/webview.contribution': {
      copy: '复制',
      cut: '剪切',
      paste: '粘贴',
    },
    'vs/workbench/contrib/webview/browser/webviewElement': {
      fatalErrorMessage: '加载 Web 视图时出错: {0}',
    },
    'vs/workbench/contrib/webview/electron-sandbox/webviewCommands': {
      iframeWebviewAlert: '使用标准开发工具调试基于 iFrame 的 Web 视图',
      openToolsLabel: '打开 Webview 开发人员工具',
    },
    'vs/workbench/contrib/webviewPanel/browser/webviewCommands': {
      'editor.action.webvieweditor.findNext': '查找下一个',
      'editor.action.webvieweditor.findPrevious': '查找上一个',
      'editor.action.webvieweditor.hideFind': '停止查找',
      'editor.action.webvieweditor.showFind': '显示查找',
      refreshWebviewLabel: '重新加载 Web 视图',
    },
    'vs/workbench/contrib/webviewPanel/browser/webviewEditor': {
      'context.activeWebviewId': '当前活动的 Web 视图面板的 viewType。',
    },
    'vs/workbench/contrib/webviewPanel/browser/webviewPanel.contribution': {
      'webview.editor.label': 'Web 视图编辑器',
    },
    'vs/workbench/contrib/welcomeDialog/browser/welcomeDialog.contribution': {
      'workbench.welcome.dialog': '启用后，编辑器中会显示欢迎小组件',
    },
    'vs/workbench/contrib/welcomeDialog/browser/welcomeWidget': {
      dialogClose: '关闭对话框',
    },
    'vs/workbench/contrib/welcomeGettingStarted/browser/featuredExtensionService':
      {
        'gettingStarted.featuredTitle': '推荐',
      },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStarted': {
      allDone: '标记为完成',
      checkboxTitle: '选中后，此页面将在启动时显示。',
      close: '隐藏',
      closeAriaLabel: '隐藏',
      footer: '{0} 收集使用情况数据。阅读我们的 {1} 并了解如何 {2}。',
      'gettingStarted.allStepsComplete': '所有 {0} 个步骤均已完成!',
      'gettingStarted.editingEvolved': '编辑进化',
      'gettingStarted.keyboardTip': '提示: 使用键盘快捷方式 ',
      'gettingStarted.someStepsComplete': '已完成 {0} 个步骤，共 {1} 个步骤',
      imageShowing: '显示 {0} 的图像',
      new: '新建',
      newItems: '已更新',
      nextOne: '下一节',
      noRecents: '你没有最近使用的文件夹，',
      openFolder: '打开文件夹',
      optOut: '选择退出',
      pickWalkthroughs: '打开演练...',
      'privacy statement': '隐私声明',
      recent: '最近',
      'show more recents': '显示所有最近使用的文件夹 {0}',
      showAll: '更多...',
      start: '启动',
      toStart: '以开始。',
      walkthroughs: '演练',
      welcome: '欢迎',
      welcomeAriaLabel: '关于编辑器快速入门的概述。',
      'welcomePage.openFolderWithPath': '打开路径为 {1} 的文件夹 {0}',
      'welcomePage.showOnStartup': '启动时显示欢迎页',
    },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStarted.contribution':
      {
        deprecationMessage: '已弃用，请使用全局 `workbench.reduceMotion`。',
        miWelcome: '欢迎',
        pickWalkthroughs: '选择要打开的演练',
        welcome: '欢迎',
        'welcome.goBack': '后退',
        'welcome.markStepComplete': '标记步骤完成',
        'welcome.markStepInomplete': '标记步骤未完成',
        'welcome.showAllWalkthroughs': '打开演练...',
        'workbench.startupEditor':
          '在没有从上一会话中恢复出信息的情况下，控制启动时显示的编辑器。',
        'workbench.startupEditor.newUntitledFile':
          '打开新的无标题文本文件(仅在打开空窗口时适用)。',
        'workbench.startupEditor.none': '在启动时不打开编辑器。',
        'workbench.startupEditor.readme':
          "当打开包含自述文件的文件夹时，请打开自述文件，否则会回退到 'welcomePage'。请注意: 仅在作为全局 配置时才遵守此操作，如果在工作区或文件夹配置中进行设置，则此将被忽略。",
        'workbench.startupEditor.welcomePage':
          '打开包含帮助开始使用 VS Code 和扩展内容的欢迎页面。',
        'workbench.startupEditor.welcomePageInEmptyWorkbench':
          '在打开空工作区时打开欢迎页面。',
        'workbench.welcomePage.preferReducedMotion':
          '启用后，减少欢迎页中的移动。',
        'workbench.welcomePage.walkthroughs.openOnInstall':
          '启用后，扩展的演练将在安装扩展时打开。',
        workspacePlatform:
          '当前工作区的平台，在远程或无服务器上下文中可能不同于 UI 的平台',
      },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStartedColors': {
      'walkthrough.stepTitle.foreground': '每个演练步骤标题的前景色',
      'welcomePage.background': '欢迎页面的背景色。',
      'welcomePage.progress.background': '欢迎页面进度栏的前景色。',
      'welcomePage.progress.foreground': '欢迎页面进度栏的背景色。',
      'welcomePage.tileBackground': '“欢迎”页面上磁贴的背景色。',
      'welcomePage.tileBorder': '“欢迎”页面上磁贴的边框颜色。',
      'welcomePage.tileHoverBackground': '“欢迎”页面上磁贴的悬停背景色。',
    },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStartedExtensionPoint':
      {
        pathDeprecated: '已弃用。请改用“图像”或“Markdown”',
        title: '标题',
        walkthroughs: '提供演练以帮助用户入门扩展。',
        'walkthroughs.description': '演练的说明。',
        'walkthroughs.featuredFor':
          '与这些 glob 模式之一匹配的演练在具有指定文件的工作区中显示为“特色”。例如，针对 TypeScript 项目的演练可能在此处指定“tsconfig.json”。',
        'walkthroughs.icon':
          '演练图标的相对路径。路径相对于扩展位置。如果未指定，则图标在可用时将默认为扩展图标。',
        'walkthroughs.id': '此演练的唯一标识符。',
        'walkthroughs.steps': '要在此演练期间完成的步骤。',
        'walkthroughs.steps.button.deprecated.interpolated':
          '已弃用。请改用说明中的 markdown 链接，例如 {0}、{1}、或 {2}',
        'walkthroughs.steps.completionEvents':
          '应触发此步骤变为已勾选的事件。如果为空或未定义，则在单击任何步骤的按钮或链接时，步骤将撤销复选; 如果该步骤没有按钮或链接，则选中它时会选中。',
        'walkthroughs.steps.completionEvents.extensionInstalled':
          '安装具有给定 id 的扩展时，请关闭步骤。如果已安装扩展，则步骤将以勾选状态开始。',
        'walkthroughs.steps.completionEvents.onCommand':
          '在 VS Code 中的任何位置执行给定命令时，勾选步骤。',
        'walkthroughs.steps.completionEvents.onContext':
          '当上下文键表达式为 true 时，勾选步骤。',
        'walkthroughs.steps.completionEvents.onLink':
          '通过演练步骤打开给定链接时的签出步骤。',
        'walkthroughs.steps.completionEvents.onSettingChanged':
          '在给定设置发生更改时勾选步骤',
        'walkthroughs.steps.completionEvents.onView': '打开给定视图时选中步骤',
        'walkthroughs.steps.completionEvents.stepSelected':
          '选中后立即勾选步骤。',
        'walkthroughs.steps.description.interpolated':
          '步骤说明。支持 “preformatted”、__italic__和 **bold** 文本。对命令或外部链接使用 markdown 样式链接: {0}、{1} 或 {2}。在其自身行上的链接将呈现为按钮。',
        'walkthroughs.steps.doneOn': '指示将步骤标记为已完成的信号。',
        'walkthroughs.steps.doneOn.deprecation':
          'doneOn 已弃用。默认情况下，单击用户按钮时将勾选步骤，以进一步配置使用 completionEvents',
        'walkthroughs.steps.id': '此步骤的唯一标识符。用于跟踪已完成的步骤。',
        'walkthroughs.steps.media':
          '要与此步骤一起显示的媒体(图像或 Markdown 内容)。',
        'walkthroughs.steps.media.altText':
          '无法加载图像时或在屏幕读取器中显示的替换文字。',
        'walkthroughs.steps.media.image.path.dark.string':
          '深色主题相对于扩展目录的图像的路径。',
        'walkthroughs.steps.media.image.path.hc.string':
          'hc 主题相对于扩展目录的图像的路径。',
        'walkthroughs.steps.media.image.path.hcLight.string':
          'hc 浅色主题相对于扩展目录的图像的路径。',
        'walkthroughs.steps.media.image.path.light.string':
          '浅色主题相对于扩展目录的图像的路径。',
        'walkthroughs.steps.media.image.path.string':
          '一个图像或对象的路径，由指向光源、暗和 hc 图像的路径(相对于扩展目录)组成。根据上下文，图像将显示从 400px 到800px 宽，具有相似的高度边界。为了支持 HIDPI 显示，图像将以 1.5 倍缩放比例呈现。例如，900 物理像素宽图像将显示为 600 逻辑像素宽。',
        'walkthroughs.steps.media.image.path.svg':
          '变量中支持颜色标记、svg 路径以支持与工作台匹配的主题设置。',
        'walkthroughs.steps.media.markdown.path':
          'Markdown 文档的路径(相对于扩展目录)。',
        'walkthroughs.steps.oneOn.command':
          '执行指定命令时将步骤标记为已完成。',
        'walkthroughs.steps.title': '步骤标题。',
        'walkthroughs.steps.when': '用于控制此步骤可见性的上下文键表达式。',
        'walkthroughs.title': '演练的标题。',
        'walkthroughs.when': '用于控制此演练的可见性的上下文键表达式。',
      },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStartedIcons': {
      gettingStartedChecked: '用于表示已完成的演练步骤',
      gettingStartedUnchecked: '用于表示尚未完成的演练步骤',
    },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStartedInput': {
      getStarted: '欢迎',
    },
    'vs/workbench/contrib/welcomeGettingStarted/browser/gettingStartedService':
      {
        builtin: '内置',
        developer: '开发人员',
        resetWelcomePageWalkthroughProgress: '重置欢迎页面演练进度',
      },
    'vs/workbench/contrib/welcomeGettingStarted/browser/startupPage': {
      'startupPage.markdownPreviewError':
        '无法打开 Markdown 预览: {0}。\r\n\r\n请确保已启用 Markdown 扩展。',
      'welcome.displayName': '欢迎页面',
    },
    'vs/workbench/contrib/welcomeGettingStarted/common/gettingStartedContent': {
      browseLangExts: '浏览语言扩展',
      browsePopular: '浏览热门 Web 扩展',
      browseRecommended: '浏览推荐的扩展',
      cloneRepo: '克隆仓库',
      commandPalette: '打开命令面板',
      enableSync: '启用设置同步',
      enableTrust: '启用信任',
      'getting-started-beginner-icon': '用于欢迎页面初学者类别的图标',
      'getting-started-intermediate-icon': '用于欢迎页面中级类别的图标',
      'getting-started-setup-icon': '用于欢迎页面的设置类别的图标',
      'gettingStarted.beginner.description':
        '直接跳转到 VS Code 并概要了解必备功能。',
      'gettingStarted.beginner.title': '了解基础知识',
      'gettingStarted.commandPalette.description.interpolated':
        '命令是在 VS Code 中完成任务的键盘方式。查找常用命令以进行 **练习**，从而节省时间。\r\n{0}\r\n__尝试搜索‘视图切换’。__',
      'gettingStarted.commandPalette.title': '访问所有内容只需一个快捷方式',
      'gettingStarted.debug.description.interpolated':
        '通过设置启动配置来加速编辑、生成、测试和调试循环。\r\n{0}',
      'gettingStarted.debug.title': '在操作中查看代码',
      'gettingStarted.extensions.description.interpolated':
        '扩展是 VS Code 的精华。扩展范围包括方便地提升生产力、扩展现成的功能以及添加全新的功能。\r\n{0}',
      'gettingStarted.extensions.title': '无限扩展性',
      'gettingStarted.extensionsWeb.description.interpolated':
        '扩展是 VS Code 的增强功能。越来越多的扩展可在 Web 上使用。\r\n{0}',
      'gettingStarted.findLanguageExts.description.interpolated':
        '语法突出显示、代码完成、lint 分析和调试让代码更加智能。虽然已内置多种语言，但可将更多语言添加为扩展。\r\n{0}',
      'gettingStarted.findLanguageExts.title': '对所有语言的丰富支持',
      'gettingStarted.installGit.description.interpolated':
        '安装 Git 以跟踪项目中的更改。\r\n{0}\r\n安装后 {1}重新加载窗口{2} 以完成 Git 安装。',
      'gettingStarted.installGit.title': '安装 Git',
      'gettingStarted.intermediate.description':
        '使用这些提示和技巧优化开发工作流。',
      'gettingStarted.intermediate.title': '提高工作效率',
      'gettingStarted.menuBar.description.interpolated':
        '下拉菜单中提供了完整的菜单栏，可为代码腾出空间。切换其外观以加快访问速度。\r\n{0}',
      'gettingStarted.menuBar.title': '恰好数量的 UI',
      'gettingStarted.newFile.description':
        '打开新的无标题文本文件、笔记本或自定义编辑器。',
      'gettingStarted.newFile.title': '新建文件...',
      'gettingStarted.notebook.title': '自定义笔记',
      'gettingStarted.notebookProfile.description':
        '获取笔记，以你喜欢的方式体验',
      'gettingStarted.notebookProfile.title': '选择笔记的布局',
      'gettingStarted.openFile.description': '打开文件以开始工作',
      'gettingStarted.openFile.title': '打开文件...',
      'gettingStarted.openFolder.description': '打开文件夹开始工作',
      'gettingStarted.openFolder.title': '打开文件夹...',
      'gettingStarted.openMac.description': '打开文件或文件夹以开始工作',
      'gettingStarted.openMac.title': '打开...',
      'gettingStarted.pickColor.description.interpolated':
        '正确的调色板可帮助你专注于代码、更易于识别，并且使用起来更具趣味性。\r\n{0}',
      'gettingStarted.pickColor.title': '选择想要的外观',
      'gettingStarted.playground.description.interpolated':
        '想要更快、更智能地编写代码? 请在交互式操场中练习功能强大的代码编辑功能。\r\n{0}',
      'gettingStarted.playground.title': '重新定义编辑技能',
      'gettingStarted.profiles.description.interpolated':
        '借助配置文件，可以创建一组 VS Code 自定义项，其中包括设置、扩展和 UI 状态。从头开始创建自己的配置文件，或使用特定工作流的预定义配置文件模板集。\r\n{0}',
      'gettingStarted.profiles.title': '使用配置文件自定义 VS Code',
      'gettingStarted.quickOpen.description.interpolated':
        '击键一下即可迅速在文件之间导航。提示: 通过按右箭头键打开多个文件。\r\n{0}',
      'gettingStarted.quickOpen.title': '在文件之间快速导航',
      'gettingStarted.scm.description.interpolated':
        '不再查找 Git 命令! Git 和 GitHub 工作流已无缝集成。\r\n{0}',
      'gettingStarted.scm.title': '使用 Git 跟踪代码',
      'gettingStarted.scmClone.description.interpolated':
        '为项目设置内置版本控制，以跟踪更改并与他人协作。\r\n{0}',
      'gettingStarted.scmSetup.description.interpolated':
        '为项目设置内置版本控制，以跟踪更改并与他人协作。\r\n{0}',
      'gettingStarted.settings.description.interpolated':
        '根据你的喜好调整 VS Code 和扩展的各个方面。首先会列出常用设置便于你开始使用。\r\n{0}',
      'gettingStarted.settings.title': '优化设置',
      'gettingStarted.settingsSync.description.interpolated':
        '保持跨所有设备备份和更新基本的 VS Code 自定义。\r\n{0}',
      'gettingStarted.settingsSync.title': '同步到其他设备或从其他设备同步',
      'gettingStarted.setup.OpenFolder.description.interpolated':
        '你已准备好开始编码。请打开项目文件夹，将文件放入VS Code。\r\n{0}',
      'gettingStarted.setup.OpenFolder.title': '打开你的代码',
      'gettingStarted.setup.OpenFolderWeb.description.interpolated':
        '你已准备好开始编码。可以打开本地项目或远程仓库，以将文件置于 VS Code。\r\n{0}\r\n{1}',
      'gettingStarted.setup.description':
        '发现最佳的自定义方法，使用你的专属 VS Code。',
      'gettingStarted.setup.title': '开始使用 VS Code',
      'gettingStarted.setupWeb.description':
        '发现最佳的自定义方法，以将面向 Web 的 VS Code 成为你的专属。',
      'gettingStarted.setupWeb.title': '面向 Web 的 VS Code 入门',
      'gettingStarted.shortcuts.description.interpolated':
        '发现喜欢的命令后，创建自定义键盘快捷方式以进行即时访问。\r\n{0}',
      'gettingStarted.shortcuts.title': '自定义快捷方式',
      'gettingStarted.splitview.description.interpolated':
        '通过以并排、垂直和水平方式打开文件，充分利用屏幕空间。\r\n{0}',
      'gettingStarted.splitview.title': '并行编辑',
      'gettingStarted.tasks.description.interpolated':
        '为常见工作流创建任务，并享受运行脚本和自动检查结果的集成体验。\r\n{0}',
      'gettingStarted.tasks.title': '自动执行项目任务',
      'gettingStarted.terminal.description.interpolated':
        '在代码近旁快速运行 shell 命令并监视生成输出。\r\n{0}',
      'gettingStarted.terminal.title': '便利的内置终端',
      'gettingStarted.topLevelGitClone.description':
        '将远程仓库克隆到本地文件夹',
      'gettingStarted.topLevelGitClone.title': '克隆 Git 仓库...',
      'gettingStarted.topLevelGitOpen.description':
        '连接到远程仓库或拉取请求，以进行浏览、搜索、编辑和提交',
      'gettingStarted.topLevelGitOpen.title': '打开仓库...',
      'gettingStarted.topLevelOpenTunnel.description':
        '通过 Tunnel 连接到远程计算机',
      'gettingStarted.topLevelOpenTunnel.title': '打开隧道...',
      'gettingStarted.topLevelRemoteOpen.description': '连接到远程开发工作区。',
      'gettingStarted.topLevelRemoteOpen.title': '连接到...',
      'gettingStarted.topLevelShowWalkthroughs.description':
        '查看编辑器或扩展的演练',
      'gettingStarted.topLevelShowWalkthroughs.title': '打开演练...',
      'gettingStarted.videoTutorial.description.interpolated':
        '请观看系列简短实用视频教程中的第一课，了解 VS Code 的主要功能。\r\n{0}',
      'gettingStarted.videoTutorial.title': '充电学习',
      'gettingStarted.workspaceTrust.description.interpolated':
        '通过 {0}，可以确定项目文件夹是否应 **允许或限制** 自动代码执行 __(扩展、调试等所必需)__。\r\n 打开文件/文件夹将提示授予信任。以后始终可以 {1}。',
      'gettingStarted.workspaceTrust.title': '安全浏览和编辑代码',
      initRepo: '初始化 Git 仓库',
      installGit: '安装 Git',
      keyboardShortcuts: '键盘快捷方式',
      openEditorPlayground: '打开编辑器操场',
      openFolder: '打开文件夹',
      openRepository: '打开仓库',
      openSCM: '开放源代码管理',
      pickFolder: '选取文件夹',
      quickOpen: '快速打开一个文件',
      runProject: '运行项目',
      runTasks: '运行自动检测到的任务',
      showTerminal: '显示终端面板',
      splitEditor: '拆分编辑器',
      titleID: '浏览颜色主题',
      toggleMenuBar: '切换菜单栏',
      tryProfiles: '试用配置文件',
      tweakSettings: '调整我的设置',
      watch: '观看教程',
      workspaceTrust: '工作区信任',
    },
    'vs/workbench/contrib/welcomeGettingStarted/common/media/notebookProfile': {
      colab: 'Colab',
      default: '默认',
      jupyter: 'Jupyter',
    },
    'vs/workbench/contrib/welcomeGettingStarted/common/media/theme_picker': {
      HighContrast: '深色高对比度',
      HighContrastLight: '浅色高对比度',
      dark: '现代深色',
      light: '现代浅色',
      seeMore: '查看更多主题...',
    },
    'vs/workbench/contrib/welcomeOverlay/browser/welcomeOverlay': {
      hideWelcomeOverlay: '隐藏界面概述',
      welcomeOverlay: '用户界面概览',
      'welcomeOverlay.commandPalette': '查找并运行所有命令',
      'welcomeOverlay.debug': '启动和调试',
      'welcomeOverlay.explorer': '文件资源管理器',
      'welcomeOverlay.extensions': '管理扩展',
      'welcomeOverlay.git': '源代码管理',
      'welcomeOverlay.notifications': '显示通知',
      'welcomeOverlay.problems': '查看错误和警告',
      'welcomeOverlay.search': '跨文件搜索',
      'welcomeOverlay.terminal': '切换集成终端',
      welcomeOverlayBackground: 'welcomeOverlay 背景色。',
    },
    'vs/workbench/contrib/welcomeViews/common/newFile.contribution': {
      'Built-In': '内置',
      Create: '创建',
      'change keybinding': '配置键绑定',
      file: '文件',
      miNewFile2: '文本文件',
      miNewFileWithName: '新建文件({0})',
      newFilePlaceholder: '选择文件类型或输入文件名...',
      newFileTitle: '新建文件...',
      notebook: '笔记本',
      'welcome.newFile': '新建文件...',
    },
    'vs/workbench/contrib/welcomeViews/common/viewsWelcomeContribution': {
      'ViewsWelcomeExtensionPoint.proposedAPI':
        '“{0}”中的 viewsWelcome 贡献需要 “enabledApiProposals: [“contribViewsWelcome”]”才能使用“组”建议的属性。',
    },
    'vs/workbench/contrib/welcomeViews/common/viewsWelcomeExtensionPoint': {
      'contributes.viewsWelcome':
        '提供视图欢迎内容。只要没有有意义的内容可显示，就会在基于树的视图中呈现欢迎内容，例如未打开文件夹时的文件资源管理器。此类内容作为产品内文档非常有用，可促使用户在某些功能可用之前使用它们。文件资源管理器欢迎视图中的“克隆仓库”按钮就是一个很好的示例。',
      'contributes.viewsWelcome.view': '为特定视图提供的欢迎页面内容。',
      'contributes.viewsWelcome.view.contents':
        '要显示的欢迎内容。内容的格式是 Markdown 的子集，仅支持链接。',
      'contributes.viewsWelcome.view.enablement':
        '启用欢迎内容按钮和命令链接的条件。',
      'contributes.viewsWelcome.view.group': '此欢迎内容所属的组。建议的 API。',
      'contributes.viewsWelcome.view.view':
        '此欢迎内容的目标视图标识符。仅支持基于树的视图。',
      'contributes.viewsWelcome.view.when': '显示欢迎内容的条件。',
    },
    'vs/workbench/contrib/welcomeWalkthrough/browser/editor/editorWalkThrough':
      {
        editorWalkThrough: '交互式编辑器操场',
        'editorWalkThrough.title': '编辑器操场',
      },
    'vs/workbench/contrib/welcomeWalkthrough/browser/walkThrough.contribution':
      {
        miPlayground: '编辑器操场(&&N)',
        'walkThrough.editor.label': '操场',
      },
    'vs/workbench/contrib/welcomeWalkthrough/browser/walkThroughPart': {
      'walkThrough.gitNotFound': '你的系统上似乎未安装 Git。',
      'walkThrough.unboundCommand': '未绑定',
    },
    'vs/workbench/contrib/welcomeWalkthrough/common/walkThroughUtils': {
      'walkThrough.embeddedEditorBackground':
        '嵌入于交互式演练场中的编辑器的背景颜色。',
    },
    'vs/workbench/contrib/workspace/browser/workspace.contribution': {
      addWorkspaceFolderDetail:
        '你正在将文件添加到受信任的工作区，该工作区当前不受信任。是否信任这些新文件的作者?',
      addWorkspaceFolderMessage: '是否信任此文件夹中的文件的作者?',
      cancelWorkspaceTrustButton: '取消',
      checkboxString: '信任父文件夹“{0}”中所有文件的作者',
      configureWorkspaceTrustSettings: '配置工作区信任设置',
      dontTrustFolderOptionDescription: '在受限模式下浏览文件夹',
      dontTrustOption: '否，我不信任此作者(&&N)',
      dontTrustWorkspaceOptionDescription: '在受限模式下浏览工作区',
      folderStartupTrustDetails: '{0} 提供可以自动在此文件夹中执行文件的功能。',
      folderTrust: '是否信任此文件夹中的文件的作者?',
      grantFolderTrustButton: '信任文件夹并继续(&&T)',
      grantWorkspaceTrustButton: '信任工作区并继续(&&T)',
      immediateTrustRequestLearnMore:
        '如果不信任这些文件的作者，则建议不要继续，因为这些文件可能是恶意文件。请参阅[我们的文档](https://aka.ms/vscode-workspace-trust)，了解详细信息。',
      immediateTrustRequestMessage:
        '如果不信任当前打开的文件或文件夹的源，则尝试使用的功能可能会带来安全风险。',
      manageWorkspaceTrust: '管理工作区信任',
      manageWorkspaceTrustButton: '管理(&&M)',
      newWindow: '在受限模式中打开(&&R)',
      no: '否',
      open: '打开(&&O)',
      openLooseFileLearnMore:
        '如果不想打开不受信任的文件，则建议在新窗口中通过受限模式打开它们，因为这些文件可能是恶意文件。请参阅[我们的文档](https://aka.ms/vscode-workspace-trust)，了解详细信息。',
      openLooseFileWindowDetails: '你尝试在受信任的窗口中打开不受信任的文件。',
      openLooseFileWindowMesssage: '是否要在此窗口中允许不受信任的文件?',
      openLooseFileWorkspaceCheckbox: '记住我对所有工作区的决定',
      openLooseFileWorkspaceDetails:
        '你尝试在受信任的工作区中打开不受信任的文件。',
      openLooseFileWorkspaceMesssage: '是否要允许此工作区中不受信任的文件?',
      restrictedModeBannerAriaLabelFolder:
        '受限模式旨在实现安全地浏览代码。信任此文件夹以启用所有功能。使用导航键访问横幅操作。',
      restrictedModeBannerAriaLabelWindow:
        '受限模式旨在实现安全地浏览代码。信任此窗口以启用所有功能。使用导航键访问横幅操作。',
      restrictedModeBannerAriaLabelWorkspace:
        '受限模式旨在实现安全地浏览代码。信任此工作区以启用所有功能。使用导航键访问横幅操作。',
      restrictedModeBannerLearnMore: '了解详细信息',
      restrictedModeBannerManage: '管理',
      restrictedModeBannerMessageFolder:
        '受限模式旨在实现安全地浏览代码。信任此文件夹以启用所有功能。',
      restrictedModeBannerMessageWindow:
        '受限模式旨在实现安全地浏览代码。信任此窗口以启用所有功能。',
      restrictedModeBannerMessageWorkspace:
        '受限模式旨在实现安全地浏览代码。信任此工作区以启用所有功能。',
      startupTrustRequestLearnMore:
        '如果不信任这些文件的作者，则建议继续使用限制模式，因为这些文件可能是恶意文件。请参阅[我们的文档](https://aka.ms/vscode-workspace-trust)，了解详细信息。',
      'status.WorkspaceTrust': '工作区信任',
      'status.ariaTrustedFolder': '此文件夹受信任。',
      'status.ariaTrustedWindow': '此窗口受信任。',
      'status.ariaTrustedWorkspace': '此工作区受信任。',
      'status.ariaUntrustedFolder':
        '限制模式: 某些功能已禁用，因为此文件夹不受信任。',
      'status.ariaUntrustedWindow':
        '限制模式: 某些功能已禁用，因为此窗口不受信任。',
      'status.ariaUntrustedWorkspace':
        '限制模式: 某些功能已禁用，因为此工作区不受信任。',
      'status.tooltipUntrustedFolder2':
        '在受限模式下运行\r\n\r\n某些[功能被禁用]({0})，因为此[文件夹不受信任]({1})。',
      'status.tooltipUntrustedWindow2':
        '在受限模式下运行\r\n\r\n某些[功能被禁用]({0})，因为此[窗口不受信任]({1})。',
      'status.tooltipUntrustedWorkspace2':
        '在受限模式下运行\r\n\r\n某些[功能被禁用]({0})，因为此[工作区不受信任]({1})。',
      trustFolderOptionDescription: '信任文件夹并启用所有功能',
      trustOption: '是，我信任此作者(&&Y)',
      trustWorkspaceOptionDescription: '信任工作区并启用所有功能',
      'workspace.trust.banner.always': '每次打开不受信任的工作区时显示横幅。',
      'workspace.trust.banner.description': '控制何时显示受限模式横幅。',
      'workspace.trust.banner.never': '打开不受信任的工作区时，不要显示横幅。',
      'workspace.trust.banner.untilDismissed':
        '打开不受信任的工作区时显示横幅，直到关闭为止。',
      'workspace.trust.description': '控制是否在 VS Code 内启用工作区信任。',
      'workspace.trust.emptyWindow.description':
        '控制空窗口在 VS Code 中是否默认受信任。当与 `#{0}#` 一起使用时，可以启用 VS Code 的完整功能，而无需在空窗口中进行提示。',
      'workspace.trust.startupPrompt.always':
        '每次打开不受信任的工作区时请求信任。',
      'workspace.trust.startupPrompt.description':
        '控制何时显示信任工作区的启动提示。',
      'workspace.trust.startupPrompt.never':
        '每次打开不受信任的工作区时不请求信任。',
      'workspace.trust.startupPrompt.once':
        '首次打开不受信任的工作区时请求信任。',
      'workspace.trust.untrustedFiles.description':
        '控制如何处理在受信任的工作区中打开不受信任的文件。此设置也适用于通过 `#{0}#" 打开的空窗口中的文件。',
      'workspace.trust.untrustedFiles.newWindow':
        '在受限模式下的独立窗口中始终打开不受信任的文件，而不显示提示。',
      'workspace.trust.untrustedFiles.open':
        '始终允许不受信任的文件引入受信任的工作区，而不显示提示。',
      'workspace.trust.untrustedFiles.prompt':
        '询问每个工作区如何处理不受信任文件。将不受信任的文件引入受信任的工作区后，将不会再次提示你。',
      workspaceStartupTrustDetails:
        '{0} 提供可以自动在此工作区中执行文件的功能。',
      workspaceTrust: '是否信任此工作区中的文件的作者?',
      workspaceTrustEditor: '工作区信任编辑器',
      workspacesCategory: '工作区',
    },
    'vs/workbench/contrib/workspace/browser/workspaceTrustEditor': {
      addButton: '添加文件夹',
      checkListIcon: '适用于工作区信任编辑器中复选标记的图标。',
      deleteTrustedUri: '删除路径',
      dontTrustButton: '不信任',
      editIcon: '适用于工作区信任编辑器中编辑文件夹图标的图标。',
      editTrustedUri: '编辑路径',
      folderPickerIcon: '适用于工作区信任编辑器中选取文件夹图标的图标。',
      hostColumnLabel: '主机',
      invalidTrust: '不能信任仓库中的单个文件夹。',
      keyboardShortcut: '键盘快捷方式: {0}',
      localAuthority: '本地',
      'no untrustedSettings': '未应用需要信任的工作区设置',
      noTrustedFoldersDescriptions: '尚未信任任何文件夹或工作区文件。',
      pathColumnLabel: '路径',
      pickerTrustedUri: '打开“文件选取器”',
      removeIcon: '适用于工作区信任编辑器中删除文件夹图标的图标。',
      'root element label': '管理工作区信任',
      selectTrustedUri: '选择要信任的文件夹',
      shieldIcon: '适用于横幅上工作区信任图标的图标。',
      trustAll: '你将信任 {0} 上的所有存储库。',
      trustButton: '信任',
      trustMessage: '信任当前文件夹或其父级“{0}”中所有文件的作者。',
      trustOrg: '你将信任 {1} 上“{0}”下的所有存储库和分支。',
      trustParentButton: '信任父级',
      trustUri: '信任文件夹',
      trustedDebugging: '已启用调试',
      trustedDescription: '已启用所有功能，因为已向工作区授予信任。',
      trustedExtensions: '已激活所有已启用的扩展',
      trustedFolder: '在受信任的文件夹中',
      trustedFolderAriaLabel: '{0}，受信任',
      trustedFolderSubtitle: '你信任当前文件夹中文件的作者。已启用全部功能:',
      trustedFolderWithHostAriaLabel: '{1} 上的 {0}，受信任',
      trustedFoldersAndWorkspaces: '受信任的文件夹和工作区',
      trustedFoldersDescription: '你信任以下文件夹、其子文件夹和工作区文件。',
      trustedForcedReason: '此窗口因已打开工作区的性质而获得信任。',
      trustedHeaderFolder: '你信任此文件夹',
      trustedHeaderWindow: '你信任此窗口',
      trustedHeaderWorkspace: '你信任此工作区',
      trustedSettings: '已应用所有工作区设置',
      trustedTasks: '允许运行任务',
      trustedUnsettableWindow: '此窗口受信任。',
      trustedWindow: '在受信任的窗口中',
      trustedWindowSubtitle: '你信任当前窗口中文件的作者。已启用所有功能:',
      trustedWorkspace: '在受信任的工作区中',
      trustedWorkspaceSubtitle: '你信任当前工作区中文件的作者。已启用所有功能:',
      untrustedDebugging: '已禁用调试。',
      untrustedDescription: '{0} 处于用于安全代码浏览的受限模式。',
      untrustedExtensions: '[{0} 扩展]({1})已禁用或功能受限',
      untrustedFolderReason: '此文件夹通过以下可信文件夹中的加粗条目得到信任。',
      untrustedFolderSubtitle:
        '你不信任当前文件夹中文件的作者。已禁用以下功能:',
      untrustedHeader: '你处于限制模式下',
      untrustedSettings: '未应用[{0} 工作区设置]({1})',
      untrustedTasks: '不允许运行任务',
      untrustedWindowSubtitle: '你不信任当前窗口中文件的作者。已禁用以下功能:',
      untrustedWorkspace: '在受限模式下',
      untrustedWorkspaceReason:
        '此工作区通过以下受信任文件夹中的加粗条目得到信任。',
      untrustedWorkspaceSubtitle:
        '你不信任当前工作区中文件的作者。已禁用以下功能:',
      workspaceTrustEditorHeaderActions:
        '[配置设置]({0}) 或 [了解详细信息](https://aka.ms/vscode-workspace-trust)。',
      xListIcon: '工作区信任编辑器中十字形的图标。',
    },
    'vs/workbench/contrib/workspace/common/workspace': {
      workspaceTrustEnabledCtx: '是否已启用工作区信任功能。',
      workspaceTrustedCtx: '用户是否已信任当前工作区。',
    },
    'vs/workbench/contrib/workspaces/browser/workspaces.contribution': {
      alreadyOpen: '此工作区已打开。',
      openWorkspace: '打开工作区',
      selectToOpen: '选择要打开的工作区',
      selectWorkspace: '选择工作区',
      workspaceFound:
        '此文件夹包含工作区文件“{0}”，是否打开? [了解更多]({1})有关工作区文件的详细信息。',
      workspacesFound:
        '此文件夹包含多个工作区文件，是否打开? [了解更多]({0})有关工作区文件的详细信息。',
    },
    'vs/workbench/services/actions/common/menusExtensionPoint': {
      'comment.actions': '贡献的注释上下文菜单，呈现为注释编辑器下方的按钮',
      'comment.commentContext':
        '提供的注释上下文菜单，在注释线程速览视图中呈现为单个注释上的右键单击菜单。',
      'comment.title': '贡献的注释标题菜单',
      'commentThread.actions':
        '贡献的注释线程上下文菜单，呈现为注释编辑器下方的按钮',
      'commentThread.editorActions': '贡献的注释编辑器操作',
      'commentThread.title': '贡献的注释线程标题菜单',
      'commentThread.titleContext':
        '提供的注释线程标题的速览上下文菜单，在注释线程的速览标题上呈现为右键单击菜单。',
      dup0: '已注册命令 `{0}`',
      dup1: '{1} 已注册命令 `{0}` ({2})',
      'dupe.command': '菜单项引用的命令中默认和替代命令相同',
      editorLineNumberContext: '贡献的编辑器行号上下文菜单',
      'file.newFile': '“新建文件...”快速选取，显示在欢迎页面和文件菜单上。',
      'inlineCompletions.actions': '悬停在内联完成项上时显示的操作',
      'interactive.cell.title': '贡献的交互式单元格标题菜单',
      'interactive.toolbar': '贡献的交互式工具栏菜单',
      'menus.changeTitle': '源代码管理内联更改菜单',
      'menus.commandPalette': '命令面板',
      'menus.debugCallstackContext': '调试调用堆栈视图上下文菜单',
      'menus.debugToolBar': '调试工具栏菜单',
      'menus.debugVariablesContext': '调试变量视图上下文菜单',
      'menus.editorContext': '编辑器上下文菜单',
      'menus.editorContextCopyAs': '编辑器上下文菜单中的“复制为”子菜单',
      'menus.editorContextShare': '编辑器上下文菜单中的“共享”子菜单',
      'menus.editorTabContext': '编辑器选项卡上下文菜单',
      'menus.editorTitle': '编辑器标题菜单',
      'menus.editorTitleContextShare': '编辑器标题上下文菜单内的“共享”子菜单',
      'menus.editorTitleRun': '在编辑器标题菜单内运行子菜单',
      'menus.explorerContext': '文件资源管理器上下文菜单',
      'menus.explorerContextShare': '文件资源管理器上下文菜单中的“共享”子菜单',
      'menus.extensionContext': '扩展上下文菜单',
      'menus.home': '主指示器上下文菜单(仅限 Web)',
      'menus.mergeEditorResult': '合并编辑器的结果工具栏',
      'menus.opy': '顶层“编辑”菜单中的“复制为”子菜单',
      'menus.resourceFolderContext': '源代码管理资源文件夹上下文菜单',
      'menus.resourceGroupContext': '源代码管理资源组上下文菜单',
      'menus.resourceStateContext': '源代码管理资源状态上下文菜单',
      'menus.scmSourceControl': '源代码管理菜单',
      'menus.scmTitle': '源代码管理标题菜单',
      'menus.share': '共享顶级“文件”菜单中显示的子菜单。',
      'menus.statusBarRemoteIndicator': '状态栏中的远程指示器菜单',
      'menus.touchBar': '触控栏 (仅 macOS)',
      'merge.toolbar': '编辑器中的突出按钮覆盖其内容',
      'missing.altCommand':
        "菜单项引用了未在 'commands' 部分定义的替代命令“{0}”。",
      'missing.command': '菜单项引用未在“命令”部分进行定义的命令“{0}”。',
      'missing.submenu': '菜单项引用了未在“子菜单”部分定义的子菜单“{0}”。',
      nonempty: '应为非空值。',
      'notebook.cell.execute': '贡献的笔记本单元格执行菜单',
      'notebook.cell.title': '贡献的笔记本单元格标题菜单',
      'notebook.kernelSource': '贡献的笔记本内核源菜单',
      'notebook.toolbar': '贡献的笔记本工具栏菜单',
      opticon:
        '可以省略属性 `icon`，若不省略则必须是字符串或文字，例如 `{dark, light}`',
      optstring: '属性“{0}”可以省略，或者必须为 `string` 类型',
      proposed: '建议的 API 需要 `enabledApiProposal: [“{0}”]` - {1}',
      'proposedAPI.invalid':
        '{0} 是建议的菜单标识符。它需要 “package.json#enabledApiProposals: [“{1}”]”，并且仅在开发用完或使用以下命令行开关时可用: --enable-proposed-api {2}',
      require: '子菜单项必须是对象',
      requireStringOrObject:
        '属性“{0}”是必要属性，其类型必须是 `string` 或 `object`',
      requirearray: '子菜单项必须是数组',
      requirestring: '属性“{0}”是必需项，并且必须为 `string` 类型',
      requirestrings:
        '属性“{0}”和“{1}”是必要属性，其类型必须是 `{dark, light}`',
      'submenuId.duplicate.id': '以前已注册 `{0}` 子菜单。',
      'submenuId.invalid.id': '“{0}”不是有效的子菜单标识符',
      'submenuId.invalid.label': '“{0}”不是有效的子菜单标签',
      'submenuItem.duplicate': '`{0}` 子菜单已提供给 `{1}` 菜单。',
      'testing.item.context': '提供的测试项菜单',
      'testing.item.gutter.title': '测试项的装订线装饰菜单',
      'unsupported.submenureference':
        '菜单项引用了不具有子菜单支持的菜单的子菜单。',
      'view.itemContext': '提供的视图中的项目的上下文菜单',
      'view.timelineContext': '时间线视图项上下文菜单',
      'view.timelineTitle': '时间线视图标题菜单',
      'view.tunnelContext': '“端口”视图项目上下文菜单',
      'view.tunnelOriginInline': '“端口”视图项源内联菜单',
      'view.tunnelPortInline': '端口视图项端口内联菜单',
      'view.viewTitle': '提供的视图的标题菜单',
      'vscode.extension.contributes.commandType.category':
        '(可选)类别字符串，命令在界面中根据此项分组',
      'vscode.extension.contributes.commandType.command':
        '要执行的命令的标识符',
      'vscode.extension.contributes.commandType.icon':
        '(可选)用于表示 UI 中的命令的图标。文件路径、具有深色和浅色主题的文件路径的对象，或者主题图标引用(如 `\\$(zap)`)',
      'vscode.extension.contributes.commandType.icon.dark':
        '使用深色主题时的图标路径',
      'vscode.extension.contributes.commandType.icon.light':
        '使用浅色主题时的图标路径',
      'vscode.extension.contributes.commandType.precondition':
        '(可选)必须为 true 才能启用 UI (菜单和键绑定)中命令的条件。不会阻止通过其他方式执行命令，例如 `executeCommand`-api。',
      'vscode.extension.contributes.commandType.shortTitle':
        '(可选)简短标题，在 UI 中表示该命令。菜单将根据显示命令的上下文选取“标题”或“简短标题”。',
      'vscode.extension.contributes.commandType.title':
        '在 UI 中依据其表示命令的标题',
      'vscode.extension.contributes.commands': '对命令面板提供命令。',
      'vscode.extension.contributes.menuItem.alt':
        "要执行的替代命令的标识符。该命令必须在 'commands' 部分中声明",
      'vscode.extension.contributes.menuItem.command':
        '要执行的命令的标识符。该命令必须在“命令”部分中声明',
      'vscode.extension.contributes.menuItem.group': '此项所属的组',
      'vscode.extension.contributes.menuItem.submenu':
        '要在此项中显示的子菜单的标识符。',
      'vscode.extension.contributes.menuItem.when':
        '此条件必须为 true 才能显示此项',
      'vscode.extension.contributes.menus': '向编辑器提供菜单项',
      'vscode.extension.contributes.submenu.icon':
        '(可选)用于表示 UI 中的子菜单的图标。文件路径、具有深色和浅色主题的文件路径的对象，或者主题图标引用(如 `\\$(zap)`)',
      'vscode.extension.contributes.submenu.icon.dark':
        '使用深色主题时的图标路径',
      'vscode.extension.contributes.submenu.icon.light':
        '使用浅色主题时的图标路径',
      'vscode.extension.contributes.submenu.id':
        '要显示为子菜单的菜单的标识符。',
      'vscode.extension.contributes.submenu.label':
        '指向此子菜单的菜单项的标签。',
      'vscode.extension.contributes.submenus': '将子菜单项分配到编辑器',
      'webview.context': 'Webview 上下文菜单',
    },
    'vs/workbench/services/assignment/common/assignmentService': {
      'workbench.enableExperiments':
        '从 Microsoft 联机服务中获取要进行的实验。',
    },
    'vs/workbench/services/authentication/browser/authenticationService': {
      accessRequest: '授予“{0}”访问“{1}”的权限... (1)',
      allow: '允许(&&A)',
      'authentication.Placeholder': '尚未请求任何帐户...',
      'authentication.id': '身份验证提供程序的 ID。',
      'authentication.idConflict': '已注册此身份验证 ID“{0}”',
      'authentication.label': '身份验证提供程序的易读名称。',
      'authentication.missingId': '提供身份验证必须指定一个 ID。',
      'authentication.missingLabel': '提供身份验证必须指定一个标签。',
      authenticationExtensionPoint: '添加身份验证',
      confirmAuthenticationAccess:
        '扩展“{0}”正在尝试访问 {1} 帐户“{2}”的身份验证信息。',
      deny: '拒绝(&&D)',
      getSessionPlateholder: '选择一个供“{0}”使用的帐户或按 Esc 取消',
      loading: '正在加载…',
      selectAccount: '扩展“{0}”要访问 {1} 帐户',
      'sign in': '已请求登录',
      signInRequest: '使用 {0} 登录以使用 {1} (1)',
      useOtherAccount: '登录到其他帐户',
    },
    'vs/workbench/services/clipboard/browser/clipboardService': {
      clipboardError:
        '无法从浏览器的剪贴板中读取。请确保你已授予此网站从剪贴板中读取的访问权限。',
      learnMore: '了解详细信息',
      retry: '重试',
    },
    'vs/workbench/services/configuration/browser/configurationService': {
      'configurationDefaults.description': '为配置提供默认值',
      experimental: '试验',
    },
    'vs/workbench/services/configuration/common/configurationEditing': {
      errorConfigurationFileDirty:
        '由于该文件具有未保存的更改，因此无法写入到用户设置。请先保存该用户设置文件，然后重试。',
      errorConfigurationFileDirtyFolder:
        "由于该文件具有未保存的更改，因此无法写入到文件夹设置。请先保存该 '{0}' 文件夹设置文件，然后重试。",
      errorConfigurationFileDirtyWorkspace:
        '由于该文件具有未保存的更改，因此无法写入到工作区设置。请先保存该工作区设置文件，然后重试。',
      errorConfigurationFileModifiedSince:
        '无法写入用户设置，因为文件的内容较新。',
      errorConfigurationFileModifiedSinceFolder:
        '无法写入文件夹设置，因为文件的内容较新。',
      errorConfigurationFileModifiedSinceWorkspace:
        '无法写入工作区设置，因为文件的内容较新。',
      errorInvalidConfiguration:
        '无法写入用户设置。请打开用户设置并清除错误或警告，然后重试。',
      errorInvalidConfigurationFolder:
        '无法写入文件夹设置。请打开“{0}”文件夹设置并清除错误或警告，然后重试。',
      errorInvalidConfigurationWorkspace:
        '无法写入工作区设置。请打开工作区设置并清除错误或警告，然后重试。',
      errorInvalidFolderConfiguration:
        '{0} 不支持文件夹资源域，因此无法写入"文件夹设置"。',
      errorInvalidFolderTarget: '未提供资源，因此无法写入"文件夹设置"。',
      errorInvalidLaunchConfiguration:
        '无法写入启动配置文件。请打开文件并更正错误或警告，然后重试。',
      errorInvalidRemoteConfiguration:
        '无法写入远程用户设置。请打开远程用户设置以更正其中的错误警告, 然后重试。',
      errorInvalidResourceLanguageConfiguration:
        '无法写入语言设置，因为{0}不是资源语言设置。',
      errorInvalidTaskConfiguration:
        '无法写入任务配置文件。请打开文件并更正错误或警告，然后重试。',
      errorInvalidUserTarget: '{0} 不支持全局域，因此无法写入"用户设置"。',
      errorInvalidWorkspaceConfigurationApplication:
        '无法将 {0} 写入“工作区设置”。此设置只能写于“用户设置”。',
      errorInvalidWorkspaceConfigurationMachine:
        '无法将 {0} 写入“工作区设置”。此设置只能写于“用户设置”。',
      errorInvalidWorkspaceTarget:
        '{0} 不在多文件夹工作区环境下支持工作区作用域，因此无法写入“工作区设置”。',
      errorLaunchConfigurationFileDirty:
        '由于该文件具有未保存的更改，因此无法写入到启动配置文件。请先将其保存，然后重试。',
      errorLaunchConfigurationFileModifiedSince:
        '无法写入启动配置文件，因为文件的内容较新。',
      errorNoWorkspaceOpened:
        '没有打开任何工作区，因此无法写入 {0}。请先打开一个工作区，然后重试。',
      errorPolicyConfiguration: '无法写入 {0}，因为它是在系统策略中配置的。',
      errorRemoteConfigurationFileDirty:
        '由于该文件具有未保存的更改，因此无法写入到远程用户设置。请先保存该远程用户设置文件，然后重试。',
      errorRemoteConfigurationFileModifiedSince:
        '无法写入远程用户设置，因为文件的内容较新。',
      errorTasksConfigurationFileDirty:
        '由于该文件具有未保存的更改，因此无法写入到任务配置文件。请先将其保存，然后重试。',
      errorTasksConfigurationFileModifiedSince:
        '无法写入任务配置文件，因为文件的内容较新。',
      errorUnknown: '由于内部错误，无法写入 {0}。',
      errorUnknownKey: '没有注册配置 {1}，因此无法写入 {0}。',
      folderTarget: '文件夹设置',
      open: '打开设置',
      openLaunchConfiguration: '打开启动配置',
      openTasksConfiguration: '打开任务配置',
      remoteUserTarget: '远程用户设置',
      saveAndRetry: '保存并重试',
      userTarget: '用户设置',
      workspaceTarget: '工作区设置',
    },
    'vs/workbench/services/configuration/common/jsonEditingService': {
      errorInvalidFile: '无法写入文件。请打开文件以更正错误或警告，然后重试。',
    },
    'vs/workbench/services/configurationResolver/browser/baseConfigurationResolverService':
      {
        'commandVariable.noStringType':
          '无法替换命令变量“{0}”，因为命令没有返回字符串类型的结果。',
        'inputVariable.command.noStringType':
          '无法替换输入变量“{0}”，因为命令“{1}”没有返回类型字符串的结果。',
        'inputVariable.defaultInputValue': '(默认值)',
        'inputVariable.missingAttribute':
          '输入变量“{0}”的类型为“{1}”且必须包含“{2}”。',
        'inputVariable.noInputSection':
          '必须在调试或任务配置的“{1}”部分中定义变量“{0}”。',
        'inputVariable.undefinedVariable':
          '遇到未定义的输入变量“{0}”。请删除或定义“{0}”以继续操作。',
        'inputVariable.unknownType':
          "输入变量“{0}”只能是 'promptString'、'pickString' 或 'command' 类型。",
      },
    'vs/workbench/services/configurationResolver/common/configurationResolverSchema':
      {
        'JsonSchema.input.command.args': '传递给命令的可选参数。',
        'JsonSchema.input.command.command': '要为此输入变量执行的命令。',
        'JsonSchema.input.default': '输入的默认值。',
        'JsonSchema.input.description': '当提示用户输入时，将显示说明。',
        'JsonSchema.input.id':
          '输入的 ID 用于与其变量采用 ${input:id} 形式的输入相关联。',
        'JsonSchema.input.options': '用于定义快速选择选项的字符串数组。',
        'JsonSchema.input.password':
          '控制是否显示密码输入。密码输入会隐藏键入的文本。',
        'JsonSchema.input.pickString.optionLabel': '选项的标签。',
        'JsonSchema.input.pickString.optionValue': '选项的值。',
        'JsonSchema.input.type': '要使用的用户输入提示符的类型。',
        'JsonSchema.input.type.command': '"command" 类型会执行命令。',
        'JsonSchema.input.type.pickString':
          '“pickString”类型显示一个选择列表。',
        'JsonSchema.input.type.promptString':
          '"promptString" 类型会打开一个输入框，要求用户输入内容。',
        'JsonSchema.inputs':
          '用户输入。用于定义用户输入提示，例如自由字符串输入或从多个选项中进行选择。',
      },
    'vs/workbench/services/configurationResolver/common/configurationResolverUtils':
      {
        deprecatedVariables:
          '“env.”、“config.”和“command.”已弃用，请改用“env:”、“config:”和“command:”。',
      },
    'vs/workbench/services/configurationResolver/common/variableResolver': {
      canNotFindFolder: '找不到文件夹“{1}”，因此无法解析变量 {0}。',
      canNotResolveFile: '无法解析变量 {0}。请打开一个编辑器。',
      canNotResolveFolderForFile: '变量 {0}: 找不到 "{1}" 的工作区文件夹。',
      canNotResolveLineNumber:
        '无法解析变量 {0}。请确保已在活动编辑器中选择一行内容。',
      canNotResolveSelectedText:
        '无法解析变量 {0}。请确保已在活动编辑器中选择一些文字。',
      canNotResolveUserHome: '无法解析 {0} 变量。未定义 UserHome 路径',
      canNotResolveWorkspaceFolder: '无法解析变量 {0}。请打开一个文件夹。',
      canNotResolveWorkspaceFolderMultiRoot:
        '无法在多文件夹工作区中解析变量 {0}。使用 ":" 和工作区文件夹名称来限定此变量的作用域。',
      configNoString: '"{1}" 为结构类型值，因此无法解析变量 {0}。',
      configNotFound: '未能找到设置“{1}”，因此无法解析变量 {0}。',
      extensionNotInstalled: '无法解析变量 {0}，因为未安装扩展 {1}。',
      missingConfigName: '未给出设置名称，因此无法解析变量 {0}。',
      missingEnvVarName: '未给出环境变量名称，因此无法解析变量 {0}。',
      missingExtensionName: '无法解析变量 {0}，因为未给出扩展名。',
      noValueForCommand: '命令不含值，因此无法解析变量 {0}。',
    },
    'vs/workbench/services/decorations/browser/decorationsService': {
      bubbleTitle: '包含强调项',
    },
    'vs/workbench/services/dialogs/browser/abstractFileDialogService': {
      allFiles: '所有文件',
      dontSave: '不保存(&&N)',
      'filterName.workspace': '工作区',
      noExt: '无扩展',
      'openFile.title': '打开文件',
      'openFileOrFolder.title': '打开文件或文件夹',
      'openFolder.title': '打开文件夹',
      'openWorkspace.title': '从文件打开工作区',
      save: '保存(&&S)',
      saveAll: '全部保存(&&S)',
      saveAsTitle: '另存为',
      saveChangesDetail: '如果不保存，你的更改将丢失。',
      saveChangesMessage: '是否要保存对 {0} 的更改?',
      saveChangesMessages: '是否要保存对下列 {0} 个文件的更改?',
      'saveFileAs.title': '另存为',
    },
    'vs/workbench/services/dialogs/browser/fileDialogService': {
      learnMore: '了解详细信息(&&L)',
      openFiles: '打开文件(&&F)...',
      openRemote: '打开远程(&&O)...',
      pickFolderAndOpen: '无法打开文件夹，请尝试改为将文件夹添加到工作区。',
      pickWorkspaceAndOpen: '无法打开工作区，请尝试改为将文件夹添加到工作区。',
      unsupportedBrowserDetail:
        '浏览器不支持打开本地文件夹。\r\n你可以打开单个文件或打开远程存储库。',
      unsupportedBrowserMessage: '不支持打开本地文件夹',
    },
    'vs/workbench/services/dialogs/browser/simpleFileDialog': {
      openLocalFile: '打开本地文件...',
      openLocalFileFolder: '打开本地...',
      openLocalFolder: '打开本地文件夹...',
      'remoteFileDialog.badPath': '路径不存在。',
      'remoteFileDialog.cancel': '取消',
      'remoteFileDialog.invalidPath': '请输入有效路径。',
      'remoteFileDialog.local': '显示本地',
      'remoteFileDialog.notConnectedToRemote': '{0} 的文件系统提供程序不可用。',
      'remoteFileDialog.validateBadFilename': '请输入有效的文件名。',
      'remoteFileDialog.validateCreateDirectory':
        '文件夹 {0} 不存在。是否要创建它?',
      'remoteFileDialog.validateExisting': '{0} 已存在。是否确实要覆盖?',
      'remoteFileDialog.validateFileOnly': '请选择文件。',
      'remoteFileDialog.validateFolder': '该文件夹已存在。请使用新的文件名。',
      'remoteFileDialog.validateFolderOnly': '请选择一个文件夹。',
      'remoteFileDialog.validateNonexistentDir': '请输入已存在的路径。',
      'remoteFileDialog.windowsDriveLetter': '路径开头请使用驱动器号。',
      saveLocalFile: '保存本地文件...',
    },
    'vs/workbench/services/editor/browser/editorResolverService': {
      'editorResolver.configureDefault': '配置默认设置',
      'editorResolver.conflictingDefaults': '此资源可使用多个默认编辑器。',
      'editorResolver.keepDefault': '保留“{0}”',
      'promptOpenWith.configureDefault': '为 "{0}" 配置默认编辑器...',
      'promptOpenWith.currentDefault': '默认',
      'promptOpenWith.currentDefaultAndActive': '活动和默认',
      'promptOpenWith.currentlyActive': '活动',
      'promptOpenWith.placeHolder': '为“{0}”选择编辑器',
      'promptOpenWith.updateDefaultPlaceHolder': '为 "{0}" 选择新的默认编辑器',
    },
    'vs/workbench/services/editor/common/editorResolverService': {
      'editor.editorAssociations':
        '将 [glob 模式](https://aka.ms/vscode-glob-patterns)配置到编辑器(例如 `"*.hex": "hexEditor.hexedit"`)。这些优先于默认行为。',
    },
    'vs/workbench/services/extensionManagement/browser/extensionBisect': {
      'I cannot reproduce': '我无法重现',
      'This is Bad': '我可以重现',
      bisect:
        '扩展二等分处于活动状态，已禁用 {0} 扩展。请从这些选项中进行选择，检查是否仍可重现问题并继续操作。',
      'bisect.plural':
        '扩展二等分处于活动状态，已禁用 {0} 扩展。请从这些选项中进行选择，检查是否仍可重现问题并继续操作。',
      'bisect.singular':
        'Extension Bisect 处于活动状态，且已禁用 1 个扩展。请从这些选项中进行选择，以检查是否仍然可以重现问题并继续操作。',
      continue: '继续',
      'detail.start':
        '扩展二等分将通过二分查找的方式确认引起问题的扩展。在此过程中，窗口将会不断重新加载(约{0}次)，每次都必须确认是否出现问题',
      'done.detail': '扩展二等分已完成，已将 {0} 标识为导致问题的扩展。',
      'done.detail2':
        '扩展二等分已完成，但未标识任何扩展。这可能是 {0} 的问题。',
      'done.disbale': '保持禁用此扩展',
      'done.msg': '扩展二等分',
      'msg.next': '扩展二等分',
      'msg.start': '扩展二等分',
      msg2: '开始扩展二等分(&&S)',
      'next.bad': '我可以重现(&&R)',
      'next.cancel': '取消二等分(&&C)',
      'next.good': '我无法重现(&&N)',
      'next.stop': '停止二等分(&&S)',
      report: '报告问题并继续(&&R)',
      'title.isBad': '继续扩展二等分',
      'title.start': '开始扩展二等分',
      'title.stop': '停止扩展二等分',
    },
    'vs/workbench/services/extensionManagement/browser/extensionEnablementService':
      {
        Reload: '重新加载并启用扩展',
        'cannot change disablement environment':
          '无法更改 {0} 扩展的启用，因为它在环境中被禁用',
        'cannot change enablement dependency':
          '无法启用“{0}”扩展，因为它依赖于无法启用的“{1}”扩展',
        'cannot change enablement environment':
          '无法更改 {0} 扩展的启用，因为它已在环境中启用',
        'cannot change enablement extension kind':
          '由于扩展类型，{0} 扩展的启用无法更改',
        'cannot change enablement virtual workspace':
          '无法更改 {0} 扩展的启用，因为它不支持虚拟工作区',
        'cannot disable auth extension':
          '无法更改 {0} 扩展的启用，因为“设置同步”依赖此扩展。',
        'cannot disable auth extension in workspace':
          '无法在工作区中更改 {0} 扩展的启用，因为它提供身份验证提供程序',
        'cannot disable language pack extension':
          '无法更改 {0} 扩展的启用，因为它提供语言包。',
        extensionsDisabled: '已暂时禁用所有已安装的扩展。',
        noWorkspace: '没有工作区。',
      },
    'vs/workbench/services/extensionManagement/browser/webExtensionsScannerService':
      {
        'not a web extension': '此扩展不是 Web 扩展，因此无法添加“{0}”。',
        openInstalledWebExtensionsResource: '打开已安装的 Web 扩展资源',
      },
    'vs/workbench/services/extensionManagement/common/extensionManagementServerService':
      {
        browser: '浏览器',
        remote: '远程',
      },
    'vs/workbench/services/extensionManagement/common/extensionManagementService':
      {
        'Manifest is not found': '安装扩展 {0} 失败: 找不到清单文件。',
        'VS Code for Web': '{0} Web 版',
        'cannot be installed':
          '无法安装“{0}”扩展，因为它在此安装程序中不可用。',
        extensionInstallWorkspaceTrustButton: '信任工作区 & 安装',
        extensionInstallWorkspaceTrustContinueButton: '安装',
        extensionInstallWorkspaceTrustManageButton: '了解详细信息',
        extensionInstallWorkspaceTrustMessage: '启用此扩展需要受信任的工作区。',
        install: '安装(&&I)',
        'install and do no sync': '安装(不同步)(&&N)',
        'install anyways': '仍然安装(&&I)',
        'install extension': '安装扩展',
        'install extensions': '安装扩展',
        'install multiple extensions': '是否要跨设备安装并同步扩展?',
        'install single extension': '是否要跨设备安装并同步 "{0}" 扩展?',
        'limited support': '“{0}”在 {1} 中具有有限的功能。',
        multipleDependentsError:
          '无法卸载扩展程序“{0}”。扩展程序“{1}”、“{2}”以及其他扩展程序都依赖于此。',
        'non web extensions': '“{0}”包含在“{1}”中不支持的扩展。',
        'non web extensions detail': '包含不受支持的扩展。',
        showExtensions: '显示扩展(&&S)',
        singleDependentError: '无法卸载扩展程序“{0}”。扩展程序“{1}”依赖于此。',
        twoDependentsError:
          '无法卸载扩展程序“{0}”。扩展程序“{1}”、“{2}”依赖于此。',
      },
    'vs/workbench/services/extensionManagement/electron-sandbox/extensionManagementServerService':
      {
        local: '本地',
        remote: '远程',
      },
    'vs/workbench/services/extensionManagement/electron-sandbox/remoteExtensionManagementService':
      {
        notFoundCompatibleDependency:
          '无法安装“{0}”扩展，因为它与当前 {1} 版本不兼容(版本 {2})。',
        notFoundCompatiblePrereleaseDependency:
          '无法安装“{0}”扩展的预发布版本，因为它与当前 {1} 版本(版本 {2})不兼容。',
        notFoundReleaseExtension: "由于 '{0}' 扩展没有发布版本，因此无法安装。",
      },
    'vs/workbench/services/extensionRecommendations/common/workspaceExtensionsConfig':
      {
        'select for add': '将扩展建议添加到',
        'select for remove': '从以下位置删除扩展建议',
        workspace: '工作区',
        'workspace folder': '工作区文件夹',
      },
    'vs/workbench/services/extensions/browser/extensionUrlHandler': {
      Installing: '正在安装扩展“{0}”...',
      confirmUrl: '是否允许扩展打开此 URI？',
      enableAndHandle: '扩展“{0}”处于禁用状态。是否要启用扩展并打开 URL?',
      enableAndReload: '启用并打开(&&E)',
      extensions: '扩展',
      'install and open': '安装并打开(&&I)',
      installAndHandle:
        '扩展“{0}”尚未安装。是否安装扩展并重载此窗口来打开 URL?',
      manage: '管理授权扩展 URI...',
      no: '当前没有已授权的扩展 URI。',
      open: '打开(&&O)',
      reloadAndHandle: '扩展“{0}”尚未载入。是否重载此窗口来载入扩展并打开 URL?',
      reloadAndOpen: '重载窗口并打开(&&R)',
      rememberConfirmUrl: '不再提醒此扩展。',
    },
    'vs/workbench/services/extensions/common/abstractExtensionService': {
      'extensionService.autoRestart': '远程扩展主机意外终止。正在重启...',
      'extensionService.crash': '扩展远程主机在过去 5 分钟内意外终止了 3 次。',
      extensionStopVetoDetailsMany: '阻止操作的原因:\r\n- {0}',
      extensionStopVetoDetailsOne: '阻止操作的原因: {0}',
      extensionStopVetoError: '{0} (错误: {1})',
      extensionStopVetoMessage: '已阻止以下操作: {0}',
      extensionTestError: '找不到可在 {0} 启动测试运行程序的扩展主机。',
      looping: '以下扩展因包含依赖循环已被禁用: {0}',
      restart: '重启远程扩展主机',
    },
    'vs/workbench/services/extensions/common/extensionHostManager': {
      measureExtHostLatency: '测量扩展主机延迟',
    },
    'vs/workbench/services/extensions/common/extensionsRegistry': {
      extensionKind:
        '定义扩展的类型。"ui"扩展在本地计算机上安装和运行，而 "工作区" 扩展则在远程计算机上运行。',
      'extensionKind.empty':
        '定义一个无法在远程上下文中运行的扩展，既不能在本地上，也不能在远程计算机上运行。',
      'extensionKind.ui':
        '定义一个扩展，该扩展在连接到远程窗口时只能在本地计算机上运行。',
      'extensionKind.ui-workspace':
        '定义可在任意一侧运行的扩展，并首选在本地计算机上运行。',
      'extensionKind.workspace':
        '定义一个扩展，该扩展只能在连接远程窗口时在远程计算机上运行。',
      'extensionKind.workspace-ui':
        '定义可在任意一侧运行的扩展，并首选在远程计算机上运行。',
      'product.extensionEnabledApiProposals':
        '相应扩展可以自由使用的 API 建议。',
      ui: 'UI 扩展类型。在远程窗口中, 仅本地计算机可用时启用此类扩展。',
      'vscode.extension.activationEvents': 'VS Code 扩展的激活事件。',
      'vscode.extension.activationEvents.onAuthenticationRequest':
        '每次从指定的身份验证提供程序请求会话时发出的激活事件。',
      'vscode.extension.activationEvents.onCommand':
        '在调用指定命令时发出的激活事件。',
      'vscode.extension.activationEvents.onCustomEditor':
        '每当指定的自定义编辑器变为可见时，都会发出激活事件。',
      'vscode.extension.activationEvents.onDebug':
        '在用户准备调试或准备设置调试配置时发出的激活事件。',
      'vscode.extension.activationEvents.onDebugAdapterProtocolTracker':
        '每当即将启动具有特定类型的调试会话并可能需要调试协议跟踪器时, 都会发出激活事件。',
      'vscode.extension.activationEvents.onDebugDynamicConfigurations':
        '每当需要创建所有调试配置的列表(并且需要调用“动态”范围的所有 provideDebugConfigurations 方法)时都会引发激活事件。',
      'vscode.extension.activationEvents.onDebugInitialConfigurations':
        '在需要创建 "launch.json" 文件 (且需要调用 provideDebugConfigurations 的所有方法) 时发出的激活事件。',
      'vscode.extension.activationEvents.onDebugResolve':
        '在将要启动具有特定类型的调试会话 (且需要调用相应的 resolveDebugConfiguration 方法) 时发出的激活事件。',
      'vscode.extension.activationEvents.onEditSession':
        '在使用给定方案访问编辑会话时发出的激活事件。',
      'vscode.extension.activationEvents.onFileSystem':
        '在使用给定协议打开文件或文件夹时发出的激活事件。',
      'vscode.extension.activationEvents.onLanguage':
        '在打开被解析为指定语言的文件时发出的激活事件。',
      'vscode.extension.activationEvents.onNotebook':
        '在指定的笔记本文档被打开时发出的激活事件。',
      'vscode.extension.activationEvents.onOpenExternalUri':
        '每当打开一个外部 uri (例如 http 或 https 链接)时发出的激活事件。',
      'vscode.extension.activationEvents.onRenderer':
        '每当使用笔记本输出呈现器时发出激活事件。',
      'vscode.extension.activationEvents.onSearch':
        '在开始从给定协议的文件夹中搜索时发出的激活事件。',
      'vscode.extension.activationEvents.onStartupFinished':
        '启动完成后(在所有 "*" 激活的扩展完成激活后)发出的激活事件。',
      'vscode.extension.activationEvents.onTaskType':
        '每当需要列出或解决特定类型的任务时，都会发出激活事件。',
      'vscode.extension.activationEvents.onTerminalProfile':
        '启动特定终端配置文件时发出的激活事件。',
      'vscode.extension.activationEvents.onTerminalQuickFixRequest':
        '当命令匹配与此 ID 关联的选择器时发出的激活事件',
      'vscode.extension.activationEvents.onUri':
        '在打开系统范围内并指向此扩展的 URI 时发出的激活事件。',
      'vscode.extension.activationEvents.onView':
        '在指定视图被展开时发出的激活事件。',
      'vscode.extension.activationEvents.onWalkthrough':
        '打开指定演练时发出的激活事件。',
      'vscode.extension.activationEvents.onWebviewPanel':
        '当加载某个 viewType 的 Web 视图时，会发出激活事件',
      'vscode.extension.activationEvents.star':
        '在 VS Code 启动时发出的激活事件。为确保良好的最终用户体验，请仅在其他激活事件组合不适用于你的情况时，才在扩展中使用此事件。',
      'vscode.extension.activationEvents.workspaceContains':
        '在打开至少包含一个匹配指定 glob 模式的文件的文件夹时发出的激活事件。',
      'vscode.extension.api':
        '描述此扩展提供的 API。有关更多详细信息，请访问: https://code.visualstudio.com/api/advanced-topics/remote-extensions#handling-dependencies-with-remote-extensions',
      'vscode.extension.api.none':
        '完全放弃导出任何 API 的功能。通过此操作，依赖于此扩展的其他扩展将能够在单独的扩展主机进程或远程计算机中运行。',
      'vscode.extension.badges':
        '在 Marketplace 的扩展页边栏中显示的徽章数组。',
      'vscode.extension.badges.description': '徽章说明。',
      'vscode.extension.badges.href': '徽章链接。',
      'vscode.extension.badges.url': '徽章图像 URL。',
      'vscode.extension.capabilities': '通过扩展声明一组受支持的功能。',
      'vscode.extension.capabilities.untrustedWorkspaces':
        '声明应如何在不受信任的工作区中处理扩展。',
      'vscode.extension.capabilities.untrustedWorkspaces.description':
        '对工作区信任如何影响扩展行为及其需要的原因的说明。这仅在 "supported" 不为 "true" 时适用。',
      'vscode.extension.capabilities.untrustedWorkspaces.restrictedConfigurations':
        '扩展中提供的、不应在不受信任的工作区中使用工作区值的配置键列表。',
      'vscode.extension.capabilities.untrustedWorkspaces.supported':
        '通过扩展为不受信任的工作区声明支持级别。',
      'vscode.extension.capabilities.untrustedWorkspaces.supported.false':
        '将不会在不受信任的工作区中启用扩展。',
      'vscode.extension.capabilities.untrustedWorkspaces.supported.limited':
        '将在禁用了部分功能的不受信任工作区中启用扩展。',
      'vscode.extension.capabilities.untrustedWorkspaces.supported.true':
        '将在启用了所有功能的不受信任工作区中启用扩展。',
      'vscode.extension.capabilities.virtualWorkspaces':
        '声明是否应在虚拟工作区中启用扩展。虚拟工作区是一个不受任何磁盘资源支持的工作区。当为 false 时，会在虚拟工作区中自动禁用此扩展。默认值为 true。',
      'vscode.extension.capabilities.virtualWorkspaces.description':
        '对虚拟工作区如何影响扩展行为及其需要的原因的说明。这仅在 "supported" 不为 "true" 时适用。',
      'vscode.extension.capabilities.virtualWorkspaces.supported':
        '通过扩展为虚拟工作区声明支持级别。',
      'vscode.extension.capabilities.virtualWorkspaces.supported.false':
        '将不会在虚拟工作区中启用扩展。',
      'vscode.extension.capabilities.virtualWorkspaces.supported.limited':
        '将在禁用了部分功能的虚拟工作区中启用扩展。',
      'vscode.extension.capabilities.virtualWorkspaces.supported.true':
        '将在虚拟工作区中启用扩展，并启用所有功能。',
      'vscode.extension.categories': 'VS Code 库用于对扩展进行分类的类别。',
      'vscode.extension.category.languages.deprecated':
        '请改用 "Programming Languages"',
      'vscode.extension.contributes': '由此包表示的 VS Code 扩展的所有贡献。',
      'vscode.extension.contributes.extensionPack':
        '可一起安装的一组扩展。扩展的标识符始终为 ${publisher}.${name}。例如: vscode.csharp。',
      'vscode.extension.contributes.sponsor':
        '指定用户可以从中赞助扩展的位置。',
      'vscode.extension.contributes.sponsor.url':
        '用户可以从中赞助扩展的 URL。它必须是使用 HTTP 或 HTTPS 协议的有效 URL。示例值: https://github.com/sponsors/nvaccess',
      'vscode.extension.displayName': 'VS Code 库中使用的扩展的显示名称。',
      'vscode.extension.enableProposedApi.deprecated':
        '请改用 `enabledApiProposals`。',
      'vscode.extension.enabledApiProposals':
        '启用 API 建议以试用它们。仅在 **开发期间有效**。**无法使用此属性发布** 扩展。有关更多详细信息，请访问: https://code.visualstudio.com/api/advanced-topics/using-proposed-api',
      'vscode.extension.engines': '引擎兼容性。',
      'vscode.extension.engines.vscode':
        '对于 VS Code 扩展，指定与其兼容的 VS Code 版本。不能为 *。 例如: ^0.10.5 表示最低兼容 VS Code 版本 0.10.5。',
      'vscode.extension.extensionDependencies':
        '其他扩展的依赖关系。扩展的标识符始终是 ${publisher}.${name}。例如: vscode.csharp。',
      'vscode.extension.galleryBanner': 'VS Code 商城使用的横幅。',
      'vscode.extension.galleryBanner.color':
        'VS Code 商城页标题上的横幅颜色。',
      'vscode.extension.galleryBanner.theme': '横幅文字的颜色主题。',
      'vscode.extension.icon': '128 x 128 像素图标的路径。',
      'vscode.extension.l10n':
        '包含本地化(bundle.l10n.*.json)文件的文件夹的相对路径。如果使用的是 vscode.l10n API，则必须指定它。',
      'vscode.extension.markdown':
        '控制商店中使用的 Markdown 渲染引擎。可为 "github" (默认) 或 "standard" (标准)。',
      'vscode.extension.preview':
        '在 Marketplace 中设置扩展，将其标记为“预览”。',
      'vscode.extension.publisher': 'VS Code 扩展的发布者。',
      'vscode.extension.qna':
        '控制市场中的“问与答”(Q&A)链接。设置为 "marketplace" 可启用市场的默认“问与答”页面。设置为其他字符串可指向自定义的“问与答”页面。设置为 "false" 可完全禁用“问与答”。',
      'vscode.extension.scripts.prepublish':
        '包作为 VS Code 扩展发布前执行的脚本。',
      'vscode.extension.scripts.uninstall':
        'VS Code 扩展的卸载钩子。在扩展从 VS Code 卸载且 VS Code 重启 (关闭后开启) 后执行的脚本。仅支持 Node 脚本。',
      workspace: '工作区扩展类型。在远程窗口中，仅远程可用时启用此类扩展。',
    },
    'vs/workbench/services/extensions/common/extensionsUtil': {
      extensionUnderDevelopment: '正在 {0} 处加载开发扩展程序',
      overwritingExtension: '使用扩展程序 {1} 覆盖扩展程序 {0}。',
    },
    'vs/workbench/services/extensions/electron-sandbox/cachedExtensionScanner':
      {
        'extensionCache.invalid': '扩展在磁盘上已被修改。请重新加载窗口。',
        reloadWindow: '重新加载窗口',
      },
    'vs/workbench/services/extensions/electron-sandbox/localProcessExtensionHost':
      {
        'extensionHost.startupFail':
          '扩展主机未在 10 秒内启动，这可能是一个问题。',
        'extensionHost.startupFailDebug':
          '扩展未在 10 秒内启动，可能在第一行已停止，需要调试器才能继续。',
        'join.extensionDevelopment': '正在终止扩展调试会话',
        reloadWindow: '重新加载窗口',
      },
    'vs/workbench/services/extensions/electron-sandbox/nativeExtensionService':
      {
        devTools: '打开开发人员工具',
        enable: '启用和重新加载',
        enableResolver: '需要扩展“{0}”才能打开远程窗口。\r\n是否启用?',
        'extensionService.autoRestart': '扩展主机意外终止。正在重启...',
        'extensionService.crash': '扩展主机在过去 5 分钟内意外终止了 3 次。',
        'extensionService.versionMismatchCrash':
          '扩展主机无法启动: 版本不匹配。',
        getEnvironmentFailure: '无法获取远程环境',
        install: '安装并重新加载',
        installResolver: '打开远程窗口需要扩展“{0}”。\r\n确定要安装扩展吗?',
        learnMore: '了解详细信息',
        relaunch: '重新启动 VS Code',
        resolverExtensionNotFound: '未在市场上找到“{0}”',
        restart: '重启扩展宿主',
        restartExtensionHost: '重启扩展宿主',
        'restartExtensionHost.reason': '正在根据显式请求重启扩展主机。',
        startBisect: '开始扩展二等分',
      },
    'vs/workbench/services/filesConfiguration/common/filesConfigurationService':
      {
        configuredReadonly:
          '编辑器是只读的，因为文件通过设置设为了只读。[单击此处](command:{0})进行配置。',
        fileLocked:
          '由于文件权限，编辑器是只读的。[单击此处](command:{0})来仍然设置为可写。',
        fileReadonly: '编辑器是只读的，因为文件是只读的。',
        providerReadonly: '编辑器是只读的，因为文件的文件系统是只读的。',
        sessionReadonly:
          '编辑器是只读的，因为文件在此会话中设置为只读。[单击此处](command:{0})进行配置。',
      },
    'vs/workbench/services/history/browser/historyService': {
      canNavigateBack: '是否可在编辑器历史记录中向后导航',
      canNavigateBackInEditLocations:
        '是否可在编辑器编辑位置历史记录中向后导航',
      canNavigateBackInNavigationLocations:
        '是否可在编辑器导航位置历史记录中向后导航',
      canNavigateForward: '是否可在编辑器历史记录中向前导航',
      canNavigateForwardInEditLocations:
        '是否可在编辑器编辑位置历史记录中向前导航',
      canNavigateForwardInNavigationLocations:
        '是否可在编辑器导航位置历史记录中向前导航',
      canNavigateToLastEditLocation: '是否可导航到最后一个编辑器编辑位置',
      canNavigateToLastNavigationLocation: '是否可导航到最后一个编辑器导航位置',
      canReopenClosedEditor: '是否可重新打开上次关闭的编辑器',
    },
    'vs/workbench/services/host/browser/browserHostService': {
      open: '打开(&&O)',
      unableToOpenExternal:
        '浏览器已中断新选项卡或窗口的打开。仍然按“打开”以将其打开。',
    },
    'vs/workbench/services/hover/browser/hoverWidget': {
      hoverhint: '按住 {0} 键将鼠标悬停',
    },
    'vs/workbench/services/integrity/electron-sandbox/integrityService': {
      'integrity.dontShowAgain': '不再显示',
      'integrity.moreInformation': '更多信息',
      'integrity.prompt': '{0} 安装似乎损坏。请重新安装。',
    },
    'vs/workbench/services/issue/browser/issueTroubleshoot': {
      'I cannot reproduce': '我无法重现',
      Stop: '停止',
      'This is Bad': '我可以重现',
      'ask to download insiders': '请尝试下载并重现{0}预览体验成员中的问题。',
      'ask to reproduce issue':
        '请尝试重现{0}预览体验成员中的问题，并确认问题是否存在。',
      bad: '我可以重现',
      'detail.start':
        '问题疑难解答过程有助于确定问题的原因。问题可能是由配置不当、扩展或 {0} 本身引起的。\r\n\r\n在此过程中，窗口会不断重载。每次都必须确认是否仍看到此问题。',
      'download insiders': '下载{0}预览体验成员',
      'empty.profile':
        '问题疑难解答处于活动状态，并且已将配置暂时重置为默认值。检查是否仍可以重现问题，然后从这些选项中进行选择。',
      good: '我无法重现',
      'issue is in core': '问题疑难解答已确定该问题与{0}有关。',
      'issue is with configuration':
        '问题疑难解答已确定此问题是由配置导致的。请使用“导出配置文件”命令导出配置来报告问题，并共享问题报告中的文件。',
      msg: '&&排查问题',
      'profile.extensions.disabled':
        '问题疑难解答处于活动状态，并暂时禁用了所有已安装的扩展。检查是否仍可以重现问题，然后从这些选项中进行选择。',
      'report anyway': '仍然报告问题',
      stop: '停止',
      'title.stop': '停止排查问题',
      'troubleshoot issue': '排查问题',
      troubleshootIssue: '排查问题...',
      'use insiders':
        '这可能意味着问题已解决，将在即将发布的版本中可用。你可以安全地使用{0}预览体验成员，直到新的稳定版本可用。',
    },
    'vs/workbench/services/keybinding/browser/keybindingService': {
      'invalid.keybindings': '无效的“contributes.{0}”: {1}',
      'keybindings.commandsIsArray':
        '类型错误。应为 "{0}"。字段 "command" 不支持运行多个命令。使用命令 "runCommands" 以向它传递多个要运行的命令。',
      'keybindings.json.args': '要传递给命令以执行的参数。',
      'keybindings.json.command': '要执行的命令的名称',
      'keybindings.json.key': '键或键序列(用空格分隔)',
      'keybindings.json.removalCommand': '要为其删除键盘快捷方式的命令的名称',
      'keybindings.json.title': '按键绑定配置',
      'keybindings.json.when': '键处于活动状态时的条件。',
      nonempty: '应为非空值。',
      optstring: '属性“{0}”可以省略，否则其类型必须是 "string"',
      requirestring: '属性“{0}”是必需的，其类型必须是 "string"',
      unboundCommands: '以下是其他可用命令:',
      'vscode.extension.contributes.keybindings': '用于键绑定。',
      'vscode.extension.contributes.keybindings.args':
        '要传递给命令以执行的参数。',
      'vscode.extension.contributes.keybindings.command':
        '要在触发键绑定时运行的命令的标识符。',
      'vscode.extension.contributes.keybindings.key':
        '键或键序列(用加号连接的键和后面再接空格的键序列都算组合键，如 Ctrl+O 和 Ctrl+L L)。',
      'vscode.extension.contributes.keybindings.linux':
        'Linux 特定的键或键序列。',
      'vscode.extension.contributes.keybindings.mac': 'Mac 特定的键或键序列。',
      'vscode.extension.contributes.keybindings.when':
        '键处于活动状态时的条件。',
      'vscode.extension.contributes.keybindings.win':
        'Windows 特定的键或键序列。',
    },
    'vs/workbench/services/keybinding/browser/keyboardLayoutService': {
      'keyboard.layout.config': '控制 Web 中使用的键盘布局。',
      keyboardConfigurationTitle: '键盘',
    },
    'vs/workbench/services/keybinding/common/keybindingEditing': {
      emptyKeybindingsHeader: '将键绑定放在此文件中以覆盖默认值',
      errorInvalidConfiguration:
        '无法写入按键绑定配置文件。文件内含有非数组类型对象。请打开文件进行清理，然后重试。',
      errorKeybindingsFileDirty:
        '由于该键绑定配置文件具有未保存的更改，因此无法写入。请先将其保存，然后重试。',
      parseErrors:
        '无法写入按键绑定配置文件。请打开文件并更正错误或警告，然后重试。',
    },
    'vs/workbench/services/label/common/labelService': {
      temporaryWorkspace: '工作区',
      untitledWorkspace: '无标题 (工作区)',
      'vscode.extension.contributes.resourceLabelFormatters':
        '提供资源标签格式化规则。',
      'vscode.extension.contributes.resourceLabelFormatters.authority':
        '要在其上匹配格式化程序的 URI 权限。支持简单的 glob 模式。',
      'vscode.extension.contributes.resourceLabelFormatters.formatting':
        '用于格式化 uri 资源标签的规则。',
      'vscode.extension.contributes.resourceLabelFormatters.formatting.workspaceSuffix':
        '附加到工作区标签的后缀。',
      'vscode.extension.contributes.resourceLabelFormatters.label':
        '要显示的标签规则。例如，myLabel:/${path}。支持将 ${path}、${scheme}、${authority} 和 ${authoritySuffix} 用作变量。',
      'vscode.extension.contributes.resourceLabelFormatters.scheme':
        '要在其上匹配格式化程序的 URI 方案，例如“文件”。支持简单的 glob 模式。',
      'vscode.extension.contributes.resourceLabelFormatters.separator':
        "要在 URI 标签显示中所用的分隔符，例如 / 或 ''。",
      'vscode.extension.contributes.resourceLabelFormatters.stripPathStartingSeparator':
        '控制 "${path}" 替换项是否应删除起始分隔符字符。',
      'vscode.extension.contributes.resourceLabelFormatters.tildify':
        '控制是否应在可能的情况下按斜体显示 URI 标签的开头。',
      workspaceName: '{0} (工作区)',
      workspaceNameVerbose: '{0} (工作区)',
    },
    'vs/workbench/services/language/common/languageService': {
      invalid: '“contributes.{0}”无效。应为数组。',
      'invalid.empty': '“contributes.{0}”的值为空',
      'opt.aliases': '属性“{0}”可以省略，其类型必须是 "string[]"',
      'opt.configuration': '属性“{0}”可以省略，其类型必须是 "string"。',
      'opt.extensions': '属性“{0}”可以省略，其类型必须是 "string[]"',
      'opt.filenames': '属性“{0}”可以省略，其类型必须是 "string[]"',
      'opt.firstLine': '属性“{0}”可以省略，其类型必须是 "string"。',
      'opt.icon':
        '可以省略属性 "{0}"，并且其类型必须为 "object"，并带有类型为 "string" 的属性 "{1}" 和 "{2}"',
      'opt.mimetypes': '属性“{0}”可以省略，其类型必须是 "string[]"',
      'require.id': '属性“{0}”是必需的，其类型必须是 "string"',
      'vscode.extension.contributes.languages': '有助于语言声明。',
      'vscode.extension.contributes.languages.aliases': '语言的别名。',
      'vscode.extension.contributes.languages.configuration':
        '包含语言配置选项的文件的相对路径。',
      'vscode.extension.contributes.languages.extensions':
        '与语言关联的文件扩展名。',
      'vscode.extension.contributes.languages.filenamePatterns':
        '与语言关联的文件名 glob 模式。',
      'vscode.extension.contributes.languages.filenames':
        '与语言关联的文件名。',
      'vscode.extension.contributes.languages.firstLine':
        '与语言文件的第一行匹配的正则表达式。',
      'vscode.extension.contributes.languages.icon':
        '要用作文件图标的图标，如果没有图标，主题将为相应语言提供一个。',
      'vscode.extension.contributes.languages.icon.dark':
        '使用深色主题时的图标路径',
      'vscode.extension.contributes.languages.icon.light':
        '使用浅色主题时的图标路径',
      'vscode.extension.contributes.languages.id': '语言 ID。',
      'vscode.extension.contributes.languages.mimetypes':
        '与语言关联的 Mime 类型。',
    },
    'vs/workbench/services/lifecycle/browser/lifecycleService': {
      lifecycleVeto: '可能无法保存所做的更改。请按“取消”，然后重试。',
    },
    'vs/workbench/services/localization/browser/localeService': {
      clearDisplayLanguageDetail:
        '按“重新加载”按钮以刷新页面并使用浏览器的语言。',
      clearDisplayLanguageMessage: '要更改显示语言，{0} 需要重新加载',
      relaunchDisplayLanguageDetail:
        '按“重新加载”按钮以刷新页面，并将显示语言设置为 {0}。',
      relaunchDisplayLanguageMessage: '要更改显示语言，{0} 需要重新加载',
      reload: '重新加载(&&R)',
    },
    'vs/workbench/services/localization/electron-sandbox/localeService': {
      argvInvalid:
        '无法编写显示语言。请打开运行时设置，更正其中的错误/警告，然后重试。',
      installing: '正在安装{0}语言支持...',
      openArgv: '打开运行时设置',
      restart: '重启(&&R)',
      restartDisplayLanguageDetail1: '要将显示语言更改为 {0}，{1} 需要重启。',
      restartDisplayLanguageMessage1: '重启 {0} 以切换到 {1}?',
    },
    'vs/workbench/services/log/electron-sandbox/logService': {
      rendererLog: '窗口',
    },
    'vs/workbench/services/notification/common/notificationService': {
      neverShowAgain: '不再显示',
    },
    'vs/workbench/services/preferences/browser/keybindingsEditorInput': {
      keybindingsInputName: '键盘快捷方式',
    },
    'vs/workbench/services/preferences/browser/keybindingsEditorModel': {
      'cat.title': '{0}: {1}',
      default: '系统',
      extension: '扩展',
      meta: '元数据',
      option: '选项',
      user: '用户',
    },
    'vs/workbench/services/preferences/browser/preferencesService': {
      defaultKeybindings: '默认的键绑定',
      emptyKeybindingsHeader: '将键绑定放在此文件中以覆盖默认值',
      'fail.createSettings': '无法创建“{0}”({1})。',
      openFolderFirst: '首先打开一个文件夹或工作区，以创建工作区或文件夹设置。',
    },
    'vs/workbench/services/preferences/common/preferencesEditorInput': {
      settingsEditor2InputName: '设置',
    },
    'vs/workbench/services/preferences/common/preferencesModels': {
      commonlyUsed: '常用设置',
      defaultKeybindingsHeader: '通过将键绑定放入键绑定文件来覆盖键绑定。',
    },
    'vs/workbench/services/preferences/common/preferencesValidation': {
      invalidTypeError: '设置的类型无效，应为 {0}。请使用 JSON 格式进行修复。',
      'validations.arrayIncorrectType': '类型不正确。应为数组。',
      'validations.booleanIncorrectType': '类型错误，预期为“布尔”。',
      'validations.colorFormat':
        '颜色格式无效。请使用 #RGB、#RGBA、#RRGGBB 或 #RRGGBBAA。',
      'validations.exclusiveMax': '值必须严格小于 {0}。',
      'validations.exclusiveMin': '值必须严格大于 {0}。',
      'validations.expectedInteger': '值必须为整数。',
      'validations.expectedNumeric': '值必须为数字。',
      'validations.invalidStringEnumValue': '值不被接受。有效值: {0}。',
      'validations.max': '值必须小于或等于 {0}。',
      'validations.maxLength': '值的长度必须小于或等于 {0} 个字符。',
      'validations.min': '值必须大于或等于 {0}。',
      'validations.minLength': '值的长度不能少于 {0} 个字符。',
      'validations.multipleOf': '值必须是 {0} 的倍数。',
      'validations.objectIncorrectType': '类型不正确。应为对象。',
      'validations.objectPattern': '不允许使用属性{0}。\r\n',
      'validations.regex': '值必须匹配 regex “{0}”。',
      'validations.stringArrayIncorrectType': '类型不正确。应为字符串数组。',
      'validations.stringArrayItemEnum': '值 {0} 不是 {1} 其中之一',
      'validations.stringArrayItemPattern': '值 {0} 必须与 regex {1} 匹配。',
      'validations.stringArrayMaxItem': '数组必须最多有 {0} 项',
      'validations.stringArrayMinItem': '数组必须至少有 {0} 项',
      'validations.stringArrayUniqueItems': '数组具有重复项',
      'validations.stringIncorrectEnumOptions':
        '枚举选项应为字符串，但有一个非字符串选项。请向扩展作者提交问题。',
      'validations.stringIncorrectType': '类型不正确。应为“字符串”',
      'validations.uriEmpty': '需要 URI。',
      'validations.uriMissing': '需要 URI。',
      'validations.uriSchemeMissing': '需要包含架构的 URI。',
    },
    'vs/workbench/services/progress/browser/progressService': {
      cancel: '取消',
      dismiss: '消除',
      'progress.text2': '{0}: {1}',
      'progress.title2': '[{0}]: {1}',
      'progress.title3': '[{0}] {1}: {2}',
      'status.progress': '进度消息',
    },
    'vs/workbench/services/remote/browser/remoteAgentService': {
      connectionError: '出现意外错误，需要重新加载此页面。',
      connectionErrorDetail: '工作台无法连接到服务器(错误: {0})',
      reload: '重新加载(&&R)',
    },
    'vs/workbench/services/remote/common/remoteExplorerService': {
      'remote.localPortMismatch.single':
        '无法使用本地端口 {0} 转发到远程端口 {1}。\r\n\r\n当已存在使用本地端口 {0} 的其他进程时，通常会发生这种情况。\r\n\r\n已改为使用端口号 {2}。',
      'tunnel.source.auto': '自动转发',
      'tunnel.source.user': '用户转发',
      'tunnel.staticallyForwarded': '静态转发',
    },
    'vs/workbench/services/remote/electron-sandbox/remoteAgentService': {
      connectionError: '无法连接到远程扩展主机服务器 (错误: {0})',
      devTools: '打开开发人员工具',
      directUrl: '在浏览器中打开',
    },
    'vs/workbench/services/search/browser/searchService': {
      errorSearchFile: '无法使用 Web 辅助角色文件搜索器进行搜索',
      errorSearchText: '无法使用 Web 辅助角色文本搜索器进行搜索',
    },
    'vs/workbench/services/search/common/queryBuilder': {
      'search.noWorkspaceWithName': '工作区文件夹不存在: {0}',
    },
    'vs/workbench/services/secrets/electron-sandbox/secretStorageService': {
      encryptionNotAvailableJustTroubleshootingGuide:
        '无法识别用于在当前桌面环境中存储加密相关数据的 OS keyring。',
      isGnome:
        '你正在 GNOME 环境中运行，但 OS keyring 不可用用于加密。请确保已安装并运行 gnome-keyring 或其他 libsecret 兼容实现。',
      isKwallet:
        '你正在 KDE 环境中运行，但 OS keyring 不可用于加密。请确保 kwallet 正在运行。',
      troubleshootingButton: '打开疑难解答指南',
      usePlainText: '使用较弱的加密',
      usePlainTextExtraSentence:
        '请打开疑难解答指南以解决此问题，也可以使用不用 OS keyring 的较弱加密。',
    },
    'vs/workbench/services/suggest/browser/simpleSuggestWidget': {
      ariaCurrenttSuggestionReadDetails: '{0}，文档: {1}',
      'label.desc': '{0}，{1}',
      'label.detail': '{0}{1}',
      'label.full': '{0}{1}，{2}',
      suggest: '建议',
    },
    'vs/workbench/services/textfile/browser/textFileService': {
      confirmOverwrite: '“{0}”已存在。是否替换它?',
      deleted: '已删除',
      fileBinaryError: '文件似乎是二进制文件，不能作为文本打开',
      irreversible:
        '名为"{0}"的文件或文件夹已存在于"{1}"文件夹中。替换它将覆盖其当前内容。',
      readonly: '只读',
      readonlyAndDeleted: '已删除，只读',
      replaceButtonLabel: '替换(&&R)',
      'textFileCreate.source': '文件已创建',
      textFileModelDecorations: '文本文件模型装饰',
      'textFileOverwrite.source': '文件已替换',
    },
    'vs/workbench/services/textfile/common/textFileEditorModel': {
      'textFileCreate.source': '已更改文件编码',
    },
    'vs/workbench/services/textfile/common/textFileEditorModelManager': {
      genericSaveError: '未能保存“{0}”: {1}',
    },
    'vs/workbench/services/textfile/common/textFileSaveParticipant': {
      saveParticipants: '正在保存“{0}”',
    },
    'vs/workbench/services/textfile/electron-sandbox/nativeTextFileService': {
      'join.textFiles': '正在保存文本文件',
    },
    'vs/workbench/services/textMate/browser/textMateTokenizationFeatureImpl': {
      alreadyDebugging: '已经开始记录。',
      'invalid.embeddedLanguages':
        '"contributes.{0}.embeddedLanguages" 中的值无效。必须为从作用域名称到语言的对象映射。提供的值: {1}',
      'invalid.injectTo':
        '"contributes.{0}.injectTo" 中的值无效。必须为语言范围名称数组。提供的值: {1}',
      'invalid.language':
        '"contributes.{0}.language" 中包含未知语言。提供的值: {1}',
      'invalid.path.0': '“contributes.{0}.path”中应为字符串。提供的值: {1}',
      'invalid.path.1':
        '“contributes.{0}.path”({1})应包含在扩展的文件夹({2})内。这可能会使扩展不可移植。',
      'invalid.scopeName':
        '“contributes.{0}.scopeName”中应为字符串。提供的值: {1}',
      'invalid.tokenTypes':
        '"contributes.{0}.tokenTypes" 的值无效。必须为从作用域名称到标记类型的对象映射。当前值: {1}',
      progress1: '正在准备记录 TM 语法分析。完成后按“停止”。',
      progress2: '现在正在记录 TM 语法分析。完成后按“停止”。',
      stop: '停止',
    },
    'vs/workbench/services/textMate/common/TMGrammars': {
      'vscode.extension.contributes.grammars': '贡献 textmate tokenizer。',
      'vscode.extension.contributes.grammars.balancedBracketScopes':
        '定义哪些范围名称包含平衡括号。',
      'vscode.extension.contributes.grammars.embeddedLanguages':
        '如果此语法包含嵌入式语言，则为作用域名称到语言 ID 的映射。',
      'vscode.extension.contributes.grammars.injectTo':
        '此语法注入到的语言范围名称列表。',
      'vscode.extension.contributes.grammars.language':
        '此语法为其贡献了内容的语言标识符。',
      'vscode.extension.contributes.grammars.path':
        'tmLanguage 文件的路径。该路径是相对于扩展文件夹，通常以 "./syntaxes/" 开头。',
      'vscode.extension.contributes.grammars.scopeName':
        'tmLanguage 文件所用的 textmate 范围名称。',
      'vscode.extension.contributes.grammars.tokenTypes':
        '从作用域名到标记类型的映射。',
      'vscode.extension.contributes.grammars.unbalancedBracketScopes':
        '定义哪些范围名称不包含平衡括号。',
    },
    'vs/workbench/services/themes/browser/fileIconThemeData': {
      'error.cannotparseicontheme': '分析文件图标文件时出现问题: {0}',
      'error.invalidformat': '文件图标主题问题的格式无效: 应为对象。',
    },
    'vs/workbench/services/themes/browser/productIconThemeData': {
      defaultTheme: '默认值',
      'error.cannotparseicontheme': '分析产品图标文件时出现问题: {0}',
      'error.fontId': '字体 ID“{0}”缺失或无效。将跳过字体定义。',
      'error.fontSrc': "字体 '{0}' 中的字体源无效。忽略源。",
      'error.fontStyle': '字体“{0}”中的字体样式无效。将忽略设置。',
      'error.fontWeight': '字体“{0}”中的字体粗细无效。将忽略设置。',
      'error.icon.font': '正在跳过图标定义“{0}”。未知的字体。',
      'error.icon.fontCharacter':
        '正在跳过图标定义“{0}”。未知的 fontCharacter。',
      'error.invalidformat': '产品图标主题文件的格式无效: 应为对象。',
      'error.missingProperties':
        '产品图标主题文件的格式无效: 必须包含图标定义和字体。',
      'error.noFontSrc': "字体 '{0}' 中没有有效的字体源。忽略字体定义。",
      'error.parseicondefs': '处理中的产品图标定义时出现问题{0}:\r\n{1}',
    },
    'vs/workbench/services/themes/browser/workbenchThemeService': {
      'error.cannotloadtheme': '无法加载 {0}: {1}',
    },
    'vs/workbench/services/themes/common/colorExtensionPoint': {
      'contributes.color': '提供由扩展定义的主题颜色',
      'contributes.color.description': '主题颜色的说明',
      'contributes.color.id': '主题颜色标识符',
      'contributes.color.id.format':
        '标识符只能包含字母、数字和点，且不能以点开头',
      'contributes.defaults.dark':
        '深色主题的默认颜色。应为十六进制颜色值 (#RRGGBB[AA]) 或是主题颜色标识符，其提供默认值。',
      'contributes.defaults.highContrast':
        '高对比度深色主题的默认颜色。十六进制颜色值 (#RRGGBB[AA])或提供默认值的主题化颜色的标识符。如果未提供，则“深色”用作高对比度深色主题的默认颜色。',
      'contributes.defaults.highContrastLight':
        '高对比度浅色主题的默认颜色。十六进制颜色值 (#RRGGBB[AA])或提供默认值的主题化颜色的标识符。如果未提供，则“浅色”用作高对比度浅色主题的默认颜色。',
      'contributes.defaults.light':
        '浅色主题的默认颜色。应为十六进制颜色值 (#RRGGBB[AA]) 或是主题颜色标识符，其提供默认值。',
      'invalid.colorConfiguration': '"configuration.colors" 必须是数组',
      'invalid.default.colorType':
        '{0} 必须为十六进制颜色值 (#RRGGBB[AA] 或 #RGB[A]) 或是主题颜色标识符，其提供默认值。',
      'invalid.defaults':
        "必须定义 'configuration.colors.defaults'，且其必须包含 'light' 和 'dark'",
      'invalid.defaults.highContrast':
        "如果已定义，则 'configuration.colors.defaults.highContrast' 必须为字符串。",
      'invalid.defaults.highContrastLight':
        "如果已定义，则 'configuration.colors.defaults.highContrastLight' 必须为字符串。",
      'invalid.description':
        '必须定义 "configuration.colors.description" 且它不可为空',
      'invalid.id': '必须定义 "configuration.colors.id" 且它不可为空',
      'invalid.id.format':
        '"configuration.colors.id" 只能包含字母、数字和点，且不能以点开头',
    },
    'vs/workbench/services/themes/common/colorThemeData': {
      'error.cannotload': '分析 tmTheme 文件 {0} 时出现问题: {1}',
      'error.cannotparse': '分析 tmTheme 文件时出现问题: {0}',
      'error.cannotparsejson': '分析 JSON 主题文件 {0} 时出现问题',
      'error.invalidformat': 'JSON 主题文件的格式无效: 应为对象。',
      'error.invalidformat.colors':
        '分析颜色主题文件时出现问题: {0}。属性“colors”不是“object”类型。',
      'error.invalidformat.semanticTokenColors':
        '分析颜色主题文件时发生问题: {0}。属性 "semanticTokenColors" 包含无效的选择器',
      'error.invalidformat.tokenColors':
        '分析颜色主题文件时出现问题: {0}。属性 "tokenColors" 应为指定颜色的数组或是指向 TextMate 主题文件的路径',
      'error.plist.invalidformat':
        '分析 tmTheme 文件时出现问题: {0}。"settings" 不是数组。',
    },
    'vs/workbench/services/themes/common/colorThemeSchema': {
      'schema.colors': '语法突出显示颜色',
      'schema.fontStyle.error':
        '字形必须为 "italic" (斜体)、"bold" (粗体)、"underline" (下划线)、"strikethrough" (删除线)、上述的组合或是为空字符串。',
      'schema.properties.name': '规则的描述。',
      'schema.properties.scope': '此规则适用的范围选择器。',
      'schema.semanticTokenColors': '语义标记的颜色',
      'schema.supportsSemanticHighlighting': '是否应为此主题启用语义突出显示。',
      'schema.token.background.warning': '暂不支持标记背景色。',
      'schema.token.fontStyle':
        '这条规则的字形: "italic" (斜体)、"bold" (粗体)、"underline" (下划线)、"strikethrough" (删除线) 或是上述的组合。空字符串将取消继承的设置。',
      'schema.token.fontStyle.none': '无 (清除继承的设置)',
      'schema.token.foreground': '标记的前景色。',
      'schema.token.settings': '标记的颜色和样式。',
      'schema.tokenColors.path': 'tmTheme 文件路径(相对于当前文件)。',
      'schema.workbenchColors': '工作台中的颜色',
    },
    'vs/workbench/services/themes/common/fileIconThemeSchema': {
      'schema.file':
        '默认文件图标，针对不与任何扩展名、文件名或语言 ID 匹配的所有文件显示。',
      'schema.fileExtension': '关联的图标定义的 ID。',
      'schema.fileExtensions':
        '将文件扩展名关联到图标。对象中的键是文件扩展名。扩展名是文件名的最后一部分，位于最后一个点之后 (不包括该点)。比较扩展名时不区分大小写。',
      'schema.fileName': '关联的图标定义的 ID。',
      'schema.fileNames':
        '将文件名关联到图标。对象中的键是完整文件名，其中不含任何路径字段。文件名可以包括点和可能有的文件扩展名。不允许使用模式或通配符。文件名匹配不区分大小写。',
      'schema.folder':
        '折叠文件夹的文件夹图标，如果未设置 folderExpanded，也指展开文件夹的文件夹图标。',
      'schema.folderExpanded':
        '展开文件夹的文件夹图标。展开文件夹图标是可选的。如果未设置，将显示为文件夹定义的图标。',
      'schema.folderName': '关联的图标定义的 ID。',
      'schema.folderNameExpanded': '关联的图标定义的 ID。',
      'schema.folderNames':
        '将文件夹名关联到图标。对象中的键是文件夹名，其中不含任何路径字段。不允许使用模式或通配符。文件夹名匹配不区分大小写。',
      'schema.folderNamesExpanded':
        '将文件夹名关联到展开文件夹的图标。对象中的键是文件夹名，其中不含任何路径字段。不允许使用模式或通配符。文件夹名匹配不区分大小写。',
      'schema.font-format': '字体的格式。',
      'schema.font-path': '相对于当前文件图标主题文件的字体路径。',
      'schema.font-size':
        '字体的默认大小。请参阅 https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size 查看有效的值。',
      'schema.font-style':
        '字体的样式。要了解有效值，请参阅 https://developer.mozilla.org/zh-cn/docs/Web/CSS/font-style。',
      'schema.font-weight':
        '字体的粗细。要了解有效值，请参阅 https://developer.mozilla.org/zh-cn/docs/Web/CSS/font-weight。',
      'schema.fontCharacter': '使用字形字体时: 要使用的字体中的字符。',
      'schema.fontColor': '使用字形字体时: 要使用的颜色。',
      'schema.fontId':
        '使用某种字体时: 字体的 ID。如果未设置，则默认为第一个字体定义。',
      'schema.fontSize':
        '使用某种字体时: 文本字体的字体大小(以百分比表示)。如果未设置，则默认为字体定义中的大小。',
      'schema.fonts': '图标定义中使用的字体。',
      'schema.hidesExplorerArrows':
        '配置文件资源管理器的箭头是否应在此主题启用时隐藏。',
      'schema.highContrast': '高对比度颜色主题中文件图标的可选关联。',
      'schema.iconDefinition': '图标定义。对象键是定义的 ID。',
      'schema.iconDefinitions': '将文件与图标关联时可使用的所有图标的说明。',
      'schema.iconPath':
        '使用 SVG 或 PNG 时: 到图像的路径。该路径相对于图标设置文件。',
      'schema.id': '字体的 ID。',
      'schema.id.formatError': 'ID 必须仅包含字母、数字、下划线和减号。',
      'schema.languageId': '关联的图标定义的 ID。',
      'schema.languageIds':
        '将语言与图标相关联。对象键是语言贡献点中定义的语言 ID。',
      'schema.light': '浅色主题中文件图标的可选关联。',
      'schema.showLanguageModeIcons':
        '配置如果主题未为某个语言定义图标，是否应使用默认语言图标。',
      'schema.src': '字体的位置。',
    },
    'vs/workbench/services/themes/common/iconExtensionPoint': {
      'contributes.icon.default':
        '图标的默认值。引用现有主题图标或图标字体中的图标。',
      'contributes.icon.default.fontCharacter': '图标字体中图标的字符。',
      'contributes.icon.default.fontPath': '定义图标的图标字体的路径。',
      'contributes.icon.description': '主题图标的说明',
      'contributes.icon.id': '主题图标标识符',
      'contributes.icon.id.format':
        '标识符只能包含字母、数字和减号，且必须按 "component-iconname" 格式由至少两段组成。',
      'contributes.icons': '提供由扩展定义的主题图标',
      'invalid.icons.configuration':
        "'configuration.icons' 必须是以图标名称为属性的对象。",
      'invalid.icons.default':
        "'configuration.icons.default' 必须是对其他主题图标的 ID (字符串)或图标定义(对象)的引用，属性为 `fontPath` 和 `fontCharacter`。",
      'invalid.icons.default.fontPath.extension':
        "预期 `contributes.icons.default.fontPath` 的文件扩展名为 'woff'，woff2' 或 'ttf'，为 '{0}'。",
      'invalid.icons.default.fontPath.path':
        '预期 `contributes.icons.default.fontPath` ({0}) 将包含在扩展的文件夹 ({0}) 中。',
      'invalid.icons.description':
        "必须定义 'configuration.icons.description' 且它不可为空",
      'invalid.icons.id.format':
        "'configuration.icons' 键标识图标 ID，只能包含字母、数字和减号。它们需要按 `component-iconname` 格式由至少两段组成。",
    },
    'vs/workbench/services/themes/common/productIconThemeSchema': {
      'schema.font-format': '字体的格式。',
      'schema.font-path': '相对于当前产品图标主题文件的字体路径。',
      'schema.font-style':
        '字体的样式。要了解有效值，请参阅 https://developer.mozilla.org/zh-cn/docs/Web/CSS/font-style。',
      'schema.font-weight':
        '字体的粗细。要了解有效值，请参阅 https://developer.mozilla.org/zh-cn/docs/Web/CSS/font-weight。',
      'schema.iconDefinitions': '字体字符的图标名称的关联。',
      'schema.id': '字体的 ID。',
      'schema.id.formatError': 'ID 必须仅包含字母、数字、下划线和减号。',
      'schema.src': '字体的位置。',
    },
    'vs/workbench/services/themes/common/themeConfiguration': {
      autoDetectHighContrast:
        '如果已启用，则在操作系统使用高对比度主题时，将自动更改为高对比度主题；如果操作系统正在使用高对比度主题。要使用的高对比度主题是由 {0} 和 {1} 指定的。',
      colorTheme: '指定用在工作台中的颜色主题。',
      colorThemeError: '主题未知或未安装。',
      defaultProductIconThemeDesc: '默认',
      defaultProductIconThemeLabel: '默认',
      detectColorScheme:
        '如果已设置，则根据 OS 外观自动切换到首选颜色主题。如果 OS 外观为深色，则使用 {0} 处指定的主题。如果外观为浅色，则使用 {1} 处指定的主题。',
      editorColors: '替代当前所选颜色主题中的编辑器语法颜色和字形。',
      'editorColors.comments': '设置注释的颜色和样式',
      'editorColors.functions': '设置函数定义与引用的颜色和样式。',
      'editorColors.keywords': '设置关键字的颜色和样式。',
      'editorColors.numbers': '设置数字的颜色和样式。',
      'editorColors.semanticHighlighting': '是否应为此主题启用语义突出显示。',
      'editorColors.semanticHighlighting.deprecationMessage':
        '改为在 "editor.semanticTokenColorCustomizations" 设置中使用 "enabled"。',
      'editorColors.semanticHighlighting.deprecationMessageMarkdown':
        '请改为在 {0} 设置中使用 `enabled`。',
      'editorColors.semanticHighlighting.enabled':
        '是否对此主题启用或禁用语义突出显示',
      'editorColors.semanticHighlighting.rules': '此主题的语义标记样式规则。',
      'editorColors.strings': '设置字符串文本的颜色和样式',
      'editorColors.textMateRules':
        '使用 TextMate 主题规则设置颜色和样式(高级)。',
      'editorColors.types': '设置类型定义与引用的颜色和样式。',
      'editorColors.variables': '设置变量定义和引用的颜色和样式。',
      iconTheme:
        '指定工作台中使用的文件图标主题；若指定为 "null"，则不显示任何文件图标。',
      iconThemeError: '文件图标主题未知或未安装。',
      noIconThemeDesc: '无文件图标',
      noIconThemeLabel: '无',
      preferredDarkColorTheme:
        '指定启用了 {0} 时深色操作系统外观的首选颜色主题。',
      preferredHCDarkColorTheme:
        '指定启用了 {0} 时在高对比度深色模式下使用的首选颜色主题。',
      preferredHCLightColorTheme:
        '指定启用了 {0} 时在高对比度浅色模式下使用的首选颜色主题。',
      preferredLightColorTheme:
        '指定启用了 {0} 时浅色操作系统外观的首选颜色主题。',
      productIconTheme: '指定使用的产品图标主题。',
      productIconThemeError: '产品图标主题未知或未安装。',
      semanticTokenColors: '从当前所选颜色主题重写编辑器语义标记颜色和样式。',
      workbenchColors: '覆盖当前所选颜色主题的颜色。',
    },
    'vs/workbench/services/themes/common/themeExtensionPoints': {
      'invalid.path.1':
        '“contributes.{0}.path”({1})应包含在扩展的文件夹({2})内。这可能会使扩展不可移植。',
      reqarray: '扩展点“{0}”必须是数组。 ',
      reqid: 'contributes.{0}.id" 中的预期字符串。提供的值: {1}',
      reqpath: '“contributes.{0}.path”中应为字符串。提供的值: {1}',
      'vscode.extension.contributes.iconThemes': '提供文件图标主题。',
      'vscode.extension.contributes.iconThemes.id':
        '在用户设置中使用的文件图标主题的 ID。',
      'vscode.extension.contributes.iconThemes.label':
        '文件图标主题的标签，如 UI 所示。',
      'vscode.extension.contributes.iconThemes.path':
        '文件图标主题定义文件的路径。该路径相对于扩展文件夹，通常为 "./fileicons/awesome-icon-theme.json"。',
      'vscode.extension.contributes.productIconThemes': '贡献产品图标主题。',
      'vscode.extension.contributes.productIconThemes.id':
        '用户设置中使用的产品图标主题的 ID。',
      'vscode.extension.contributes.productIconThemes.label':
        '产品图标主题的标签，如 UI 所示。',
      'vscode.extension.contributes.productIconThemes.path':
        '产品图标主题定义文件的路径。该路径相对于扩展文件夹，通常为 "./producticons/awesome-product-icon-theme.json"。',
      'vscode.extension.contributes.themes': '提供 TextMate 颜色主题。',
      'vscode.extension.contributes.themes.id':
        '用户设置中使用的颜色主题的 ID。',
      'vscode.extension.contributes.themes.label':
        '显示在 UI 中的颜色主题标签。',
      'vscode.extension.contributes.themes.path':
        'tmTheme 文件的路径。该路径相对于扩展文件夹，通常为 "./colorthemes/awesome-color-theme.json"。',
      'vscode.extension.contributes.themes.uiTheme':
        "用于定义编辑器周围颜色的基本主题: 'vs' 是浅色主题， 'vs-dark' 是深色主题。'hc-black' 是深色高对比度主题，'hc-light' 是浅色高对比度主题。",
    },
    'vs/workbench/services/themes/common/tokenClassificationExtensionPoint': {
      'contributes.color.description': '语义标记类型的说明',
      'contributes.semanticTokenModifiers': '提供语义标记修饰符。',
      'contributes.semanticTokenModifiers.description': '语义令牌修饰符的说明',
      'contributes.semanticTokenModifiers.id': '语义令牌修饰符的标识符',
      'contributes.semanticTokenModifiers.id.format':
        '标识符的格式应为letterOrDigit[_-letterOrDigit]*',
      'contributes.semanticTokenScopes': '提供语义令牌范围映射。',
      'contributes.semanticTokenScopes.languages': '列出默认语言。',
      'contributes.semanticTokenScopes.scopes':
        '将语义令牌(由语义令牌选择器描述)映射到用于表示该令牌的一个或多个 textMate 作用域。',
      'contributes.semanticTokenTypes': '贡献语义令牌类型。',
      'contributes.semanticTokenTypes.id': '语义令牌类型的标识符',
      'contributes.semanticTokenTypes.id.format':
        '标识符的格式应为letterOrDigit[_-letterOrDigit]*',
      'contributes.semanticTokenTypes.superType': '语义令牌类型的超类型',
      'contributes.semanticTokenTypes.superType.format':
        '超类型的格式应为 letterOrDigit[_-letterOrDigit]*',
      'invalid.description':
        '必须定义 "configuration.{0}.description" 且它不可为空',
      'invalid.id': '必须定义 "configuration.{0}.id" 且它不可为空',
      'invalid.id.format':
        '"configuration.{0}.id" 必须采用 letterOrDigit[-_letterOrDigit]* 模式',
      'invalid.semanticTokenModifierConfiguration':
        '“configuration.semanticTokenModifier” 必须是数组',
      'invalid.semanticTokenScopes.configuration':
        '"configuration.semanticTokenScopes" 必须是一个数组',
      'invalid.semanticTokenScopes.language':
        '"configuration.semanticTokenScopes.language" 的值必须是字符串',
      'invalid.semanticTokenScopes.scopes':
        '"configuration.semanticTokenScopes.scopes" 必须定义为对象',
      'invalid.semanticTokenScopes.scopes.selector':
        '"configuration.semanticTokenScopes.scopes": 解析选择器{0}时出现问题。',
      'invalid.semanticTokenScopes.scopes.value':
        '"configuration.semanticTokenScopes.scopes" 的值必须是字符串数组',
      'invalid.semanticTokenTypeConfiguration':
        '“configuration.semanticTokenType”必须是数组',
      'invalid.superType.format':
        '“ configuration.{0}.superType”必须遵循格式 letterOrDigit [-_letterOrDigit] *',
    },
    'vs/workbench/services/userDataProfile/browser/extensionsResource': {
      disabled: '已禁用',
      exclude: '选择 {0} 扩展',
      extensions: '扩展',
    },
    'vs/workbench/services/userDataProfile/browser/globalStateResource': {
      globalState: 'UI 状态',
    },
    'vs/workbench/services/userDataProfile/browser/keybindingsResource': {
      keybindings: '键盘快捷方式',
    },
    'vs/workbench/services/userDataProfile/browser/settingsResource': {
      settings: '设置',
    },
    'vs/workbench/services/userDataProfile/browser/snippetsResource': {
      snippets: '代码片段',
    },
    'vs/workbench/services/userDataProfile/browser/tasksResource': {
      tasks: '用户任务',
    },
    'vs/workbench/services/userDataProfile/browser/userDataProfileImportExportService':
      {
        'Importing profile': '{0} ({1})...',
        'applied profile': '{0}: 已成功应用。',
        cancel: '取消',
        close: '关闭',
        copy: '复制链接(&&C)',
        'create new': '新建配置文件(&&C)',
        'create new title': '新建配置文件',
        export: '导出',
        'export profile dialog': '保存配置文件',
        'export profile name': '为配置文件命名',
        'export profile title': '导出配置文件',
        'export success': '已成功导出配置文件“{0}”。',
        file: '文件',
        import: '创建配置文件',
        'import in desktop': '在 {0} 中创建配置文件',
        'import profile': '创建配置文件',
        'install extensions title': '安装扩展',
        'learn more': '了解详细信息',
        local: '本地',
        name: '配置文件名称',
        open: '打开链接(&&O)',
        'open in': '在 {0} 中打开(&&O)',
        overwrite: '覆盖(&&O)',
        'preview profile': '预览配置文件',
        'preview profile message':
          '默认情况下，在 Web 上预览配置文件时不会安装扩展。在导入配置文件之前，你仍然可以手动安装它们。 ',
        'profile already exists': '已存在 "{0}" 同名的配置文件。是否要覆盖?',
        'profile import error': '导入配置文件时出错: {0}',
        'profile name required': '必须提供配置文件名称。',
        profileExists: '具有名称 {0} 的配置文件已经存在。',
        'profiles.applying': '{0}: 正在应用...',
        'profiles.exporting': '{0}: 正在导出',
        'progress extensions': 'Applying Extensions...',
        'progress global state': 'Applying State...',
        'progress keybindings': '{0}ying Keyboard Shortcuts...',
        'progress settings': 'Applying Settings...',
        'progress snippets': 'Applying Snippets...',
        'progress tasks': 'Applying Tasks...',
        'resolving uri': '{0}: 正在解析配置文件内容...',
        select: '选择 {0}',
        'select profile': '选择配置文件',
        'select profile content handler': '将“{0}”配置文件导出为...',
        'switching profile': ' Applying...',
        'troubleshoot issue': 'Troubleshoot Issue',
        'troubleshoot profile progress': 'Setting up Troubleshoot Profile: {0}',
      },
    'vs/workbench/services/userDataProfile/browser/userDataProfileManagement': {
      cannotDeleteDefaultProfile: '无法删除默认配置文件。',
      cannotRenameDefaultProfile: '无法重命名默认配置文件',
      'reload button': '重载(&&R)',
      'reload message': '切换配置文件需要重新加载 VS Code。',
      'reload message when removed':
        '已删除当前配置文件。请重新加载以切换回默认配置文件',
      'switch profile': '正在切换到配置文件。',
    },
    'vs/workbench/services/userDataProfile/common/userDataProfile': {
      defaultProfileIcon: '默认配置文件的图标。',
      profile: '配置文件',
      profiles: '个人资料',
    },
    'vs/workbench/services/userDataSync/browser/userDataSyncWorkbenchService': {
      'choose account placeholder': '选择要登录的帐户',
      'conflicts detected': '检测到冲突',
      'last used': '上次使用时同步',
      no: '否',
      'no account': '没有可用的帐户。',
      'no authentication providers':
        '没有可用的身份验证提供程序，因此无法启用设置同步。',
      others: '其他',
      'replace local': '替换本地(&&L)',
      'replace remote': '替换远程(&&R)',
      reset: '这将清除云中的数据，并在所有设备上停止同步。',
      'reset title': '清除',
      resetButton: '重置(&&R)',
      resolve: '请解决冲突以打开...',
      'resolving conflicts': '正在解决冲突...',
      'settings sync': '设置同步',
      'show conflicts': '显示冲突(&&S)',
      'sign in using account': '使用 {0} 登录',
      'signed in': '已登录',
      'sync in progress': '正在启用设置同步。是否要取消它?',
      'sync turned on': '{0} 已启用',
      'syncing...': '正在启用...',
      'turning on': '正在打开…',
      yes: '是(&&Y)',
    },
    'vs/workbench/services/userDataSync/common/userDataSync': {
      extensions: '扩展',
      keybindings: '键盘快捷方式',
      profiles: '个人资料',
      settings: '设置',
      snippets: '用户代码片段',
      'sync category': '设置同步',
      syncViewIcon: '查看“设置同步”视图的图标。',
      tasks: '用户任务',
      'ui state label': 'UI 状态',
      'workspace state label': '工作区状态',
    },
    'vs/workbench/services/views/browser/viewDescriptorService': {
      hideView: '隐藏“{0}”',
      resetViewLocation: '重置位置',
    },
    'vs/workbench/services/views/common/viewContainerModel': {
      'views log': '视图',
    },
    'vs/workbench/services/workingCopy/common/fileWorkingCopyManager': {
      confirmOverwrite: '“{0}”已存在。是否替换它?',
      deleted: '已删除',
      'fileWorkingCopyCreate.source': '文件已创建',
      fileWorkingCopyDecorations: '文件工作副本装饰',
      'fileWorkingCopyReplace.source': '文件已替换',
      irreversible:
        '名为"{0}"的文件或文件夹已存在于"{1}"文件夹中。替换它将覆盖其当前内容。',
      readonly: '只读',
      readonlyAndDeleted: '已删除，只读',
      replaceButtonLabel: '替换(&&R)',
    },
    'vs/workbench/services/workingCopy/common/storedFileWorkingCopy': {
      discard: '放弃',
      genericSaveError: '未能保存“{0}”: {1}',
      overwrite: '覆盖',
      overwriteElevated: '以管理员身份覆盖...',
      overwriteElevatedSudo: '以 Sudo 覆盖...',
      permissionDeniedSaveError:
        '无法保存“{0}”: 权限不足。选择“以管理员身份覆盖”可作为管理员重试。',
      permissionDeniedSaveErrorSudo:
        '保存 "{0}"失败: 权限不足。选择 "以超级用户身份重试" 以超级用户身份重试。',
      readonlySaveError:
        '未能保存 "{0}": 文件是只读的。可选择 "覆盖" 以尝试使其可写。',
      readonlySaveErrorAdmin:
        '未能保存 "{0}": 文件是只读的。以管理员身份选择 "以管理员身份覆盖" 重试。',
      readonlySaveErrorSudo:
        '保存"{0}"失败: 文件为只读。选择“覆盖为Sudo”以用超级用户身份重试。',
      retry: '重试',
      saveAs: '另存为...',
      saveElevated: '以管理员身份重试...',
      saveElevatedSudo: '以 Sudo 重试。',
      staleSaveError:
        '未能保存 "{0}": 文件的内容较新。是否要用所做的更改覆盖该文件?',
    },
    'vs/workbench/services/workingCopy/common/storedFileWorkingCopyManager': {
      'join.fileWorkingCopyManager': '正在保存工作副本',
    },
    'vs/workbench/services/workingCopy/common/storedFileWorkingCopySaveParticipant':
      {
        saveParticipants: '正在保存“{0}”',
      },
    'vs/workbench/services/workingCopy/common/workingCopyHistoryService': {
      'default.source': '已保存文件',
      'join.workingCopyHistory': '正在保存本地历史记录',
      'moved.source': '已移动文件',
      'renamed.source': '已重命名文件',
    },
    'vs/workbench/services/workingCopy/common/workingCopyHistoryTracker': {
      'undoRedo.source': '撤消/重做',
    },
    'vs/workbench/services/workingCopy/electron-sandbox/workingCopyBackupService':
      {
        'join.workingCopyBackups': '备份工作副本',
      },
    'vs/workbench/services/workingCopy/electron-sandbox/workingCopyBackupTracker':
      {
        backupBeforeShutdownDetail:
          '点击‘取消’以停止等待，并保存或还原具有未保存更改的编辑器。',
        backupBeforeShutdownMessage:
          '备份具有未保存更改的编辑器需要的时间较长...',
        backupErrorDetails:
          '请先尝试保存或还原具有未保存更改的编辑器，然后重试。',
        backupTrackerBackupFailed:
          '以下具有未保存更改的编辑器无法保存到备份位置。',
        backupTrackerConfirmFailed:
          '无法保存或还原以下具有未保存更改的编辑器。',
        discardBackupsBeforeShutdown: '放弃备份需要的时间较长...',
        revertBeforeShutdown: '还原具有未保存更改的编辑器需要的时间较长...',
        saveBeforeShutdown: '保存具有未保存更改的编辑器需要的时间较长...',
      },
    'vs/workbench/services/workspaces/browser/abstractWorkspaceEditingService':
      {
        errorInvalidTaskConfiguration:
          '无法写入工作区配置文件。请打开文件以更正错误或警告，然后重试。',
        openWorkspaceConfigurationFile: '打开工作区配置',
        save: '保存',
        saveWorkspace: '保存工作区',
      },
    'vs/workbench/services/workspaces/browser/workspaceTrustEditorInput': {
      workspaceTrustEditorInputName: '工作区信任',
    },
    'vs/workbench/services/workspaces/electron-sandbox/workspaceEditingService':
      {
        doNotSave: '不保存(&&N)',
        'restartExtensionHost.reason': '正在打开多根工作区。',
        save: '保存(&&S)',
        saveWorkspaceDetail: '若要再次打开此工作区，请先保存。',
        saveWorkspaceMessage: '你是否要将你的工作区配置保存为文件?',
        workspaceOpenedDetail:
          '已在另一个窗口打开工作区。请先关闭该窗口，然后重试。',
        workspaceOpenedMessage: '无法保存工作区“{0}”',
      },
  };
})();
