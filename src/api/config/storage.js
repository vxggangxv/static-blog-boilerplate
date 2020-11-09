const st = typeof localStorage === 'object' ? localStorage : {};

export const keys = {
  persist: '__reapro_persist__',
  user: '__reapro_user__',
  token: '__reapro_token__',
};

const storage = {
  set(key, value) {
    st[key] = JSON.stringify(value);
  },
  get(key) {
    if (!st[key]) return null;
    const value = st[key];
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
  remove(key) {
    delete st[key];
  },
  clear() {
    if (st.clear) {
      st.clear();
    }
  },
};

export default storage;
