import {
  NavigationLevel1,
  NavigationLevel2,
  Route,
} from '@shared/types/types.ts';

export const generateNavigationListWithPermissions = async (
  navigation: NavigationLevel1[],
  checkPermission: (routeName: string) => Promise<boolean>,
): Promise<NavigationLevel1[]> => {
  const result: NavigationLevel1[] = [];

  for (const level1 of navigation) {
    const level2List: NavigationLevel2[] = [];

    for (const level2 of level1.children) {
      const level3Filtered: Route[] = [];

      for (const route of level2.children) {
        if (await checkPermission(route.name)) {
          level3Filtered.push(route);
        }
      }

      if (level3Filtered.length > 0) {
        level2List.push({ ...level2, children: level3Filtered });
      }
    }

    if (level2List.length > 0) {
      result.push({ ...level1, children: level2List });
    }
  }

  return result;
};
